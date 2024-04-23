<?php

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/**
 * Validate absolute font tags
 **/
function wp_ada_compliance_basic_validate_absolute_fontsize( $content, $postinfo ) {

	global $wp_ada_compliance_basic_def;

	// get options..
	$wp_ada_compliance_basic_scanoptions = get_option( 'wp_ada_compliance_basic_ignore_scan_rules', array() );

	// check if being scanned..
	if ( in_array( 'absolute_fontsize', $wp_ada_compliance_basic_scanoptions ) ) {
		return 1;
	}

	$dom = str_get_html( $content );

	$elements = $dom->find( '*[style*=font-size:], *[style*=font:]' );
	foreach ( $elements as $element ) {

		$absolute_fontsize_errorcode = $element->outertext;
		$fontsearchpatterns          = array();
		$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)pt|i';
		$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)px|i';
		$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vh|i';
		$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vw|i';
		$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vmin|i';
		$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vmax|i';
		$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)pt|i';
		$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)px|i';
		$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vh|i';
		$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vw|i';
		$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vmin|i';
		$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vmax|i';

		foreach ( $fontsearchpatterns as $key => $pattern ) {

			if ( preg_match( $pattern, $absolute_fontsize_errorcode ) ) {

				// save error..
				$insertid = wp_ada_compliance_basic_error_check( $postinfo, 'absolute_fontsize', $absolute_fontsize_errorcode );
				if ( ! $insertid ) {

					$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'absolute_fontsize', $wp_ada_compliance_basic_def['absolute_fontsize']['StoredError'], $absolute_fontsize_errorcode );
				}
			}
		}
	}

	// parse && scan style tag content in post files.
	if ( stristr( $content, '<style' ) ) {
		foreach ( $dom->find( 'style' ) as $style ) {

			$absolute_fontsize_errorcode = $style->outertext;
			$fontsearchpatterns          = array();
			$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)pt|i';
			$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)px|i';
			$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vh|i';
			$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vw|i';
			$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vmin|i';
			$fontsearchpatterns[]        = '|font\-size:\s?([\d]+)vmax|i';
			$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)pt|i';
			$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)px|i';
			$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vh|i';
			$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vw|i';
			$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vmin|i';
			$fontsearchpatterns[]        = '|font:\s?[\w\s\d*\s]*([\d]+)vmax|i';

			foreach ( $fontsearchpatterns as $key => $pattern ) {

				if ( preg_match( $pattern, $absolute_fontsize_errorcode ) ) {

					// save error..
					$insertid = wp_ada_compliance_basic_error_check( $postinfo, 'absolute_fontsize', $absolute_fontsize_errorcode );
					if ( ! $insertid ) {

						$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'absolute_fontsize', $wp_ada_compliance_basic_def['absolute_fontsize']['StoredError'], $absolute_fontsize_errorcode );
					}
				}
			}
		}
	}
}
