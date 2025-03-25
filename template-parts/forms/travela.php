
<?php
// Отримуємо сьогоднішню дату у форматі YYYY-MM-DD
$today = date('Y-m-d');

$min_date = date('Y-m-d', strtotime('+3 days')); // Мінімальна дата: сьогодні + 3 дні
$max_date = date('Y-m-d', strtotime('+366 days'));


?>

<ul class="tab-list">
	<li data-tab="single" class="button-green button form_button active_tab" id="single">Однаразова поїздка</li>
	<li data-tab="multi"class="button-green button form_button" id="multi">Багаторазові поїздки</li>
	<li data-tab="cancel"class="button-green button form_button" id="cancel">Скасувати поїздку</li>
</ul>

<div class="hero-page__form form-calculate form-calculate-travel open-box close_box">
	<div class="form__row row-header">
		<h6 class="h6 form__title titleB">
			Основні дані
		</h6>
	</div>
	<div class="form__row row-content">
		<div class="form__line cols-auto">
			<div class="form__col col-md">
				<label  class="form__label labelB" for="country">Країна: <span title="Початком поїздки вважається перетин адміністративного кордону постійного місця проживання.">!</span></label>
				<input autocomplete="off"  name="country" id="country" placeholder="Наприклад: Туречинна" class="input input-border iCountry">           
			</div>
			<div class="form__col col-sm">
				<label for="start_date1" class="form__label labelB">Дати подорожі: <span title="Початком поїздки вважається перетин адміністративного кордону постійного місця проживання.">!</span></label>
				<div class="row-inc">
					<input autocomplete="off" type="date" name="start_date" id="start_date1" placeholder="дд/мм/рррр"min="<?php echo $today; ?>" class="iCountry input input-border">
			
					<input autocomplete="off" type="date" name="end_date" id="end_date1" placeholder="дд/мм/рррр" min="<?php echo $min_date; ?>" max="<?php echo $max_date; ?>" class="iCountry input input-border">
				</div>
			</div>

			<div class="form__col col-xs multi hiddenT">
				<label for="insured_count" class="form__label labelB">Кіл-ть днів</label>
				<div class="container">
					<div class="row-inc">
						
							<button class="button-green button input-inc no-active" id="decrementDay">-</button>
						
						
							<input  id="quantityDay" class="input-inc input input-border" value="30" min="30">
						
						
							<button class="button-green button input-inc" id="incrementDay">+</button>
						
					</div>
				</div>				
			</div>

			<div class="form__col col-xs">
				<label for="insured_count" class="form__label labelB">Кіл-ть застрахованих</label>
				<div class="container">
					<div class="row-inc">
						
							<button class="button-green button input-inc no-active" id="decrement">-</button>
						
						
							<input  id="quantity" class="input-inc input input-border" value="1" min="1">
						
						
							<button class="button-green button input-inc" id="increment">+</button>
						
					</div>
				</div>				
			</div>
		</div>
	</div>
	<div class="form__row row-content trindel hiddenT cancel">
		<span>Укладення договору можливо не пізніше, ніж за 5 днів до початку подорожі.</span>
	</div>
	<svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
        </svg>
</div>


<div class="hero-page__form form-calculate form-calculate-travel open-box close_box">


				<div class="form__row row-header">
				<h6 class="h6 form__title titleB">
				Розрахунок вартості / Порівняння страхових програм
			
					
					
					</div>
					
	
					<table class="table-nav tree single">
					<tr class="tariff-nav">
					<th></th>
					<th id="prevBtn"><svg class="arrow1 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><span class="section-header-text1">Попередня</span> </th>
									
					<th id="titleN">Світ</th>
					<th id="nextBtn"><span class="section-header-text1">Наступне</span> 
									<svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></th>
					</tr>
					</table>
						<table class="tariffTable tree single">
							<thead>
								<tr class="tariffNameHeader">
									<th ></th>
									<th class="tariff-column full-width" >
										<div class="product-name-header-container">
									
											<div class="product-name-header">
											<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg>
												<a class="tariffNameLink">ЕКОНОМ<br>Світ</a>
												<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg>
											</div>
										</div>
									</th>
									<th class="tHidden  tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">ЕКОНОМ<br>Європа</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tHidden tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">ЕКОНОМ<br>Україна</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">СТАНДАРТ<br>Світ</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tHidden tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">СТАНДАРТ<br>Європа</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tHidden tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">СТАНДАРТ<br>Україна</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">АКТИВНИЙ ТУРИЗМ<br>Світ</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg>
										
									</div></div></th>
									<th class="tHidden tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">АКТИВНИЙ ТУРИЗМ<br>Європа</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg>
										
									</div></div></th>
									<th class="tHidden tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">АКТИВНИЙ ТУРИЗМ<br>Україна</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg>
										
									</div></div></th>
									<th class="tariff-column tmHidden tSel "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">РОЗШИРЕНЕ ПОКРИТТЯ<br>Світ</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tHidden tariff-column tmHidden"><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">РОЗШИРЕНЕ ПОКРИТТЯ<br>Європа</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
									<th class="tHidden tariff-column tmHidden "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">РОЗШИРЕНЕ ПОКРИТТЯ<br>Україна</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
								</tr>
								<tr type="sum" class="tariffVariantsHeader">
									<th>Страхова сума</th>
									<!-- Singletrip ECONOMY -->
									<th pv="10102" tariff="SAE112E.5" sport="" cancel="SXW106" citizenship="XCW101" region="WR" filterregions="W" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="3.0" mincancelsum="3000" maxcancelsum="150000" group="1" default="true" class="tariff-column "><a class="tariffBtn btn-left btn-disabled"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10101" tariff="SAE112E.5" sport="" cancel="SXW106" citizenship="XCW101" region="EU" filterregions="E" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="1.0" mincancelsum="3000" maxcancelsum="150000" group="1" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10001" tariff="SAU012E.5" sport="" cancel="SXU006" citizenship="XCW001" region="UA" filterregions="U" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="UAH" persondaysum="7.50" mincancelsum="1000" maxcancelsum="90000" group="1" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 ₴<a class="tariffBtn btn-right btn-disabled"></a></th>
									<!-- Singletrip STANDARD -->
									<th pv="10104" tariff="SAE112S.5" sport="" cancel="SXW106" citizenship="XCW101" region="WR" filterregions="W" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="3.40" mincancelsum="3000" maxcancelsum="150000" group="2" default="true" class="tariff-column tmHidden"><a class="tariffBtn btn-left btn-disabled"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10103" tariff="SAE112S.5" sport="" cancel="SXW106" citizenship="XCW101" region="EU" filterregions="E" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="1.40" mincancelsum="3000" maxcancelsum="150000" group="2" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10003" tariff="SAU013S.5" sport="" cancel="SXU006" citizenship="XCW001" region="UA" filterregions="U" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="UAH" persondaysum="20.00" mincancelsum="1000" maxcancelsum="90000" group="2" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 ₴<a class="tariffBtn btn-right btn-disabled"></a></th>
									<!-- Singletrip ACTIVE TOURISM -->
									<th pv="10106" tariff="SAE112A.5" sport="*XSW101" cancel="SXW106" citizenship="XCW101" region="WR" filterregions="W" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="5.70" mincancelsum="3000" maxcancelsum="150000" group="3" default="true" class="tariff-column tmHidden"><a class="tariffBtn btn-left btn-disabled"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10105" tariff="SAE112A.5" sport="*XSW101" cancel="SXW106" citizenship="XCW101" region="EU" filterregions="E" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="2.85" mincancelsum="3000" maxcancelsum="150000" group="3" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10005" tariff="SBU012A.5" sport="*XSW001" cancel="SXU006" citizenship="XCW001" region="UA" filterregions="U" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="UAH" persondaysum="23.00" mincancelsum="1000" maxcancelsum="90000" group="3" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 ₴<a class="tariffBtn btn-right btn-disabled"></a></th>
									<!-- Singletrip FULL COVER -->
									<th pv="10108" tariff="SBE112F.5" sport="" cancel="SXW106" citizenship="XCW101" region="WR" filterregions="W" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="5.50" mincancelsum="3000" maxcancelsum="150000" group="4" default="true" class="tariff-column tmHidden tSel"><a class="tariffBtn btn-left btn-disabled"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10107" tariff="SBE112F.5" sport="" cancel="SXW106" citizenship="XCW101" region="EU" filterregions="E" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" persondaysum="2.10" mincancelsum="3000" maxcancelsum="150000" group="4" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>30&nbsp;000 €<a class="tariffBtn btn-right"></a></th>
									<th pv="10007" tariff="SBU013F.5" sport="" cancel="SXU006" citizenship="XCW001" region="UA" filterregions="U" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="UAH" persondaysum="45.50" mincancelsum="1000" maxcancelsum="90000" group="4" default="false" class="tHidden tariff-column tmHidden"><a class="tariffBtn btn-left"></a>45&nbsp;000 ₴<a class="tariffBtn btn-right btn-disabled"></a></th>
								</tr>
							</thead>
							
							<tbody class="tree-item collapsable section-lvl-0">
								<tr class="section-header collapsing-header">
									<td><a class="collapse-link"><span class="section-header-text">Медичні витрати</span> 
									<svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
									<td class="tariff-column ">Програма А<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма А<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма А<br>30&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden">Програма А<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма А<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма А<br>30&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden">Програма А<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма B<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма B<br>30&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden tSel">Програма B<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма B<br>30&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">Програма B<br>45&nbsp;000 ₴</td>
								</tr>
							</tbody>
							<tbody class="tree-section collapsable section-lvl-1 collapsed closeT">
								<tr>
									<td>швидка (невідкладна) допомога на місці виклику</td>
									<td class="tariff-column ">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>лікування в амбулаторно-поліклінічних умовах</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>стаціонарне лікування</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>оплата вартості експрес-тестування та лабораторних досліджень на COVID-19 призначених лікарем в разі наявності ознак захворювання, що підтверджується відповідним медичним звітом, а також амбулаторного та стаціонарного лікування Застрахованої особи на COVID-19</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>оплата вартості медикаментів, призначених для невідкладного лікування, або компенсація витрат у разі самостійного придбання в аптеці призначених лікарем медикаментів</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>невідкладна стоматологічна допомога</td>
										<td class="tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td>
								<td class="tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td>
								<td class="tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td>
								<td class="tariff-column tmHidden tSel">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td>
									</tr>
									<tr>
										<td>послуги з транспортування наземним транспортом потерпілої Застрахованої особи до лікувального закладу, якщо стан здоров’я Застрахованої особи не дозволяє пересуватися самостійно</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>оплата лікування Застрахованої особи у стаціонарі строком до 15 діб після закінчення періоду страхування</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>транспортування та медичний супровід Застрахованої особи, що знаходиться на стаціонарному лікуванні, до медичного закладу місця постійного проживання</td>
										<td class="tariff-column">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td><b>для громадян України</b>: організація та оплата вартості медичної евакуації, тобто послуг, пов’язаних із транспортуванням та медичним супроводом Застрахованої особи, що знаходиться на стаціонарному лікуванні, від місця тимчасового перебування до лікувального закладу за місцем постійного проживання, при наявності медичних показань про необхідність подальшого стаціонарного лікування</td>
										<td class="tariff-column ">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td><b>для іноземних громадян</b>, які тимчасово перебувають в Україні та знаходяться на стаціонарному лікуванні: організація та оплата вартості медичної евакуації, тобто послуг, пов’язаних із транспортуванням до найближчого до місця постійного проживання міжнародного аеропорту або залізничної станції, у випадку перевезення залізницею, включаючи транспортні витрати на супроводжуючу особу, за наявності медичних показань</td>
										<td class="tariff-column ">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>транспортування тіла (репатріація) Застрахованої особи до митного кордону країни (до місця) її попереднього постійного проживання</td>
										<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>ритуальні послуги з поховання тіла Застрахованої особи в країні (за місцем) смерті</td>
										<td class="tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">20%</td>
								<td class="tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">20%</td>
								<td class="tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">20%</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">20%</td>
									</tr>
									<tr>
										<td>компенсація вартості послуг телефонного зв’язку з приводу повідомлення про страховий випадок</td>
										<td class="tariff-column ">100 €</td><td class="tHidden tariff-column tmHidden">100 €</td><td class="tHidden tariff-column tmHidden">200 ₴</td>
								<td class="tariff-column tmHidden">100 €</td><td class="tHidden tariff-column tmHidden">100 €</td><td class="tHidden tariff-column tmHidden">200 ₴</td>
								<td class="tariff-column tmHidden">100 €</td><td class="tHidden tariff-column tmHidden">100 €</td><td class="tHidden tariff-column tmHidden">200 ₴</td>
								<td class="tariff-column tmHidden tSel">100 €</td><td class="tHidden tariff-column tmHidden">100 €</td><td class="tHidden tariff-column tmHidden">200 ₴</td>
									</tr>
									<tr>
										<td>страхування дітей без обмеження віку (від народження) без додаткової оплати (націнки), оплата витрат надання медичної допомоги із залученням, за необхідності, вузькопрофільних лікарів педіатричного напрямку</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>оплата витрат на продовження амбулаторного лікування Застрахованої особи хворої на COVID-19 строком до 15 діб після закінчення строку дії Договору страхування</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td>оплата вартості медичної допомоги при сонячних опіках, алергії</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td>
									</tr>
									<tr>
										<td>оплата вартості медичної допомоги при загостреннях хронічних захворювань</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td>
									</tr>
									<tr>
										<td>оплата вартості невідкладної гінекологічної допомоги при вагітності, що не перевищує 31 тиждень</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmhidden">-</td><td class="tHidden tariff-column tmhidden">-</td><td class="tHidden tariff-column tmhidden">-</td>
								<td class="tariff-column tmhidden">-</td><td class="tHidden tariff-column tmhidden">-</td><td class="tHidden tariff-column tmhidden">-</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td>
									</tr>
									<tr>
										<td>компенсація медичних витрат при передчасних пологах</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td>
									</tr>
									<tr>
										<td>оплата вартості медичної допомоги новонародженому при передчасних пологах</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td>
									</tr>
									<tr>
										<td>оплата вартості медичної допомоги при захворюваннях або травмах, отриманих внаслідок алкогольного сп’яніння (крім посмертної репатріації)</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">10%<br><span class="coverage-value-comment">фр. 50 €</span></td><td class="tHidden tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 50 €</span></td><td class="tHidden tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 500 ₴</span></td>
									</tr>
									<tr>
										<td>оплата медичної допомоги внаслідок терористичних актів та стихійних лих, включно із посмертною репатріацією</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>оплата вартості гіпербаричної терапії (барокамера)</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 10&nbsp;000 €</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 10&nbsp;000 €</span></td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>компенсація витрат на оплату призначених лікарем засобів фіксації при травмах. До засобів фіксації в межах цих умов страхування відносяться милиці, ортези, бандажі і тутори</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1&nbsp;000 ₴</td>
									</tr>
									<tr>
										<td>оплата транспортування Застрахованої особи економічним класом в країну постійного проживання після амбулаторного лікування на COVID-19 або стаціонарного лікування на COVID-19 по закінчення строку дії договору страхування</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td>оплата транспортування Застрахованої особи економічним класом в країну постійного проживання після лікування в стаціонарі по закінченню строку дії договору страхування</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td>оплата витрат на перебування Застрахованої особи за кордоном після закінчення строку дії Договору, якщо її повернення до країни постійного проживання неможливе відразу після виписки із лікарні (оплата витрат здійснюється за не більше 5 діб перебування, однак в межах перших 15 днів після закінчення строку дії Договору)</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 100 €<br>за добу</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 100 €<br>за добу</span></td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td>компенсація витрат на проживання в готелі одного супутника Застрахованої особи (за кордоном) після закінчення строку дії Договору, якщо Застрахована особа перебуває на стаціонарному лікуванні (не більше 5 діб)</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 100 €<br>за добу</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 100 €<br>за добу</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 1%<br>за добу</span></td>
									</tr>
									<tr>
										<td>компенсація вартості проїзду економічним класом в обидва кінці та вартості проживання в готелі (не більше 5 діб) для одного із повнолітніх близьких родичів Застрахованої особи, якщо тривалість її лікування в стаціонарі перевищує 5 діб</td>
										<td class="tariff-column">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 100 €<br>за добу</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 100 €<br>за добу</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 1%<br>за добу</span></td>
									</tr>
									<tr>
										<td>організація, оплата витрат на дострокове повернення до місця постійного проживання та, при необхідності, супровід дітей Застрахованої особи віком до 16 років у разі її госпіталізації або смерті</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 5%</span></td>
									</tr>
									<tr>
										<td>оплата вартості проїзду до країни постійного проживання одного супутника Застрахованої особи у випадку її госпіталізації або смерті</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">до 400 €</span></td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td>оплата витрат на пошук  та рятування Застрахованої особи внаслідок нещасного випадку в горах, на морі, в лісі, в джунглях або інших віддалених місцевостях</td>
										<td class="tariff-column ">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td>
								</tr>
							</tbody>
							<tbody class="tree-item collapsable section-lvl-0">
								<tr class="section-header collapsing-header">
									<td><a class="collapse-link"><span class="section-header-text">Нещасний випадок</span><svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
									<td class="tariff-column ">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">3&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">6&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">6&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden tSel">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">3&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">10&nbsp;000 ₴</td>
								</tr>
							</tbody>
							<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
								<tr>
									<td>тимчасовий розлад здоров’я Застрахованої особи</td>
									<td class="tariff-column tmHidden" >до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td>
								<td class="tariff-column tmHidden">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td>
								<td class="tariff-column tmHidden">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td>
								<td class="tariff-column tmHidden tSel">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td><td class="tHidden tariff-column tmHidden">до 30%</td>
									</tr>
									<tr>
										<td>інвалідність (ІІІ групи)</td>
										<td class="tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td>
								<td class="tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td>
								<td class="tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td>
								<td class="tariff-column tmHidden tSel">60%</td><td class="tHidden tariff-column tmHidden">60%</td><td class="tHidden tariff-column tmHidden">60%</td>
									</tr>
									<tr>
										<td>інвалідність (II групи)</td>
										<td class="tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td>
								<td class="tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td>
								<td class="tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td>
								<td class="tariff-column tmHidden tSel">75%</td><td class="tHidden tariff-column tmHidden">75%</td><td class="tHidden tariff-column tmHidden">75%</td>
									</tr>
									<tr>
										<td>інвалідність (I групи)</td>
										<td class="tariff-column ">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
									</tr>
									<tr>
										<td>смерть Застрахованої особи</td>
										<td class="tariff-column ">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								<td class="tariff-column tmHidden tSel">100%</td><td class="tHidden tariff-column tmHidden">100%</td><td class="tHidden tariff-column tmHidden">100%</td>
								</tr>
							</tbody>
						<tbody class="tree-item collapsable section-lvl-0">
									<tr class="section-header collapsing-header">
										<td><a class="collapse-link"><span class="section-header-text">Страхування цивільної відповідальності</span><svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
								<td class="section-header-symbol tariff-column  symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td>
								<td class="section-header-symbol tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td>
								<td class="tariff-column tmHidden">10&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">10&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">15&nbsp;000 ₴</td>
								<td class="tariff-column tmHidden tSel">15&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">15&nbsp;000 €</td><td class="tHidden tariff-column tmHidden">15&nbsp;000 ₴</td>
								</tr>
							</tbody>
							<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
								<tr>
									<td>відшкодування збитків за нанесення шкоди життю та здоров’ю третіх осіб, завданих в результаті ненавмисних та необережних дій Застрахованої особи</td>
									<td class="tariff-column ">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">70%</td><td class="tHidden tariff-column tmHidden">70%</td><td class="tHidden tariff-column tmHidden">70%</td>
								<td class="tariff-column tmHidden tSel">70%</td><td class="tHidden tariff-column tmHidden">70%</td><td class="tHidden tariff-column tmHidden">70%</td>
									</tr>
									<tr>
										<td>компенсація за біль і страждання потерпілої третьої особи внаслідок ненавмисних дії Застрахованої особи</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">5%</td><td class="tHidden tariff-column tmHidden">5%</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">5%</td><td class="tHidden tariff-column tmHidden">5%</td><td class="tHidden tariff-column tmHidden">-</td>
									</tr>
									<tr>
										<td>відшкодування збитків за нанесення майну третіх осіб, завданих в результаті ненавмисних та необережних дій Застрахованої особи</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">30%</td><td class="tHidden tariff-column tmHidden">30%</td><td class="tHidden tariff-column tmHidden">30%</td>
								<td class="tariff-column tmHidden tSel">30%</td><td class="tHidden tariff-column tmHidden">30%</td><td class="tHidden tariff-column tmHidden">30%</td>
									</tr>
									<tr>
										<td>відшкодування збитків за ненавмисне пошкодження взятого на прокат спортивного інвентарю</td>
										<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">5%</td>
								<td class="tariff-column tmHidden tSel">1%</td><td class="tHidden tariff-column tmHidden">1%</td><td class="tHidden tariff-column tmHidden">5%</td>
									</tr>
									<tr>
										<td>оплата послуг адвоката та перекладача для захисту прав Застрахованої особи під час адміністративних процесів</td>
										<td class="tariff-column ">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">-</td>
								<td class="tariff-column tmHidden tSel">10%</td><td class="tHidden tariff-column tmHidden">10%</td><td class="tHidden tariff-column tmHidden">-</td>
								</tr>
							</tbody>
						<tbody class="tree-item collapsable section-lvl-0">
								<tr class="section-header collapsing-header">
									<td><a class="collapse-link"><span class="section-header-text">Страхування багажу</span><svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
							<td class="section-header-symbol tariff-column  symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td>
							<td class="tariff-column tmHidden">500 €</td><td class="tHidden tariff-column tmHidden">500 €</td><td class="tHidden tariff-column tmHidden">5&nbsp;000 ₴</td>
							<td class="section-header-symbol tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td><td class="section-header-symbol tHidden tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td>
							<td class="tariff-column tmHidden tSel">500 €</td><td class="tHidden tariff-column tmHidden">500 €</td><td class="tHidden tariff-column tmHidden">5&nbsp;000 ₴</td>
								</tr>
							</tbody>
							<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
								<tr>
									<td>компенсація збитків, викликаних пошкодженням, викраденням, знищенням або втратою багажу</td>
									<td class="tariff-column ">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
							<td class="tariff-column tmHidden">100%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">100%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">100%<br><span class="coverage-value-comment">фр. 10%</span></td>
							<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
							<td class="tariff-column tmHidden tSel">100%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">100%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">100%<br><span class="coverage-value-comment">фр. 10%</span></td>
							</tr>
								<tr>
									<td>компенсація витрат на придбання товарів першої необхідності у зв’язку із затримкою багажу більше, ніж на 6 годин</td>
									<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
							<td class="tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 10%</span></td>
							<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
							<td class="tariff-column tmHidden tSel">10%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 10%</span></td><td class="tHidden tariff-column tmHidden">10%<br><span class="coverage-value-comment">фр. 10%</span></td>
								</tr>
								<tr>
									<td>компенсація витрат на оформлення втрачених документів, необхідних для повернення в країну постійного проживання</td>
									<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
							<td class="tariff-column tmHidden"><span class="coverage-value-comment">необхідні<br>витрати<br>фр. 10%</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">необхідні<br>витрати<br>фр. 10%</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">необхідні<br>витрати<br>фр. 10%</span></td>
							<td class="tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td><td class="tHidden tariff-column tmHidden">-</td>
							<td class="tariff-column tmHidden tSel"><span class="coverage-value-comment">необхідні<br>витрати<br>фр. 10%</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">необхідні<br>витрати<br>фр. 10%</span></td><td class="tHidden tariff-column tmHidden"><span class="coverage-value-comment">необхідні<br>витрати<br>фр. 10%</span></td>
								</tr>
							</tbody>
									
							<tfoot>
								<tr class="tariffprice-per-personday">
									<!-- 
									<td>Pojistné pro 1 osobu na jeden den cesty:</td>
									<td>Basic premium for one person and day</td>
									...
									TODO generovat ze systemu 
									-->
									<td>Вартість поліса на 1 (одну) особу та 1 (один) день:</td>
									<td class="tariff-column "><span class="amount">131,34</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">43,78</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">7,50</span> <span class="currency">₴</span></td>

									<td class="tariff-column tmHidden"><span class="amount">148,86</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">61,29</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">20,00</span> <span class="currency">₴</span></td>

									<td class="tariff-column tmHidden"><span class="amount">249,55</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">124,78</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">23,00</span> <span class="currency">₴</span></td>

									<td class="tariff-column tmHidden tSel"><span class="amount">240,80</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">91,94</span> <span class="currency">₴</span></td>
									<td class="tHidden tariff-column tmHidden"><span class="amount">45,50</span> <span class="currency">₴</span></td>
								</tr>
							</tfoot>
						
						
							
	</tbody>
	</table>

	<table class="tariffTable tree multi hiddenT ">
	<thead>
		<tr class="tariffNameHeader">
			<th></th>
			<th class="tariff-column full-width "><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">БІЗНЕС<br>Світ</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
			<th class="tariff-column tmHidden"><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">БІЗНЕС<br>Європа</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
		</tr><tr type="sum" class="tariffVariantsHeader">
			<th>Страхова сума</th>
			<!-- Multitrip BUSINESS World -->
			<th pv="11102" tariff="MAE102B.5" sport="" cancel="MXW106" citizenship="XCW101" region="WR" filterregions="W" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" 
			persondaysum="2.70" mincancelsum="3000" maxcancelsum="150000" mininsureddays="30" maxinsureddays="90" group="1" default="true" class="tariff-column ">
			<a class="tariffBtn btn-left btn-disabled"></a>30&nbsp;000 €<a class="tariffBtn btn-right btn-disabled"></a></th>
			<!-- Multitrip BUSINESS Europe -->
			<th pv="11101" tariff="MAE102B.5" sport="" cancel="MXW106" citizenship="XCW101" region="EU" filterregions="E" maxduration="1y" mindaysbefore="0" mindaysbeforewithcancel="5" currency="EUR" 
			persondaysum="0.90" mincancelsum="3000" maxcancelsum="150000" mininsureddays="30" maxinsureddays="90" group="2" default="true" class="tariff-column tmHidden">
			<a class="tariffBtn btn-left btn-disabled"></a>30&nbsp;000 €<a class="tariffBtn btn-right btn-disabled"></a></th>
		</tr>
	</thead>
	
	<tbody class="tree-item collapsable section-lvl-0">
		<tr class="section-header collapsing-header">
			<td><a class="collapse-link"><span class="section-header-text">Медичні витрати</span><svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
			<td class="tariff-column ">Програма А<br>30&nbsp;000 €</td>
			<td class="tariff-column tmHidden">Програма А<br>30&nbsp;000 €</td>
		</tr>
	</tbody>
	<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
		<tr>
			<td>швидка (невідкладна) допомога на місці виклику</td>
			<td class="tariff-column ">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>лікування в амбулаторно-поліклінічних умовах</td>
			<td class="tariff-column ">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>стаціонарне лікування</td>
			<td class="tariff-column">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>оплата вартості експрес-тестування та лабораторних досліджень на COVID-19 призначених лікарем в разі наявності ознак захворювання, що підтверджується відповідним медичним звітом, а також амбулаторного та стаціонарного лікування Застрахованої особи на COVID-19</td>
			<td class="tariff-column ">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>оплата вартості медикаментів, призначених для невідкладного лікування, або компенсація витрат у разі самостійного придбання в аптеці призначених лікарем медикаментів</td>
			<td class="tariff-column">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>невідкладна стоматологічна допомога</td>
			<td class="tariff-column">1%</td>
      <td class="tariff-column tmHidden">1%</td>
		</tr>
		<tr>
			<td>послуги з транспортування потерпілої Застрахованої особи до лікувального закладу, якщо стан здоров’я Застрахованої особи не дозволяє пересуватися самостійно</td>
			<td class="tariff-column">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>оплата лікування Застрахованої особи у стаціонарі строком до 15 діб після закінчення періоду страхування</td>
			<td class="tariff-column">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>транспортування та медичний супровід Застрахованої особи, що знаходиться на стаціонарному лікуванні, в країну постійного проживання</td>
			<td class="tariff-column">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>транспортування тіла (репатріація) Застрахованої особи до митного кордону країни її попереднього постійного проживання</td>
			<td class="tariff-column">100%</td>
      <td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>ритуальні послуги з поховання тіла Застрахованої особи в країні за місцем смерті</td>
			<td class="tariff-column">10%</td>
      <td class="tariff-column tmHidden">10%</td>
		</tr>
		<tr>
			<td>компенсація вартості послуг телефонного зв’язку з приводу повідомлення про страховий випадок</td>
			<td class="tariff-column">100 €</td>
      <td class="tariff-column tmHidden">100 €</td>
		</tr>
	</tbody>
	<tbody class="tree-item collapsable section-lvl-0">
		<tr class="section-header collapsing-header">
			<td><a class="collapse-link"><span class="section-header-text">Нещасний випадок</span> <svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
			<td class="tariff-column ">3&nbsp;000 €</td>
			<td class="tariff-column tmHidden">3&nbsp;000 €</td>
		</tr>
	</tbody>
	<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
		<tr>
			<td>тимчасовий розлад здоров’я Застрахованої особи</td>
			<td class="tariff-column ">до 30%</td>
			<td class="tariff-column tmHidden">до 30%</td>
		</tr>
		<tr>
			<td>інвалідність (ІІІ групи)</td>
			<td class="tariff-column ">60%</td>
			<td class="tariff-column tmHidden">60%</td>
		</tr>
		<tr>
			<td>інвалідність (II групи)</td>
			<td class="tariff-column ">75%</td>
			<td class="tariff-column tmHidden">75%</td>
		</tr>
		<tr>
			<td>інвалідність (I групи)</td>
			<td class="tariff-column">100%</td>
			<td class="tariff-column tmHidden">100%</td>
		</tr>
		<tr>
			<td>смерть Застрахованої особи</td>
			<td class="tariff-column ">100%</td>
			<td class="tariff-column tmHidden">100%</td>
		</tr>
	</tbody>
	
	<tfoot>
		<tr class="tariffprice-per-personday">
			<!-- 
			<td>Pojistné pro 1 osobu na jeden den cesty:</td>
			<td>Basic premium for one person and day</td>
			...
			TODO generovat ze systemu 
			 -->
			<td>Вартість поліса на 1 (одну) особу та 1 (один) день:</td>
			<td class="tariff-column "><span class="amount">119,01</span> <span class="currency">₴</span></td>
			<td class="tariff-column tmHidden"><span class="amount">39,67</span> <span class="currency">₴</span></td> 
		</tr>
	</tfoot>
</table>

<table class="tariffTable tree cancel hiddenT ">
	<thead>
		<tr class="tariffNameHeader">
			<th></th>
			<th class="tariff-column full-width"><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">СКАСУВАННЯ ПОДОРОЖІ<br>Світ</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
			<th class="tariff-column tmHidden"><div class="product-name-header-container"><div class="product-name-header">	<svg class="arrow2 Rback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg><a class="tariffNameLink">СКАСУВАННЯ ПОДОРОЖІ<br>Європа</a>	<svg class="arrow2 nxt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></div></div></th>
		</tr><tr type="sum" class="tariffVariantsHeader">
			<th>Максимальна страхова сума</th>
			<!-- Trip Cancellation and Interruption World -->
			<th pv="19305" tariff="FXW006" sport="" cancel="*" region="WR" filterregions="WE" maxduration="1y" mindaysbefore="5" mindaysbeforewithcancel="5" currency="UAH" persondaysum="0" mincancelsum="3000" maxcancelsum="150000" group="1" default="true" class="tariff-column "><a class="tariffBtn btn-left btn-disabled"></a>150&nbsp;000 ₴<a class="tariffBtn btn-right btn-disabled"></a></th>
			<!-- Trip Cancellation and Interruption Ukraine -->
			<th pv="19005" tariff="FXU006" sport="" cancel="*" region="UA" filterregions="U" maxduration="1y" mindaysbefore="5" mindaysbeforewithcancel="5" currency="UAH" persondaysum="0" mincancelsum="1000" maxcancelsum="150000" group="2" default="true" class="tariff-column tmHidden"><a class="tariffBtn btn-left btn-disabled"></a>150&nbsp;000 ₴<a class="tariffBtn btn-right btn-disabled"></a></th>
		</tr>
	</thead>
	
	<tbody class="tree-item collapsable section-lvl-0">
		<tr class="section-header collapsing-header">
			<td><a class="collapse-link"><span class="section-header-text">Страховим випадком є неможливість здійснення подорожі внаслідок раптової, непередбаченої і ненавмисної події, що відбулася до дати початку подорожі</span><svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg>
								</a></td>
			<td class="section-header-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
			<td class="section-header-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
	</tbody>
	<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
		<tr>
			<td>смерть, отримання травми або раптове захворювання, в тому числі на COVID-19, які вимагають амбулаторного лікування Застрахованої особи, або члена її сім’ї, або супутника</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>отримання травми або раптове захворювання, в тому числі на COVID-19,які вимагають стаціонарного лікування Застрахованої особи, або члена її сім’ї, або супутника</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>знищення нерухомого майна Застрахованої особи внаслідок пожежі, стихійних лих або протиправних дій третіх осіб</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>викрадення або пошкодження транспортного засобу, на якому планувалося здійснити заброньовану подорож</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>необхідність участі Застрахованої особи у судовому процесі</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>неотримання в’їзної візи Застрахованою особою або ким-небудь із членів її сім’ї, або супутником</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="tariff-column tmHidden">-</td>
		</tr>
		<tr>
			<td>затримка видачі візи Застрахованій особі або кому-небудь із членів її сім’ї, або супутником</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="tariff-column tmHidden">-</td>
		</tr>
		<tr>
			<td>видача візи на інші терміни, ніж подавалося клопотання</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="tariff-column tmHidden">-</td>
		</tr>
		<tr>
			<td>викрадення у Застрахованої особи, або члена її сім’ї, або супутника проїзних документів (квитків), закордонного паспорта, водійського посвідчення або інших документів</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>звільнення з роботи Застрахованої особи за ініціативою роботодавця</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>збої, відмова в роботі машинного обладнання та інші непередбачені технічні несправності із засобом водного транспорту (лайнер, теплохід), подорож (круїз) на якому була заброньована та оплачена</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>запізнення на рейс із України</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
      <td class="tariff-column tmHidden">-</td>
		</tr>
	</tbody>
	<tbody class="tree-item collapsable section-lvl-0">
		<tr class="section-header collapsing-header">
			<td><a class="collapse-link"><span class="section-header-text">Страховим випадком також є факт понесення Застрахованою особою збитків через раптове непередбачуване переривання подорожі внаслідок раптової, непередбаченої і ненавмисної події, що відбулася під час здійснення туристичної подорожі за кордон</span><svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
			<td class="section-header-symbol tariff-column symbol-positive"><i class="fa fa-check"></i></td>
			<td class="section-header-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
	</tbody>
	<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
		<tr>
			<td>смерть, отримання травми або раптове захворювання, в тому числі на COVID-19, Застрахованої особи або члена сім’ї Застрахованої особи</td>
			<td class="table-cell-symbol tariff-column symbol-positive"><i class="fa fa-check"></i></td>
			<td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>знищення нерухомого майна Застрахованої особи внаслідок пожежі, стихійних лих або протиправних дій третіх осіб</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
			<td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
		<tr>
			<td>відмова у в’їзді в країну призначення Застрахованій особі, або члену її сім’ї, або супутнику, якщо така відмова мотивована підозрою органів влади країни подорожі на незаконну трудову міграцію таких осіб або підозрою наявності у них захворювання на COVID-19, якщо цей діагноз буде лабораторно підтверджений висновком ПЛР- тесту в Україні, який в свою чергу має бути пройдений не пізніше 3 (трьох) днів після повернення до місця постійного перебування (проживання)</td>
			<td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
      <td class="tariff-column tmHidden">-</td>
		</tr>
		<tr>
			<td>збої, відмова в роботі машинного обладнання та інші непередбачені технічні несправності із засобом водного транспорту (лайнер, теплохід), подорож (круїз) на якому була заброньована та оплачена</td>
			<td class="table-cell-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
			<td class="table-cell-symbol tariff-column tmHidden symbol-positive"><i class="fa fa-check"></i></td>
		</tr>
	</tbody>
	<tbody class="tree-item collapsable section-lvl-0">
		<tr class="section-header collapsing-header">
			<td><a class="collapse-link"><span class="section-header-text">Страховим випадком також є факт понесення Застрахованою особою збитків, які пов’язані із такими раптовими, непередбачуваними та ненавмисними подіями</span>
			<svg class="arrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
									</svg></a></td>
			<td class="section-header-symbol tariff-column  symbol-positive"><i class="fa fa-check"></i></td>
			<td class="section-header-symbol tariff-column tmHidden symbol-negative"><i class="fa fa-times"></i></td>
		</tr>
	</tbody>
	<tbody class="tree-section collapsable section-lvl-1 collapsed section-collapsed closeT">
		<tr>
			<td>запізнення на рейс із України</td>
			<td class="table-cell-symbol tariff-column symbol-positive"><i class="fa fa-check"></i></td>
			<td class="tariff-column tmHidden">-</td>
		</tr>
		<tr>
			<td>запізнення рейсу, на якому Застрахована особа прибула в Україну</td>
			<td class="table-cell-symbol tariff-column symbol-positive"><i class="fa fa-check"></i></td>
			<td class="tariff-column tmHidden">-</td>
		</tr>
	</tbody>
	
	<tfoot>
		<tr class="tariffprice-per-personday" style="height:15px;line-height:15px;">
			<td>Вартість поліса:</td>
			<td class="tariff-column "><b>5%</b> ціни поїздки</td>
			<td class="tariff-column tmHidden"><b>5%</b> ціни поїздки</td> 
		</tr>
	</tfoot>
</table>

	<div class="row">
			<div class="form__line cols-auto single multi">
				<div class="form__col col-md ">
				<button id="toggleAmount" class="button-green button addUnset">Додати скасування подорожі</button></div>
			</div>
			<div class="form__line cols-auto">
				<div class="form__col col-md hiddenT cancel">
					<label  class="form__label labelB " for="amount">Загальні витрати на поїздку:</label>
					<input   name="amount" id="amount"  class="input input-border iCountry">           
				</div>
			</div>
			<div class="form__line cols-auto sum">
			<span>Разом:</span><span id="sum">0000₴</span>
			</div>
	</div>



	<svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path d="M9 18l6-6-6-6"  stroke-width="2" fill="none"/>
			</svg>
</div>

<div class="hero-page__form form-calculate form-calculate-travel  open-box close_box">
    <div class="form__row row-header">
        <h6 class="h6 form__title titleB">Персональні дані страхувальника</h6>
    </div>
    <div class="form__row row-content">
        <div class="form__line cols-auto person-head-strah dss">
            <!-- Стать -->
            <div class="form__col col-md ">
                <label class="form__label labelB" for="gender">Стать:</label>
                <div class="gender-buttons">
                    <button type="button" id="male" class="gender-button">М</button>
                    <button type="button" id="female" class="gender-button">Ж</button>
                </div>
            </div>
            <!-- Ім'я -->
            <div class="form__col col-md">
                <label class="form__label labelB" for="first_name" >Ім'я:</label>
                <input name="first_name" id="first_name" placeholder="Латинськими літерами" required pattern="[A-Za-z]+" class="input input-border iCountry" required>
            </div>
            <!-- Прізвище -->
            <div class="form__col col-md">
                <label class="form__label labelB " for="last_name">Прізвище:</label>
                <input name="last_name" id="last_name" placeholder="Латинськими літерами" required pattern="[A-Za-z]+" class="input input-border iCountry" required>
            </div>
            <!-- Дата народження -->
            <div class="form__col col-md">
                <label class="form__label labelB" for="birth_date">Дата народження:</label>
                <input autocomplete="off" value="1980-07-14" max="<?php echo $today; ?>" type="date" placeholder="дд/мм/рр" name="birth_date" id="birth_date" class="input input-border iCountry birth_date" required>
            </div>
            <!-- Серія та номер паспорта / № ID картки -->
            <div class="form__col col-md">
                <label class="form__label labelB" for="passport">Серія та номер паспорта / № ID картки:</label>
                <input name="passport" id="passport" value="ВР428713"  placeholder="AA123456 / 123456789" class="input input-border iCountry" required pattern="[A-Z]{2}[0-9]{6}">
                
            </div>
            <!-- ІПН -->
            <div class="form__col col-md">
                <label class="form__label labelB" for="ipn">ІПН:</label>
                <input name="ipn" id="ipn" placeholder="1234567890" value="3441017471"  class="input input-border iCountry" required pattern="[0-9]{10}">
               
            </div>
			   <!-- Місто реєстрації -->
			   <div class="form__col col-md">
                <label class="form__label labelB" for="city">Місто:</label>
                <input name="city" id="city" placeholder="Латинськими літерами" required pattern="[A-Za-z]+" class="input input-border iCountry" required>
            </div>
            <!-- Адреса реєстрації -->
            <div class="form__col col-md">
                <label class="form__label labelB" for="address">Адреса реєстрації:</label>
                <input name="address" id="address" placeholder="Латинськими літерами" required pattern="[A-Za-z]+" class="input input-border iCountry" required>
            </div>
            <!-- Електронна пошта -->
            <div class="form__col col-md">
                <label class="form__label labelB" for="email">Електронна пошта:</label>
                <input type="email" name="email" id="email" placeholder="email@gmail.com" class="input input-border iCountry" required>
            </div>
            <!-- Номер телефона -->
            <div class="form__col col-md">
                <label class="form__label labelB"  for="phone">Номер телефона:</label>
                <input type="tel" name="phone" id="phone" placeholder="+380991114433" class="input input-border iCountry" required>
            </div>
        </div>
        <!-- Чекбокси -->
      <div class="cont-check">
               
                    <label class="form__checkbox">
                        <input type="checkbox" name="confirm_resident" checked required>
                        <span >Підтверджую, що це застрахована особа є резидентом України.</span>
                    </label>
               
                    <label class="form__checkbox">
                        <input type="checkbox" name="not_public_official" checked required>
                        <span>Не є Публічною посадовою особою / родичем державна посадова особа.</span>
                    </label>
              
            </div>
			</div>
       
   
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M9 18l6-6-6-6" stroke-width="2" fill="none"/>
    </svg>
</div>



<div id="insuredFormsContainer" class="hero-page__form form-calculate form-calculate-travel open-box close_box">
    <div class="form__row row-header">
        <h6 class="h6 form__title titleB">Персональні дані застрастрахованих осіб</h6>
    </div>
    
       <!-- Forms will be inserted here -->
	<button class="add-person-btn" id="addPersonBtn">Додати особу</button>
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M9 18l6-6-6-6" stroke-width="2" fill="none"/>
    </svg>
</div> 


<div class="hero-page__form form-calculate form-calculate-travel open-box">
<div class="form__row row-header">
                <h6 class="h6 ">Договір</h6>
               
</div>
      <div class="cont-check">
               
                    <label class="form__checkbox1">
                        <input type="checkbox" name="confirm_resident" checked required>
                        <span >Дійсним я підтверджую, що:</span>
                    </label>
              
                    <ul class="tes_list">
						<li class="tes_item">1. Я прочитав повний текст   <a href="" target="_blank">Публічної оферти (КМ)</a> або  <a href="" target="_blank">Публічної оферти (КМУ)</a> і погоджуюсь їх дотримуватися;</li>
						<li class="tes_item">2. Я підтверджую правильність всіх, зазначених мною персональних даних</li>
						<li class="tes_item">3. Я даю згоду на зберігання, обробку та використання моїх персональних даних і передачу їх третім особам з метою виконання Страховиком своїх зобов’язань за цим договором страхування-полісом. підтверджую правильність всіх, зазначених мною персональних даних</li>
					</ul>
              
            </div>
			</div>
       
   
   
</div>

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













<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="loader" class="loader"></div>
        <div id="loader-text">Будь ласка, зачекайте...</div>
        <div id="creation-text" style="display: none;">створення полісу</div>
        <div id="confirmation-section" style="display: none;">
		<a id="downloadLink" href="#" target="_blank">Попередній перегляд полісу</a>

            <p>Для оформлення полісу</p>
          <div id="liqpay-form-container"></div>
        </div>
    </div>
</div>


