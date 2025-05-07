<style>
    .form__label.required::after {
        content: " *";
        color: red;
        font-weight: bold;
    }
</style>

<form action="#" id="greenCardForm" method="POST" class="hero-page__form form-calculate form-calculate-travel">
    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Основні дані</h3>
        <div class="form__col col-md">
            <label class="form__label required">Агент (код ЄДРПОУ)</label>
            <input type="text" name="AgentCodeEDRPOU" required class="input input-border" placeholder="Введіть код ЄДРПОУ">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Місце укладання</label>
            <input type="text" name="RegistrationPlace" required class="input input-border" placeholder="Введіть місце укладання">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Тип транспортного засобу</label>
            <select name="VehicleType" id="vehicle_type" required class="input input-border">
                <option value="">Оберіть Тип транспортного засобу</option>
                <option value="1">Легкові а\м</option>
                <option value="2">Автобуси</option>
                <option value="3">Вантажні автомобілі</option>
                <option value="4">Причепи</option>
                <option value="5">Мотоцикли</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Термін дії поліса</label>
            <select name="Period" id="period_type" required class="input input-border">
                <option value="">Оберіть Термін дії поліса</option>
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
            <select name="TerritoryType" id="territory_type" required class="input input-border">
                <option value="">Оберіть Територію дії поліса</option>
                <option value="1">Зелена картка (крім Росії та Білорусії)</option>
                <option value="2">Зелена картка (Азербайджан, Молдова)</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Дата початку</label>
            <input type="date" name="BeginningDate" required class="input input-border">
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
            <input type="text" name="Surname" required class="input input-border" placeholder="Ваше прізвище (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Ім'я</label>
            <input type="text" name="Name" required class="input input-border" placeholder="Ваше ім'я (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label">По батькові</label>
            <input type="text" name="SecondName" class="input input-border" placeholder="По батькові (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Прізвище і ім’я англійською мовою</label>
            <input type="text" name="FullNameEnglish" required class="input input-border" placeholder="Прізвище і ім’я англійською мовою">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Дата народження</label>
            <input type="date" name="InsurerBirthDate" required class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ідентифікаційний код</label>
            <input type="text" name="IdentificationCode" class="input input-border" placeholder="Введіть ІПН">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Телефон</label>
            <input type="tel" name="MobilePhoneNumber" required class="input input-border" placeholder="+380XXXXXXXXX">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Email</label>
            <input type="email" name="Email" required class="input input-border" placeholder="example@gmail.com">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Адреса</label>
            <input type="text" name="InsurerAddress" required class="input input-border" placeholder="Адреса (кирилиця)">
        </div>
    </fieldset>

    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Дані автомобіля</h3>
        <div class="form__col col-md">
            <label class="form__label required">Держ. реєстраційний номер ТЗ</label>
            <input type="text" name="RegistrationNumber" required class="input input-border" placeholder="Введіть номер ТЗ">
        </div>
        <div class="form__col col-md">
            <label class="form__label">VIN</label>
            <input type="text" name="VIN" class="input input-border" placeholder="Введіть VIN">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Марка+Модель</label>
            <input type="text" name="ManufacturerModel" required class="input input-border" placeholder="Марка+Модель">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Рік випуску ТЗ</label>
            <input type="number" name="ProduceDate" required class="input input-border" placeholder="Рік випуску">
        </div>
    </fieldset>

    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Документ</h3>
        <div class="form__col col-md">
            <label class="form__label">Тип документу</label>
            <select name="DocumentType" class="input input-border">
                <option value="">Оберіть Тип документу</option>
                <option value="1">Паспорт</option>
                <option value="2">Біометричний паспорт</option>
                <option value="3">Закордонний паспорт</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label">Серія</label>
            <input type="text" name="DocumentSeria" class="input input-border" placeholder="Серія">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Номер</label>
            <input type="text" name="DocumentNumber" class="input input-border" placeholder="Номер">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Дата видачі</label>
            <input type="date" name="DocumentIssudDate" class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ким виданий</label>
            <input type="text" name="DocumentIssuedBy" class="input input-border" placeholder="Ким виданий">
        </div>
    </fieldset>

    <div class="hero-page__form form-calculate form-calculate-travel open-box">
        <div id="sum_data"></div>
        <div class="fgh">
            <input type="hidden" name="Payment" value="">
            <input type="hidden" name="insurancetype" value="Green Card">
            <div class="form__line cols-auto sum">
                <span>Разом до сплати:</span><span id="sum1">0000₴</span>
            </div>
            <div class="form__line cols-auto ">
                <button class="button button-green" id="modal-pay"> Оплатити</button>
            </div>
        </div>
    </div>

</form>
