<?php
/**
 * FUNCTIONS
 **/

if ( ! defined( 'ABSPATH' ) ) {
	die;
}
/**
 * Look for foreground && background colors without enough contrast
 **/
function wp_ada_compliance_basic_validate_color_contrast_failure( $content, $postinfo ) {
	global $wp_ada_compliance_basic_def;

	// get options.
	$wp_ada_compliance_basic_scanoptions = get_option( 'wp_ada_compliance_basic_ignore_scan_rules', array() );

	// check if being scanned.
	if ( in_array( 'color_contrast_failure', $wp_ada_compliance_basic_scanoptions ) ) {
		return 1;
	}

	if ( 'css' != $postinfo['type'] ) {
		$dom = str_get_html( $content );

		// check links in content for style tags not affecting links.

		$elements = $dom->find( '*[style*=color:]' );

		foreach ( $elements as $element ) {
			$parentused = 0;
			unset( $rules );
			if ( isset( $element ) && stristr( $element->getAttribute( 'style' ), 'color:' ) && '' != $element->innertext ) {
				$foreground = '';
				$background = '';

				// get background color from the element.
				preg_match( '/background-color:\s*(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)\s*(!important)*)/i', $element->getAttribute( 'style' ), $matches, PREG_OFFSET_CAPTURE );
				if ( isset( $matches[1][0] ) && '' != $matches[1][0] ) {
					$rules['background-color'] = $matches[1][0];
				}

				preg_match( '/background:\s*(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)\s*(!important)*)/i', $element->getAttribute( 'style' ), $matches, PREG_OFFSET_CAPTURE );

				if ( isset( $matches[1][0] ) && '' != $matches[1][0] ) {

					$rules['background'] = $matches[1][0];
				}

				// use parents background color instead.
				$parenttags = array( 'div', 'td', 'th', 'li', 'p', 'ol', 'pre', 'fieldset', 'address', 'dt', 'dd', 'figcaption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' );
					$parent = $element->parent()->tag;

				if ( ! isset( $rules ) && in_array( $parent, $parenttags ) ) {

					preg_match( '/background-color:\s*(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)\s*(!important)*)/i', $element->parent()->getAttribute( 'style' ), $matches, PREG_OFFSET_CAPTURE );
					if ( isset( $matches[1][0] ) && '' != $matches[1][0] ) {
						$rules['background-color'] = $matches[1][0];
						$parentused                = 1;
					}

					preg_match( '/background:\s*(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)\s*(!important)*)/i', $element->parent()->getAttribute( 'style' ), $matches, PREG_OFFSET_CAPTURE );

					if ( isset( $matches[1][0] ) && '' != $matches[1][0] ) {

						$rules['background'] = $matches[1][0];
						$parentused          = 1;
					}
				}

				// if no background color is set assume white.
				$assumedbackground = get_option( 'wp_ada_compliance_basic_background_color', '#ffffff' );
				if ( ! isset( $rules ) && '' != $assumedbackground ) {
					$rules['background'] = $assumedbackground;
				}

				// reverse array if background color is before background.
				if ( isset( $rules ) ) {
					if ( strpos( $element->getAttribute( 'style' ), 'background-color:' ) > strpos( $element->getAttribute( 'style' ), 'background:' ) ) {
						$rules = array_reverse( $rules );
					}

					$preference = wp_ada_compliance_basic_deteremine_hierarchy( $rules );

					if ( 'background' == $preference ) {
						$background = wp_ada_compliance_basic_check_color_match2( $rules['background'] );
					} elseif ( 'background-color' == $preference ) {
						$background = $rules['background-color'];
					} else {
						goto a;
					}

					// get foreground color.
					preg_match( '/[\s|\"|\']*[^-]color:\s*(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3}|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)\s*(!important)*)/i', ' ' . $element->getAttribute( 'style' ), $matches, PREG_OFFSET_CAPTURE );

					if ( isset( $matches[1][0] ) && '' != $matches[1][0] ) {
						$foreground = $matches[1][0];
					}

					if ( '' == $foreground ) {
						$foreground = get_option( 'wp_ada_compliance_basic_forground_color', '#000000' );
					}

					if ( '' != $foreground && 'initial' != $background && 'inherit' != $background && 'transparent' != $background ) {

						if ( wp_ada_compliance_basic_coldiff( $foreground, $background ) ) {

							// save error.
							if ( 1 == $parentused ) {
										$color_contrast_failure_errorcode = $element->parent()->outertext;
							} else {
								$color_contrast_failure_errorcode = $element->outertext;
							}

							if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'color_contrast_failure', $color_contrast_failure_errorcode ) ) {

								$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'color_contrast_failure', $wp_ada_compliance_basic_def['color_contrast_failure']['StoredError'], $color_contrast_failure_errorcode );
							}
						}
					}
				}
			}
			a:
		}
	}

	// // parse && scan style tag content in post files.
	if ( 'css' != $postinfo['type'] && stristr( $content, '<style' ) ) {
		// check links in content for style tags.
		$dom = str_get_html( $content );

		$styles = $dom->find( 'style' );

		foreach ( $styles as $style ) {

			$css_array = wp_ada_compliance_basic_parce_css_content( $style->innertext );

			wp_ada_compliance_basic_check_contrast( $css_array, $postinfo );
		}
	}
	// parse && scan css file content.
	if ( 'css' == $postinfo['type'] ) {
		$css_array = wp_ada_compliance_basic_parce_css_content( $content );

		wp_ada_compliance_basic_check_contrast( $css_array, $postinfo );

	}
}


/**
 * Parse css file to make it easy to search
 */
function wp_ada_compliance_basic_parce_css_content( $css ) {
	$css       = preg_replace( '%/\*(?:(?!\*/).)*\*/%s', ' ', $css );
	$css_array = array(); // master array to hold all values.
	$element   = explode( '}', $css );
	foreach ( $element as $element ) {
		// get the name of the CSS element.
		$a_name = explode( '{', $element );
		$name   = $a_name[0];
		// get all the key:value pair styles.
		$a_styles = explode( ';', $element );
		// remove element name from first property element.
		$a_styles[0] = str_replace( $name . '{', '', $a_styles[0] );
		// loop through each style && split apart the key from the value.
		$count = count( $a_styles );
		for ( $a = 0;$a < $count;$a++ ) {
			if ( '' != $a_styles[ $a ] ) {
				$a_styles[ $a ] = str_ireplace( 'https://', '//', $a_styles[ $a ] );
				$a_styles[ $a ] = str_ireplace( 'http://', '//', $a_styles[ $a ] );
				$a_key_value    = explode( ':', $a_styles[ $a ] );
				// build the master css array
				if ( array_key_exists( 1, $a_key_value ) ) {
					$css_array[ trim( $name ) ][ trim( strtolower( $a_key_value[0] ) ) ] = trim( $a_key_value[1] );
				}
			}
		}
	}
	return $css_array;
}

/**
 * Scan the content from a css file or style tag inside a post
 **/
function wp_ada_compliance_basic_check_contrast( $css_array, $postinfo ) {
	global $wp_ada_compliance_basic_def;

	foreach ( $css_array as $element => $rules ) {

		if ( array_key_exists( 'color', $rules ) ) {

			$background = '';
			$foreground = $rules['color'];

			// determin which rule has preference if both background && background-color are present.
			$preference = wp_ada_compliance_basic_deteremine_hierarchy( $rules );

			if ( array_key_exists( 'background', $rules ) && 'background' == $preference ) {
				$background = wp_ada_compliance_basic_check_color_match2( $rules['background'] );
			}

			if ( array_key_exists( 'background-color', $rules ) && 'background-color' == $preference ) {
				$background = $rules['background-color'];
			}

			// if background color not set exit.
			if ( 'initial' == $background || 'inherit' == $background || 'transparent' == $background || '' == $background || '' == $foreground ) {
				goto a;
			}

			if ( wp_ada_compliance_basic_coldiff( $foreground, $background ) ) {

				$color_contrast_failure_errorcode = $element . '{';
				foreach ( $rules as $key => $value ) {
					$color_contrast_failure_errorcode .= $key . ': ' . $value . '; ';
				}
				$color_contrast_failure_errorcode .= '}';

					// save example
				$postinfo['examplecode'] = '<div style="color: ' . $foreground . '; background-color: ' . $background . ';">' . __( 'Example', 'wp-ada-compliance-basic' ) . '</div>';

				// save error.
				if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'color_contrast_failure', $color_contrast_failure_errorcode ) ) {

					$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'color_contrast_failure', $wp_ada_compliance_basic_def['color_contrast_failure']['StoredError'], $color_contrast_failure_errorcode );
				}
			}
			a:
		}
	}
}

/*********************************************************
// determine rule hierarchy
 *********************************************************/
function wp_ada_compliance_basic_deteremine_hierarchy( $rules ) {
	$first = '';
	$rules = array_reverse( $rules );
	foreach ( $rules as $key => $value ) {

		if ( ( 'background' == $key || 'background-color' == $key ) && '' != $value ) {
			$first = $key;
			goto a;
		}
	}
		a:

	// if background color has preference and is marked important then return background color.
	if ( 'background-color' == $first && stristr( $rules['background-color'], '!important' ) ) {
		return 'background-color';
	}

	// if background has preference and is not marked important but background color is then return background color.
	if ( 'background' == $first && ! stristr( $rules['background'], '!important' )
	&& ( array_key_exists( 'background-color', $rules ) && stristr( $rules['background-color'], '!important' ) ) ) {
		return 'background-color';
	}

	// if background color has preference but is not marked important but background is and has a color value then return background.
	if ( 'background-color' == $first && ! stristr( $rules['background-color'], '!important' )
	&& ( array_key_exists( 'background', $rules )
			&& stristr( $rules['background'], '!important' )
			&& wp_ada_compliance_basic_check_color_match2( $rules['background'] ) ) ) {
		return 'background';
	}

	if ( 'background' == $first && wp_ada_compliance_basic_check_color_match2( $rules['background'] ) ) {
		return 'background';
	} elseif ( array_key_exists( 'background-color', $rules ) ) {
		return 'background-color';
	}

	return $first;
}

/**
 * Check the color contrast
 **/
function wp_ada_compliance_basic_coldiff( $foreground, $background ) {

	// convert color names to hex.
	$foreground = trim( wp_ada_compliance_basic_convert_color_names( $foreground ) );
	$background = trim( wp_ada_compliance_basic_convert_color_names( $background ) );

	// convert hex to rgb.
	$color1 = wp_ada_compliance_basic_hexToRgb( $foreground );
	$color2 = wp_ada_compliance_basic_hexToRgb( $background );

	$dif = wp_ada_compliance_basic_test_color_diff( $color1, $color2 );

	// failed.
	if ( $dif < 4.5 ) {
		return 1;
	}

	return 0;
}
/**
 * Test color contrast
 **/
function wp_ada_compliance_basic_test_color_diff( $color1, $color2 ) {
	$L1 = 0.2126 * pow( $color1['r'] / 255, 2.2 ) +
			0.7152 * pow( $color1['g'] / 255, 2.2 ) +
			0.0722 * pow( $color1['b'] / 255, 2.2 );

	$L2 = 0.2126 * pow( $color2['r'] / 255, 2.2 ) +
			0.7152 * pow( $color2['g'] / 255, 2.2 ) +
			0.0722 * pow( $color2['b'] / 255, 2.2 );

	if ( $L1 > $L2 ) {
		$dif = ( ( $L1 + 0.05 ) / ( $L2 + 0.05 ) ) + 0.05;
	} else {
		$dif = ( ( $L2 + 0.05 ) / ( $L1 + 0.05 ) ) + 0.05;
	}

	return $dif;
}
/**
 * Convert hex to rgb
 */
function wp_ada_compliance_basic_hexToRgb( $hex, $alpha = false ) {
	$hex      = preg_replace( '/[^0-9a-fA-F]/', '', $hex );
	$length   = strlen( $hex );
	$rgb['r'] = hexdec( 6 == $length ? substr( $hex, 0, 2 ) : ( 3 == $length ? str_repeat( substr( $hex, 0, 1 ), 2 ) : 0 ) );
	$rgb['g'] = hexdec( 6 == $length ? substr( $hex, 2, 2 ) : ( 3 == $length ? str_repeat( substr( $hex, 1, 1 ), 2 ) : 0 ) );
	$rgb['b'] = hexdec( 6 == $length ? substr( $hex, 4, 2 ) : ( 3 == $length ? str_repeat( substr( $hex, 2, 1 ), 2 ) : 0 ) );
	if ( $alpha ) {
		$rgb['a'] = $alpha;
	}
	return $rgb;
}

/**
 * Convert color names to hex
 **/
function wp_ada_compliance_basic_convert_color_names( $color_name ) {

	if ( stristr( $color_name, 'rgb(' ) || stristr( $color_name, 'rgba(' ) ) {
		$color_name = str_replace( 'rgb(', '', $color_name );
		$color_name = str_replace( 'rgba(', '', $color_name );
		$color_name = str_replace( ')', '', $color_name );
		$rgb        = explode( ',', $color_name );
		return '#' . sprintf( '%02x', $rgb['0'] ) . sprintf( '%02x', $rgb['1'] ) . sprintf( '%02x', $rgb['2'] );
	}

	// standard 147 HTML color names.
	$colors = array(
		'aliceblue'            => 'F0F8FF',
		'antiquewhite'         => 'FAEBD7',
		'aqua'                 => '00FFFF',
		'aquamarine'           => '7FFFD4',
		'azure'                => 'F0FFFF',
		'beige'                => 'F5F5DC',
		'bisque'               => 'FFE4C4',
		'black'                => '000000',
		'blanchedalmond '      => 'FFEBCD',
		'blue'                 => '0000FF',
		'blueviolet'           => '8A2BE2',
		'brown'                => 'A52A2A',
		'burlywood'            => 'DEB887',
		'cadetblue'            => '5F9EA0',
		'chartreuse'           => '7FFF00',
		'chocolate'            => 'D2691E',
		'coral'                => 'FF7F50',
		'cornflowerblue'       => '6495ED',
		'cornsilk'             => 'FFF8DC',
		'crimson'              => 'DC143C',
		'cyan'                 => '00FFFF',
		'darkblue'             => '00008B',
		'darkcyan'             => '008B8B',
		'darkgoldenrod'        => 'B8860B',
		'darkgray'             => 'A9A9A9',
		'darkgreen'            => '006400',
		'darkgrey'             => 'A9A9A9',
		'darkkhaki'            => 'BDB76B',
		'darkmagenta'          => '8B008B',
		'darkolivegreen'       => '556B2F',
		'darkorange'           => 'FF8C00',
		'darkorchid'           => '9932CC',
		'darkred'              => '8B0000',
		'darksalmon'           => 'E9967A',
		'darkseagreen'         => '8FBC8F',
		'darkslateblue'        => '483D8B',
		'darkslategray'        => '2F4F4F',
		'darkslategrey'        => '2F4F4F',
		'darkturquoise'        => '00CED1',
		'darkviolet'           => '9400D3',
		'deeppink'             => 'FF1493',
		'deepskyblue'          => '00BFFF',
		'dimgray'              => '696969',
		'dimgrey'              => '696969',
		'dodgerblue'           => '1E90FF',
		'firebrick'            => 'B22222',
		'floralwhite'          => 'FFFAF0',
		'forestgreen'          => '228B22',
		'fuchsia'              => 'FF00FF',
		'gainsboro'            => 'DCDCDC',
		'ghostwhite'           => 'F8F8FF',
		'gold'                 => 'FFD700',
		'goldenrod'            => 'DAA520',
		'gray'                 => '808080',
		'green'                => '008000',
		'greenyellow'          => 'ADFF2F',
		'grey'                 => '808080',
		'honeydew'             => 'F0FFF0',
		'hotpink'              => 'FF69B4',
		'indianred'            => 'CD5C5C',
		'indigo'               => '4B0082',
		'ivory'                => 'FFFFF0',
		'khaki'                => 'F0E68C',
		'lavender'             => 'E6E6FA',
		'lavenderblush'        => 'FFF0F5',
		'lawngreen'            => '7CFC00',
		'lemonchiffon'         => 'FFFACD',
		'lightblue'            => 'ADD8E6',
		'lightcoral'           => 'F08080',
		'lightcyan'            => 'E0FFFF',
		'lightgoldenrodyellow' => 'FAFAD2',
		'lightgray'            => 'D3D3D3',
		'lightgreen'           => '90EE90',
		'lightgrey'            => 'D3D3D3',
		'lightpink'            => 'FFB6C1',
		'lightsalmon'          => 'FFA07A',
		'lightseagreen'        => '20B2AA',
		'lightskyblue'         => '87CEFA',
		'lightslategray'       => '778899',
		'lightslategrey'       => '778899',
		'lightsteelblue'       => 'B0C4DE',
		'lightyellow'          => 'FFFFE0',
		'lime'                 => '00FF00',
		'limegreen'            => '32CD32',
		'linen'                => 'FAF0E6',
		'magenta'              => 'FF00FF',
		'maroon'               => '800000',
		'mediumaquamarine'     => '66CDAA',
		'mediumblue'           => '0000CD',
		'mediumorchid'         => 'BA55D3',
		'mediumpurple'         => '9370D0',
		'mediumseagreen'       => '3CB371',
		'mediumslateblue'      => '7B68EE',
		'mediumspringgreen'    => '00FA9A',
		'mediumturquoise'      => '48D1CC',
		'mediumvioletred'      => 'C71585',
		'midnightblue'         => '191970',
		'mintcream'            => 'F5FFFA',
		'mistyrose'            => 'FFE4E1',
		'moccasin'             => 'FFE4B5',
		'navajowhite'          => 'FFDEAD',
		'navy'                 => '000080',
		'oldlace'              => 'FDF5E6',
		'olive'                => '808000',
		'olivedrab'            => '6B8E23',
		'orange'               => 'FFA500',
		'orangered'            => 'FF4500',
		'orchid'               => 'DA70D6',
		'palegoldenrod'        => 'EEE8AA',
		'palegreen'            => '98FB98',
		'paleturquoise'        => 'AFEEEE',
		'palevioletred'        => 'DB7093',
		'papayawhip'           => 'FFEFD5',
		'peachpuff'            => 'FFDAB9',
		'peru'                 => 'CD853F',
		'pink'                 => 'FFC0CB',
		'plum'                 => 'DDA0DD',
		'powderblue'           => 'B0E0E6',
		'purple'               => '800080',
		'red'                  => 'FF0000',
		'rosybrown'            => 'BC8F8F',
		'royalblue'            => '4169E1',
		'saddlebrown'          => '8B4513',
		'salmon'               => 'FA8072',
		'sandybrown'           => 'F4A460',
		'seagreen'             => '2E8B57',
		'seashell'             => 'FFF5EE',
		'sienna'               => 'A0522D',
		'silver'               => 'C0C0C0',
		'skyblue'              => '87CEEB',
		'slateblue'            => '6A5ACD',
		'slategray'            => '708090',
		'slategrey'            => '708090',
		'snow'                 => 'FFFAFA',
		'springgreen'          => '00FF7F',
		'steelblue'            => '4682B4',
		'tan'                  => 'D2B48C',
		'teal'                 => '008080',
		'thistle'              => 'D8BFD8',
		'tomato'               => 'FF6347',
		'turquoise'            => '40E0D0',
		'violet'               => 'EE82EE',
		'wheat'                => 'F5DEB3',
		'white'                => 'FFFFFF',
		'whitesmoke'           => 'F5F5F5',
		'yellow'               => 'FFFF00',
		'yellowgreen'          => '9ACD32',
	);

	$color_name = strtolower( $color_name );
	$color_name = trim( str_replace( '!important', '', $color_name ) );

	if ( isset( $colors[ $color_name ] ) ) {
		return ( '#' . $colors[ $color_name ] );
	} else {
		return ( $color_name );
	}
}
/**
 * Ccheck background style for color
 */
function wp_ada_compliance_basic_check_color_match2( $background_rule ) {

	if ( preg_match( '/(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)|(#(?:[0-9a-f]{2}){2,4}|#[0-9a-f]{3})/i', $background_rule ) ) {
		return $background_rule;
	}

	// standard 147 HTML color names.
	$colors = array(
		'aliceblue'            => 'F0F8FF',
		'antiquewhite'         => 'FAEBD7',
		'aqua'                 => '00FFFF',
		'aquamarine'           => '7FFFD4',
		'azure'                => 'F0FFFF',
		'beige'                => 'F5F5DC',
		'bisque'               => 'FFE4C4',
		'black'                => '000000',
		'blanchedalmond '      => 'FFEBCD',
		'blue'                 => '0000FF',
		'blueviolet'           => '8A2BE2',
		'brown'                => 'A52A2A',
		'burlywood'            => 'DEB887',
		'cadetblue'            => '5F9EA0',
		'chartreuse'           => '7FFF00',
		'chocolate'            => 'D2691E',
		'coral'                => 'FF7F50',
		'cornflowerblue'       => '6495ED',
		'cornsilk'             => 'FFF8DC',
		'crimson'              => 'DC143C',
		'cyan'                 => '00FFFF',
		'darkblue'             => '00008B',
		'darkcyan'             => '008B8B',
		'darkgoldenrod'        => 'B8860B',
		'darkgray'             => 'A9A9A9',
		'darkgreen'            => '006400',
		'darkgrey'             => 'A9A9A9',
		'darkkhaki'            => 'BDB76B',
		'darkmagenta'          => '8B008B',
		'darkolivegreen'       => '556B2F',
		'darkorange'           => 'FF8C00',
		'darkorchid'           => '9932CC',
		'darkred'              => '8B0000',
		'darksalmon'           => 'E9967A',
		'darkseagreen'         => '8FBC8F',
		'darkslateblue'        => '483D8B',
		'darkslategray'        => '2F4F4F',
		'darkslategrey'        => '2F4F4F',
		'darkturquoise'        => '00CED1',
		'darkviolet'           => '9400D3',
		'deeppink'             => 'FF1493',
		'deepskyblue'          => '00BFFF',
		'dimgray'              => '696969',
		'dimgrey'              => '696969',
		'dodgerblue'           => '1E90FF',
		'firebrick'            => 'B22222',
		'floralwhite'          => 'FFFAF0',
		'forestgreen'          => '228B22',
		'fuchsia'              => 'FF00FF',
		'gainsboro'            => 'DCDCDC',
		'ghostwhite'           => 'F8F8FF',
		'gold'                 => 'FFD700',
		'goldenrod'            => 'DAA520',
		'gray'                 => '808080',
		'green'                => '008000',
		'greenyellow'          => 'ADFF2F',
		'grey'                 => '808080',
		'honeydew'             => 'F0FFF0',
		'hotpink'              => 'FF69B4',
		'indianred'            => 'CD5C5C',
		'indigo'               => '4B0082',
		'ivory'                => 'FFFFF0',
		'khaki'                => 'F0E68C',
		'lavender'             => 'E6E6FA',
		'lavenderblush'        => 'FFF0F5',
		'lawngreen'            => '7CFC00',
		'lemonchiffon'         => 'FFFACD',
		'lightblue'            => 'ADD8E6',
		'lightcoral'           => 'F08080',
		'lightcyan'            => 'E0FFFF',
		'lightgoldenrodyellow' => 'FAFAD2',
		'lightgray'            => 'D3D3D3',
		'lightgreen'           => '90EE90',
		'lightgrey'            => 'D3D3D3',
		'lightpink'            => 'FFB6C1',
		'lightsalmon'          => 'FFA07A',
		'lightseagreen'        => '20B2AA',
		'lightskyblue'         => '87CEFA',
		'lightslategray'       => '778899',
		'lightslategrey'       => '778899',
		'lightsteelblue'       => 'B0C4DE',
		'lightyellow'          => 'FFFFE0',
		'lime'                 => '00FF00',
		'limegreen'            => '32CD32',
		'linen'                => 'FAF0E6',
		'magenta'              => 'FF00FF',
		'maroon'               => '800000',
		'mediumaquamarine'     => '66CDAA',
		'mediumblue'           => '0000CD',
		'mediumorchid'         => 'BA55D3',
		'mediumpurple'         => '9370D0',
		'mediumseagreen'       => '3CB371',
		'mediumslateblue'      => '7B68EE',
		'mediumspringgreen'    => '00FA9A',
		'mediumturquoise'      => '48D1CC',
		'mediumvioletred'      => 'C71585',
		'midnightblue'         => '191970',
		'mintcream'            => 'F5FFFA',
		'mistyrose'            => 'FFE4E1',
		'moccasin'             => 'FFE4B5',
		'navajowhite'          => 'FFDEAD',
		'navy'                 => '000080',
		'oldlace'              => 'FDF5E6',
		'olive'                => '808000',
		'olivedrab'            => '6B8E23',
		'orange'               => 'FFA500',
		'orangered'            => 'FF4500',
		'orchid'               => 'DA70D6',
		'palegoldenrod'        => 'EEE8AA',
		'palegreen'            => '98FB98',
		'paleturquoise'        => 'AFEEEE',
		'palevioletred'        => 'DB7093',
		'papayawhip'           => 'FFEFD5',
		'peachpuff'            => 'FFDAB9',
		'peru'                 => 'CD853F',
		'pink'                 => 'FFC0CB',
		'plum'                 => 'DDA0DD',
		'powderblue'           => 'B0E0E6',
		'purple'               => '800080',
		'red'                  => 'FF0000',
		'rosybrown'            => 'BC8F8F',
		'royalblue'            => '4169E1',
		'saddlebrown'          => '8B4513',
		'salmon'               => 'FA8072',
		'sandybrown'           => 'F4A460',
		'seagreen'             => '2E8B57',
		'seashell'             => 'FFF5EE',
		'sienna'               => 'A0522D',
		'silver'               => 'C0C0C0',
		'skyblue'              => '87CEEB',
		'slateblue'            => '6A5ACD',
		'slategray'            => '708090',
		'slategrey'            => '708090',
		'snow'                 => 'FFFAFA',
		'springgreen'          => '00FF7F',
		'steelblue'            => '4682B4',
		'tan'                  => 'D2B48C',
		'teal'                 => '008080',
		'thistle'              => 'D8BFD8',
		'tomato'               => 'FF6347',
		'turquoise'            => '40E0D0',
		'violet'               => 'EE82EE',
		'wheat'                => 'F5DEB3',
		'white'                => 'FFFFFF',
		'whitesmoke'           => 'F5F5F5',
		'yellow'               => 'FFFF00',
		'yellowgreen'          => '9ACD32',
	);

	$background_rule = strtolower( $background_rule );
	$background_rule = trim( str_replace( '!important', '', $background_rule ) );

	$rules = explode( ' ', $background_rule );

	foreach ( $rules as $key => $value ) {

		if ( array_key_exists( $value, $colors ) ) {
			return $colors[ $value ];
		}
	}
	return '';
}
