<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Craft-n-Art
 */

?>
 
<footer>
         <div class="container-fluid">
            <div class="footerLogo">
               <a href="<?php echo esc_url( site_url() ); ?>" class="link">
                  <img alt="footerLogo" loading="lazy" width="1328" height="1307"
 src="<?php the_field('footer_logo',7); ?>" />
               </a>
            </div>
            <div class="row">
               <div class="col-lg-11 mx-auto">
                 <div class="footerNew">
                 <?php wp_nav_menu(array('theme_location' => 'footer_menu','menu_class' => 'footerList','container' => true ,'add_a_class' => 'link')); ?>
                  
                  <p><?php the_field('footer_copy',7); ?></p>
                 </div>
                  
               </div>
            </div>
         </div>
      </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
