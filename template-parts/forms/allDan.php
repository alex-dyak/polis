<form id="contactForm" class="hero-page__form form-calculate form-calculate-travel">
    <div class="form__line cols-auto person-head-strah dss">
        <div class="form__col col-md">
            <label for="first_name" class="form__label">Ім'я</label>
            <input type="text" id="first_name" name="first_name" required class="input input-border iCountry"
                placeholder="Ваше ім'я">
        </div>
        <div class="form__col col-md">
            <label for="last_name" class="form__label">Прізвище</label>
            <input type="text" id="last_name" name="last_name" required class="input input-border iCountry"
                placeholder="Ваше прізвище">
        </div>
        <div class="form__col col-md">
            <label for="phone" class="form__label">Мобільний телефон</label>
            <input type="tel" id="phone" name="phone" required class="input input-border iCountry"
                placeholder="+380XXXXXXXXX">
        </div>
        <div class="form__col col-md">
            <label for="email" class="form__label">Електронна пошта</label>
            <input type="email" id="email" name="email" required class="input input-border iCountry"
                placeholder="example@gmail.com">
        </div>
        <input type="hidden" id="email_theme" name="email_theme" value="<?php the_field('email_theme'); ?>">
        <div class="form__row" style="align-self: end">
            <button type="button" id="submitForm" class="form__button button button-green">Замовити дзвінок</button>
        </div>
    </div>
</form>

<!-- Модальне вікно -->
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p id="modal-message"></p>
    </div>
</div>

<style>
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background: white;
        padding: 20px;
        margin: 10% auto;
        width: 50%;
        border-radius: 10px;
        text-align: center;
    }

    .close {
        float: right;
        font-size: 24px;
        cursor: pointer;
    }
</style>

<script>
    document.getElementById('submitForm').addEventListener('click', function () {
        let form = document.getElementById('contactForm');
        let formData = new FormData();

        formData.append('first_name', document.getElementById('first_name').value);
        formData.append('last_name', document.getElementById('last_name').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('email', document.getElementById('email').value);
          formData.append('email_theme', document.getElementById('email_theme').value);
        formData.append('action', 'send_contact_form');

        fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                const modal = document.getElementById("modal");
                const modalMessage = document.getElementById("modal-message");

                if (data.success) {
                    modalMessage.innerHTML = `<p style="color: green;">${data.data}</p>`;
                    form.reset();
                } else {
                    modalMessage.innerHTML = `<p style="color: red;">${data.data}</p>`;
                }

                modal.style.display = "block";
            })
            .catch(error => {
                console.error('Помилка:', error);
                document.getElementById("modal-message").innerHTML = '<p style="color: red;">Сталася помилка. Спробуйте ще раз.</p>';
                document.getElementById("modal").style.display = "block";
            });
    });

    document.querySelector(".close").addEventListener("click", function () {
        document.getElementById("modal").style.display = "none";
    });

    window.onclick = function (event) {
        let modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
</script>