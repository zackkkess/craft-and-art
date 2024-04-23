<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Craft-n-Art
 */

?>
<?php
  
function sanitize_output($buffer)
{
    $search = array(
        '/\>[^\S ]+/s',  // strip whitespaces after tags, except space
        '/[^\S ]+\</s',  // strip whitespaces before tags, except space
        '/(\s)+/s'       // shorten multiple whitespace sequences
        );
    $replace = array(
        '>',
        '<',
        '\\1'
        );
    $buffer = preg_replace($search, $replace, $buffer);
    return $buffer;
}
ob_start("sanitize_output");
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
   <meta charset="<?php bloginfo( 'charset' ); ?>">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="profile" href="https://gmpg.org/xfn/11">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <?php wp_head(); ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KZECKRWLL9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(‘js’, new Date());
  gtag(‘config’, ‘G-KZECKRWLL9’);
</script>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
 <!-- ======= Header ======= -->
  <div class="wrapper">
<!--    <div class="cursor"></div>
   <div class="cursor-follower"></div> -->
<header class="site-header" class="nav-down">
         <div class="topInfo" id="myHeader">
            <div class="container-fluid">
               <div class="topBox">
                  
                  <div class="logoBox">
                   <?php
                      $custom_logo_id = get_theme_mod('custom_logo');
                      $image = wp_get_attachment_image_src($custom_logo_id, 'full'); 
                      if(is_home() || is_front_page()) {
                          echo '<a class="logo0" href="'.esc_url(site_url()).'"><img alt="logo" loading="lazy" width="483" height="185" src="'.esc_url($image[0]).'"></a>';
                      
                      } else {
                           if(get_field('other_header_logo',get_option('page_on_front'))){
                                echo '<a href="'.esc_url(site_url()).'" class="link">
                                <img loading="lazy" width="483" height="185" class="logo1" src="'.get_field('other_header_logo',get_option('page_on_front')).'" alt="logo">
                                <img loading="lazy" width="483" height="185" class="logo2" src="'.get_template_directory_uri().'/assets/images/logo.png" alt="logo"> 
                                </a>';
                           }
                          }
                    ?>
                  </div>
                  
                  <nav class="navbar navBar">
                     <button type="button" class="btn-bars">
                        <span><img loading="lazy" width="54" height="35"
 src="<?php echo get_template_directory_uri(); ?>/assets/images/hamburger-menu.png" alt="hamburger"></span>
                     </button>
                     <div class="navbar-collapse">
                        <span class="btn-close">
                           &times;
                        </span>
                         <?php wp_nav_menu(array('theme_location' => 'menu-1', 'menu_class' => 'navbar-nav','add_a_class' => 'link')); ?>
                        
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
