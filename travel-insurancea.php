<?php
/*
 * Template Name: Travel Insurancea
 */
get_header(); ?>

<main class="page">
	<div class="hero-page mb-60">

		<div class="hero-page__content">
			<div class="hero-page__container">
				<div class="hero-page__body">
					<h1 class="hero-page__title h1 psd">
						<?php the_title(); ?>
					</h1>
					
						<?php echo do_shortcode(get_field('form_shortcode'));?>
					
					
				</div>
			</div>
		</div>
	</div>
	
    <div class="insurance-protect__container">
        <div class="insurance-protect__content">
		    <?php the_content();?>
        </div>
    </div>

	<?php if(get_field('form_shortcode') == '[green_card]') { ?>
        <section class="green-card mb-170">
            <div class="green-card__container">
                <div class="green-card__content">
                    <div class="green-card__columns">
                        <div class="green-card__left">
							<?php echo wp_get_attachment_image(get_field('img'), [532, 'full']);?>
                        </div>
                        <div class="green-card__right">
                            <h2 class="h2 mb-30">
								<?php the_field('text_title');?>
                            </h2>
							<?php the_field('content_1');?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	<?php } else { ?>
        <div class="insurance-protect__container">
            <div class="insurance-protect__content">
                <div class="what-can-insured__row">
                    <div class="what-can-insured__left">
                        <h2 class="h2 mb-30">
							<?php the_field('text_title');?>
                        </h2>
						<?php the_field('content_1');?>
                    </div>
                    <div class="what-can-insured__right">
						<?php echo wp_get_attachment_image(get_field('img'), [500, 500]);?>
                    </div>
                </div>
            </div>
        </div>
	<?php } ?>
	<!-- /.travel-packages -->
	<?php if( have_rows('benefits') ): ?>
		<?php while( have_rows('benefits') ): the_row();
			$image = get_sub_field('image');
			?>
			<section class="benefits mb-170">
				<div class="benefits__container">
					<div class="benefits__content">
						<div class="benefits__columns">
                            <div class="benefits__left" <?php if(get_sub_field('lined_list')): echo 'insurance-protect__right'; endif; ?>>
                                <h4 class="h4 benefits__title mb-30">
									<?php the_sub_field('title');?>
                                </h4>
								<?php if(get_sub_field('numbered_list')): ?>
                                <ol>
									<?php elseif(get_sub_field('lined_list')): ?>
                                    <ul>
										<?php else: ?>
                                        <ul class="icon--big">
											<?php endif; ?>
											<?php
											$rows = get_sub_field('list');
											if( $rows ) {
												foreach( $rows as $row ) {
													echo '<li>';
													echo $row['list_element'];
													echo '</li>';
												}
											} ?>

											<?php if(get_sub_field('numbered_list')): ?>
                                </ol>
							<?php else: ?>
                                </ul>
							<?php endif; ?>
                            </div>
							<div class="benefits__right">
								<?php echo wp_get_attachment_image( $image, 'full' ); ?>
							</div>
						</div>
					</div>
				</div>
			</section>
		<?php endwhile; ?>
	<?php endif; ?>
	<!-- /.benefits-packages -->
	<section class="travel-insurance mb-170">
		<div class="travel-insurance__container">
			<div class="travel-insurance__content">
				<div class="travel-insurance__columns">
					<div class="travel-insurance__left">
						<div class="travel-insurance__header">
							<h2 class="h2 mb-25">
								<?php the_field('title');?>
							</h2>
							<?php echo wp_get_attachment_image( get_field('image'), 'full' ); ?>
							<img src="img/svg-images/travel-insurance.svg" width="180" alt="01">
						</div>
						<div class="travel-insurance__text">
							<?php the_field('content');?>
						</div>
					</div>
					<div class="travel-insurance__right">
						<?php echo wp_get_attachment_image( get_field('image'), 'full' ); ?>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php
	$hero = get_field('infographic');
	if( $hero['title'] ): ?>
        <section class="how-to-work mb-170">
            <div class="how-to-work__container">
                <div class="how-to-work__content">
                    <h2 class="h2 mb-30 title-center">
						<?php echo $hero['title'];?>
                    </h2>
                    <div class="how-to-work__body">
                        <div class="how-to-work__row">
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['first_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        1
                                    </span>
                                        <p>
											<?php echo $hero['first_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['third_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        3
                                    </span>
                                        <p>
											<?php echo $hero['third_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="how-to-work__row">
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['second_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        2
                                    </span>
                                        <p>
											<?php echo $hero['second_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['fourth_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        4
                                    </span>
                                        <p>
											<?php echo $hero['fourth_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="how-to-work__row">
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['fifth_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        5
                                    </span>
                                        <p>
											<?php echo $hero['fifth_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="how-to-work__list">
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['first_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        1
                                    </span>
                                        <p>
											<?php echo $hero['first_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['second_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        2
                                    </span>
                                        <p>
											<?php echo $hero['second_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['third_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        3
                                    </span>
                                        <p>
											<?php echo $hero['third_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['fourth_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        4
                                    </span>
                                        <p>
											<?php echo $hero['fourth_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="how-to-work__item item">
                                <div class="item__body">
                                    <div class="item__icon">
										<?php echo wp_get_attachment_image($hero['fifth_block_img'], 'full');?>
                                    </div>
                                    <div class="item__content">
                                    <span>
                                        5
                                    </span>
                                        <p>
											<?php echo $hero['fifth_block_title'];?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	<?php endif; ?>
	<!-- /.travel-insurance -->
	<?php if( have_rows('faq') ): $i = 0;?>
        <section class="questions mb-170">
            <div class="questions__container">
                <div class="questions__content">
                    <h2 class="h2 questions__title mb-45">
						<?php pll_e('Відповіді на найчастіші запитання');?>
                    </h2>
                    <div data-spollers class="questions__spollers spollers spollers-type-1" data-one-spoller>
						<?php while( have_rows('faq') ): the_row();
							?>
                            <details class="spollers__item" <?php if ($i == 0): ?>data-open<?php endif;?>>
                                <summary class="spollers__title">
									<?php the_sub_field('title');?>
                                </summary>
                                <div class="spollers__body">
									<?php the_sub_field('content');?>
                                </div>
                            </details>
							<?php $i++; endwhile; ?>
                    </div>
                </div>
            </div>
        </section>
	<?php endif; ?>
	<!-- /.questions -->
	<!--<?php get_template_part( 'template-parts/main/offers' ); ?>-->
</main>

<?php get_footer(); ?>
