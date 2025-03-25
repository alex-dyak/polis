jQuery(document).ready(function ($) {
    $('#pay-button').on('click', function (e) {
        e.preventDefault();

        var data = {
            action: 'generate_liqpay_form',
            policyId: '<?php echo $policyId; ?>',
            policyCost: '100.00', // Замініть на актуальну вартість
            description: 'Оплата полісу', // Замініть на опис
            unicode: 'your_unicode', // Замініть на ваш код
            postId: '<?php echo $policyId; ?>',
            nonce: `<?php echo wp_create_nonce('generate_liqpay_form_nonce'); ?>`
        };

        $.post(ajaxurl, data, function (response) {
            if (response.success) {
                $('#liqpay-form-container').html(response.data);
            } else {
                alert('Помилка: ' + response.data);
            }
        });
    });
});
