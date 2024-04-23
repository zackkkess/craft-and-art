<?php  
/*
*Template Name: Privacy Policy
*/
get_header(); 
?>
<section class="privacy">
<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/404-banner1.png" alt="image" width="100%" >
</section>
<section div class="trem_conditions">
  <div class="container">
    <h3 class="pb20"><!-- <?php //the_title(); ?> --></h3>
   <?php the_content(); ?>
  </div>

</section>
<?php  
get_footer();