<?php
/*
*Template Name: Team
*/
get_header();
?>

<main class="main-content">
  <div class="teamdev">
    <div class="container">
      <div class="row">
        <?php
        if (get_field('team')) {
          $team = get_field('team');
          $countAlpha = 'abc';
		 
          foreach ($team as $teams) { ?>
            <div class="col-lg-4">
              <div class="teamList">
                <div class="teamImg">
                  <img loading="lazy" width="326" height="327" src="<?php echo $teams['team_image']; ?>" alt="image" />
                </div>
                <div class="teamDetails">
                  <h2><?php echo $teams['team_heading']; ?></h2>
                  <div class="collapse" id="collapseExample<?php echo $countAlpha; ?>">
                    <div class="card card-body">
                      <?php echo $teams['team_drop_description']; ?>
                    </div>
                  </div>
                  <div id="fold" class="fold">
                    <a id="fold_p" class="link fold_p" data-bs-toggle="collapse" href="#collapseExample<?php echo $countAlpha; ?>" role="button" aria-expanded="false" aria-controls="collapseExample">read more <span class="rotateAni">&#43;</span></a>
                  </div>
                </div>

              </div>

            </div>
        <?php $countAlpha++;
          }
        } ?>
      </div>
    </div>
  </div>
  </div>
  <section class="contactUs p-90">
    <div class="container">
      <div class="row">
        <?php
        $contact = get_field('contact', 11);
        if ($contact) : ?>
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
