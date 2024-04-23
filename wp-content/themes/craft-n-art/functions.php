<?php
/**
 * Craft-n-Art functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Craft-n-Art
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'craft_n_art_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function craft_n_art_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Craft-n-Art, use a find and replace
		 * to change 'craft-n-art' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'craft-n-art', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'craft-n-art' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'craft_n_art_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'craft_n_art_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function craft_n_art_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'craft_n_art_content_width', 640 );
}
add_action( 'after_setup_theme', 'craft_n_art_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function craft_n_art_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'craft-n-art' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'craft-n-art' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'craft_n_art_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function craft_n_art_scripts() {
	wp_enqueue_style( 'craft-n-art-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'craft-n-art-style', 'rtl', 'replace' );

	wp_enqueue_script( 'craft-n-art-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'craft_n_art_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

function load_assets()
{

// CSS 
// wp_enqueue_style( 'my_gfonts_Playfair', 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&family=Playfair+Display:wght@800&family=Poppins:wght@700&display=swap', [], null, 'all' );

wp_enqueue_style( 'all-theme', get_template_directory_uri() ."/assets/css/all-theme.css", [], null, 'all' );
// wp_enqueue_style( 'style', get_template_directory_uri() ."/assets/css/style.css", [], null, 'all' );


//js

    // wp_enqueue_script('jquery-min-js', get_template_directory_uri() . '/assets/js/jquery.min.js', array(), null, true);
    // wp_enqueue_script('bootstrap-bundle-min-js', get_template_directory_uri() . '/assets/js/bootstrap.bundle.min.js', array(), null, true);

    // wp_enqueue_script('animation-js', get_template_directory_uri() . '/assets/js/animation.js', array(), null, true);

   //Template Main JS File 
    // wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array(), null, true);

  // minify js version
wp_enqueue_script('all-themes
', get_template_directory_uri() . '/assets/js/all-themes.js
', array(), null, true);
}

add_action('wp_enqueue_scripts', 'load_assets');


//to add additional classes on a tag
        function add_additional_class_on_a($classes, $item, $args)
        {
            if (isset($args->add_a_class)) {
                $classes['class'] = $args->add_a_class;
            }
            return $classes;
        }

        add_filter('nav_menu_link_attributes', 'add_additional_class_on_a', 1, 3);


 // shahid
        function wpb_custom_new_menu() {
  register_nav_menus(
    array(
      'footer_menu' => __( 'My Custom Menu' ),
      'extra-menu' => __( 'Extra Menu' )
    )
  );
}
add_action( 'init', 'wpb_custom_new_menu' );


// wp-admin
// cumtom wp-login
// start
function my_login_logo_one() { 
?> 
<style type="text/css"> 
body.login div#login h1 a {
 background-image: url("https://www.craftandartws.com/wp-content/uploads/2021/12/cropped-logo.png") !important;
/*     height: 100px !important; */
    width: 60% !important;
    background-size: 100% !important;
    line-height: inherit !important;
} 
</style> 
 <?php 
} add_action( 'login_enqueue_scripts', 'my_login_logo_one' );
//end
// cumtom wp-login
// start
function my_login() { 
?> 
<style type="text/css"> 
body.login{
 background-image: url(https://www.craftandartws.com/wp-content/uploads/2021/12/banner-1-scaled.jpg) !important;
  background-size: cover !important;
    width: 100% !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
} 
#nav a ,#backtoblog a{
    color: #fff !important;
}
.privacy-policy-page-link a {
    color: #fff;
}
div#login {
/*     padding: 0 !important; */
padding: 5% 0 0;
width: 352px;
}
	@media(max-width:767px){
		#login{width: 355px !important;}
	}
</style> 
 <?php 
} add_action( 'login_enqueue_scripts', 'my_login' );
//end

function loginform() { 
?> 
<style type="text/css"> 
form#loginform{
    font-weight: 500;
    background: #ffffff69;
    border: 2px solid #000;
    box-shadow: 0 1px 3px rgba(0,0,0,.04);
    color: #ffff;

} 
#wp-submit {
    background: #000 !important;
   color: #fff !important;
}
.login input {
    background: #ffffff94 !important;
    border: 2px solid  #000 !important;
	color: #000 !important;
}

</style> 
 <?php 
} add_action( 'login_enqueue_scripts', 'loginform' );