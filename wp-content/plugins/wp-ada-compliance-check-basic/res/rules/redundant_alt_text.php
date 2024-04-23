<?php

if ( ! defined( 'ABSPATH' ) ) {
	die;
}
/**
 * Validate redundant alt tags
 **/
function wp_ada_compliance_basic_validate_redundant_alt_text( $content, $postinfo ) {

	global $wp_ada_compliance_basic_def;

	$dom = str_get_html( $content );

	// get options.
	$wp_ada_compliance_basic_scanoptions = get_option( 'wp_ada_compliance_basic_ignore_scan_rules', array() );

	// check if being scanned.
	if ( in_array( 'redundant_alt_text', $wp_ada_compliance_basic_scanoptions ) ) {
		return 1;
	}

	/**
	 * Update redundant alt attributes on images inside a WordPress caption shortcode
	 */

	$images = $dom->find( 'img,svg' );
	foreach ( $images as $image ) {

		if ( 'svg' == $image->tag ) {
			$alt = wp_ada_compliance_basic_check_svg_img_alt_text( $image, $dom );
		} else {
			$alt = $image->getAttribute( 'alt' );
		}

		$alttext = '';
		if ( '' != $alt ) {
			$alttext = $alt;
		} elseif ( '' != $image->getAttribute( 'title' ) ) {
			$alttext = $image->getAttribute( 'title' );
		} elseif ( '' != $image->getAttribute( 'aria-label' ) ) {
			$alttext = $image->getAttribute( 'aria-label' );
		}

		if ( '' != $alttext ) {
			if ( isset( $captioncode ) ) {
				unset( $captioncode );
			}
			$pattern = '/' . "\[caption.*\](.*?)alt=[\"\']\b" . preg_quote( strtolower( trim( $alttext ) ), '/' ) . "\b[\"\'](.*?)\b" . preg_quote( strtolower( trim( $alttext ) ), '/' ) . "\b\[\/caption\]" . '/';

			if ( preg_match( $pattern, $content, $captioncode ) ) {
				if ( ! stristr( $captioncode[0], '<a' ) ) { // if not inside an anchor.

					// save error.
					if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'redundant_alt_text', $captioncode[0] ) ) {
						$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'redundant_alt_text', $wp_ada_compliance_basic_def['redundant_alt_text']['StoredError'], $captioncode[0] );
					}
				}
			}
		}
	}// end caption validate.

	/**
	 * Redundant alt text on image when parent element includes the same text THis includes all caption types
	 */
	$images  = $dom->find( 'img,svg' );
	$alttext = '';
	foreach ( $images as $image ) {

		if ( 'svg' == $image->tag ) {
			$alt = wp_ada_compliance_basic_check_svg_img_alt_text( $image, $dom );
		} else {
			$alt = $image->getAttribute( 'alt' );
		}

		// don't report redundant link text when wrapped in a link.
		if ( 'a' != $image->parent()->tag ) {

			if ( '' != $alt ) {
				$alttext = $alt;
			} elseif ( '' != $image->getAttribute( 'title' ) ) {
				$alttext = $image->getAttribute( 'title' );
			} elseif ( '' != $image->getAttribute( 'aria-label' ) ) {
				$alttext = $image->getAttribute( 'aria-label' );
			}
			// check parent tag.
			if ( is_object( $image->parent() ) && 'a' != $image->parent()->tag ) {
				$parent = $image->parent();
			} elseif ( is_object( $image->parent()->parent() ) ) {
				$parent = $image->parent()->parent();
			}

			if ( is_object( $parent ) && '' != $alttext ) {

				// check parents text.
				if ( 'img' == $image->tag ) {
					$parentstext = $parent->plaintext;
				} else {
					$parentstext = strip_tags( preg_replace( '/<title>(.+)<\/title>/', '', $parent->outertext ) );
				}
				if ( '' != $parentstext && stristr( $parentstext, $alttext ) ) {

					$redundantalttag = $parent->outertext;
					if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'redundant_alt_text', $redundantalttag ) ) {
						$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'redundant_alt_text', $wp_ada_compliance_basic_def['redundant_alt_text']['StoredError'], $redundantalttag );
					}
				}

				// check next element text.
				if ( is_object( $parent->next_sibling() ) ) {
					if ( 'img' == $image->tag ) {
						$nextelementtext = $parent->next_sibling()->plaintext;
					} else {
						$nextelementtext = strip_tags( preg_replace( '/<title>(.+)<\/title>/', '', $parent->next_sibling()->outertext ) );
					}
					if ( '' != $nextelementtext && stristr( $nextelementtext, $alttext ) ) {

						$redundantalttag = $parent->outertext . $parent->next_sibling()->outertext;
						if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'redundant_alt_text', $redundantalttag ) ) {
							$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'redundant_alt_text', $wp_ada_compliance_basic_def['redundant_alt_text']['StoredError'], $redundantalttag );
						}
					}
				}

				// check previous text.
				if ( is_object( $parent->prev_sibling() ) ) {

					if ( 'img' == $image->tag ) {
						$prevelementtext = $parent->prev_sibling()->plaintext;
					} else {
						$prevelementtext = strip_tags( preg_replace( '/<title>(.+)<\/title>/', '', $parent->prev_sibling()->outertext ) );
					}
					if ( '' != $prevelementtext && stristr( $prevelementtext, $alttext ) ) {

						$redundantalttag = $parent->prev_sibling()->outertext . $parent->outertext;
						if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'redundant_alt_text', $redundantalttag ) ) {
							$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'redundant_alt_text', $wp_ada_compliance_basic_def['redundant_alt_text']['StoredError'], $redundantalttag );
						}
					}
				}
			}
		}
	}

	/**
	 * Redundant alt text on image inside anchor
	 */
	$images = $dom->find( 'a img,a svg' );
	foreach ( $images as $image ) {

		if ( 'svg' == $image->tag ) {
			$alt = wp_ada_compliance_basic_check_svg_img_alt_text( $image, $dom );
		} else {
			$alt = $image->getAttribute( 'alt' );
		}

		if ( '' != $alt ) {
			if ( isset( $image )
			&& ( wp_ada_compliance_basic_compare_strings( $image->parent()->plaintext, $alt )
			|| wp_ada_compliance_basic_compare_strings( $image->getAttribute( 'title' ), $alt )
			) ) {

				$redundantalttag = $image->parent()->outertext;
				// save error.
				if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'redundant_alt_text', $redundantalttag ) ) {
					$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'redundant_alt_text', $wp_ada_compliance_basic_def['redundant_alt_text']['StoredError'], $redundantalttag );
				}
			}
		}
	}

	/**
	 * Redundant alt text on image not inside an anchor
	 */
	$images = $dom->find( 'img, svg' );
	foreach ( $images as $image ) {

		if ( 'svg' == $image->tag ) {
			$alt = wp_ada_compliance_basic_check_svg_img_alt_text( $image, $dom );
		} else {
			$alt = $image->getAttribute( 'alt' );
		}

		if ( '' != $alt && '' != $image->getAttribute( 'title' ) ) {

			if ( isset( $image )
			&& wp_ada_compliance_basic_compare_strings( $image->getAttribute( 'title' ), $alt )
			) {
				$redundantalttag = $image->outertext;

				// save error.
				if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'redundant_alt_text', $redundantalttag ) ) {
					$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'redundant_alt_text', $wp_ada_compliance_basic_def['redundant_alt_text']['StoredError'], $redundantalttag );
				}
			}
		}
	}

	return 1;
}
