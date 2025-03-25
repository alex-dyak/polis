document.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener("click", function (event) {
        // Проверяем, кликнули ли по кастомному пункту
        if (event.target.classList.contains("select__option")) {
            const selectedValue = event.target.getAttribute("data-value");
            const selectElement = event.target.closest(".select__body").previousElementSibling; // Находим скрытый <select>

            if (selectElement) {
                selectElement.value = selectedValue; // Устанавливаем новое значение
                selectElement.dispatchEvent(new Event("change", { bubbles: true })); // Принудительно вызываем событие change
                sendRequest();
            }
        }
    });

    function sendRequest() {
        const vehicleType = document.querySelector("[name='vehicleType']").value;
        const territoryType = document.querySelector("[name='territoryType']").value;
        const period = document.querySelector("[name='period']").value;

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
                } else {
                    document.getElementById("sum1").textContent = "Помилка розрахунку";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById("sum1").textContent = "Помилка зв'язку";
            });
    }
});
