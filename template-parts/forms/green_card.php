<style>
    .form__label.required::after {
        content: " *";
        color: red;
        font-weight: bold;
    }
</style>

<form action="#" id="insuranceForm" method="POST" class="hero-page__form form-calculate form-calculate-travel">
    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Основні дані</h3>
        <div class="form__col col-md">
            <label class="form__label required">Агент (код ЄДРПОУ)</label>
            <input type="text" name="agentCodeEDRPOU" required class="input input-border" placeholder="Введіть код ЄДРПОУ">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Місце укладання</label>
            <input type="text" name="registrationPlace" required class="input input-border" placeholder="Введіть місце укладання">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Тип транспортного засобу</label>
            <select name="vehicleType" id="vehicle_type" required class="input input-border">
                <option value="1">Легкові а\м</option>
                <option value="2">Автобуси</option>
                <option value="3">Вантажні автомобілі</option>
                <option value="4">Причепи</option>
                <option value="5">Мотоцикли</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Термін дії поліса</label>
            <select name="period" id="period_type" required class="input input-border">
                <option value="1">15 днів</option>
                <option value="2">1 місяць</option>
                <option value="3">2 місяці</option>
                <option value="4">3 місяці</option>
                <option value="5">4 місяці</option>
                <option value="6">5 місяців</option>
                <option value="7">6 місяців</option>
                <option value="8">7 місяців</option>
                <option value="9">8 місяців</option>
                <option value="10">9 місяців</option>
                <option value="11">10 місяців</option>
                <option value="12">11 місяців</option>
                <option value="13">1 рік</option>
                <option value="14">21 день</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Територія дії</label>
            <select name="territoryType" id="territory_type" required class="input input-border">
                <option value="1">Зелена картка (крім Росії та Білорусії)</option>
                <option value="2">Зелена картка (Азербайджан, Молдова)</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Дата початку</label>
            <input type="date" name="beginningDate" required class="input input-border">
        </div>
        <div class="form__col col-md">
            <input hidden="hidden" type="checkbox" checked name="sendSMS">
            <input hidden="hidden" type="checkbox" checked name="sendOffer">
        </div>
    </fieldset>

    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Персональні дані страхувальника</h3>
        <div class="form__col col-md">
            <label class="form__label required">Прізвище</label>
            <input type="text" name="surname" required class="input input-border" placeholder="Ваше прізвище (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Ім'я</label>
            <input type="text" name="name" required class="input input-border" placeholder="Ваше ім'я (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label">По батькові</label>
            <input type="text" name="secondName" class="input input-border" placeholder="По батькові (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Прізвище і ім’я англійською мовою</label>
            <input type="text" name="fullNameEnglish" required class="input input-border" placeholder="Прізвище і ім’я англійською мовою">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Дата народження</label>
            <input type="date" name="insurerBirthDate" required class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ідентифікаційний код</label>
            <input type="text" name="identificationCode" class="input input-border" placeholder="Введіть ІПН">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Телефон</label>
            <input type="tel" name="mobilePhoneNumber" required class="input input-border" placeholder="+380XXXXXXXXX">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Email</label>
            <input type="email" name="email" required class="input input-border" placeholder="example@gmail.com">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Адреса</label>
            <input type="text" name="insurerAddress" required class="input input-border" placeholder="Адреса (кирилиця)">
        </div>
    </fieldset>

    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Дані автомобіля</h3>
        <div class="form__col col-md">
            <label class="form__label required">Держ. реєстраційний номер ТЗ</label>
            <input type="text" name="registrationNumber" required class="input input-border" placeholder="Введіть номер ТЗ">
        </div>
        <div class="form__col col-md">
            <label class="form__label">VIN</label>
            <input type="text" name="vin" class="input input-border" placeholder="Введіть VIN">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Марка+Модель</label>
            <input type="text" name="manufacturerModel" required class="input input-border" placeholder="Марка+Модель">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Рік випуску ТЗ</label>
            <input type="number" name="produceDate" required class="input input-border" placeholder="Рік випуску">
        </div>
    </fieldset>

    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Дані паспорта</h3>
        <div class="form__col col-md">
            <label class="form__label">Тип документу</label>
            <select name="documentType" class="input input-border">
                <option value="1">Паспорт</option>
                <option value="2">Біометричний паспорт</option>
                <option value="3">Закордонний паспорт</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label">Серія</label>
            <input type="text" name="documentSeria" class="input input-border" placeholder="Серія">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Номер</label>
            <input type="text" name="documentNumber" class="input input-border" placeholder="Номер">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Дата видачі</label>
            <input type="date" name="documentIssudDate" class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ким виданий</label>
            <input type="text" name="documentIssuedBy" class="input input-border" placeholder="Ким виданий">
        </div>
    </fieldset>

<!--    <div class="form__row" style="margin-top: 20px;">-->
<!--        <button type="submit" class="form__button button button-green">Розрахувати вартість</button>-->
<!--    </div>-->

    <div class="hero-page__form form-calculate form-calculate-travel open-box">
        <div id="sum_data"></div>
        <div class="fgh">
            <div class="form__line cols-auto sum">
                <span>Разом до сплати:</span><span id="sum1">0000₴</span>
            </div>
            <div class="form__line cols-auto sm">
                <span>Після оплати страховий поліс буде відправлений на вашу електронну пошту.</span>
            </div>
            <div class="form__line cols-auto ">
                <button class="button button-green " id="modal-pay"> Оплатити</button>
            </div>
        </div>
    </div>

</form>
