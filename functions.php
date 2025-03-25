<?php
/**
 * polis functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package polis
 */

if ( ! defined( '_S_VERSION' ) ) {
	define( '_S_VERSION', '1.0.0' );
}

require 'inc/theme-setup.php';

require 'inc/scripts.php';

require 'inc/allow-svg.php';

require 'inc/string-translations.php';

require 'inc/options-page.php';

require 'inc/menus.php';

require 'inc/widgets.php';

require 'inc/handlers.php';

function form_oscv() {
	return get_template_part('template-parts/forms/oscv');
}

add_shortcode('oscv', 'form_oscv');

function form_travela() {
	return get_template_part('template-parts/forms/travela');
}

add_shortcode('travela', 'form_travela');
function form_allDan() {
	return get_template_part('template-parts/forms/allDan');
}

add_shortcode('allDan', 'form_allDan');
function form_greenCard() {
	return get_template_part('template-parts/forms/green_card');
}

add_shortcode('green_card', 'form_greenCard');

function form_travel() {
	return get_template_part('template-parts/forms/travel');
}

add_shortcode('travel', 'form_travel');

function form_kasko() {
	return get_template_part('template-parts/forms/kasko');
}

add_shortcode('kasko', 'form_kasko');

function enqueue_jquery_ui() {
    wp_enqueue_script('jquery-ui-autocomplete');
    wp_enqueue_style('jquery-ui-css', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
}
add_action('wp_enqueue_scripts', 'enqueue_jquery_ui');

function enqueue_custom_autocomplete_script() {
    wp_enqueue_script('custom-autocomplete', get_template_directory_uri() . '/js/custom-autocomplete.js', array('jquery', 'jquery-ui-autocomplete'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_autocomplete_script');


function enqueue_custom_script() {
    if (is_page_template('travel-insurancea.php')) { // Замість 'template-custom.php' вкажіть ваш шаблон сторінки
        wp_enqueue_script('custom-travel-js', get_template_directory_uri() . '/js/custom-travel.js', array('jquery'), null, true);
  
$bearer_token = get_api_token(); 
        wp_localize_script('custom-travel-js', 'ajax_object', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'calculate_package_nonce' => wp_create_nonce('calculate_package_nonce'),
            'get_policy_certificate_nonce' => wp_create_nonce('get_policy_certificate_nonce'), // Додаємо новий nonce
            'create_policy_draft_nonce' => wp_create_nonce('create_policy_draft_nonce'), // Додаємо новий nonce для create_policy_draft
            'issue_policy_nonce' => wp_create_nonce('issue_policy_nonce'), // Додаємо новий nonce для create_policy_draft
            'send_policy_certificate_nonce'=> wp_create_nonce('send_policy_certificate_nonce'),
            'create_insurance_post_nonce' => wp_create_nonce('create_insurance_post_nonce'),
          
            'bearer_token' => $bearer_token  
        ));
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_script');


function get_api_token() {
    // API-ендпоінт для отримання токена
    $url = 'https://api.reins.pp.ua/User/Login';

    // Отримання даних з змінних середовища або інших джерел
    $username = "project@3dway.com.ua";
    $password = "3478PLql";
    $key = "069af";

    // Побудова заголовка авторизації
    $auth_header = 'Basic ' . base64_encode($username . ':' . $password);

    // Виконання запиту з заголовками
    $response = wp_remote_post($url, array(
        'headers' => array(
            'Authorization' => $auth_header,
            'key' => $key,
            'Content-Type' => 'application/json'
        ),
        'timeout' => 25
    ));

    // Обробка відповіді та повернення результату
    if (is_wp_error($response)) {
        $error_message = $response->get_error_message();
        return 'Something went wrong: ' . $error_message;
    }

    $response_body = wp_remote_retrieve_body($response);
    $response_data = json_decode($response_body, true);

    // Дебагінг: виведення інформації про відповідь


    if (isset($response_data['Bearer'])) {
        return $response_data['Bearer'];
    } else {
        return $response_body;
    }
}
function calculate_package($data) {
    $bearer_token = get_api_token();
    if (!$bearer_token) {
        return array('error' => 'Unable to obtain API token');
    }

    $url = 'https://api.reins.pp.ua/Package/Calculate';

    
   
    $packageIds = sanitize_text_field($data['PackageIds']);
    $regionCode= sanitize_text_field($data['ClientCountryCode']);
    $start_date = sanitize_text_field($data['DateFrom']);
    $end_date = sanitize_text_field($data['DateTo']);
    $amount = sanitize_text_field($data['TravelData']['Amount']);
    $currency = sanitize_text_field($data['TravelData']['Currency']);
    $is_policyholder_insured = $data['IsPolicyholderInsured'];
    $client_ip = $_SERVER['REMOTE_ADDR'];  // Потрібно отримати IP клієнта

    // Побудова запиту
    $request_data = array(
        "PackageIds" => array($packageIds),
       "RegionCode" => $regionCode,
        "DateFrom" => $start_date,
        "DateTo" => $end_date,
        "IsPolicyholderInsured" => $is_policyholder_insured,
        "ClientCountryCode" => "UA",
        "ClientIp" => $client_ip,
        "Insureds" => $data['Insureds']
    );

    if ($amount != 0) {
        $request_data["TravelData"] = array(
            "Amount" => $amount,
            "Currency" => $currency
        );
    }
    // Логування даних, що відправляються
    error_log('Request data: ' . json_encode($request_data));

    $response = wp_remote_post($url, array(
        'headers' => array(
            'Authorization' => 'Bearer ' . $bearer_token,
            'Content-Type' => 'application/json'
        ),
        'body' => json_encode($request_data),
        'timeout' => 15 
    ));

    if (is_wp_error($response)) {
        $error_message = $response->get_error_message();
        error_log('Error in API request: ' . $error_message);
        return array('error' => $error_message);
    }

    // Отримання та обробка відповіді
    $response_body = wp_remote_retrieve_body($response);
    $response_data = json_decode($response_body, true);

    // Логування відповіді
    error_log('HTTP Code: ' . wp_remote_retrieve_response_code($response));
    error_log('Response body: ' . $response_body);
    //   return $request_data;
    return $response_data;
}

add_action('wp_ajax_calculate_package', 'ajax_calculate_package');
add_action('wp_ajax_nopriv_calculate_package', 'ajax_calculate_package');

function ajax_calculate_package() {
    check_ajax_referer('calculate_package_nonce'); // Перевірка nonce

    // Перевірка обов'язкових даних
    $required_fields = ['DateFrom', 'DateTo', 'IsPolicyholderInsured', 'Insureds','PackageIds'];
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field])) {
            wp_send_json_error('Необхідні дані не передані.');
        }
    }

    // Отримуємо дані з POST-запиту і санітізуємо їх
    $data = [
        'PackageIds'=> sanitize_text_field($_POST['PackageIds']),
        'DateFrom' => sanitize_text_field($_POST['DateFrom']),
        'DateTo' => sanitize_text_field($_POST['DateTo']),
        'TravelData' => [
            'Amount' => sanitize_text_field($_POST['TravelData']['Amount']),
            'Currency' => sanitize_text_field($_POST['TravelData']['Currency']),
        ],
        'IsPolicyholderInsured' => $_POST['IsPolicyholderInsured'] === 'true' ? true : false,
        'ClientCountryCode' => sanitize_text_field($_POST['ClientCountryCode']),
        'Insureds' => $_POST['Insureds'],
        // Додайте інші дані, які ви хочете передати до вашої функції calculate_package
    ];

    // Викликаємо функцію calculate_package для обробки даних
    $result = calculate_package($data);

    // Перевіряємо наявність помилки під час виклику calculate_package
    if (isset($result['error'])) {
        wp_send_json_error($result['error']);
    }

    // Відсилаємо успішну відповідь разом із результатом
    wp_send_json_success( $result);
}

// function create_policy_draft($data) {
//     $bearer_token = get_api_token();
//     if (!$bearer_token) {
//         return array('error' => 'Unable to obtain API token');
//     }

//     $url = 'https://dev-1-api.reins.pp.ua/Policy/Draft';

//     $response = wp_remote_post($url, array(
//         'headers' => array(
//             'Authorization' => 'Bearer ' . $bearer_token,
//             'Content-Type' => 'application/json'
//         ),
//         'body' => json_encode($data),
//         'timeout' => 25
//     ));

//     if (is_wp_error($response)) {
//         $error_message = $response->get_error_message();
//         return array('error' => $error_message);
//     }

//     $response_body = wp_remote_retrieve_body($response);
//     $response_data = json_decode($response_body, true);

//     return $response_data;

// }

function create_policy_draft($data) {
    // Перевірка та заміна Insureds, якщо воно дорівнює порожньому рядку "[]"
    if (isset($data['Insureds']) && $data['Insureds'] === "[]") {
        $data['Insureds'] = [];
    }

    $bearer_token = get_api_token();
    if (!$bearer_token) {
        return array('error' => 'Unable to obtain API token');
    }

    $url = 'https://api.reins.pp.ua/Policy/Draft';

    $response = wp_remote_post($url, array(
        'headers' => array(
            'Authorization' => 'Bearer ' . $bearer_token,
            'Content-Type' => 'application/json'
        ),
        'body' => json_encode($data),
        'timeout' => 25
    ));

    if (is_wp_error($response)) {
        $error_message = $response->get_error_message();
        return array('error' => $error_message);
    }

    $response_body = wp_remote_retrieve_body($response);
    $response_data = json_decode($response_body, true);

    return $response_data;
}

 
  add_action('wp_ajax_create_policy_draft', 'ajax_create_policy_draft');
add_action('wp_ajax_nopriv_create_policy_draft', 'ajax_create_policy_draft');

function ajax_create_policy_draft() {
    check_ajax_referer('create_policy_draft_nonce');

    $required_fields = ['PackageId', 'RegionCode', 'Policyholder', 'Insureds', 'DateFrom', 'DateTo', 'IsPolicyholderInsured'];
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field])) {
            wp_send_json_error('Необхідні дані не передані.');
        }
    }

    $data = [
        'PackageId' => sanitize_text_field($_POST['PackageId']),
        'RegionCode' => sanitize_text_field($_POST['RegionCode']),
        'Policyholder' => $_POST['Policyholder'],
        'Insureds' => $_POST['Insureds'],
        'DateFrom' => sanitize_text_field($_POST['DateFrom']),
        'DateTo' => sanitize_text_field($_POST['DateTo']),
        'IsPolicyholderInsured' => $_POST['IsPolicyholderInsured'] === 'true' ? true : false,
        'ClientCountryCode' => sanitize_text_field($_POST['ClientCountryCode']),
        'ClientIp' => $_SERVER['REMOTE_ADDR']
    ];

    if (!empty($_POST['TravelData'])) {
        $data['TravelData'] = $_POST['TravelData'];
    }

    $result = create_policy_draft($data);

    if (isset($result['error'])) {
        wp_send_json_error($result['error']);
    }


    wp_send_json_success($result);
}



add_action('wp_ajax_create_insurance_post', 'create_insurance_post');
add_action('wp_ajax_nopriv_create_insurance_post', 'create_insurance_post');

function create_insurance_post() {
    check_ajax_referer('create_insurance_post_nonce', 'nonce');

    // Перевірка необхідних полів
    $required_fields = ['policyId','title', 'emailinsurance', 'nameinsurance', 'codeinsurance', 'amountinsurance', 'phoneinsurance', 'urlinsurance', 'datainsurance'];
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field])) {
            wp_send_json_error('Необхідні дані не передані: ' . sanitize_text_field($field));
        }
    }

    // Додаємо пост
    $post_id = wp_insert_post([
        'post_title' => sanitize_text_field($_POST['title']),
        'post_type' => 'insurance',
        'post_status' => 'publish'
    ]);

    if (is_wp_error($post_id)) {
        wp_send_json_error('Не вдалося створити запис у базі даних.');
    }

    // Оновлюємо ACF поля
    update_field('emailinsurance', sanitize_email($_POST['emailinsurance']), $post_id);
    update_field('nameinsurance', sanitize_text_field($_POST['nameinsurance']), $post_id);
    update_field('codeinsurance', sanitize_text_field($_POST['codeinsurance']), $post_id);
    update_field('amountinsurance', sanitize_text_field($_POST['amountinsurance']), $post_id);
    update_field('phoneinsurance', sanitize_text_field($_POST['phoneinsurance']), $post_id);
    update_field('urlinsurance', esc_url_raw($_POST['urlinsurance']), $post_id);
    update_field('datainsurance', sanitize_text_field($_POST['datainsurance']), $post_id);
    update_field('idinsurance', sanitize_text_field($_POST['policyId']), $post_id);
   update_field('status', "draft", $post_id);
    // Формуємо URL для сторінки з записом
    $post_url = get_permalink($post_id);

    wp_send_json_success([
        'post_id' => $post_id,
        'post_url' => $post_url // Додаємо URL сторінки до відповіді
    ]);
}



function register_insurance_post_type()
{
    $labels = array(
        'name' => 'Страхові',
        'singular_name' => 'Страхова',
        'add_new' => 'Додати нову',
        'add_new_item' => 'Додати нову страхову',
        'edit_item' => 'Редагувати страхову',
        'new_item' => 'Нова страхова',
        'all_items' => 'Всі страхові',
        'view_item' => 'Переглянути страхову',
        'search_items' => 'Шукати страхові',
        'not_found' => 'Не знайдено',
        'not_found_in_trash' => 'Не знайдено у кошику',
        'menu_name' => 'Страхові'
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
        'capability_type' => 'post',
        'rewrite' => array('slug' => 'insurance'),
        'show_in_menu' => true,
        'show_in_rest' => true,
    );

    register_post_type('insurance', $args);
}
add_action('init', 'register_insurance_post_type');


 
 



function get_policy_certificate($policyId) {
    $bearer_token = get_api_token();
    if (!$bearer_token) {
        return array('error' => 'Unable to obtain API token');
    }

    $url = "https://api.reins.pp.ua/Policy/Certificate/{$policyId}";

    // Виконання запиту
    $response = wp_remote_get($url, array(
        'headers' => array(
            'Authorization' => 'Bearer ' . $bearer_token,
            'Content-Type' => 'application/json'
        ),
        'timeout' => 25
    ));

    if (is_wp_error($response)) {
        $error_message = $response->get_error_message();
        return array('error' => $error_message);
    }

    // Отримання та обробка відповіді
    $response_body = wp_remote_retrieve_body($response);

    // Перевірка статусу відповіді
    $http_code = wp_remote_retrieve_response_code($response);
    if ($http_code !== 200) {
        return array('error' => 'Failed to fetch certificate. HTTP code: ' . $http_code);
    }

    // Збереження відповіді на сервері як файл PDF
    $upload_dir = wp_upload_dir();
    $file_path = $upload_dir['path'] . '/' . $policyId . '.pdf';
    $file_url = $upload_dir['url'] . '/' . $policyId . '.pdf';

    // Запис файлу
    file_put_contents($file_path, $response_body);

    // Повернення URL до файлу
    return array('url' => $file_url);
}

add_action('wp_ajax_get_policy_certificate', 'ajax_get_policy_certificate');
add_action('wp_ajax_nopriv_get_policy_certificate', 'ajax_get_policy_certificate');

function ajax_get_policy_certificate() {
    check_ajax_referer('get_policy_certificate_nonce'); // Перевірка nonce

    if (!isset($_POST['policyId'])) {
        wp_send_json_error('Policy ID is required.');
    }

    $policyId = sanitize_text_field($_POST['policyId']);

    // Виклик функції для отримання сертифіката
    $result = get_policy_certificate($policyId);

    // Перевірка на наявність помилки
    if (isset($result['error'])) {
        wp_send_json_error($result['error']);
    }

    // Відсилання успішної відповіді разом із URL
    wp_send_json_success($result); // Відправляємо увесь результат, де міститься 'url'
}

function issue_policy($policyId, $confirmationCode) {
    $bearer_token = get_api_token();
    if (!$bearer_token) {
        return array('error' => 'Unable to obtain API token');
    }

    $url = "https://api.reins.pp.ua/Policy/Issue/{$policyId}?confirmationCode={$confirmationCode}";

    $response = wp_remote_post($url, array(
        'headers' => array(
            'Authorization' => 'Bearer ' . $bearer_token,
            'Content-Type' => 'application/json'
        ),
        'timeout' => 25
    ));

    if (is_wp_error($response)) {
        $error_message = $response->get_error_message();
        return array('error' => $error_message);
    }

    $response_body = wp_remote_retrieve_body($response);
    $response_data = json_decode($response_body, true);

    return $response_data;
}

add_action('wp_ajax_update_policy_url', 'ajax_update_policy_url');
add_action('wp_ajax_nopriv_update_policy_url', 'ajax_update_policy_url');

function ajax_update_policy_url() {
    if (!isset($_POST['policyId']) || !isset($_POST['certificateUrl'])) {
        wp_send_json_error('Policy ID and certificate URL are required.');
    }

    $policyId = sanitize_text_field($_POST['policyId']);
    $certificateUrl = esc_url($_POST['certificateUrl']);
     $status = "confirm";

    // Оновлюємо поле з URL в ACF
   $url_updated = update_field('urlinsurance', $certificateUrl, $policyId);
    $status_updated = update_field('status',$status , $policyId);


    wp_send_json_success('URL сертифіката оновлено.');
}



add_action('wp_ajax_issue_policy', 'ajax_issue_policy');
add_action('wp_ajax_nopriv_issue_policy', 'ajax_issue_policy');

function ajax_issue_policy() {
    check_ajax_referer('issue_policy_nonce');

    if (!isset($_POST['policyId']) || !isset($_POST['confirmationCode'])) {
        wp_send_json_error('Policy ID and confirmation code are required.');
    }

    $policyId = sanitize_text_field($_POST['policyId']);
    $confirmationCode = sanitize_text_field($_POST['confirmationCode']);

    $result = issue_policy($policyId, $confirmationCode);

    if (isset($result['error'])) {
        wp_send_json_error($result['error']);
    }

    wp_send_json_success($result['data']);
}





add_action('wp_ajax_generate_liqpay_form', 'generate_liqpay_form');
add_action('wp_ajax_nopriv_generate_liqpay_form', 'generate_liqpay_form');

function generate_liqpay_form() {
  

    $policyId = sanitize_text_field($_POST['policyId']);
    $policyCost = floatval($_POST['policyCost']);
    $description = sanitize_text_field($_POST['description']);
   $code = sanitize_text_field($_POST['unicode']);
    $postId = sanitize_text_field($_POST['postId']);

    // Отримайте URL сторінки запису
 $postUrl = get_permalink($postId);

// URL для повернення після успішної оплати (з кодом)
//$resultUrlSuccess = add_query_arg('code', $code, $postUrl); 

$resultUrlSuccess = $postUrl . '?code=' . urlencode($code);
// URL для повернення після неуспішної оплати (без коду)
  $serverUrl = add_query_arg('action', 'liqpay_server_callback', admin_url('admin-ajax.php'));


    // URL для повернення після неуспішної оплати
  // Без параметра коду

    // Ключі LiqPay
     //$public_key = 'sandbox_i80975834494';
    // $private_key = 'sandbox_jsFkNJbXfI2ooxS3ccaXY3waE3bVFO6qnTNkhXPU';

  $public_key = 'i42941500815';
   $private_key = 'N9EZTC08Aeub5tz6BEpqQkKyLbfyE41uTgSZh06i';


    // Дані для LiqPay
    $data = base64_encode(json_encode([
        'public_key' => $public_key,
        'version' => '3',
        'action' => 'pay',
        'amount' => $policyCost,
        'currency' => 'UAH',
        'description' => $description,
        'order_id' => $policyId,
        'sandbox' => '1',
        'result_url' => $resultUrlSuccess,  // URL для успішної оплати
        'server_url' => $serverUrl   // URL для неуспішної оплати
    ]));
    
    // Створення підпису
    $signature = base64_encode(sha1($private_key . $data . $private_key, true));

    // Генерація HTML форми для LiqPay
    $form = '
        <form method="POST" action="https://www.liqpay.ua/api/3/checkout">
            <input type="hidden" name="data" value="' . esc_attr($data) . '" />
            <input type="hidden" name="signature" value="' . esc_attr($signature) . '" />
          <input type="image" src="//static.liqpay.ua/buttons/payUk.png" alt="Оплатити через LiqPay" />
        </form>
    ';

    // Вивести форму як відповідь
    echo $form;
    wp_die();
}
function enqueue_insurance_scripts() {
    if (is_singular('insurance')) {
        wp_enqueue_script('insurance-script', get_template_directory_uri() . '/js/insurance.js', array('jquery'), null, true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_insurance_scripts');
// Реєстрація обробки AJAX

function send_contact_form()
{
    if (!isset($_POST["first_name"], $_POST["last_name"], $_POST["phone"], $_POST["email"])) {
        wp_send_json_error("Будь ласка, заповніть всі поля.");
    }

    $first_name = sanitize_text_field($_POST["first_name"]);
    $last_name = sanitize_text_field($_POST["last_name"]);
    $phone = sanitize_text_field($_POST["phone"]);
    $email = sanitize_email($_POST["email"]);
    $email_theme = trim($_POST["email_theme"] ?? "Нова заявка з сайту1");
    if (empty($first_name) || empty($last_name) || empty($phone) || empty($email)) {
        wp_send_json_error("Будь ласка, заповніть всі поля.");
    }

    // Отримуємо email із ACF або задаємо дефолтний
    $to = get_field("contact_form_email", "Options") ;

    $subject = $email_theme;
    $message = "Ім'я: $first_name\nПрізвище: $last_name\nТелефон: $phone\nEmail: $email";
    $headers = ["Content-Type: text/plain; charset=UTF-8"];

    if (wp_mail($to, $subject, $message, $headers)) {
        wp_send_json_success("Дані відправлено успішно!");
    } else {
        wp_send_json_error("Помилка відправки. Спробуйте ще раз.");
    }
}
add_action("wp_ajax_send_contact_form", "send_contact_form");
add_action("wp_ajax_nopriv_send_contact_form", "send_contact_form");
