<?php
get_header();

$policyId = get_the_ID(); // ID поста
$idinsurance = get_field('idinsurance', $policyId); // Витягуємо idinsurance з ACF
$status = get_post_meta($policyId, 'status', true); // Статус
$amountinsurance = get_post_meta($policyId, 'amountinsurance', true); 
$confirmationCode = isset($_GET['code']) ? sanitize_text_field($_GET['code']) : ''; // Код підтвердження
$storedCode = get_field('codeinsurance', $policyId); // Код підтвердження з ACF
$certificateUrl = get_field('urlinsurance', $policyId); // URL сертифікату з ACF
$codeinsurance = get_field('codeinsurance', $policyId);
$insurancetype = get_field('insurancetype', $policyId);

echo '<div style="height:50vh; width:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">';

// Додаємо заголовок
echo '<h2>Інформація про ваш поліс</h2>';

if ($confirmationCode === $storedCode && ($insurancetype === 'Green Card' || $insurancetype === 'osago')) {
    if (isset($_GET['code'])) {
        update_post_meta($policyId, 'status', 'confirmed');
        $status = get_post_meta($policyId, 'status', true);
    }
}
if ($confirmationCode && $status === 'draft') {
    // Є код підтвердження і статус 'draft', виконуємо запит на підтвердження поліса
    if ($confirmationCode === $storedCode) {
        echo '<p id="info">Підтвердження поліса виконується...</p>';
        echo '<div id="certificate-container"></div>';
    } else {
        echo '<p>Невірний код підтвердження.</p>';
    }
} elseif ($status === 'confirmed') {
    // Якщо статус 'confirmed', показуємо посилання на поліс
    if ($certificateUrl) {
        echo '<a href="' . esc_url($certificateUrl) . '" class="certificate-link" target="_blank">Переглянути підтверджений поліс</a>'; // Відкриття в новому вікні
        if ($insurancetype === 'Green Card') {
            echo '<p>Електронна версія полісу була надіслана вам на Email.</p>';
        }
        if ($insurancetype === 'osago') {
            echo '<p></p>';
            echo ' <button class="certificate-link" id="send-osago">Отримати поліс на Email.</button>';
        }
    } else {
        echo '<p>Посилання на поліс недоступне.</p>';
    }
} else {
    if ($certificateUrl) {
        echo '<a href="' . esc_url($certificateUrl) . '" class="certificate-link" target="_blank">Переглянути підтверджений поліс</a>'; // Відкриття в новому вікні
    } else {
        echo '<p>Посилання на поліс недоступне.</p>';
    }
    // Статус 'draft' і немає коду підтвердження
    if ($status === 'draft') {
        echo '<div id="liqpay-form-container" style="margin-top:50px;"></div>';
    }
}

echo '<div id="loader" class="loader" style="display:none;"></div>'; // Лоадер
echo '</div>';

?>

<script>
    document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const liqpayFormContainer = document.getElementById('liqpay-form-container');
    const confirmationText = document.querySelector('p'); // Знаходимо елемент з текстом "Підтвердження поліса виконується..."

    // Перевірка наявності параметра 'code' в URL
    const urlParams = new URLSearchParams(window.location.search);
    const confirmationCode = urlParams.get('code');
    const idinsurance = "<?php echo esc_js($idinsurance); ?>";
    const codeinsurance = "<?php echo esc_js($codeinsurance); ?>";
    const status = "<?php echo esc_js($status); ?>";
    const post_Id = "<?php echo esc_js($policyId); ?>"; 
    const cost = "<?php echo esc_js($amountinsurance); ?>"; 
    const policy_Id = "<?php echo esc_js($policyId); ?>"; 
    const title = "<?php echo esc_js(get_the_title($policyId)); ?>";


console.log('confirmationCode',confirmationCode)
    const updateCertificateUrl = (url) => {
        let certificateLink = document.querySelector('.certificate-link'); // Знаходимо елемент посилання

        if (!certificateLink) {
            // Якщо елемент не знайдено, створюємо новий
            certificateLink = document.createElement('a');
            certificateLink.classList.add('certificate-link');
            certificateLink.target = '_blank'; // Відкриваємо посилання у новій вкладці
            certificateLink.textContent = 'Переглянути підтверджений поліс';
            
            const container = document.querySelector('#certificate-container');
            if (container) {
                container.appendChild(certificateLink); // Додаємо посилання до контейнера
            } else {
                console.error('Контейнер для сертифіката не знайдено.');
            }
        }

        certificateLink.href = url; // Оновлюємо URL
        loader.style.display = 'none'; // Ховаємо лоадер
        console.log('URL сертифіката оновлено.');
    };

    function getCertificate() {
        const data = new FormData();
        data.append('action', 'get_policy_certificate');
        data.append('policyId', idinsurance);
        data.append('_ajax_nonce', '<?php echo wp_create_nonce('get_policy_certificate_nonce'); ?>');

        fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(result => {
        console.log('result',result)
            if (result.success && result.data.url) {
                updateCertificateUrl(result.data.url);
                document.getElementById('info').style.display = 'none'; // Приховуємо текст "Підтвердження поліса виконується..."
                loader.style.display = 'none';
            } else {
                alert('Не вдалося отримати сертифікат.');
                loader.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Помилка отримання сертифікату:', error);
            loader.style.display = 'none';
        });
    }

    if (confirmationCode && confirmationCode === codeinsurance && status === "draft") {
        // Параметр 'code' є в URL, виконуємо AJAX-запит для підтвердження поліса
        loader.style.display = 'block'; // Показуємо лоадер
        const data = new FormData();
        data.append('action', 'issue_policy');
        data.append('policyId', idinsurance);
        data.append('confirmationCode', confirmationCode);
        data.append('_ajax_nonce', '<?php echo wp_create_nonce('issue_policy_nonce'); ?>');

        fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(result => {
          
  
  console.error('отримання:', result);
            if (result.success) {
                getCertificate();
            } else {
                alert('Помилка підтвердження: ' + result.data);
                loader.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Помилка підтвердження:', error);
            loader.style.display = 'none';
        });
    } else if (status === "draft") {
        // Генерація форми LiqPay
        const formData = new FormData();
        formData.append('action', 'generate_liqpay_form');
        formData.append('policyId', policy_Id);
        formData.append('policyCost', cost);
        formData.append('description', title);
        formData.append('unicode', codeinsurance);
        formData.append('postId', post_Id);

        fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(formHtml => {
            liqpayFormContainer.innerHTML = formHtml;
        })
        .catch(error => {
            console.error('Помилка при генерації форми LiqPay:', error);
        });
    }

    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    const greenCardCookie = getCookie('greenCard');
    const osagoCookie = getCookie('osago');

    let confirmUrl = '';
    let sendPoliceUrl = '';

    if (greenCardCookie) {
        confirmUrl = '/wp-json/custom/v1/confirm-payment';
        sendPoliceUrl = '/wp-json/custom/v1/send-police';
    } else if (osagoCookie) {
        confirmUrl = '/wp-json/custom/v1/confirm-osago-payment';
        sendPoliceUrl = '';
    } else {
        console.error('Не знайдено відповідних cookies!');
    }


    if (isNumber(confirmationCode) && confirmationCode === codeinsurance && confirmUrl && sendPoliceUrl) {
        fetch(confirmUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ confirmationCode }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                setTimeout(() => {
                    console.log('Waiting 3 sek');
                    fetch(sendPoliceUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ confirmationCode }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 200) {
                                console.log('Police sent');
                            } else {
                                alert('Помилка: ' + (data.message || 'Невідома помилка'));
                            }
                        })
                        .catch(error => {
                            document.getElementById('loader').style.display = 'none';
                            alert('Виникла помилка: ' + error.message);
                        });
                }, 3000);
            } else {
                alert('Помилка: ' + (data.message || 'Невідома помилка'));
            }
        })
        .catch(error => {
            document.getElementById('loader').style.display = 'none';
            alert('Виникла помилка: ' + error.message);
        });
    }
        document.getElementById('send-osago').addEventListener('click', function () {

            fetch('/wp-json/custom/v1/send-osago-police', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ confirmationCode })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Ответ от сервера:', data);
                    if (data.status === 200) {
                        alert('ОСАГО поліс відправлено вам на Email. Перевірте будь ласка');
                    } else {
                        alert('Ошибка: ' + (data.message || 'Что-то пошло не так'));
                    }
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    alert('Ошибка отправки: ' + error.message);
                });
        });

});
</script>

<style>
/* Стилі для заголовка, сертифікату та лоадеру */
h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
}

.certificate-link {
    padding: 10px 20px;
    background-color: #00812A;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    display: inline-block;
}

.certificate-link:hover {
    background-color: #45a049;
}

.loader {
    border: 8px solid #f3f3f3; 
    border-top: 8px solid  #00812A; 
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin-top: 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>