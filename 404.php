<?php
get_header();
?>

    <main class="page">
        <div class="error-page">
            <div class="error-page__container">
                <div class="error-page__content">
                    <div class="error-page__image">
                        <img src="<?php echo get_template_directory_uri();?>/img/404.png" alt="01">
                    </div>
                    <div class="error-page__info">
                        <h1>
                            404
                        </h1>
                        <span><?php pll_e('Помилка');?></span>
                        <p>
                            <?php pll_e('Сторінку, яку ви шукаєте, не знайдено');?>
                        </p>
                        <a href="<?php echo pll_home_url();?>" class="button button-green"><?php pll_e('На головну');?></a>
                    </div>
                </div>
            </div>
        </div>
    </main>

<?php
get_footer();
