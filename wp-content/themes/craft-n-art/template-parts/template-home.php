<?php  
/*
*Template Name: Home
*/
get_header(); 
?>

<main class="main-content">


         <div class="mainBannerBox">
            <section class="bannerBox box">
                <?php
                  $banner = get_field('banner');
                  if( $banner ): ?>
               <div class="zoom coordinates" style="background-image: url('<?php echo $banner['banner_image']; ?>'); background-size: cover;
               background-position: top center;">
               </div>
               <div class="bannerContent">
                  <h1> <?php echo $banner['banner_text']; ?></h1>
               </div>
               <?php endif; ?>
            </section>
         </div>


         <section class="abtFirm abtFirmFirst">
            <div class="container">
               <div class="row">
                   <?php
                  $small_batch = get_field('small_batch');
                  if( $small_batch ): ?>
                  <div class="col-lg-12">
                    
                     <div class="abtHead slide-up">
                        <h2><?php echo $small_batch['batch_heading']; ?></h2>
                     </div>
                  </div>
                  <div class="col-lg-12">
                     <div class="abtPara slide-left">
                        <p><?php echo $small_batch['batch_text']; ?></p>
                        
                        <a class="myBtn link" href="<?php echo $small_batch['batch_button']; ?>">Learn More</a>
                     </div>
                  </div>
                  <?php endif; ?>
               </div>
            </div>
         </section>
         <section class="todaHomegrown box">
            <div class="container-fluid p-0">
               <div class="row">
                   <?php
                  $homegrown = get_field('homegrown');
                  if( $homegrown ): ?>
                  <div class="col-lg-6 flip">
                     <div class="leftSide coordinates">
                        <img width="1970" height="873" loading="lazy" width="1501" height="994" src="<?php echo $homegrown['homegrown_image']; ?>" alt="image">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="rightSide">
                        <h2 class="scaleUp"><?php echo $homegrown['homegrown_text']; ?></h2>
                     </div>
                  </div>
                  <?php endif; ?>
               </div>
            </div>
         </section>
         <section class="abtFirm ourServ">
            <div class="container">
               <div class="row">
                   <?php
                  $services = get_field('services');
                  if( $services ): ?>
                  <div class="col-lg-12">
                     <div class="abtHead scaleUp">
                        <h2><?php echo $services['services_heading']; ?></h2>
                     </div>
                  </div>
                  <div class="col-lg-12">
                     <div class="abtPara slide-up">
                        <p><?php echo $services['services_text']; ?></p>
                         <a class="myBtn link" href="<?php echo $services['services_button']; ?>">Learn More</a>
                     </div>
                  </div>
                  <?php endif; ?>
               </div>
            </div>
         </section>
         <section class="gridPicSec">
            <h1 class="d-none">Display None</h1>
            <div class="container-fluid p-0">
               <div class="row justify-content-end g-0">
                  <div class="col-lg-10 p-0">
                     <div class="imgGrid scaleUp">
                        <img loading="lazy" width="1428" height="952"
 src="<?php echo get_template_directory_uri(); ?>/assets/images/Mask-Group-74.jpg" alt="image">
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="contactUs p-90" id="contactUs">
            <div class="container">
               <div class="row">
                  <?php
                  $contact = get_field('contact');
                  if( $contact ): ?>
                  <div class="col-lg-10 mx-auto">
                     <div class="contactUsBox">
                        <h2><?php echo $contact['contact_heading']; ?></h2>
                       
                           <?php echo $contact['contact_short']; ?>
                          
                        
                     </div>
                  </div>
                  <?php endif; ?>
               </div>
            </div>
         </section>
      </main>

<?php  
get_footer();