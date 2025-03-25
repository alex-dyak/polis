<?php
/*
 * Template Name: Registration
 */
get_header(); ?>

<main class="page">
	<div class="hero-page mb-30">
		<div class="hero-page__bg">
			<picture>
				<source srcset="<?php echo get_template_directory_uri();?>/img/hero-background/image-01.webp" type="image/webp">
				<img src="<?php echo get_template_directory_uri();?>/img/hero-background/image-01.jpg" width="1920" height="450" alt="01">
			</picture>
		</div>
		<div class="hero-page__content">
			<div class="hero-page__container">
				<div class="hero-page__body">
					<h1 class="hero-page__title h1">
						<?php the_title();?>
					</h1>
					<div class="hero-page__form form-registration">
						<form action="#" class="form" method="POST">
							<div class="form__body tabs-type-1">
								<div class="form__row row-header">
									<h6 class="h6 form__title">
										<?php pll_e("Оберіть тип страхування");?>
									</h6>
								</div>
								<div class="form__row row-content">
									<div class="form-tabs">
										<div class="form-tabs__content">
											<div class="form-tabs__body">
												<div class="form__left">
													<div class="form__line">
														<input autocomplete="off" type="text" name="form[]" placeholder="Легкове авто до 1600 см3" class="input input-border">
													</div>
													<div class="form__line">
														<input autocomplete="off" type="text" name="form[]" placeholder="Легкове авто до 1600 см3" class="input input-border">
													</div>
													<div class="form__line">
														<input autocomplete="off" type="text" name="form[]" placeholder="Легкове авто до 1600 см3" class="input input-border">
													</div>
													<div class="form__line">
														<input autocomplete="off" type="text" name="form[]" placeholder="Легкове авто до 1600 см3" class="input input-border">
													</div>
													<div class="form__line">
														<input autocomplete="off" type="text" name="form[]" placeholder="Легкове авто до 1600 см3" class="input input-border">
													</div>
													<div class="form__line">
														<input autocomplete="off" type="text" name="form[]" placeholder="Легкове авто до 1600 см3" class="input input-border">
													</div>

												</div>
												<div class="form__right">
													<div class="company-logo">
														<picture>
															<source srcset="<?php echo get_template_directory_uri();?>/img/company-logo/лого.webp" type="image/webp">
															<img src="<?php echo get_template_directory_uri();?>/img/company-logo/лого.png" width="240" alt="01">
														</picture>
													</div>
													<div class="form__right-footer">
														<div class="price">
															<span class="new">
																1225.22 грн.
															</span>
														</div>
														<a href="#" class="button button-green">Внести зміни</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="form__row row-footer">

								</div>
							</div>
						</form>
						<div id="infoForOption1" style="display: none;">
							<div class="info-tooltip">
								<p>
									Оформити льготну автоцивілку може лише власник авто , при наявності відповідного посвідчення.Дія полісу розповсюджується тільки на нього.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="register-info mb-60">
		<div class="register-info__container">
			<p>
				<b>
					Для оформлення страхового поліса, будь ласка запоніть форму нижче ,згідно ваших документів та на УКРАЇНСЬКІЙ МОВІ !
				</b>
			</p>
		</div>
	</div>

	<div class="registration-information mb-170">
		<div class="registration-information__container">
			<div class="registration-information__content">
				<form class="registration-information__form form" method="POST">
					<div class="registration-information__column">
						<div class="registration-information__block info-block">
							<div class="info-block__body">
								<h5 class="h5">
									Інформація про власника
								</h5>

								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="ПІБ" class="input input-border">
								</div>
								<div class="form__line">
                <label for="dateBirth" class="form__label">
                  Дата народження
                  </label>
									<input autocomplete="off" type="date" name="dateBirth" id="dateBirth" placeholder="дд" class="input input-date input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="email" name="form[]" placeholder="Email" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="tel" name="phone" placeholder="Телефон" class="input input-border">
								</div>

							</div>
						</div>
						<div class="registration-information__block info-block">
							<div class="info-block__body">
								<h5 class="h5">
									Інформація про авто
								</h5>

								<div class="form__line">
									<div class="form__col">
                  <select name="form[]" data-class-modif="form">
										<option value="1" data-class="select-placeholder" selected>Марка авто</option>
										<option value="2">Пункт №2</option>
										<option value="3">Пункт №3</option>
										<option value="4">Пункт №4</option>
									</select>
                  </div>
								</div>
								<div class="form__line">
									<div class="form__col">
                  <select name="form[]" data-class-modif="form">
										<option value="1" data-class="select-placeholder" selected>Модель</option>
										<option value="2">Пункт №2</option>
										<option value="3">Пункт №3</option>
										<option value="4">Пункт №4</option>
									</select>
                  </div>
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Номер кузова" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Номер авто" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Обʼєм двигуна" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Рік випуску" class="input input-border num">
								</div>

							</div>
						</div>
					</div>
					<div class="registration-information__column">
						<div class="registration-information__block info-block">
							<div class="info-block__body">
								<h5 class="h5">
									Персональні дані
								</h5>

								<div class="form__line">
									<div class="form__col">
                  <select name="form[]" data-class-modif="form">
										<option value="1" data-class="select-placeholder" selected>Документ</option>
										<option value="2">Пункт №2</option>
										<option value="3">Пункт №3</option>
										<option value="4">Пункт №4</option>
									</select>
                  </div>
								</div>
								<div class="form__line">
                  <label for="dateRegist" class="form__label">
                  Дата видачі
                  </label>
									<input autocomplete="off" type="date" name="dateRegist" id="dateRegist" placeholder="Дата видачі" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Ким виданий" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Серія документа" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Номер документа" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="Адреса реєстрації" class="input input-border">
								</div>
								<div class="form__line">
									<input autocomplete="off" type="text" name="form[]" placeholder="ІНН" class="input input-border">
								</div>
							</div>
						</div>
						<div class="registration-information__controls">
							<a href="#" class="button button-white">Назад</a>
							<button type="submit" class="button button-green" disabled>Зберегти</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

	<?php get_template_part("template-parts/main/offers"); ?>
	<!-- /.best-offers -->
</main>

<?php get_footer(); ?>
