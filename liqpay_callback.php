<?php
// Лінії коду для отримання даних
$data = isset($_POST['data']) ? $_POST['data'] : '';
$signature = isset($_POST['signature']) ? $_POST['signature'] : '';

// Ваші LiqPay ключі
$private_key = 'sandbox_jsFkNJbXfI2ooxS3ccaXY3waE3bVFO6qnTNkhXPU';

// Перевірте, чи підпис вірний
$generated_signature = base64_encode(sha1($private_key . $data . $private_key, true));

if ($signature === $generated_signature) {
    // Декодувати дані
    $decoded_data = json_decode(base64_decode($data), true);

    // Перевірити статус
    if (isset($decoded_data['status']) && $decoded_data['status'] === 'success') {
        $policyId = $decoded_data['order_id'];
        $confirmationCode = isset($decoded_data['transaction_id']) ? $decoded_data['transaction_id'] : ''; // Можливо, вам потрібно використовувати інше поле для коду підтвердження

        // Отримати URL сертифіката через AJAX-запит
        $response = wp_remote_post('https://www.polisa-online.com.ua/wp-admin/admin-ajax.php', array(
            'method'    => 'POST',
            'body'      => array(
                'action'            => 'get_policy_certificate',
                'policyId'          => $policyId,
                'nonce'             => wp_create_nonce('get_policy_certificate_nonce') // Згенеруйте nonce для безпеки
            ),
            'headers'   => array(
                'Content-Type' => 'application/x-www-form-urlencoded'
            )
        ));

        // Перевірка відповіді
        if (is_wp_error($response)) {
            echo 'Error: ' . $response->get_error_message();
        } else {
            $body = wp_remote_retrieve_body($response);
            $data = json_decode($body, true);

            if (isset($data['success']) && $data['success']) {
                $certificateUrl = $data['data']['url']; // Припускаємо, що URL сертифіката є в `data` -> `url`

                // Оновити поліс за допомогою AJAX-запиту
                $update_response = wp_remote_post('https://www.polisa-online.com.ua/wp-admin/admin-ajax.php', array(
                    'method'    => 'POST',
                    'body'      => array(
                        'action'            => 'update_policy_url',
                        'policyId'          => $policyId,
                        'certificateUrl'    => $certificateUrl,
                        'nonce'             => wp_create_nonce('update_policy_nonce') // Згенеруйте nonce для безпеки
                    ),
                    'headers'   => array(
                        'Content-Type' => 'application/x-www-form-urlencoded'
                    )
                ));

                if (is_wp_error($update_response)) {
                    echo 'Error: ' . $update_response->get_error_message();
                } else {
                    echo 'Payment successful and policy updated';
                }
            } else {
                echo 'Failed to get certificate URL';
            }
        }
    } else {
        echo 'Payment failed';
    }
} else {
    echo 'Invalid signature';
}
?>
