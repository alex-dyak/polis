<?php
function custom_register_footer_widgets() {
	register_sidebar(array(
		'name' => 'Footer Column 1',
		'id' => 'footer-col-1',
		'description' => 'Перший стовпчик у футері',
		'before_widget' => '<div id="%1$s" class="center-footer__col %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<p class="widget-title">',
		'after_title' => '</p>',
	));
	register_sidebar(array(
		'name' => 'Footer Column 2',
		'id' => 'footer-col-2',
		'description' => 'Другий стовпчик у футері',
		'before_widget' => '<div id="%1$s" class="center-footer__col %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<p class="widget-title">',
		'after_title' => '</p>',
	));
	register_sidebar(array(
		'name' => 'Footer Column 3',
		'id' => 'footer-col-3',
		'description' => 'Третій стовпчик у футері',
		'before_widget' => '<div id="%1$s" class="center-footer__col %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<p class="widget-title">',
		'after_title' => '</p>',
	));
	register_sidebar(array(
		'name' => 'Footer Column 4',
		'id' => 'footer-col-4',
		'description' => 'Четвертий стовпчик у футері',
		'before_widget' => '<div id="%1$s" class="center-footer__col %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<p class="widget-title">',
		'after_title' => '</p>',
	));
}

add_action('widgets_init', 'custom_register_footer_widgets');