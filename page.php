<?php
get_header();
?>

    <main class="page">
        <div class="property-insurance mb-170">
            <div class="property-insurance__container">
                <div class="property-insurance__content">
                    <div class="property-insurance__header mb-170">
                        <div class="property-insurance__info">
                            <h1 class="h1">
                                <?php the_title();?>
                            </h1>
                            <?php if(get_field('show_phone_number')):?>
                                <p class="subtitle font-size-21">
                                    <?php pll_e('При настанні страхового випадку повідомте нам про це, зателефонувавши за номером:');?>
                                </p>
	                            <?php
	                            $link = get_field('phone', 'options');
	                            if( $link ):
		                            $link_url = $link['url'];
		                            $link_title = $link['title'];
		                            $link_target = $link['target'] ? $link['target'] : '_self';
		                            ?>
                                    <a href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
			                            <?php echo $link_title; ?>
                                    </a>
	                            <?php endif; ?>
                            <?php endif; ?>
                        </div>
                        <div class="property-insurance__image">
                            <?php the_post_thumbnail('full');?>
                        </div>
                    </div>
                    <div class="property-insurance__body post-body">
                        <?php the_content();?>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.property-insurance -->

        <?php get_template_part('template-parts/main/offers');?>
    </main>

<?php
get_footer();
