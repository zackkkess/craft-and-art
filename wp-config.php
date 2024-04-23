<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '' );

/** MySQL database username */
define( 'DB_USER', '' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', '' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'p:B!@7jKgVcq[qKJBj;S$u=*U7f&7Z]-pHw}DkAW`q}q*v@YUPM+spsD9VaQ9Ktw' );
define( 'SECURE_AUTH_KEY',  'Et+B% BKpQQ_rFp/1yx0lQ|p^mQeFZp2)-,dnBhbenL@t<BaV^ys3oyPC#+l^gmG' );
define( 'LOGGED_IN_KEY',    '7X.av#Zykgg]z~1h2<`~;~74<h~%hG;asbl8peHYWVN-;0_GwNd*$XIn!aacy79J' );
define( 'NONCE_KEY',        'Q<]f;~|JjAjRNw|S9.PyR=+O@U7jPW*HVuBqp;,^QD-cgj9|<a}P [bx{A5(+ukZ' );
define( 'AUTH_SALT',        'cX{,2yxLI=Q3;V9*m`uD5)+w&iSymlKdde^$BhT<f{QO|N* 16vpks)khI=Qr?*=' );
define( 'SECURE_AUTH_SALT', 'W4IuQeB%j)WZ Ovh*UPUo45SdU34TZ-O, G?/c<bKG?Q7q%7agD_NjrmS>y+Pwi{' );
define( 'LOGGED_IN_SALT',   '*0&K,ly2LpR=+VbypYYAXzr,Ob>c.zNFwM`Q&2McboDFFtt|N6unty)Qcb7C0=?f' );
define( 'NONCE_SALT',       'Q}2!y^B$d7k.*!]QzheKe#$yRRBU0y-UC-PP 2}[4%Skm/J,k&,/`BAJdj$<jiL1' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false) { $_SERVER['HTTPS'] = 'on'; }
require_once ABSPATH . 'wp-settings.php';
