document.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener("change", function (event) {
        if (event.target.matches("[name='VehicleType'], [name='TerritoryType'], [name='Period']")) {
            sendRequest();
        }
        if (event.target.matches("[name='DVehicleTypeID']")) {
            sendRequestOsago();
        }
    });

    function sendRequest() {
        const vehicleType = document.querySelector("[name='VehicleType']").value;
        const territoryType = document.querySelector("[name='TerritoryType']").value;
        const period = document.querySelector("[name='Period']").value;

        if (!vehicleType || !territoryType || !period) return;

        // Отправка запроса к нашему кастомному API
        fetch('/wp-json/custom/v1/calculate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vehicleType: parseInt(vehicleType),
                territoryType: parseInt(territoryType),
                period: parseInt(period),
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.Success && data.Payment) {
                    document.getElementById("sum1").textContent = `${data.Payment}₴`;
                    document.querySelector("[name='Payment']").value = data.Payment;
                } else {
                    document.getElementById("sum1").textContent = "Помилка розрахунку";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById("sum1").textContent = "Помилка зв'язку";
            });
    }

    function sendRequestOsago() {
        const getValue = (name) => document.querySelector(`[name='${name}']`)?.value || '';

        const k4 = getValue('K4');
        const agentId = getValue('agentId');
        const cityID = getValue('DCityID');
        const periodID = getValue('DPeriodID');
        const franchise = getValue('Franchise');
        const expLimitID = getValue('DExpLimitID');
        const privelegeID = getValue('DPrivelegeID');
        const sphereUseID = getValue('DSphereUseID');
        const vehicleTypeID = getValue('DVehicleTypeID');
        const personStatusID = getValue('DPersonStatusID');
        const citizenStatusID = getValue('DCitizenStatusID');
        const dBonusMalusIDEnum = getValue('dBonusMalusIDEnum');
        const DBonusMalusID = getValue('DBonusMalusID');
        const vehicleUsage = getValue('vehicleUsage');

        fetch('/wp-json/custom/v1/calculate/osago', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                k4,
                agentId,
                DCityID: parseInt(cityID),
                DPeriodID: parseInt(periodID),
                Franchise: parseInt(franchise),
                DExpLimitID: parseInt(expLimitID),
                DPrivelegeID: parseInt(privelegeID),
                DSphereUseID: parseInt(sphereUseID),
                DVehicleTypeID: parseInt(vehicleTypeID),
                DPersonStatusID: parseInt(personStatusID),
                DCitizenStatusID: parseInt(citizenStatusID),
                dBonusMalusIDEnum,
                vehicleUsage,
                DBonusMalusID: parseInt(DBonusMalusID),
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result && data.CmtplPayment) {
                    document.getElementById("sum_osago").textContent = `${data.CmtplPayment}₴`;
                    document.querySelector("[name='Payment_osago']").value = data.CmtplPayment;
                } else {
                    document.getElementById("sum_osago").textContent = "Помилка розрахунку";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById("sum_osago").textContent = "Помилка зв'язку";
            });
    }

});

const form = document.getElementById('greenCardForm');
const formOsago = document.getElementById('oscvForm');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        fetch('/wp-json/custom/v1/register-insurance', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('MainCode').value = data.MainCode;
                    document.getElementById('popupOtpVerification').classList.add('popup_show');

                    const postId = data.post_id;  // Отримуємо ID поста
                    // Виклик сервера для генерації форми LiqPay
                    const formDataLiqPay = new FormData();
                    formDataLiqPay.append('action', 'generate_liqpay_form');
                    formDataLiqPay.append('policyId', data.policyId);
                    formDataLiqPay.append('policyCost', data.policyCost);
                    formDataLiqPay.append('description', data.uniqueTitle);
                    formDataLiqPay.append('unicode', data.uniqueCode);
                    formDataLiqPay.append('postId', postId);  // Додаємо ID поста

                    // Відправка запиту на сервер
                    fetch(ajax_object.ajax_url, {
                        method: 'POST',
                        body: formDataLiqPay
                    })
                        .then(response => response.text())  // Отримання HTML форми
                        .then(formHtml => {
                            document.getElementById('liqpay-form-container').innerHTML = formHtml;
                        })
                        .catch(error => {
                            console.error('Помилка при генерації форми LiqPay:', error);
                        });

                } else {
                    alert('Помилка: ' + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
    });
}

if (formOsago) {
    formOsago.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(formOsago);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        fetch('/wp-json/custom/v1/register-osago-insurance', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('MainCode').value = data.MainCode;
                    document.getElementById('popupOtpVerification').classList.add('popup_show');

                    const postId = data.post_id;  // Отримуємо ID поста
                    // Виклик сервера для генерації форми LiqPay
                    const formDataLiqPay = new FormData();
                    formDataLiqPay.append('action', 'generate_liqpay_form');
                    formDataLiqPay.append('policyId', data.policyId);
                    formDataLiqPay.append('policyCost', data.policyCost);
                    formDataLiqPay.append('description', data.uniqueTitle);
                    formDataLiqPay.append('unicode', data.uniqueCode);
                    formDataLiqPay.append('postId', postId);  // Додаємо ID поста

                    // Відправка запиту на сервер
                    fetch(ajax_object.ajax_url, {
                        method: 'POST',
                        body: formDataLiqPay
                    })
                        .then(response => response.text())  // Отримання HTML форми
                        .then(formHtml => {
                            document.getElementById('liqpay-form-container').innerHTML = formHtml;
                        })
                        .catch(error => {
                            console.error('Помилка при генерації форми LiqPay:', error);
                        });

                } else {
                    alert('Помилка: ' + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
    });
}

document.getElementById('confirmOtp').addEventListener('click', function (e) {
    e.preventDefault();

    const mainCode = document.querySelector('[name="mainCode"]').value;
    const otpCode = document.querySelector('[name="otpCode"]').value;

    if (!mainCode || !otpCode) {
        alert("Введіть код підтвердження!");
        return;
    }

    let url = '';
    if (form) {
        url = '/wp-json/custom/v1/confirm-otp-code';
    } else {
        url = '/wp-json/custom/v1/confirm-osago-otp-code';
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mainCode, otpCode }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                document.getElementById('popupOtpVerification').classList.remove('popup_show');
                document.getElementById('myModal').classList.add('popup_show');
            } else {
                alert('Помилка: ' + (data.message || 'Невідома помилка'));
            }
        })
        .catch(error => {
            document.getElementById('loader').style.display = 'none';
            alert('Виникла помилка: ' + error.message);
        });
});


document.getElementById('closePopupButton').addEventListener('click', function () {
    document.body.focus();
    document.getElementById('popupOtpVerification').classList.remove('popup_show');
    document.getElementById('popupOtpVerification').setAttribute('aria-hidden', 'true');
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const closeButton = modal.querySelector(".close");

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            modal.style.display = "none"; // Скрываем модалку
        });
    }

    // Закрытие при клике вне модального окна
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
