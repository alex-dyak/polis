
document.addEventListener('DOMContentLoaded', function () {

    pakets = [
        {
            "назва": "Скасування подорожі Європа",
            "id": "60ca4393-9c79-4bc5-9071-7952d40542eb",
            "PV": "19005"
        },
        {
            "назва": "Повне покриття Україна",
            "id": "1638daf2-3cb3-4752-997d-b033a2bcec20",
            "PV": "10007"
        },

        {
            "назва": "Активний туризм Україна",
            "id": "b8625a3c-b05b-4b8b-8dc4-186bd33af9f4",
            "PV": "10005"
        },
        {
            "назва": "Стандарт Україна",
            "id": "dc2d075b-f768-48da-b9c9-d84b6d59dce7",
            "PV": "10003"
        },

        {
            "назва": "Економ Україна",
            "id": "de09d139-a747-46b0-8967-29d6d98be73c",
            "PV": '10001'
        },
        {
            "назва": "Скасування подорожі Світ",
            "id": "501bc357-c12b-4654-b974-f0366cfd79ba",
            "PV": "19305"
        },
        {
            "назва": "Повне покриття Світ",
            "id": "20109d99-df2f-47ec-ab4b-493381101935",
            "PV": "10108"
        },
        {
            "назва": "Бізнес Світ",
            "id": "f5d21c97-475c-419c-97ed-58fd0ea54b74",
            "PV": "11102"
        },
        {
            "назва": "Активний туризм Світ",
            "id": "24398119-3eb6-4b58-8413-e7d92e5de26f",
            "PV": "10106"
        },
        {
            "назва": "Стандарт Світ",
            "id": "0f0a3583-5b9c-412e-a25c-2855e539d2c7",
            "PV": '10104'
        },

        {
            "назва": "Економ Світ",
            "id": "c505ef68-a014-466c-a535-5fffe3854e88",
            "PV": '10102'
        },
        {
            "назва": "Економ Європа",
            "id": "48883a41-76c1-4a9d-9d5c-6b10e04122ff",
            "PV": "10101"
        },
        {
            "назва": "Стандарт Європа",
            "id": "4b1a563f-7d1c-46a2-9a6b-eaca68e63c00",
            "PV": '10103'

        },
        {
            "назва": "Активний туризм Європа",
            "id": "c9e4dc99-2936-41c5-a9b2-4e078284a482",
            "PV": "10105"
        },
        {
            "назва": "Повне покриття Європа",
            "id": "8804ca1b-7daf-4f8b-aaad-1a063e0e8d1e",
            "PV": '10107'
        },


        {
            "назва": "Бізнес Європа",
            "id": "afbe7d9e-de54-4e9e-9320-80d0087a5b7c",
            "PV": '11101'
        }



    ]


    const minDate = 0;
    let mode = "single";
    const countryId = document.getElementById('country');
    const endDate = document.getElementById('end_date1');
    const startDate = document.getElementById('start_date1');
    startDate.addEventListener("change", function (event) {
        // endDate.min = event.target.value
        const startDateValue = new Date(event.target.value); // Отримуємо вибрану дату
    startDateValue.setDate(startDateValue.getDate() + 3); // Додаємо 3 дні до вибраної дати
    endDate.min = startDateValue.toISOString().split('T')[0];
    })



    window.updateSummary = function () {

        const country = countryId.value;
        const countryCode = countryId.getAttribute("data-continent")
        const startDate = document.getElementById('start_date1').value;
        const endDate = document.getElementById('end_date1').value;
        const quantity = document.getElementById('quantity').value;

        let personDetails = '';
        const personForms = document.querySelectorAll('.person_cont');
        personForms.forEach((form, index) => {
            const firstName = form.querySelector('[name^="first_name"]').value.toUpperCase();
            const lastName = form.querySelector('[name^="last_name"]').value.toUpperCase();
            const birthDate = form.querySelector('[name^="birth_date"]').value;
            personDetails += `${index + 1} ${firstName} ${lastName} ${birthDate}<br>`;
        });

        // Замініть на фактичне значення
        const insurerFirstName = document.getElementById('first_name').value.toUpperCase();
        const insurerLastName = document.getElementById('last_name').value.toUpperCase();
        const insurerBirthDate = document.getElementById('birth_date').value;
        const insurerDetails = `${insurerFirstName} ${insurerLastName}, ${insurerBirthDate}`;

        // Розрахунок кількості днів, перевірка на коректність введених дат
        let days = '';
        if (startDate && endDate) {
            days = calculateDays(startDate, endDate);
        } else {
            days = 'Дата не вказана';
        }



        // Перевірка наявності значення в полі витрат
        const amountField = document.getElementById('amount');
        amountField.addEventListener('change', function (event) {
            if (event.target.value) {
                formData1.TravelData = { Amount: event.target.value, "Currency": "UAH" }
                calculate();
            } else {
                delete formData1.TravelData;
                calculate();
            }

        })
        const tripCancellation = amountField.value ? 'Включена у вартість' : 'Не включена у вартість';

        formData1.DateFrom = startDate;
        formData1.ClientCountryCode = countryCode;
        formData1.DateTo = endDate;

        formData1.DateTo = endDate;
        console.log('formData :>> ', formData1);

        const summary = `
            <p><span>Країна призначення:</span> ${country}</p>
            <p><span>Дати поїздки:</span> ${startDate} — ${endDate} (${days})</p>
            <p><span>Страхувальник:</span> ${insurerDetails}</p>
            <p><span>Застрахованих:</span></p>
            <p>${personDetails}</p>
            <p><span>Страхова програма:</span> ${insuranceProgram}</p>
            <p><span>Відміна поїздки:</span> ${tripCancellation}</p>
        `;

        document.getElementById('sum_data').innerHTML = summary;
        calculate();
    }
    window.insuranceProgram = '';
    window.insuders
    window.formData1 = {
        "PackageIds": [
            ""
        ],
        "DateFrom": "",
        "DateTo": "",
        "TravelData": {
            "Amount": 0,
            "Currency": "UAH"
        },
        "IsPolicyholderInsured": true,
        "ClientCountryCode": "",

        "Insureds": [

        ]
    }
    function adjustColspan() {
        const tables = document.querySelectorAll('.tariffTable');
        const isNarrowScreen = window.innerWidth <= 835;

        tables.forEach(table => {

            const fullWidthCell = table.querySelector('.full-width');

            if (isNarrowScreen) {
                fullWidthCell.setAttribute('colspan', 100);
            } else {
                fullWidthCell.removeAttribute('colspan');
            }
        });
    }

    adjustColspan();
    window.addEventListener('resize', adjustColspan);





    // Отримання елементів модального вікна













    function showColumn(table, index) {

        table.rows[0].cells[index].colSpan = 100;
        table.rows[0].cells[index].classList.add('full-width');

        const rows = table.rows;

        for (let row of rows) {
            console.log(' row', row);
            console.log(' row.cells[index]:>> ', row.cells[index]);
            row.cells[index].classList.remove('tmHidden');

        }
    }

    function hideColumn(table, index) {



        table.rows[0].cells[index].colSpan = 1;
        table.rows[0].cells[index].classList.remove('full-width');



        const rows = table.rows;

        for (let row of rows) {

            row.cells[index].classList.add('tmHidden');

        }
    }

    function navigateColumn(event, direction) {
        const svg = event.currentTarget;
        const th = svg.closest('th');
        const table = svg.closest('table');
        const index = th.cellIndex;
        const columnCount = table.rows[0].cells.length;

        hideColumn(table, index);

        let newIndex = index + direction;
        if (newIndex < 1) {
            newIndex = columnCount - 1;
        } else if (newIndex >= columnCount) {
            newIndex = 1;
        }

        showColumn(table, newIndex);
    }

    document.querySelectorAll('.arrow2.nxt').forEach(next => {

        next.addEventListener('click', function (event) {

            navigateColumn(event, 1);
        });
    });

    document.querySelectorAll('.arrow2.Rback').forEach(prev => {

        prev.addEventListener('click', function (event) {

            navigateColumn(event, -1);
        });
    });






    const tables = document.querySelectorAll('.tariffTable');

    tables.forEach(function (tab) {
        const cells = tab.querySelectorAll('td, th');

        cells.forEach(cell => {
            cell.addEventListener('click', function (event) {
                // Перевіряємо, чи натискання було на елемент .arrow2
                if (event.target.closest('.arrow2')) {
                    return; // Якщо так, то виходимо з функції
                }

                const index = this.cellIndex;
                if (index === 0) return;

                if ((tab.rows[1].cells[index].getAttribute('region') !== countryInput.getAttribute('data-continent')) && (countryInput.value !== "")) return;
                removeAllHighlights();
                removeAllfull(tab);
                highlightColumn(tab, index);
            });
        });
    });

    function removeAllfull(tab) {
        document.querySelectorAll('.full-width').forEach(function (item) {
            item.classList.remove("full-width");

            tables.forEach(function (tb) {
                if (tb !== tab) {
                    tb.rows[0].cells[1].classList.add("full-width")
                    Array.from(tb.rows).forEach(function (item) {
                        item.cells[1].classList.remove("tmHidden")
                    })
                }

            })

        });

    }


    function removeAllHighlights() {

        hideAllColumnsExceptFirst();
        tables.forEach(function (tab) {
            const highlightedCells = tab.querySelectorAll('.highlight');
            highlightedCells.forEach(cell => {
                cell.classList.remove('highlight');



            });
        });
    }

    function highlightColumn(table, index) {

        const rows = table.rows;
        for (let row of rows) {
            const cell = row.cells[index];

            if (cell.parentElement.classList.contains('tariffNameHeader') && window.innerWidth <= 835) {
                cell.colSpan = 100;

            }
            if (cell.parentElement.classList.contains('tariffVariantsHeader')) {

                const paket = pakets.find(paket => paket.PV === cell.getAttribute('pv'));
                window.formData1.PackageIds = paket ? paket.id : null;
                insuranceProgram = paket ? paket.назва : null;
                updateSummary()
                console.log('table.rows[1].cells[index].getAttribute("region") :>> ', table.rows[1].cells[index].getAttribute('region'));
                formData1.ClientCountryCode = table.rows[1].cells[index].getAttribute('region')
                calculate();



                // formData.PackageIds = cell.getAttribute('pv')
                console.log('formData :>> ', formData1);
            }
            if (cell.parentElement.classList.contains('tariffNameHeader')) {
                row.cells[index].classList.add('full-width')
            }

            if (cell) {
                cell.classList.add('highlight');
                cell.classList.remove('tmHidden');
            }
        }
    }


    function hideAllColumnsExceptFirst() {
        tables.forEach(function (table) {
            const rows = table.rows;
            for (let row of rows) {
                for (let i = 1; i < row.cells.length; i++) {
                    row.cells[i].classList.add('tmHidden');
                }
            }
        });
    }

    // Викликати функцію для приховання всіх стовпців, крім нульового


    const addPersonBtn = document.getElementById('addPersonBtn');
    const insuredFormsContainer = document.getElementById('insuredFormsContainer');
    let personCount = 1;

    function createPersonForm(index) {
        const formDiv = document.createElement('div');
        const today = new Date().toISOString().split('T')[0];
        formDiv.classList.add('person_cont');
        formDiv.classList.add('dss');
        formDiv.innerHTML = `
            <div class="form__row row-header">
                <h6 class="h6 form__title">Застрахована особа </h6>
                <button type="button" class="form__remove-btn" onclick="removePersonForm(this)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path d="M6 18L18 6M6 6l12 12" stroke="red" stroke-width="2" fill="none"/>
				</svg>
                </button>
            </div>
            <div class="form__row row-content">
                <div class="form__line cols-auto">
                    <!-- Стать -->
                    <div class="form__col col-md">
                        <label class="form__label labelB" for="gender_${index}">Стать:</label>
                        <div class="gender-buttons">
                            <button type="button" id="male_${index}" class="male gender-button">М</button>
                            <button type="button" id="female_${index}" class="female gender-button">Ж</button>
                        </div>
                    </div>
                    <!-- Ім'я -->
                    <div class="form__col col-md">
                        <label class="form__label labelB" for="first_name_${index}">Ім'я:</label>
                        <input name="first_name_${index}" id="first_name_${index}" placeholder="Латинськими літерами" class="first_name input input-border iCountry" required>
                    </div>
                    <!-- Прізвище -->
                    <div class="form__col col-md">
                        <label class="form__label labelB" for="last_name_${index}">Прізвище:</label>
                        <input name="last_name_${index}" id="last_name_${index}" placeholder="Латинськими літерами" class="last_name input input-border iCountry" required>
                    </div>
                    <!-- Дата народження -->
                    <div class="form__col col-md">
                        <label class="form__label labelB " for="birth_date_${index}">Дата народження:</label>
                        <input autocomplete="off" value="1990-07-14" max="${today}" type="date" placeholder="дд/мм/рр" name="birth_date_${index}" id="birth_date_${index}" class="birth_date input input-border birth_date iCountry" required>
                    </div>
                    <!-- Серія та номер паспорта / № ID картки -->
                    <div class="form__col col-md">
                        <label class="form__label labelB" for="passport_${index}">Серія та номер паспорта / № ID картки:</label>
                        <input name="passport_${index}" value="ВР566255" id="passport_${index}" placeholder="AA123456 / 123456789" class="passport input input-border iCountry" required pattern="[A-Z]{2}[0-9]{6}">
                    </div>
                    <!-- ІПН -->
                    <div class="form__col col-md">
                        <label class="form__label labelB" for="ipn_${index}">ІПН:</label>
                        <input name="ipn_${index}" value="3078903575"  id="ipn_${index}" placeholder="1234567890" class="ipn input input-border iCountry" required pattern="[0-9]{10}">
                    </div>
                </div>
                <!-- Чекбокси -->
                <div class="cont-check">
                    <label class="form__checkbox">
                        <input type="checkbox" name="confirm_resident_${index}" class="confirm_resident" checked required>
                        <span>Підтверджую, що це застрахована особа є резидентом України.</span>
                    </label>
                    <label class="form__checkbox">
                        <input type="checkbox" name="not_public_official_${index}" class="not_public_official"  checked required>
                        <span>Не є Публічною посадовою особою / родичем державна посадова особа.</span>
                    </label>
                </div>
            </div>
        `;
        const inputs = formDiv.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', updateSummary);
            input.addEventListener('change', updateSummary);
            input.addEventListener('blur', updateSummary);
            input.addEventListener('focus', updateSummary);
        });
        return formDiv;
    }
    
    function addLatinValidation(index) {
    document.getElementById(`first_name_${index}`).addEventListener('input', function() {
        allowOnlyLatin(this);
    });

    document.getElementById(`last_name_${index}`).addEventListener('input', function() {
        allowOnlyLatin(this);
    });


}


    function addPersonForm() {

        const formDiv = createPersonForm(personCount);
        insuredFormsContainer.insertBefore(formDiv, addPersonBtn);
          addLatinValidation(personCount); 
        personCount++;
        updateFormInsureds()
        const quantityInput = document.getElementById('quantity');
        if (personCount > 1) document.getElementById('decrement').classList.remove('no-active')
        quantityInput.value = personCount;
        updateFormVisibility();
        genderbuttons = document.querySelectorAll(".gender-button");





        genderbuttons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Перемикаємо клас `rotate` для анімації SVG
                var parentElement = button.parentElement;

                parentElement.querySelectorAll(".gender-button").forEach(function (but) {
                    if (but !== button) {
                        but.classList.remove("activeGender")
                    }
                    else { button.classList.add("activeGender") }
                })

            });
        });
    }

    window.removePersonForm = function (button) {
        personCount--;
        const quantityInput = document.getElementById('quantity');
        quantityInput.value = personCount;
        const formDiv = button.closest('.person_cont');
        formDiv.remove();
        updateFormInsureds()
        updateFormVisibility();
        updateSummary();
    };

    function updateFormInsureds() {

        insuredarray = document.querySelectorAll('.dss');

        insuredarray.forEach(function (item) {
            item.querySelector(".birth_date").addEventListener("change", function (event) {
                addToformData()
            })
        })


    }

    function addToformData() {
        const births = document.querySelectorAll('.birth_date');
        const insured = [];
        births.forEach(function (birth) {
            insured.push({
                "BirthdayAt": birth.value,
                "Citizenship": "UA"
            });

            formData1.Insureds = insured;
            calculate()
        })
    }



    function updateFormVisibility() {

        if (personCount < 2) {
            insuredFormsContainer.classList.add('hidden');
        } else {
            insuredFormsContainer.classList.remove('hidden');
        }
    }



    addPersonBtn.addEventListener('click', addPersonForm);

    document.getElementById('increment').addEventListener('click', () => {
        const quantityInput = document.getElementById('quantity');
        personCount = parseInt(quantityInput.value);

        addPersonForm();
        updateFormVisibility();
        updateSummary();
    });



    document.getElementById('decrement').addEventListener('click', () => {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput.value > 1) {

            const personForms = insuredFormsContainer.querySelectorAll('.person_cont');
            const lastPersonForm = personForms[personForms.length - 1];

            if (lastPersonForm) {
                lastPersonForm.remove();
                updateFormInsureds()
                personCount--;
                if (personCount === 1) document.getElementById('decrement').classList.add('no-active')
                quantityInput.value = personCount;
                updateFormVisibility();
                updateSummary();
            }
        }
    });


    updateFormVisibility();

    // Слідкування за змінами у формі
    const formInputs = document.querySelectorAll('.input-border, .iCountry');

    formInputs.forEach(input => {
        input.addEventListener('input', updateSummary);
    });


 function convertObjectToFormData(obj, form, namespace) {
    let formData = form || new FormData();
    let formKey;

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            // Перевірка на порожній масив
            if (Array.isArray(obj[property]) && obj[property].length === 0) {
                formData.append(formKey, '[]');  // Додаємо порожній масив як рядок
            } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                convertObjectToFormData(obj[property], formData, formKey);
            } else {
                formData.append(formKey, obj[property]);
            }
        }
    }
    return formData;
}
    function logFormData(formDataWithExtraField) {
        for (let pair of formDataWithExtraField.entries()) {
            console.log(pair[0], pair[1]);
        }
    }

    let previousFormData = null;

    window.calculate = function () {
        formData1.Insureds = []
        const allBirthday = document.querySelectorAll('.birth_date')
        allBirthday.forEach((item => {
            formData1.Insureds.push({
                BirthdayAt: item.value,
                Citizenship: "UA"
            })
        }))

        function formDataChanged(currentFormData) {
            if (!previousFormData) {
                return true; // Якщо попередні дані ще не збережені, вважаємо, що дані змінилися
            }

            // Порівняння поточних і попередніх даних
            return JSON.stringify(currentFormData) !== JSON.stringify(previousFormData);
        }

        function savePreviousFormData(currentFormData) {
            previousFormData = { ...currentFormData }; // Клонуємо об'єкт для збереження
        }
        function validateFormData(formData) {
            console.log('PreValidateformData :>> ', formData);
            const requiredFields = ['PackageIds', 'DateFrom', 'DateTo', 'IsPolicyholderInsured', 'ClientCountryCode', 'Insureds'];
            for (let field of requiredFields) {

                console.log('PreValidatefieldformData :>> ', field, ":", formData[field]);
                if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {

                    return false;
                }
            }
            return true;
        }








        if (!validateFormData(formData1)) {
            console.log('Validation failed. Please fill in all required fields.');
            return; // Припиняємо виконання функції, якщо дані не повні
        }
        if (!formDataChanged(formData1)) {
            console.log('Дані не змінилися, запит не відправлено.');
            return; // Припиняємо виконання, якщо дані не змінилися
        }
        savePreviousFormData(formData1);

        let formData = convertObjectToFormData(formData1);





        logFormData(formData)
        formData.append('action', 'calculate_package'); // Додаємо action
        formData.append('_ajax_nonce', ajax_object.calculate_package_nonce); // Додаємо nonce

        fetch(ajax_object.ajax_url, {
            method: 'POST',
            body: new URLSearchParams(formData),
        }).then(response => response.json())
            .then(data => {
                // document.getElementById('result').innerText = JSON.stringify(data, null, 2);
                // document.getElementById('result').innerText = JSON.stringify(data, null, 2);
                console.log('data. :>> ', data);
                if (data.success) {
                    const packageIds = formData1?.PackageIds;
                    const packageData = data.data.Data[packageIds];

                    if (packageData && packageData.length > 0) {
                        const totalPrice = packageData[0].TotalPrice;

                        if (totalPrice) {
                            document.getElementById('sum').innerText = totalPrice.Amount + '₴';
                            document.getElementById('sum1').innerText = totalPrice.Amount + '₴';
                        }
                    }
                }
            }).catch(error => {
                console.error('Error:', error);
            });
    }
    // Функція для оновлення підсумку


    // Функція для розрахунку кількості днів
    function calculateDays(startDate, endDate) {

        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            return 'Дата не вказана';
        }
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays+1} днів`;
    }

    // Оновлення підсумку при завантаженні сторінки
    updateSummary();


    document.querySelectorAll('.row-header').forEach(function (row) {
        row.addEventListener('click', function () {

            var parentElement = row.parentElement;

            var arrow = parentElement.querySelector('.arrow');
            // Перемикаємо клас `rotate` для анімації SVG
            arrow.classList.toggle("rotate");

            // Отримуємо батьківський елемент

            // Перемикаємо клас `close_box` для зміни висоти батьківського елемента
            parentElement.classList.toggle("close_box");
        });
    });




    document.querySelectorAll('.arrow').forEach(function (arrow) {
        arrow.addEventListener('click', function () {
            // Перемикаємо клас `rotate` для анімації SVG
            arrow.classList.toggle("rotate");

            // Отримуємо батьківський елемент
            var parentElement = arrow.parentElement;

            // Перемикаємо клас `close_box` для зміни висоти батьківського елемента
            parentElement.classList.toggle("close_box");
        });
    });

    document.querySelectorAll('.section-lvl-0').forEach(function (arrow) {
        arrow.addEventListener('click', function () {
            // Перемикаємо клас `rotate` для анімації SVG
            arrow.querySelector(".arrow1").classList.toggle("rotate");

            // Отримуємо батьківський елемент
            var nextElement = arrow.nextElementSibling;

            // Перемикаємо клас `close_box` для зміни висоти батьківського елемента
            nextElement.classList.toggle("closeT");
        });
    });

    const single = document.getElementById("single");
    const multi = document.getElementById("multi");
    const cancel = document.getElementById("cancel");


    single.addEventListener('click', function () {
        // Перемикаємо клас `rotate` для анімації SVG
        multi.classList.remove("active_tab");
        cancel.classList.remove("active_tab");
        single.classList.add("active_tab");
        mode = "single"

        endDateInput.disabled = false;


        document.querySelectorAll(".multi").forEach(function (item) {
            item.classList.add("hiddenT");
        });

        document.querySelectorAll(".single").forEach(function (item) {
            item.classList.remove("hiddenT");
        });
        document.querySelectorAll(".cancel").forEach(function (item) {
            item.classList.add("hiddenT");
        });
        document.querySelector('.row').classList.remove('greenS');


    });
    multi.addEventListener('click', function () {
        // Перемикаємо клас `rotate` для анімації SVG
        mode = "multi"
        endDateInput.disabled = true;
        if (startDateInput.value) {


            updateEndDate();
        }
        multi.classList.add("active_tab");
        cancel.classList.remove("active_tab");
        single.classList.remove("active_tab");
        document.querySelectorAll(".single").forEach(function (item) {
            item.classList.add("hiddenT");
        });
        document.querySelectorAll(".multi").forEach(function (item) {
            item.classList.remove("hiddenT");
        });

        document.querySelectorAll(".cancel").forEach(function (item) {
            item.classList.add("hiddenT");
        });
        document.querySelector('.row').classList.remove('greenS');
    });
    cancel.addEventListener('click', function () {
        endDateInput.disabled = false;
        // Перемикаємо клас `rotate` для анімації SVG
        mode = "cancel";
        multi.classList.remove("active_tab");
        cancel.classList.add("active_tab");
        single.classList.remove("active_tab");
        document.querySelectorAll(".single").forEach(function (item) {
            item.classList.add("hiddenT");
        });
        document.querySelectorAll(".multi").forEach(function (item) {
            item.classList.add("hiddenT");
        });

        document.querySelectorAll(".cancel").forEach(function (item) {
            item.classList.remove("hiddenT");
        });

        document.querySelector('.row').classList.add('greenS')

    });




    const prevBtn = document.getElementById("prevBtn");
    const titleN = document.getElementById("titleN");
    const nextBtn = document.getElementById("nextBtn");
    let genderbuttons = document.querySelectorAll(".gender-button");
    const decrementBtn = document.getElementById('decrementDay');
    const incrementBtn = document.getElementById('incrementDay');
    const quantityInput = document.getElementById('quantityDay');
    const startDateInput = document.getElementById('start_date1');
    const endDateInput = document.getElementById('end_date1');
    const minQuantity = parseInt(quantityInput.min) || 1;

    function updateEndDate() {
        const startDate = new Date(startDateInput.value);
        if (!isNaN(startDate)) {
            const days = parseInt(quantityInput.value);
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + days - 1);
            endDateInput.value = endDate.toISOString().split('T')[0];
        }
    }

    decrementBtn.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > minQuantity) {

            quantityInput.value = currentQuantity - 1;
            if ((startDateInput.value) && (mode === "multi")) {
                updateEndDate();
            }
        }
        if (currentQuantity - 1 > minQuantity) {
            decrementBtn.classList.add('no-active')
        }
    });

    incrementBtn.addEventListener('click', function () {
        let currentQuantity = parseInt(quantityInput.value);

        quantityInput.value = currentQuantity + 1;

        if (currentQuantity + 1 > minQuantity) {
            decrementBtn.classList.remove('no-active')
        }
        if ((startDateInput.value) && (mode === "multi")) {
            updateEndDate();
        }
    });

    startDateInput.addEventListener('change', function () {

        if (mode === "multi") {


            updateEndDate();
        }
    });

    if ((startDateInput.value) && (mode === "multi")) {
        endDateInput.disabled = false;
        updateEndDate();
    }

    genderbuttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Перемикаємо клас `rotate` для анімації SVG

            var parentElement = button.parentElement;

            parentElement.querySelectorAll(".gender-button").forEach(function (but) {
                console.log('but :>> ', but);
                if (but !== button)
                    but.classList.remove("activeGender")
            })

            button.classList.toggle("activeGender")
        });
    });


    const toggleAmount = document.getElementById("toggleAmount");
    // Функція для показу значень у рядках таблиці за заданими індексами
    toggleAmount.addEventListener('click', function () {
        const amount = document.getElementById("amount");
        var parentElement = amount.parentElement;

        parentElement.classList.toggle("hiddenT");
        toggleAmount.textContent = toggleAmount.textContent === "Додати скасування подорожі" ? "Зняти скасування подорожі" : "Додати скасування подорожі"
    }
    );



    const itemsSingle = [
        { name: "Світ", code: "WR", visible: true, indices: [0, 3, 6, 9] },
        { name: "Європа", code: "EU", visible: false, indices: [1, 4, 7, 10] },
        { name: "Україна", code: "UA", visible: false, indices: [2, 5, 8, 11] }
    ];
    const itemsMulti = [
        { name: "Світ", code: "WR", visible: true, indices: [0] },
        { name: "Європа", code: "EU", visible: false, indices: [1] },
    ];
    const itemsCancel = [
        { name: "Світ", code: "WR", visible: true, indices: [0] },
        { name: "Україна", code: "UA", visible: false, indices: [1] }
    ];

    let currentIndex = 0;



    function hideAllRowValues() {
        const table = document.querySelector(".tariffTable");
        const cells = table.querySelectorAll(".tariff-column");

        cells.forEach(cell => {
            cell.classList.add("tHidden");
        });
    }

    function showRowValuesByIndices(rowIndex, indices) {
        const table = document.querySelector(".tariffTable");
        const rows = table.querySelectorAll(`tr`);

        rows.forEach(row => {
            const cells = row.querySelectorAll(`.tariff-column`);
            cells.forEach((cell, index) => {
                if (indices.includes(index)) {
                    cell.classList.remove("tHidden");
                }
            });
        });
    }

    function showCurrentItem() {
        const currentItem = itemsSingle[currentIndex];
        countryId.setAttribute('data-continent', currentItem.code);
        titleN.textContent = currentItem.name;
        hideAllRowValues();
        showRowValuesByIndices(currentIndex, currentItem.indices);
    }

    function showPreviousItem() {
        currentIndex = (currentIndex - 1 + itemsSingle.length) % itemsSingle.length;
        showCurrentItem();
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % itemsSingle.length;
        showCurrentItem();
    }

    prevBtn.addEventListener("click", showPreviousItem);
    nextBtn.addEventListener("click", showNextItem);



    const countryInput = document.getElementById('country');

    window.countryChange = function () {
        const country = countryInput.getAttribute('data-continent');

        console.log('countryInput :>> ', countryInput);
        const regionMap = {
            "світ": ["WR"], // Перелік країн для групи "Світ"
            "європа": ["EU"], // Перелік країн для групи "Європа"
            "україна": ["UA"], // Перелік країн для групи "Україна"
        };

        let foundGroup = null;

        for (const [group, countries] of Object.entries(regionMap)) {
            console.log('countries :>> ', countries);
            console.log('country :>> ', country);
            if (countries.includes(country)) {
                foundGroup = group;
                break;
            }
        }
        console.log('foundGroup :>> ', foundGroup);
        if (foundGroup) {
            const groupIndex = itemsSingle.findIndex(item => item.name.toLowerCase() === foundGroup);
            if (groupIndex !== -1) {
                currentIndex = groupIndex;
                showCurrentItem();
            }

            // Заблокувати можливість ручної зміни групи
            prevBtn.style.pointerEvents = 'none';
            nextBtn.style.pointerEvents = 'none';
        } else {
            // Розблокувати можливість ручної зміни групи
            prevBtn.style.pointerEvents = 'auto';
            nextBtn.style.pointerEvents = 'auto';
        }

    }

    countryInput.addEventListener('change', function (event) {

        if (countryInput.value === "") {
            countryInput.setAttribute('data-continent', "")
            countryChange()
        }
    });

    showCurrentItem();

    function validateForm() {
        const requiredFields = [
            { id: 'country', message: 'Будь ласка, оберіть країну' },
            { id: 'start_date1', message: 'Будь ласка, вкажіть дату початку' },
            { id: 'end_date1', message: 'Будь ласка, вкажіть дату закінчення' },
            { id: 'first_name', message: "Будь ласка, введіть ім'я" },
            { id: 'last_name', message: 'Будь ласка, введіть прізвище' },
            { id: 'birth_date', message: 'Будь ласка, вкажіть дату народження' },
            { id: 'phone', message: 'Будь ласка, введіть номер телефону' },
            { id: 'email', message: 'Будь ласка, введіть електронну пошту' },
            { id: 'address_city', message: 'Будь ласка, введіть місто' },
            { id: 'address', message: 'Будь ласка, введіть адресу' },
            { id: 'document_series', message: 'Будь ласка, введіть серію документа' },
            { id: 'document_number', message: 'Будь ласка, введіть номер документа' },
            { id: 'identification_number', message: 'Будь ласка, введіть ідентифікаційний номер' }
        ];

        let isValid = true;

        // Очистити попередні помилки
        requiredFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element) {
                element.classList.remove('error-field');
                element.removeAttribute('data-error');
            }
        });

        for (let field of requiredFields) {
            const element = document.getElementById(field.id);
            if (element) {
                const value = element.value;
                if (!value) {
                    element.classList.add('error-field');
                    element.setAttribute('data-error', field.message);
                    isValid = false;
                }
            }
        }

        // Додаткові перевірки для специфічних полів
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailPattern.test(email)) {
            const element = document.getElementById('email');
            element.classList.add('error-field');
            element.setAttribute('data-error', 'Неправильний формат електронної пошти');
            isValid = false;
        }

        const phone = document.getElementById('phone').value;
        // const phonePattern = /^[0-9\-\+]{9,15}$/;
        const phonePattern = /^\+38 \(\d{3}\) \d{3}-\d{4}$/;
        console.log('object :>> ', phonePattern.test(phone));
        if (phone && !phonePattern.test(phone)) {
            const element = document.getElementById('phone');
            element.classList.add('error-field');
            element.setAttribute('data-error', 'Неправильний формат номеру телефону');
            isValid = false;
        }

        return isValid;
    }
    const insurerBirthDate = document.getElementById('birth_date').value;
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("modal-pay");
    const span = document.getElementsByClassName("close")[0];
    const loader = document.getElementById("loader");
    const loaderText = document.getElementById("loader-text");
    const creationText = document.getElementById("creation-text");
    const confirmationSection = document.getElementById("confirmation-section");
    const downloadLink = document.getElementById("downloadLink");
    const confirmBtn = document.getElementById("confirm-btn");

function validateForm() {
    let isValid = true;

    const fieldsToValidate = [
        { id: 'country', message: 'Виберіть країну' },
        { id: 'start_date1', message: 'Вкажіть дату початку' },
        { id: 'end_date1', message: 'Вкажіть дату завершення' },
        { id: 'first_name', message: "Вкажіть ім'я" },
        { id: 'last_name', message: "Вкажіть прізвище" },
        { id: 'phone', message: 'Вкажіть телефон' },
        { id: 'email', message: 'Вкажіть електронну пошту' },
        { id: 'city', message: 'Вкажіть місто' },
        { id: 'address', message: 'Вкажіть адресу' },
        { id: 'passport', message: 'Вкажіть серію та номер паспорта' },
        { id: 'ipn', message: 'Вкажіть ідентифікаційний код' }
    ];

    // Очищуємо попередні помилки
    fieldsToValidate.forEach(({ id }) => {
        document.getElementById(id).classList.remove('error');
        const errorMsg = document.getElementById(id + '-error');
        if (errorMsg) errorMsg.classList.remove('active');
    });

    // Перевірка кожного поля
    fieldsToValidate.forEach(({ id, message }) => {
        const field = document.getElementById(id);
        if (!field || !field.value.trim()) {
            field.classList.add('error');
            isValid = false;

            // Додаємо повідомлення про помилку
            let errorMsg = document.getElementById(id + '-error');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.id = id + '-error';
                errorMsg.className = 'error-message';
                errorMsg.textContent = message;
                field.parentElement.appendChild(errorMsg);
            }
            errorMsg.classList.add('active');
        }
    });

    // Перевірка для додаткових користувачів (якщо є)
    const personForms = document.querySelectorAll('.person_cont');
    personForms.forEach((form, index) => {
        const firstName = form.querySelector('.first_name');
        const lastName = form.querySelector('.last_name');
        const passport = form.querySelector('.passport');
        const ipn = form.querySelector('.ipn');
        const birthDate = form.querySelector('.birth_date');

        if (!firstName.value.trim()) {
            firstName.classList.add('error');
            isValid = false;
        }

        if (!lastName.value.trim()) {
            lastName.classList.add('error');
            isValid = false;
        }

        if (!passport.value.trim() || passport.value.length < 4) {
            passport.classList.add('error');
            isValid = false;
        }

        if (!ipn.value.trim() || ipn.value.length !== 10) {
            ipn.classList.add('error');
            isValid = false;
        }

        if (!birthDate.value.trim()) {
            birthDate.classList.add('error');
            isValid = false;
        }
    });

    return isValid;
}
function validateForm() {
    let isValid = true;

    const fieldsToValidate = [
        { id: 'country', message: 'Виберіть країну' },
        { id: 'start_date1', message: 'Вкажіть дату початку' },
        { id: 'end_date1', message: 'Вкажіть дату завершення' },
        { id: 'first_name', message: "Вкажіть ім'я" },
        { id: 'last_name', message: "Вкажіть прізвище" },
        { id: 'phone', message: 'Вкажіть телефон' },
        { id: 'email', message: 'Вкажіть електронну пошту' },
        { id: 'city', message: 'Вкажіть місто' },
        { id: 'address', message: 'Вкажіть адресу' },
        { id: 'passport', message: 'Вкажіть серію та номер паспорта або ID-карту' },
        { id: 'ipn', message: 'Вкажіть ідентифікаційний код' }
    ];

    // Очищуємо попередні помилки
    fieldsToValidate.forEach(({ id }) => {
        document.getElementById(id).classList.remove('error');
        const errorMsg = document.getElementById(id + '-error');
        if (errorMsg) errorMsg.classList.remove('active');
    });

    // Перевірка кожного поля
    fieldsToValidate.forEach(({ id, message }) => {
        const field = document.getElementById(id);
        if (!field || !field.value.trim()) {
            field.classList.add('error');
            isValid = false;

            // Додаємо повідомлення про помилку
            let errorMsg = document.getElementById(id + '-error');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.id = id + '-error';
                errorMsg.className = 'error-message';
                errorMsg.textContent = message;
                field.parentElement.appendChild(errorMsg);
            }
            errorMsg.classList.add('active');
        }
    });

    // Перевірка для додаткових користувачів (якщо є)
    const personForms = document.querySelectorAll('.person_cont');
    personForms.forEach((form) => {
        const firstName = form.querySelector('.first_name');
        const lastName = form.querySelector('.last_name');
        const passport = form.querySelector('.passport');
        const ipn = form.querySelector('.ipn');
        const birthDate = form.querySelector('.birth_date');

        // Перевірка Ім'я
        if (!firstName.value.trim()) {
            firstName.classList.add('error');
            isValid = false;
        }

        // Перевірка Прізвище
        if (!lastName.value.trim()) {
            lastName.classList.add('error');
            isValid = false;
        }

        // Перевірка формату паспорта: звичайний або ID-карта
        const passportPattern = /^[A-ZА-ЯІЇЄ]{2}[0-9]{6}$/i; // Звичайний паспорт (AA123456)
        const idCardPattern = /^[0-9]{9}$/; // ID-карта (9 цифр)

        if (!passportPattern.test(passport.value) && !idCardPattern.test(passport.value)) {
            passport.classList.add('error');
            isValid = false;

            let errorMsg = form.querySelector('.passport-error');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message passport-error';
                errorMsg.textContent = 'Невірний формат паспорта. Має бути або 2 літери та 6 цифр (AA123456), або ID-карта з 9 цифр.';
                passport.parentElement.appendChild(errorMsg);
            }
            errorMsg.classList.add('active');
        } else {
            const errorMsg = form.querySelector('.passport-error');
            if (errorMsg) {
                errorMsg.classList.remove('active');
            }
        }

        // Перевірка ІПН (10 цифр)
        const ipnPattern = /^[0-9]{10}$/;
        if (!ipnPattern.test(ipn.value)) {
            ipn.classList.add('error');
            isValid = false;

            let errorMsg = form.querySelector('.ipn-error');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message ipn-error';
                errorMsg.textContent = 'ІПН має складатися з 10 цифр.';
                ipn.parentElement.appendChild(errorMsg);
            }
            errorMsg.classList.add('active');
        } else {
            const errorMsg = form.querySelector('.ipn-error');
            if (errorMsg) {
                errorMsg.classList.remove('active');
            }
        }

        // Перевірка дати народження
        if (!birthDate.value.trim()) {
            birthDate.classList.add('error');
            isValid = false;
        }
    });

    return isValid;
}

document.getElementById('first_name').addEventListener('input', () => removeError('first_name'));
document.getElementById('last_name').addEventListener('input', () => removeError('last_name'));
document.getElementById('phone').addEventListener('input', () => removeError('phone'));
document.getElementById('email').addEventListener('input', () => removeError('email'));
document.getElementById('city').addEventListener('input', () => removeError('city'));
document.getElementById('address').addEventListener('input', () => removeError('address'));
document.getElementById('passport').addEventListener('input', removePassportError);
document.getElementById('ipn').addEventListener('input', removeIpnError);

function removeError(fieldId, pattern = null) {
    const field = document.getElementById(fieldId);
    const errorMsg = document.getElementById(fieldId + '-error');

    // Якщо є паттерн, перевіряємо поле на відповідність цьому паттерну
    if (pattern) {
        if (pattern.test(field.value)) {
            field.classList.remove('error');
            if (errorMsg) errorMsg.classList.remove('active');
        }
    } else {
        if (field.value.trim()) {
            field.classList.remove('error');
            if (errorMsg) errorMsg.classList.remove('active');
        }
    }
}

function removePassportError() {
    const passport = document.getElementById('passport');
    const passportPattern = /^[A-ZА-ЯІЇЄ]{2}[0-9]{6}$/i;// Звичайний паспорт
    const idCardPattern = /^[0-9]{9}$/; // ID-карта

    if (passportPattern.test(passport.value) || idCardPattern.test(passport.value)) {
        passport.classList.remove('error');
        const errorMsg = document.getElementById('passport-error');
        if (errorMsg) errorMsg.classList.remove('active');
    }
}


function removeIpnError() {
    const ipn = document.getElementById('ipn');
    const ipnPattern = /^[0-9]{10}$/; // ІПН повинен складатися з 10 цифр

    if (ipnPattern.test(ipn.value)) {
        ipn.classList.remove('error');
        const errorMsg = document.getElementById('ipn-error');
        if (errorMsg) errorMsg.classList.remove('active');
    }
}
function allowOnlyLatin(input) {
    input.value = input.value.replace(/[^A-Za-z0-9\s,]/g, '');
}

// Додаємо подію input для обмеження введення
document.getElementById('first_name').addEventListener('input', function() {
    allowOnlyLatin(this);
});

document.getElementById('last_name').addEventListener('input', function() {
    allowOnlyLatin(this);
});

document.getElementById('address').addEventListener('input', function() {
    allowOnlyLatin(this);
});


document.getElementById('city').addEventListener('input', function() {
    allowOnlyLatin(this);
});
    openModalBtn.onclick = function () {
        modal.style.display = "block";
        loader.style.display = "block";
        loaderText.style.display = "block";
        creationText.style.display = "none";
        confirmationSection.style.display = "none";
        sendPolicyDraftRequest();
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

   async function sendPolicyDraftRequest() {
        if (!validateForm()) {
            alert('Будь ласка, заповніть усі необхідні поля правильно.');
              modal.style.display = "none";
            return;
        }

        const country = document.getElementById('country').value;
        const startDate = document.getElementById('start_date1').value;
        const endDate = document.getElementById('end_date1').value;

        const insurerFirstName = document.getElementById('first_name').value.toUpperCase();
        const insurerLastName = document.getElementById('last_name').value.toUpperCase();


        const policyholder = {
            Phone: document.getElementById('phone').value,
            Email: document.getElementById('email').value,
            AddressCountryCode: 'UA',
            AddressCity: document.getElementById('city').value,
            Address: document.getElementById('address').value,
            FirstName: insurerFirstName,
            LastName: insurerLastName,
            DocumentSeries: document.getElementById('passport').value.substring(0, 2),
            DocumentNumber: document.getElementById('passport').value.substring(2),
            IdentificationNumber: document.getElementById('ipn').value,
            IsPublicFigure: true,
            BirthdayAt:  document.getElementById('birth_date').value,
            Citizenship: 'UA'
        };

        let insureds = [];
       
    //     const personFormsHead = document.querySelectorAll('.person-head-strah');
    //     personFormsHead.forEach((form, index) => {
    //         console.log(form);
    //         console.log(form.querySelector('#first_name'));
    //         const insured = {
                     
    // FirstName: form.querySelector('#first_name').value.toUpperCase(),
    //             LastName: form.querySelector('#last_name').value.toUpperCase(),
    //             DocumentSeries: form.querySelector('#passport').value.substring(0, 2),
    //             DocumentNumber: form.querySelector('#passport').value.substring(2),
    //             IdentificationNumber: form.querySelector('#ipn').value,
    //             IsPublicFigure: true,
    //             BirthdayAt: form.querySelector('#birth_date').value,
    //       Citizenship: 'UA'
    //         };
    //         insureds.push(insured);
    //     });

        const personForms = document.querySelectorAll('.person_cont');
        personForms.forEach((form, index) => {
            const insured = {
                 FirstName: form.querySelector('.first_name').value.toUpperCase(),
                LastName: form.querySelector('.last_name').value.toUpperCase(),
                DocumentSeries: form.querySelector('.passport').value.substring(0, 2),
                DocumentNumber: form.querySelector('.passport').value.substring(2),
                IdentificationNumber: form.querySelector('.ipn').value,
                IsPublicFigure: true,
                BirthdayAt: form.querySelector('.birth_date').value,
          Citizenship: 'UA'
            };
            insureds.push(insured);
        });




        let travelData = {};
        const amount = parseFloat(document.getElementById('amount').value);
        if (amount) {
            travelData = {
                Amount: amount,
                Currency: 'UAH'
            };
        }

        const requestData = {
            PackageId: window.formData1.PackageIds,
            RegionCode: formData1.ClientCountryCode,
            DateFrom: startDate,
            DateTo: endDate,
            IsPolicyholderInsured: true,
            ClientCountryCode: 'UA',
            Policyholder: policyholder,
            Insureds: insureds
        };

        if (Object.keys(travelData).length !== 0) {
            requestData.TravelData = travelData;
        }

         let formDatas = convertObjectToFormData(requestData);
 

        formDatas.append('action', 'create_policy_draft');
        formDatas.append('_ajax_nonce', ajax_object.create_policy_draft_nonce);
  logFormData(formDatas);
        fetch(ajax_object.ajax_url, {
            method: 'POST',
            body: new URLSearchParams(formDatas),
        }).then(response => response.json())
            .then(data => {
                if (data.data.Success && data.data) {
                                 
                            const policyData = data.data;
            const policyId = policyData.Data.Id;
         // Примітка: використовуємо поле CostPrice


            // Оновлюємо UI
            loaderText.style.display = "none";
            creationText.style.display = "block";
  getPolicyCertificate(policyId,policyholder,policyData.Data.CostPrice.Amount);
            // Викликаємо функцію для створення страхового запису
   
                       
                } else {
                    loader.style.display = "none";
                    loaderText.style.display = "none";
                    creationText.style.display = "none";
                
              modal.style.display = "none";
              
                    // Отримання повідомлення про помилку з бекенду
        let errorMessage = 'Створення полісу не вдалося, спробуйте знову.';
        
        if (data.data.ModelState) {
            // Перевірка, чи є проблеми з конкретними полями
            for (let key in data.data.ModelState) {
                if (data.data.ModelState.hasOwnProperty(key)) {
                    // Перевірка наявності помилки "IdentificationNumber in wrong format"
                    const errors = data.data.ModelState[key];
                    if (errors.includes("IdentificationNumber in wrong format")) {
                        errorMessage = "Неправильний формат Ідентифікаційного номера.";
                        break; // Перервати цикл після знаходження потрібної помилки
                    }
                }
            }
        } else if (data.data.Message) {
            errorMessage = data.data.Message;
        }

        // Виведення повідомлення користувачу
        alert(errorMessage);
        console.error('Error:', errorMessage);
                }
            }).catch(error => {
                loader.style.display = "none";
                loaderText.style.display = "none";
                creationText.style.display = "none";
                    modal.style.display = "none";
                console.error('Error:', error);
            });
    }


function createInsuranceRecord(policyId, title, email, name, code, amount, phone, url, date) {
    const formData = new FormData();
    formData.append('action', 'create_insurance_post');
    formData.append('nonce', ajax_object.create_insurance_post_nonce);
    formData.append('policyId', policyId);
    formData.append('title', title);
    formData.append('emailinsurance', email);
    formData.append('nameinsurance', name);
    formData.append('codeinsurance', code);
    formData.append('amountinsurance', amount);
    formData.append('phoneinsurance', phone);
    formData.append('urlinsurance', url);
    formData.append('datainsurance', date);

    return fetch(ajax_object.ajax_url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Перевірка отриманих даних
        if (data.success && data.data) {
            return data;
        } else {
            throw new Error(data.data ? data.data.message : 'Не вдалося створити запис');
        }
    });
}

function generateUniqueCode() {
    // Генерує унікальний код (наприклад, UUID)
    return 'INS-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function getPolicyCertificate(policyId, policyholder, policyCost) {
    const formData = new FormData();
    formData.append('action', 'get_policy_certificate');
    formData.append('policyId', policyId);
    formData.append('_ajax_nonce', ajax_object.get_policy_certificate_nonce);

    fetch(ajax_object.ajax_url, {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.success && data.data) {
                const url = data.data.url;
                loader.style.display = "none";
                creationText.style.display = "none";
                confirmationSection.style.display = "block";
                downloadLink.href = url;
                downloadLink.setAttribute('data-ids', policyId);

                // Формуємо унікальний заголовок
                const now = new Date();
                const formattedDate = now.toLocaleDateString('uk-UA');
                const formattedTime = now.toLocaleTimeString('uk-UA');
                const uniqueTitle = `${policyholder.LastName} ${policyholder.FirstName} - ${formattedDate} ${formattedTime} - Сума: ${policyCost} UAH`;
                const fullName = `${policyholder.FirstName} ${policyholder.LastName}`;
  const uniqueCode = generateUniqueCode();
                // Створюємо запис страховки
                createInsuranceRecord(
                    policyId, 
                    uniqueTitle, 
                    policyholder.Email, 
                    fullName, 
                    uniqueCode,
                    policyCost,
                    policyholder.Phone, 
                    url, 
                    now.toISOString()
                ).then(response => {
                    if (response.success && response.data) {
                        const postId = response.data.post_id;  // Отримуємо ID поста

                        // Виклик сервера для генерації форми LiqPay
                        const formData = new FormData();
                        formData.append('action', 'generate_liqpay_form');
                        formData.append('policyId', policyId);
                        formData.append('policyCost', policyCost);
                        formData.append('description', uniqueTitle);
                              formData.append('unicode', uniqueCode);
                        formData.append('postId', postId);  // Додаємо ID поста

                        // Відправка запиту на сервер
                        fetch(ajax_object.ajax_url, {
                            method: 'POST',
                            body: formData
                        })
                        .then(response => response.text())  // Отримання HTML форми
                        .then(formHtml => {
                            document.getElementById('liqpay-form-container').innerHTML = formHtml;
                        })
                        .catch(error => {
                            console.error('Помилка при генерації форми LiqPay:', error);
                        });

                    } else {
                        console.error('Помилка при створенні запису:', response.data ? response.data.message : 'Невідомий формат відповіді');
                    }
                }).catch(error => {
                    console.error('Помилка при створенні запису:', error);
                });

            } else {
                loader.style.display = "none";
                creationText.style.display = "none";
                console.error('Error:', data.data ? data.data : 'Невідомий формат відповіді');
            }
        }).catch(error => {
            loader.style.display = "none";
            creationText.style.display = "none";
            console.error('Error:', error);
        });
}
    

    function fetchPolicyCertificate(policyId) {
        const formData = new FormData();
        formData.append('action', 'get_policy_certificate');
        formData.append('policyId', policyId);
        formData.append('_ajax_nonce', ajax_object.get_policy_certificate_nonce);

        return fetch(ajax_object.ajax_url, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    const url = data.data.url;
                    console.log('url :>> ', url);
                    return url; // Повертаємо URL сертифіката полісу
                } else {
                    throw new Error('Помилка отримання сертифіката полісу: ' + data.data);
                }
            });
    }


});