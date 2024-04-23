<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Craft-n-Art
 */

get_header();
?>

	<main id="primary" class="site-main">
        <section class="banner_error"></section>
		<section class="error-404 not-found">
			<div class="container">
			<div class="page-header">
				  <div class="notfound-404">
                 <h3>Oops! Page not found</h3>
               <h1><span>4</span><span class="add">0</span><span>4</span></h1>
              </div>
				<h2 class="page-title"><?php esc_html_e( 'SOMETHING IS WRONG', 'ridge-noorks' ); ?></h2>
				<p>The page you are looking for was removed, renamed or might never existed.
                  Having trouble? <a href="https://www.craftandartws.com/craft-art/#contactUs">Contact us</a></p>
				 <div class="btn010"><a href="https://www.craftandartws.com/craft-art/">Continue To Homepage</a></div>
			</div><!-- .page-header -->
            </div>

		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
