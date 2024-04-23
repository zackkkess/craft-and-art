<?php

if ( ! defined( 'ABSPATH' ) ) {
	die;
}
/**
 * Image missing alt text
 */
function wp_ada_compliance_basic_validate_img_missing_alt( $content, $postinfo ) {

	global $wp_ada_compliance_basic_def;

	$dom = str_get_html( $content );

	// get options.
	$wp_ada_compliance_basic_scanoptions = get_option( 'wp_ada_compliance_basic_ignore_scan_rules', array() );

	// check if being scanned.
	if ( in_array( 'img_missing_alt', $wp_ada_compliance_basic_scanoptions ) ) {
		return 1;
	}

	$tags = array( 'img', 'input', 'svg' );

	foreach ( $tags as $tag ) {
		$elements = $dom->find( $tag );

		foreach ( $elements as $element ) {

			if ( ( 'img' == $element->tag
			&& ! $element->hasAttribute( 'alt' ) && 'presentation' != $element->getAttribute( 'role' ) && 'true' != $element->getAttribute( 'aria-hidden' ) )
			|| ( 'input' == $element->tag
			&& ! $element->hasAttribute( 'alt' ) && 'image' == $element->getAttribute( 'type' ) )
			|| ( 'svg' == $element->tag
			&& ! wp_ada_compliance_basic_check_svg_img( $element, $dom ) && 'presentation' != $element->getAttribute( 'role' ) && 'true' != $element->getAttribute( 'aria-hidden' ) )

			) {

				$imagecode = $element->outertext;

				// ignore certain images.
				if ( wp_ada_compliance_basic_ignore_plugin_issues( $imagecode ) ) {
					goto img_missing_altbottom;
				}

				// ignore images with captions.
				if ( wp_ada_compliance_basic_ignore_inside_valid_caption( $imagecode, $content ) ) {
					goto img_missing_altbottom;
				}

				// save error.
				if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'img_missing_alt', $imagecode ) ) {
					$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'img_missing_alt', $wp_ada_compliance_basic_def['img_missing_alt']['StoredError'], $imagecode );
				}
			}
			img_missing_altbottom:
		}
	}
	return 1;
}

/**
 * Ignore plugin issues that are being resolved automatically
 **/
function wp_ada_compliance_basic_ignore_plugin_issues( $content ) {

	// ignore spacer pixles.
	if ( strstr( $content, 'advanced-wp-columns/assets/js/plugins/views/img/1x1-pixel.png' ) ) {
		return 1;
	}

	// ignore tracking pixle.
	if ( strstr( $content, 'https://insight.adsrvr.org/track/pxl/' ) ) {
		return 1;
	}

	// ignore google ad code.
	if ( strstr( $content, 'src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/834593360/?guid=ON&amp;script=0"' ) ) {
		return 1;
	}

	return 0;
}

/**
 * Check if plugin is active
 **/
function wp_ada_compliance_basic_is_plugin_active( $plugin ) {

	$plugins = get_option( 'active_plugins', array() );
	if ( in_array( $plugin, $plugins ) ) {
		return 1;
	}
}

/**
 * Check if image is inside a caption and has valid alt text
 **/
function wp_ada_compliance_basic_ignore_inside_valid_caption( $imagecode, $content ) {

	$dom = str_get_html( $content );

	// captions inside figure tags  (html5).
	$figures = $dom->find( 'figure' );

	foreach ( $figures as $figure ) {
		$images = $figure->find( 'img' );
		foreach ( $images as $image ) {
			if ( '' != $image->getAttribute( 'src' ) && strstr( $imagecode, $image->getAttribute( 'src' ) ) && '' != trim( $figure->plaintext ) ) {
				return 1;
			}
		}
	}

	// captions inside div tags (pre html5).
	$divs = $dom->find( 'div' );
	foreach ( $divs as $div ) {
		if ( stristr( $div->getAttribute( 'class' ), 'wp-caption' ) ) {
			$images = $div->find( 'img' );
			foreach ( $images as $image ) {
				if ( '' != $image->getAttribute( 'src' ) && strstr( $imagecode, $image->getAttribute( 'src' ) ) && strlen( $div->plaintext ) > 5 ) {
					return 1;
				}
			}
		}
	}

	// anchors with aria-label or title or valid node text.
	$as = $dom->find( 'a' );
	foreach ( $as as $a ) {
		if ( '' != $a->getAttribute( 'aria-label' ) || '' != $a->getAttribute( 'title' ) || strlen( $a->plaintext ) > 5 ) {
			$images = $a->find( 'img' );
			foreach ( $images as $image ) {
				if ( '' != $image->getAttribute( 'src' ) && strstr( $imagecode, $image->getAttribute( 'src' ) ) ) {
					return 1;
				}
			}
		}
	}

	return 0;
}
