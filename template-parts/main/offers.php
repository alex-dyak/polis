<section class="best-offers">
	<div class="best-offers__container">
		<div class="best-offers__content">
			<div class="best-offers__header">
				<h2 class="best-offers__title h2">
					<?php the_field('offer_title', pll_get_post(12));?>
				</h2>
			</div>
			<?php
			$rows = get_field('offers', pll_get_post(12));
			if( $rows ) {
			    echo '<div class="best-offers__list">';
			    foreach( $rows as $row ) {
			        $image = $row['image'];
			        echo '<article class="best-offers__item item">';
						echo '<a href="' . $row['link'] . '">';
			                echo wp_get_attachment_image( $image, [413, 488], false, ['class' => 'item__image'] );
						echo '</a>';
			        echo '</article>';
			    }
			    echo '</div>';
			}
			?>
		</div>
	</div>
</section>
