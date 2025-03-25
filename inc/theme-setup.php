<?php
function polis_setup() {
    add_theme_support( 'title-tag' );

    add_theme_support( 'post-thumbnails' );

    register_nav_menus(
        array(
            'menu' => esc_html__( 'Primary', 'polis' ),
        )
    );
}
add_action( 'after_setup_theme', 'polis_setup' );