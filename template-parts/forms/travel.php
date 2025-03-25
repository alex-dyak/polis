<form action="#" class="form" method="POST" id="insuranceForm">
	<div class="form__body">
		<div class="form__row row-header">
			<h6 class="h6 form__title">
				дізнайтесь вартість страхування:
			</h6>
		</div>
		<div class="form__row row-content">
			<div class="form-tabs__body">
				<div class="form__line cols-auto">
					<div class="form__col col-md">
						           <label for="package" class="form__label">Пакет страхування</label>
                        <select name="package" id="package" data-class-modif="form">
							<option value="1" selected>Базовий</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					<div class="form__col col-lg">
					 <label for="region" class="form__label">Територія страхування</label>
                        <select name="region" id="region" data-class-modif="1">
							<option value="1" selected data-class="select-placeholder">Оберіть територію страхування</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					<div class="form__col col-md">
						<label for="trip_type" class="form__label">Вид поїздки</label>
						<select name="trip_type" id="trip_type" data-class-modif="form">
							<option value="1" selected>Одноразова</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>


					</div>
					<div class="form__col col-md">
						      <label for="purpose" class="form__label">Мета поїздки</label>
                        <select name="purpose" id="purpose" multiple data-class-modif="mulitple-select">
                           <option value="1" selected>Відпочинок , туризм </option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					<div class="form__col col-sm">
						     <label for="insured_count" class="form__label">Кіл-ть застрахованих</label>
                        <select name="insured_count" id="insured_count" data-class-modif="form">
                           <option value="1" selected>Оберіть кількість</option>
							<option value="2">Пункт 2</option>
							<option value="3">Пункт3</option>
							<option value="4">Пункт 4</option>
						</select>
					</div>
				
					<div class="form__col col-sm">
						   <label for="age" class="form__label">Вік особи</label>
                        <select name="age" id="age" data-class-modif="form">
							<option value="1" selected>Оберіть вік</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					
					<div class="form__col col-sm">
						<label for="#" class="form__label">
							Вік 2ї особи
						</label>
							<select name="form[]" data-class-modif="form">
							<option value="1" selected>Оберіть вік</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					
					<div class="form__col col-sm">
						<label for="#" class="form__label">
							Вік 3ї особи
						</label>
						<select name="form[]" data-class-modif="form">
							<option value="1" selected>Оберіть вік</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					<div class="form__col col-sm">
						<label for="#" class="form__label">
							Вік 4ї особи
						</label>
						<select name="form[]" data-class-modif="form">
							<option value="1" selected>Оберіть вік</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					<div class="form__col col-sm">
						<label for="#" class="form__label">
							Вік 5ї особи
						</label>
						<select name="form[]" data-class-modif="form">
							<option value="1" selected>Оберіть вік</option>
							<option value="2">Пункт №2</option>
							<option value="3">Пункт №3</option>
							<option value="4">Пункт №4</option>
						</select>
					</div>
					<div class="form__col col-sm">
       <label for="start_date" class="form__label">Дата початку</label>
                        <input autocomplete="off" type="date" name="start_date" id="start_date" placeholder="дд/мм/рррр" class="input input-border">
                   </div>
<div class="form__col col-sm">
         <label for="end_date" class="form__label">Дата закінчення</label>
                        <input autocomplete="off" type="date" name="end_date" id="end_date" placeholder="дд/мм/рррр" class="input input-border">
                   
</div>

				</div>
				<div class="form__line line-options">

					<button type="submit" class="form__button button button-green">Розрахувати вартість</button>
				</div>
			</div>
		</div>
		<div class="form__row row-footer">

		</div>
	</div>
</form>

<div id="result" ></div>
<script>
document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(event.target);
    formData.append('action', 'calculate_package'); // Додаємо action
    formData.append('_ajax_nonce', '<?php echo wp_create_nonce('calculate_package_nonce'); ?>'); // Додаємо nonce
  
    fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
        method: 'POST',
        body: new URLSearchParams(formData),
    }).then(response => response.json())
      .then(data => {
          document.getElementById('result').innerText = JSON.stringify(data, null, 2);
      }).catch(error => {
          console.error('Error:', error);
      });
});
function populateAgeSelects() {
    const ageSelects = document.querySelectorAll('.age-select, #age');
    ageSelects.forEach(select => {
        for (let i = 1; i <= 100; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    });
}

document.addEventListener('DOMContentLoaded', populateAgeSelects);
</script>
