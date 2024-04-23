<?php

if ( ! defined( 'ABSPATH' ) ) {
	die;
}
/**
 * Validate tables missing th
 */
function wp_ada_compliance_basic_validate_missing_th( $content, $postinfo ) {

	global $wp_ada_compliance_basic_def;

	$dom = str_get_html( $content );

	// get options.
	$wp_ada_compliance_basic_scanoptions = get_option( 'wp_ada_compliance_basic_ignore_scan_rules', array() );
	$presentation_tables                 = 'false';
	$report_filtered_errors              = 'true';

	// check if being scanned.
	if ( in_array( 'missing_th', $wp_ada_compliance_basic_scanoptions ) ) {
		return 1;
	}

	$tables = $dom->find( 'table' );

	foreach ( $tables as $table ) {

		$tablecode = $table->outertext;

		if ( '' != $table && '' == $table->getAttribute( 'data-ninja_table_instance' ) && ( ! stristr( $tablecode, '<th' ) && ! strstr( $tablecode, '<td scope=' ) && 'presentation' != $table->getAttribute( 'role' ) ) ) {

			// check if error is being stripped or reporting is turned off.
			if ( 'true' == $presentation_tables && stristr( $table->getAttribute( 'class' ), 'role-presentation' ) && 'false' == $report_filtered_errors ) {
				goto endoftable_check;
			}

			// save error.
			if ( ! $insertid = wp_ada_compliance_basic_error_check( $postinfo, 'missing_th', $tablecode ) ) {
				$insertid = wp_ada_compliance_basic_insert_error( $postinfo, 'missing_th', $wp_ada_compliance_basic_def['missing_th']['StoredError'], $tablecode );
			}
		}
		endoftable_check:
	}
	return 1;
}
