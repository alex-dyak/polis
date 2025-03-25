<form action="#" class="form" method="POST">
	<div class="form__body tabs-type-1" data-tabs>
		<div class="form__row row-header">
			<h6 class="h6 form__title">
				розрахуйте Вартість ОСЦВ :
			</h6>
			<nav data-tabs-titles class="tabs__navigation form-tabs__navigation">
				<button type="button" class="tabs__title form-tabs__title _tab-active">за параметрами авто</button>
				<button type="button" class="tabs__title form-tabs__title">За держ.номером</button>
			</nav>
		</div>
		<div class="form__row row-content">
			<div class="form-tabs">
				<div data-tabs-body class="form-tabs__content">
					<div class="form-tabs__body">
						<div class="form__line cols-3">
							<div class="form__col">
								<label for="#" class="form__label">
									Тип транпортного засобу
								</label>
								<select name="form[]" data-class-modif="1">
									<option value="1" selected data-class="select-placeholder">Оберіть авто</option>
									<option value="2">Пункт №2</option>
									<option value="3">Пункт №3</option>
									<option value="4">Пункт №4</option>
								</select>
							</div>
							<div class="form__col">
								<label for="#" class="form__label">
									Місто реєстрації власника
								</label>
								<select name="form[]" data-class-modif="1">
									<option value="1" selected data-class="select-placeholder">Оберіть місто</option>
									<option value="2">Пункт №2</option>
									<option value="3">Пункт №3</option>
									<option value="4">Пункт №4</option>
								</select>
							</div>
							<div class="form__col">
								<label for="#" class="form__label">
									Статус особи
								</label>
								<select name="form[]" data-class-modif="1">
									<option value="1" selected data-class="select-placeholder">Статус особи</option>
									<option value="2">Пункт №2</option>
									<option value="3">Пункт №3</option>
									<option value="4">Пункт №4</option>
								</select>
							</div>
						</div>
						<div class="form__line line-options">
							<div class="form__options">
								<div class="checkbox">
									<input id="c_1" class="checkbox__input" type="checkbox" value="1" name="form[]">
									<label for="c_1" class="checkbox__label"><span class="checkbox__text">Є ліцензія таксі</span></label>
								</div>
								<div class="checkbox">
									<input id="c_2" class="checkbox__input" type="checkbox" value="1" name="form[]">
									<label for="c_2" class="checkbox__label"><span class="checkbox__text">Авто на єврономерах</span></label>
								</div>
								<div class="checkbox checkbox-tooltip">
									<input id="c_3" class="checkbox__input" type="checkbox" value="1" name="form[]">
									<label for="c_3" class="checkbox__label"><span class="checkbox__text">Маю пільгу</span> <span class="more-info-icon" data-template="infoForOption1"></span></label>
								</div>
							</div>
							<button type="submit" class="form__button button button-green align-right">Розрахувати вартість</button>
						</div>
					</div>
					<div class="form-tabs__body">
						<div class="form__line">
							<div class="form__col">
								<label for="#" class="form__label">
									Реєстраційний номер
								</label>
								<input autocomplete="off" type="text" name="form[]" placeholder="Введіть реєстраційний номер ТЗ " class="input input-border">
							
							</div>
							<div class="form__col">
								<label for="#" class="form__label">
									Місто реєстрації власника
								</label>
								<select name="form[]" data-class-modif="1">
									<option value="1" selected data-class="select-placeholder">Оберіть місто</option>
									<option value="2">Пункт №2</option>
									<option value="3">Пункт №3</option>
									<option value="4">Пункт №4</option>
								</select>
							</div>
							<div class="form__col">
								<label for="#" class="form__label">
									Статус особи
								</label>
								<select name="form[]" data-class-modif="1">
									<option value="1" selected data-class="select-placeholder">Статус особи</option>
									<option value="2">Пункт №2</option>
									<option value="3">Пункт №3</option>
									<option value="4">Пункт №4</option>
								</select>
							</div>
						</div>
						<div class="form__line line-options">
							<div class="form__options">
								<div class="checkbox">
									<input id="c_1" class="checkbox__input" type="checkbox" value="1" name="form[]">
									<label for="c_1" class="checkbox__label"><span class="checkbox__text">Є ліцензія таксі</span></label>
								</div>
								<div class="checkbox">
									<input id="c_2" class="checkbox__input" type="checkbox" value="1" name="form[]">
									<label for="c_2" class="checkbox__label"><span class="checkbox__text">Авто на єврономерах</span></label>
								</div>
								<div class="checkbox checkbox-tooltip">
									<input id="c_3" class="checkbox__input" type="checkbox" value="1" name="form[]">
									<label for="c_3" class="checkbox__label"><span class="checkbox__text">Маю пільгу</span> <span class="more-info-icon" data-template="infoForOption1"></span></label>
								</div>
							</div>
							<button type="submit" class="form__button button button-green">Розрахувати вартість</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="form__row row-footer">

		</div>
	</div>
</form>