<?php  
/*
*Template Name: Capabilities
*/
get_header(); 
?>
<main class="main-content">
         <div class="capabilitiesBox">
            <div class="container-fluid p-0">
               <div class="d-flex align-items-start capabilitiesBoxBox">
                  <div class="nav tabinationBox flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                         <?php
     if(get_field('market_move')){         
      $markets = get_field('market_move'); 

      $count = 1; 
      $countAlpha = 'abc';

            foreach($markets as $market){ ?>

                     <button class="nav-link <?php if($count == 1){ echo 'active'; } ?>" id="v-pills-tab-<?php echo $countAlpha; ?>" 
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-section-<?php echo $countAlpha; ?>" 
                        type="button" 
                        role="tab" 
                        aria-controls="v-pills-section-<?php echo $countAlpha; ?>"
                        aria-selected="true">
                        <p><?php echo $market['market_text']; ?></p>
                     </button>  
                     
                    <?php $count++; $countAlpha++; } } ?> 
                  </div>
                  
                  <div class="tab-content mainTabsCon" id="v-pills-tabContent">
                     <?php 
                     if(get_field('market_move')){         
                        $markets = get_field('market_move'); 
                        $count = 1;
                        $countAlpha = 'abc';

                        foreach($markets as $market){ ?>
                           <div class="tab-pane fade <?php if($count == 1){ echo 'show active'; } ?>" id="v-pills-section-<?php echo $countAlpha; ?>" role="tabpanel"
                              aria-labelledby="v-pills-tab-<?php echo $countAlpha; ?>">
                              <div class="TabCon">
                                 <div class="tabpic">
                                    <img loading="lazy" width="832" height="1200"
 src="<?php echo $market['market_image']; ?>" alt="image">
                                 </div>
                                 <div class="tabPara">
                                    <div class="tabParaMain">
                                       <h4><?php echo $market['market_text']; ?><span><?php echo $market['market_short_des']; ?></span></h4>
                                       <p><?php echo $market['market_description']; ?></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                     <?php $count++; $countAlpha++; } } ?>                    
                  </div>
               </div>
            </div>
         </div>
       <section class="contactUs p-90">
            <div class="container">
               <div class="row">
                  <?php
                  $contact = get_field('contact',9);
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