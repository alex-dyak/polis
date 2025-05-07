<style>
    .form__label.required::after {
        content: " *";
        color: red;
        font-weight: bold;
    }
</style>

<form action="#" id="oscvForm" method="POST" class="hero-page__form form-calculate form-calculate-travel">
    <fieldset class="form__section" style="margin-top: 20px;">
        <input type="hidden" name="contractId" value="123">
        <input type="hidden" name="agentId" value="39880329">
        <input type="hidden" name="DCityID" value="3797">
        <input hidden="hidden" type="checkbox" checked name="sendSMS">
        <h3>Основні дані</h3>

        <div class="form__col col-md">
            <label class="form__label required">Дата початку</label>
            <input type="date" name="StartDate" required class="input input-border">
        </div>

        <div class="form__col col-md">
            <label class="form__label required">Термін дії поліса</label>
            <select name="DPeriodID" id="period_type" required class="input input-border">
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

<!--        <div class="form__col col-md">-->
<!--            <label class="form__label required">Клас бонус-малусу</label>-->
<!--            <select name="DBonusMalusEnum" id="bonus_malus_class" required class="input input-border">-->
<!--                <option value="">Оберіть клас бонус-малусу</option>-->
<!--                <option value="0">0 - 2,30 (наявні виплати)</option>-->
<!--                <option value="1">1 - 1,55 (наявні виплати)</option>-->
<!--                <option value="2">2 - 1,40 (наявні виплати)</option>-->
<!--                <option value="3">3 - 1 (не страхувався)</option>-->
<!--                <option value="4">4 - 0,95 (1 рік)</option>-->
<!--                <option value="5">5 - 0,90 (2 роки)</option>-->
<!--                <option value="6">6 - 0,85 (3 роки)</option>-->
<!--                <option value="7">7 - 0,80 (4 роки)</option>-->
<!--                <option value="8">8 - 0,75 (5 років)</option>-->
<!--                <option value="9">9 - 0,70 (6 років)</option>-->
<!--                <option value="10">10 - 0,65 (7 років)</option>-->
<!--                <option value="11">11 - 0,60 (8 років)</option>-->
<!--                <option value="12">12 - 0,55 (9 років)</option>-->
<!--                <option value="13">13 - 0,50 (10 років)</option>-->
<!--                <option value="M">M - 2,45 (наявні виплати)</option>-->
<!--            </select>-->
<!--        </div>-->

        <input type="hidden" name="K1" value="1">
        <input type="hidden" name="K2" value="1">
        <input type="hidden" name="K3" value="1">
        <input type="hidden" name="K4" value="1">
        <input type="hidden" name="K5" value="1">
        <input type="hidden" name="K6" value="1">
        <input type="hidden" name="K7" value="1">
        <input type="hidden" name="K8" value="1">

        <input type="hidden" name="dBonusMalusIDEnum" value="3">
        <input type="hidden" name="DBonusMalusID" value="1">
        <input type="hidden" name="DCitizenStatusID" value="1">

<!--        <div class="form__col col-md">-->
<!--            <label class="form__label required">Тип особи за країною</label>-->
<!--            <select name="DCitizenStatusID" id="citizen_status" required class="input input-border">-->
<!--                <option value="">Чи є ви рездентом</option>-->
<!--                <option value="1">Резидент</option>-->
<!--                <option value="2">Не резидент</option>-->
<!--            </select>-->
<!--        </div>-->

        <div class="form__col col-md">
            <label class="form__label required">Тип особи</label>
            <select name="DPersonStatusID" id="person_status" required class="input input-border">
                <option value="">Чи є ви фізичною або юридичною особою</option>
                <option value="1">Фізична особа</option>
                <option value="2">Юридична особа</option>
            </select>
        </div>

        <div class="form__col col-md">
            <label class="form__label required">Пільга</label>
            <select name="DPrivelegeID" id="privelege" required class="input input-border">
                <option value="">Чи є у Вас пільги</option>
                <option value="0">Без пільг</option>
                <option value="1">Учасники війни, що визначені законом</option>
                <option value="2">Інваліди II групи</option>
                <option value="3">Особи, які постраждали внаслідок Чорнобильської катастрофи, віднесені до I та II категорій</option>
                <option value="4">Пенсіонери-громадяни України</option>
                <option value="5">Учасник бойових дій</option>
                <option value="6">Постраждалий учасник революції Гідності</option>
                <option value="7">Особи з інвалідністю І групи</option>
                <option value="9">Особа з інвалідністю внаслідок війни</option>
            </select>
        </div>

        <div class="form__col col-md">
            <label class="form__label">Водійський стаж</label>
            <select name="DExpLimitID" required class="input input-border">
                <option value="">Оберіть водійський стаж</option>
                <option value="1">Без обмеження стажу</option>
                <option value="2">Стаж не менше 3 років</option>
            </select>
        </div>

        <div class="form__col col-md">
<!--            <label class="form__label required">Франшиза</label>-->
            <input name="Franchise" id="franchise" type="hidden" value="0" class="input input-border">
        </div>

        <div class="form__col col-md">
<!--            <label class="form__label required">insPremium</label>-->
            <input name="insPremium" id="insPremium" type="hidden" value="0" class="input input-border">
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
            <input type="text" name="PName" class="input input-border" placeholder="По батькові (кирилиця)">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Прізвище і ім’я англійською мовою</label>
            <input type="text" name="FullNameEnglish" required class="input input-border" placeholder="Прізвище і ім’я англійською мовою">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Дата народження</label>
            <input type="date" name="BirthDate" required class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ідентифікаційний код</label>
            <input type="text" name="IdentCode" class="input input-border" placeholder="Введіть ІПН">
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
            <input type="text" name="Address" required class="input input-border" placeholder="Адреса (кирилиця)">
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
            <input type="text" name="DocSeries" class="input input-border" placeholder="Серія">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Номер</label>
            <input type="text" name="DocNumber" class="input input-border" placeholder="Номер">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Дата видачі</label>
            <input type="date" name="issueDate" class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ким виданий</label>
            <input type="text" name="issued" class="input input-border" placeholder="Ким виданий">
        </div>
    </fieldset>

    <fieldset class="form__section" style="margin-top: 20px;">
        <h3>Дані автомобіля</h3>
        <div class="form__col col-md">
            <label class="form__label required">Держ. реєстраційний номер ТЗ</label>
            <input type="text" name="RegNo" required class="input input-border" placeholder="Введіть номер ТЗ">
        </div>
        <div class="form__col col-md">
            <label class="form__label">VIN</label>
            <input type="text" name="VIN" class="input input-border" placeholder="Введіть VIN">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Тип транспортного засобу</label>
            <select name="DVehicleTypeID" id="vehicle_type" required class="input input-border">
                <option value="">Оберіть Тип транспортного засобу</option>
                <option value="1">B1 легковий автомобіль до 1600 куб. См.</option>
                <option value="2">B2 легковий автомобіль від 1601до 2000 куб. См.</option>
                <option value="3">B3 легковий автомобіль від 2001 до 3000 куб. См.</option>
                <option value="4">B4 легковий автомобіль більше 3000 кубічних сантиметрів</option>
                <option value="5">A1 мотоцикли та моторолери до 300 куб. см. (включно)</option>
                <option value="6">A2 мотоцикли та моторолери більше 300 куб. см.</option>
                <option value="7">C1 вантажні автомобілі вантажопідйомністю до 2 .т, (включно)</option>
                <option value="8">C2 вантажні автомобілі вантажопідйомністю понад 2 т.</option>
                <option value="9">D1 автобуси з кількістю місць для сидіння до 20 чоловік (включно)</option>
                <option value="10">D2 автобуси з кількістю місць для сидіння більше 20 чоловік</option>
                <option value="11">F причепи до легкових автомобілів</option>
                <option value="12">E причепи до вантажних автомобілів</option>
                <option value="17">B5 легковий електромобіль</option>
            </select>
        </div>

<!--        <div class="form__col col-md">-->
<!--            <label class="form__label">Сфера використання транспортного засобу</label>-->
<!--            <select name="DSphereUseID" required class="input input-border">-->
<!--                <option value="">Оберіть сферу використання</option>-->
<!--                <option value="1">Не таксі</option>-->
<!--                <option value="2">Таксі</option>-->
<!--            </select>-->
<!--        </div>-->
        <input type="hidden" name="DSphereUseID" value="1">
        <input type="hidden" name="vehicleUsage" value="111111111111">

        <div class="form__col col-md">
            <label class="form__label required">Марка</label>
            <input type="text" name="CarMake" required class="input input-border" placeholder="Марка">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Модель</label>
            <input type="text" name="CarModel" required class="input input-border" placeholder="Модель">
        </div>
        <div class="form__col col-md">
            <label class="form__label required">Рік випуску ТЗ</label>
            <input type="number" name="prodYear" required class="input input-border" placeholder="Рік випуску">
        </div>
    </fieldset>



    <div class="hero-page__form form-calculate form-calculate-travel open-box">
        <div id="sum_data"></div>
        <div class="fgh">
            <input type="hidden" name="Payment_osago" value="">
            <input type="hidden" name="insurancetype" value="osago">
            <div class="form__line cols-auto sum">
                <span>Разом до сплати:</span><span id="sum_osago">0000₴</span>
            </div>
            <div class="form__line cols-auto ">
                <button class="button button-green" id="modal-pay-osago"> Оплатити</button>
            </div>
        </div>
    </div>

</form>
