<?php
function handle_form_submission($request) {
    $message = [];

    $params = $request->get_params();

    if(isset($params["form"])) {
        $form_name = sanitize_text_field($params["form"]);
    } else {
        $form_name = "Новая форма";
    }

    if(isset($params['name'])) {
        $message["Имя"] = sanitize_text_field($params['name']);
    }

    if(isset($params["phone"])) {
	    $params["phone"] = str_replace(' ', '', $params["phone"]);
	    $params["phone"] = str_replace('-', '', $params["phone"]);
	    $params["phone"] = str_replace('(', '', $params["phone"]);
	    $params["phone"] = str_replace(')', '', $params["phone"]);
	    $params["phone"] = urlencode(str_replace("%20", '', $params["phone"]));
        $message["Номер телефона"] = $params['phone'];
    }

    if(isset($params["email"])) {
        $message["Email"] = sanitize_text_field($params['email']);
    }

    if(isset($params["rating_count"])) {
        $message["Рейтинг"] = sanitize_text_field($params['rating_count']);
    }

    if(isset($params["text"])) {
        $message["Текст"] = sanitize_text_field($params['text']);
    }

    $txt = "<b>" . $form_name . "</b> %0A %0A";

    foreach($message as $key => $value) {
        $txt .= "<b>".$key.": </b>".$value."%0A";
    };

    $token = "6816671137:AAGuNB36TgMNpbkKac_4nZoCf_o9PqY3sxM";
    $chatId = "-1002108188064";

    $response = file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chatId}&parse_mode=html&text=$txt");

    $data = json_decode($response);

    if($data->ok) {
        wp_send_json(array("success" => true));
    } else {
        wp_die("error");
    }
}

add_action('rest_api_init', function () {
    register_rest_route( 'api/', '/forms', array(
        'methods'  => 'POST',
        'callback' => 'handle_form_submission',
    ) );
});