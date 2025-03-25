<form action="#" id="insuranceForm" class="hero-page__form form-calculate form-calculate-travel">
    <div class="form__line cols-auto person-head-strah dss">
        <div class="form__col col-md">
            <label class="form__label">Агент (код ЄДРПОУ)</label>
            <input type="text" name="agentCodeEDRPOU" required class="input input-border" placeholder="Введіть код ЄДРПОУ">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Місце укладання</label>
            <input type="text" name="registrationPlace" required class="input input-border" placeholder="Введіть місце укладання">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Тип транспортного засобу</label>
            <select name="vehicleType" required class="input input-border">
                <option value="1">Легкові а\м</option>
                <option value="2">Автобуси</option>
                <option value="3">Вантажні автомобілі</option>
                <option value="4">Причепи</option>
                <option value="5">Мотоцикли</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label">Термін дії поліса</label>
            <select name="period" required class="input input-border">
                <option value="1">1 місяць</option>
                <option value="2">3 місяці</option>
                <option value="3">6 місяців</option>
                <option value="4">12 місяців</option>
            </select>
        </div>
        <div class="form__col col-md">
            <label class="form__label">Дата початку</label>
            <input type="date" name="beginningDate" required class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Держ. реєстраційний номер ТЗ</label>
            <input type="text" name="registrationNumber" required class="input input-border" placeholder="Введіть номер ТЗ">
        </div>
        <div class="form__col col-md">
            <label class="form__label">VIN</label>
            <input type="text" name="vin" class="input input-border" placeholder="Введіть VIN">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Прізвище</label>
            <input type="text" name="surname" required class="input input-border" placeholder="Ваше прізвище">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ім'я</label>
            <input type="text" name="name" required class="input input-border" placeholder="Ваше ім'я">
        </div>
        <div class="form__col col-md">
            <label class="form__label">По батькові</label>
            <input type="text" name="secondName" class="input input-border" placeholder="По батькові">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Дата народження</label>
            <input type="date" name="insurerBirthDate" required class="input input-border">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Ідентифікаційний код</label>
            <input type="text" name="identificationCode" class="input input-border" placeholder="Введіть ІПН">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Телефон</label>
            <input type="tel" name="mobilePhoneNumber" required class="input input-border" placeholder="+380XXXXXXXXX">
        </div>
        <div class="form__col col-md">
            <label class="form__label">Email</label>
            <input type="email" name="email" class="input input-border" placeholder="example@gmail.com">
        </div>
        <div class="form__row" style="align-self: end">
            <button type="submit" class="form__button button button-green">Розрахувати вартість</button>
        </div>
    </div>
</form>