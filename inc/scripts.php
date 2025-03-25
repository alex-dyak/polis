<?php
function polis_scripts() {
    wp_enqueue_style( 'polis-main', get_template_directory_uri() . '/css/style.css', array(), _S_VERSION );
    wp_enqueue_style( 'polis-style', get_stylesheet_uri(), array(), _S_VERSION );

    wp_enqueue_script( 'imask-js', 'https://cdnjs.cloudflare.com/ajax/libs/imask/7.1.3/imask.min.js', array(), _S_VERSION, true );
    wp_enqueue_script( 'polis-app', get_template_directory_uri() . '/js/app.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'polis-forms', get_template_directory_uri() . '/js/forms.js', array(), _S_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'polis_scripts' );