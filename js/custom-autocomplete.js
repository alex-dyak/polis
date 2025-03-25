
// jQuery(document).ready(function ($) {
//     $("#country").autocomplete({
//         source: function (request, response) {
//             // Отримання активних мов з Polylang
//             var activeLanguages = ['uk', 'en']; // Список активних мов (можна додати інші мови)
//             var apiUrl = "http://api.geonames.org/countryInfoJSON";

//             // Масив для зберігання результатів з кожної мови
//             var allCountries = [];

//             // Функція для виконання запитів на кожну мову
//             var fetchData = function (lang, callback) {
//                 $.ajax({
//                     url: apiUrl,
//                     dataType: "json",
//                     data: {
//                         username: "kastiel", // Ваше ім'я користувача Geonames
//                         lang: lang // Кожна мова зі списку активних мов
//                     },
//                     success: function (data) {
//                         console.log('data :>> ', data);
//                         var countries = data.geonames.map(function (country) {
//                             return {
//                                 country: country.countryName,
//                                 continent: country.continent
//                             }
//                         });
//                         allCountries = allCountries.concat(countries); // Додавання результатів до загального масиву
//                         callback();
//                     },
//                     error: function (xhr, textStatus, errorThrown) {
//                         console.log("AJAX Error:", textStatus, errorThrown);
//                         callback(); // Продовження обробки навіть у випадку помилки
//                     }
//                 });
//             };

//             // Функція для обробки результатів після завершення всіх запитів
//             var processResults = function () {
//                 // Фільтрація результатів за допомогою jQuery UI Autocomplete
//                 response($.ui.autocomplete.filter(allCountries, request.term));
//             };

//             // Запуск запитів на кожну мову
//             var requestsCount = activeLanguages.length;
//             activeLanguages.forEach(function (lang) {
//                 fetchData(lang, function () {
//                     requestsCount--;
//                     if (requestsCount === 0) {
//                         processResults(); // Виклик обробки результатів після завершення всіх запитів
//                     }
//                 });
//             });

//         },
//         minLength: 2,
//         select: function (event, ui) {
//             var continentCode = (ui.item.continent === 'EU') ? 'eu' : 'wrl';
//             $("#country").attr('data-continent', continentCode);
//         }

//     });
// });


jQuery(document).ready(function ($) {
    $("#country").autocomplete({
        source: function (request, response) {
            response($.ui.autocomplete.filter(countries, request.term));
        },
        minLength: 2,
        select: function (event, ui) {
            var continentCode;
            if (ui.item.countryCode === 'UA') {
                continentCode = 'UA';
            } else if (ui.item.continent === 'EU') {
                continentCode = 'EU';
            } else {
                continentCode = 'WR';
            }
            $("#country").attr('data-continent', continentCode);
            window.countryChange()

        },

    });


    window.countries = [
        {
            "label": "Андорра",
            "value": "Андорра",
            "continent": "EU",
            "countryCode": "AD"
        },
        {
            "label": "Обʼєднані Арабські Емірати",
            "value": "Обʼєднані Арабські Емірати",
            "continent": "AS",
            "countryCode": "AE"
        },
        {
            "label": "Афганістан",
            "value": "Афганістан",
            "continent": "AS",
            "countryCode": "AF"
        },
        {
            "label": "Антигуа і Барбуда",
            "value": "Антигуа і Барбуда",
            "continent": "NA",
            "countryCode": "AG"
        },
        {
            "label": "Ангілья",
            "value": "Ангілья",
            "continent": "NA",
            "countryCode": "AI"
        },
        {
            "label": "Албанія",
            "value": "Албанія",
            "continent": "EU",
            "countryCode": "AL"
        },
        {
            "label": "Вірменія",
            "value": "Вірменія",
            "continent": "AS",
            "countryCode": "AM"
        },
        {
            "label": "Ангола",
            "value": "Ангола",
            "continent": "AF",
            "countryCode": "AO"
        },
        {
            "label": "Антарктида",
            "value": "Антарктида",
            "continent": "AN",
            "countryCode": "AQ"
        },
        {
            "label": "Аргентина",
            "value": "Аргентина",
            "continent": "SA",
            "countryCode": "AR"
        },
        {
            "label": "Американське Самоа",
            "value": "Американське Самоа",
            "continent": "OC",
            "countryCode": "AS"
        },
        {
            "label": "Австрія",
            "value": "Австрія",
            "continent": "EU",
            "countryCode": "AT"
        },
        {
            "label": "Австралія",
            "value": "Австралія",
            "continent": "OC",
            "countryCode": "AU"
        },
        {
            "label": "Аруба",
            "value": "Аруба",
            "continent": "NA",
            "countryCode": "AW"
        },
        {
            "label": "Аландські острови",
            "value": "Аландські острови",
            "continent": "EU",
            "countryCode": "AX"
        },
        {
            "label": "Азербайджан",
            "value": "Азербайджан",
            "continent": "AS",
            "countryCode": "AZ"
        },
        {
            "label": "Боснія і Герцеговина",
            "value": "Боснія і Герцеговина",
            "continent": "EU",
            "countryCode": "BA"
        },
        {
            "label": "Барбадос",
            "value": "Барбадос",
            "continent": "NA",
            "countryCode": "BB"
        },
        {
            "label": "Бангладеш",
            "value": "Бангладеш",
            "continent": "AS",
            "countryCode": "BD"
        },
        {
            "label": "Бельгія",
            "value": "Бельгія",
            "continent": "EU",
            "countryCode": "BE"
        },
        {
            "label": "Буркіна-Фасо",
            "value": "Буркіна-Фасо",
            "continent": "AF",
            "countryCode": "BF"
        },
        {
            "label": "Болгарія",
            "value": "Болгарія",
            "continent": "EU",
            "countryCode": "BG"
        },
        {
            "label": "Бахрейн",
            "value": "Бахрейн",
            "continent": "AS",
            "countryCode": "BH"
        },
        {
            "label": "Бурунді",
            "value": "Бурунді",
            "continent": "AF",
            "countryCode": "BI"
        },
        {
            "label": "Бенін",
            "value": "Бенін",
            "continent": "AF",
            "countryCode": "BJ"
        },
        {
            "label": "Сен-Бартельмі",
            "value": "Сен-Бартельмі",
            "continent": "NA",
            "countryCode": "BL"
        },
        {
            "label": "Бермуди",
            "value": "Бермуди",
            "continent": "NA",
            "countryCode": "BM"
        },
        {
            "label": "Бруней",
            "value": "Бруней",
            "continent": "AS",
            "countryCode": "BN"
        },
        {
            "label": "Болівія",
            "value": "Болівія",
            "continent": "SA",
            "countryCode": "BO"
        },
        {
            "label": "Карибські Нідерланди",
            "value": "Карибські Нідерланди",
            "continent": "NA",
            "countryCode": "BQ"
        },
        {
            "label": "Бразилія",
            "value": "Бразилія",
            "continent": "SA",
            "countryCode": "BR"
        },
        {
            "label": "Багамські Острови",
            "value": "Багамські Острови",
            "continent": "NA",
            "countryCode": "BS"
        },
        {
            "label": "Бутан",
            "value": "Бутан",
            "continent": "AS",
            "countryCode": "BT"
        },
        {
            "label": "Острів Буве",
            "value": "Острів Буве",
            "continent": "AN",
            "countryCode": "BV"
        },
        {
            "label": "Ботсвана",
            "value": "Ботсвана",
            "continent": "AF",
            "countryCode": "BW"
        },
        {
            "label": "Білорусь",
            "value": "Білорусь",
            "continent": "EU",
            "countryCode": "BY"
        },
        {
            "label": "Беліз",
            "value": "Беліз",
            "continent": "NA",
            "countryCode": "BZ"
        },
        {
            "label": "Канада",
            "value": "Канада",
            "continent": "NA",
            "countryCode": "CA"
        },
        {
            "label": "Кокосові (Кілінг) Острови",
            "value": "Кокосові (Кілінг) Острови",
            "continent": "AS",
            "countryCode": "CC"
        },
        {
            "label": "Демократична республіка Конго",
            "value": "Демократична республіка Конго",
            "continent": "AF",
            "countryCode": "CD"
        },
        {
            "label": "Центральноафриканська Республіка",
            "value": "Центральноафриканська Республіка",
            "continent": "AF",
            "countryCode": "CF"
        },
        {
            "label": "Конґо - Браззавіль",
            "value": "Конґо - Браззавіль",
            "continent": "AF",
            "countryCode": "CG"
        },
        {
            "label": "Швейцарія",
            "value": "Швейцарія",
            "continent": "EU",
            "countryCode": "CH"
        },
        {
            "label": "Кот-дʼІвуар",
            "value": "Кот-дʼІвуар",
            "continent": "AF",
            "countryCode": "CI"
        },
        {
            "label": "Острови Кука",
            "value": "Острови Кука",
            "continent": "OC",
            "countryCode": "CK"
        },
        {
            "label": "Чилі",
            "value": "Чилі",
            "continent": "SA",
            "countryCode": "CL"
        },
        {
            "label": "Камерун",
            "value": "Камерун",
            "continent": "AF",
            "countryCode": "CM"
        },
        {
            "label": "Китай",
            "value": "Китай",
            "continent": "AS",
            "countryCode": "CN"
        },
        {
            "label": "Колумбія",
            "value": "Колумбія",
            "continent": "SA",
            "countryCode": "CO"
        },
        {
            "label": "Коста-Рика",
            "value": "Коста-Рика",
            "continent": "NA",
            "countryCode": "CR"
        },
        {
            "label": "Куба",
            "value": "Куба",
            "continent": "NA",
            "countryCode": "CU"
        },
        {
            "label": "Кабо-Верде",
            "value": "Кабо-Верде",
            "continent": "AF",
            "countryCode": "CV"
        },
        {
            "label": "Кюрасао",
            "value": "Кюрасао",
            "continent": "NA",
            "countryCode": "CW"
        },
        {
            "label": "Острів Різдва",
            "value": "Острів Різдва",
            "continent": "OC",
            "countryCode": "CX"
        },
        {
            "label": "Кіпр",
            "value": "Кіпр",
            "continent": "EU",
            "countryCode": "CY"
        },
        {
            "label": "Чехiя",
            "value": "Чехiя",
            "continent": "EU",
            "countryCode": "CZ"
        },
        {
            "label": "Німеччина",
            "value": "Німеччина",
            "continent": "EU",
            "countryCode": "DE"
        },
        {
            "label": "Джибуті",
            "value": "Джибуті",
            "continent": "AF",
            "countryCode": "DJ"
        },
        {
            "label": "Данія",
            "value": "Данія",
            "continent": "EU",
            "countryCode": "DK"
        },
        {
            "label": "Домініка",
            "value": "Домініка",
            "continent": "NA",
            "countryCode": "DM"
        },
        {
            "label": "Домініканська Республіка",
            "value": "Домініканська Республіка",
            "continent": "NA",
            "countryCode": "DO"
        },
        {
            "label": "Алжир",
            "value": "Алжир",
            "continent": "AF",
            "countryCode": "DZ"
        },
        {
            "label": "Еквадор",
            "value": "Еквадор",
            "continent": "SA",
            "countryCode": "EC"
        },
        {
            "label": "Естонія",
            "value": "Естонія",
            "continent": "EU",
            "countryCode": "EE"
        },
        {
            "label": "Єгипет",
            "value": "Єгипет",
            "continent": "AF",
            "countryCode": "EG"
        },
        {
            "label": "Західна Сахара",
            "value": "Західна Сахара",
            "continent": "AF",
            "countryCode": "EH"
        },
        {
            "label": "Еритрея",
            "value": "Еритрея",
            "continent": "AF",
            "countryCode": "ER"
        },
        {
            "label": "Іспанія",
            "value": "Іспанія",
            "continent": "EU",
            "countryCode": "ES"
        },
        {
            "label": "Ефіопія",
            "value": "Ефіопія",
            "continent": "AF",
            "countryCode": "ET"
        },
        {
            "label": "Фінляндія",
            "value": "Фінляндія",
            "continent": "EU",
            "countryCode": "FI"
        },
        {
            "label": "Фіджі",
            "value": "Фіджі",
            "continent": "OC",
            "countryCode": "FJ"
        },
        {
            "label": "Фолклендські острови",
            "value": "Фолклендські острови",
            "continent": "SA",
            "countryCode": "FK"
        },
        {
            "label": "Мікронезія",
            "value": "Мікронезія",
            "continent": "OC",
            "countryCode": "FM"
        },
        {
            "label": "Фарерські Острови",
            "value": "Фарерські Острови",
            "continent": "EU",
            "countryCode": "FO"
        },
        {
            "label": "Франція",
            "value": "Франція",
            "continent": "EU",
            "countryCode": "FR"
        },
        {
            "label": "Габон",
            "value": "Габон",
            "continent": "AF",
            "countryCode": "GA"
        },
        {
            "label": "Велика Британія",
            "value": "Велика Британія",
            "continent": "EU",
            "countryCode": "GB"
        },
        {
            "label": "Гренада",
            "value": "Гренада",
            "continent": "NA",
            "countryCode": "GD"
        },
        {
            "label": "Грузія",
            "value": "Грузія",
            "continent": "AS",
            "countryCode": "GE"
        },
        {
            "label": "Французька Гвіана",
            "value": "Французька Гвіана",
            "continent": "SA",
            "countryCode": "GF"
        },
        {
            "label": "Гернсі",
            "value": "Гернсі",
            "continent": "EU",
            "countryCode": "GG"
        },
        {
            "label": "Гана",
            "value": "Гана",
            "continent": "AF",
            "countryCode": "GH"
        },
        {
            "label": "Гібралтар",
            "value": "Гібралтар",
            "continent": "EU",
            "countryCode": "GI"
        },
        {
            "label": "Гренландія",
            "value": "Гренландія",
            "continent": "NA",
            "countryCode": "GL"
        },
        {
            "label": "Гамбія",
            "value": "Гамбія",
            "continent": "AF",
            "countryCode": "GM"
        },
        {
            "label": "Гвінея",
            "value": "Гвінея",
            "continent": "AF",
            "countryCode": "GN"
        },
        {
            "label": "Гваделупа",
            "value": "Гваделупа",
            "continent": "NA",
            "countryCode": "GP"
        },
        {
            "label": "Екваторіальна Гвінея",
            "value": "Екваторіальна Гвінея",
            "continent": "AF",
            "countryCode": "GQ"
        },
        {
            "label": "Греція",
            "value": "Греція",
            "continent": "EU",
            "countryCode": "GR"
        },
        {
            "label": "Південна Джорджія та Південні Сандвічеві Острови",
            "value": "Південна Джорджія та Південні Сандвічеві Острови",
            "continent": "AN",
            "countryCode": "GS"
        },
        {
            "label": "Гватемала",
            "value": "Гватемала",
            "continent": "NA",
            "countryCode": "GT"
        },
        {
            "label": "Гуам",
            "value": "Гуам",
            "continent": "OC",
            "countryCode": "GU"
        },
        {
            "label": "Гвінея-Бісау",
            "value": "Гвінея-Бісау",
            "continent": "AF",
            "countryCode": "GW"
        },
        {
            "label": "Гаяна",
            "value": "Гаяна",
            "continent": "SA",
            "countryCode": "GY"
        },
        {
            "label": "Гонконг",
            "value": "Гонконг",
            "continent": "AS",
            "countryCode": "HK"
        },
        {
            "label": "Острови Герд і Макдоналд",
            "value": "Острови Герд і Макдоналд",
            "continent": "AN",
            "countryCode": "HM"
        },
        {
            "label": "Гондурас",
            "value": "Гондурас",
            "continent": "NA",
            "countryCode": "HN"
        },
        {
            "label": "Хорватія",
            "value": "Хорватія",
            "continent": "EU",
            "countryCode": "HR"
        },
        {
            "label": "Гаїті",
            "value": "Гаїті",
            "continent": "NA",
            "countryCode": "HT"
        },
        {
            "label": "Угорщина",
            "value": "Угорщина",
            "continent": "EU",
            "countryCode": "HU"
        },
        {
            "label": "Індонезія",
            "value": "Індонезія",
            "continent": "AS",
            "countryCode": "ID"
        },
        {
            "label": "Ірландія",
            "value": "Ірландія",
            "continent": "EU",
            "countryCode": "IE"
        },
        {
            "label": "Ізраїль",
            "value": "Ізраїль",
            "continent": "AS",
            "countryCode": "IL"
        },
        {
            "label": "Острів Мен",
            "value": "Острів Мен",
            "continent": "EU",
            "countryCode": "IM"
        },
        {
            "label": "Індія",
            "value": "Індія",
            "continent": "AS",
            "countryCode": "IN"
        },
        {
            "label": "Британські території Індійського океану",
            "value": "Британські території Індійського океану",
            "continent": "AS",
            "countryCode": "IO"
        },
        {
            "label": "Ірак",
            "value": "Ірак",
            "continent": "AS",
            "countryCode": "IQ"
        },
        {
            "label": "Іран",
            "value": "Іран",
            "continent": "AS",
            "countryCode": "IR"
        },
        {
            "label": "Ісландія",
            "value": "Ісландія",
            "continent": "EU",
            "countryCode": "IS"
        },
        {
            "label": "Італія",
            "value": "Італія",
            "continent": "EU",
            "countryCode": "IT"
        },
        {
            "label": "Джерсі",
            "value": "Джерсі",
            "continent": "EU",
            "countryCode": "JE"
        },
        {
            "label": "Ямайка",
            "value": "Ямайка",
            "continent": "NA",
            "countryCode": "JM"
        },
        {
            "label": "Йорданія",
            "value": "Йорданія",
            "continent": "AS",
            "countryCode": "JO"
        },
        {
            "label": "Японія",
            "value": "Японія",
            "continent": "AS",
            "countryCode": "JP"
        },
        {
            "label": "Кенія",
            "value": "Кенія",
            "continent": "AF",
            "countryCode": "KE"
        },
        {
            "label": "Киргизстан",
            "value": "Киргизстан",
            "continent": "AS",
            "countryCode": "KG"
        },
        {
            "label": "Камбоджа",
            "value": "Камбоджа",
            "continent": "AS",
            "countryCode": "KH"
        },
        {
            "label": "Кірибаті",
            "value": "Кірибаті",
            "continent": "OC",
            "countryCode": "KI"
        },
        {
            "label": "Комори",
            "value": "Комори",
            "continent": "AF",
            "countryCode": "KM"
        },
        {
            "label": "Сент-Кітс і Невіс",
            "value": "Сент-Кітс і Невіс",
            "continent": "NA",
            "countryCode": "KN"
        },
        {
            "label": "Північна Корея",
            "value": "Північна Корея",
            "continent": "AS",
            "countryCode": "KP"
        },
        {
            "label": "Південна Корея",
            "value": "Південна Корея",
            "continent": "AS",
            "countryCode": "KR"
        },
        {
            "label": "Кувейт",
            "value": "Кувейт",
            "continent": "AS",
            "countryCode": "KW"
        },
        {
            "label": "Кайманові острови",
            "value": "Кайманові острови",
            "continent": "NA",
            "countryCode": "KY"
        },
        {
            "label": "Казахстан",
            "value": "Казахстан",
            "continent": "AS",
            "countryCode": "KZ"
        },
        {
            "label": "Лаос",
            "value": "Лаос",
            "continent": "AS",
            "countryCode": "LA"
        },
        {
            "label": "Ліван",
            "value": "Ліван",
            "continent": "AS",
            "countryCode": "LB"
        },
        {
            "label": "Сент-Люсія",
            "value": "Сент-Люсія",
            "continent": "NA",
            "countryCode": "LC"
        },
        {
            "label": "Ліхтенштейн",
            "value": "Ліхтенштейн",
            "continent": "EU",
            "countryCode": "LI"
        },
        {
            "label": "Шрі-Ланка",
            "value": "Шрі-Ланка",
            "continent": "AS",
            "countryCode": "LK"
        },
        {
            "label": "Ліберія",
            "value": "Ліберія",
            "continent": "AF",
            "countryCode": "LR"
        },
        {
            "label": "Лесото",
            "value": "Лесото",
            "continent": "AF",
            "countryCode": "LS"
        },
        {
            "label": "Литва",
            "value": "Литва",
            "continent": "EU",
            "countryCode": "LT"
        },
        {
            "label": "Люксембург",
            "value": "Люксембург",
            "continent": "EU",
            "countryCode": "LU"
        },
        {
            "label": "Латвія",
            "value": "Латвія",
            "continent": "EU",
            "countryCode": "LV"
        },
        {
            "label": "Лівія",
            "value": "Лівія",
            "continent": "AF",
            "countryCode": "LY"
        },
        {
            "label": "Марокко",
            "value": "Марокко",
            "continent": "AF",
            "countryCode": "MA"
        },
        {
            "label": "Монако",
            "value": "Монако",
            "continent": "EU",
            "countryCode": "MC"
        },
        {
            "label": "Молдова",
            "value": "Молдова",
            "continent": "EU",
            "countryCode": "MD"
        },
        {
            "label": "Чорногорія",
            "value": "Чорногорія",
            "continent": "EU",
            "countryCode": "ME"
        },
        {
            "label": "Сен-Мартен",
            "value": "Сен-Мартен",
            "continent": "NA",
            "countryCode": "MF"
        },
        {
            "label": "Мадагаскар",
            "value": "Мадагаскар",
            "continent": "AF",
            "countryCode": "MG"
        },
        {
            "label": "Маршаллові Острови",
            "value": "Маршаллові Острови",
            "continent": "OC",
            "countryCode": "MH"
        },
        {
            "label": "Північна Македонія",
            "value": "Північна Македонія",
            "continent": "EU",
            "countryCode": "MK"
        },
        {
            "label": "Малі",
            "value": "Малі",
            "continent": "AF",
            "countryCode": "ML"
        },
        {
            "label": "Мʼянма (Бірма)",
            "value": "Мʼянма (Бірма)",
            "continent": "AS",
            "countryCode": "MM"
        },
        {
            "label": "Монголія",
            "value": "Монголія",
            "continent": "AS",
            "countryCode": "MN"
        },
        {
            "label": "Макао",
            "value": "Макао",
            "continent": "AS",
            "countryCode": "MO"
        },
        {
            "label": "Північні Маріанські Острови",
            "value": "Північні Маріанські Острови",
            "continent": "OC",
            "countryCode": "MP"
        },
        {
            "label": "Мартиніка",
            "value": "Мартиніка",
            "continent": "NA",
            "countryCode": "MQ"
        },
        {
            "label": "Мавританія",
            "value": "Мавританія",
            "continent": "AF",
            "countryCode": "MR"
        },
        {
            "label": "Монтсеррат",
            "value": "Монтсеррат",
            "continent": "NA",
            "countryCode": "MS"
        },
        {
            "label": "Мальта",
            "value": "Мальта",
            "continent": "EU",
            "countryCode": "MT"
        },
        {
            "label": "Маврикій",
            "value": "Маврикій",
            "continent": "AF",
            "countryCode": "MU"
        },
        {
            "label": "Мальдіви",
            "value": "Мальдіви",
            "continent": "AS",
            "countryCode": "MV"
        },
        {
            "label": "Малаві",
            "value": "Малаві",
            "continent": "AF",
            "countryCode": "MW"
        },
        {
            "label": "Мексика",
            "value": "Мексика",
            "continent": "NA",
            "countryCode": "MX"
        },
        {
            "label": "Малайзія",
            "value": "Малайзія",
            "continent": "AS",
            "countryCode": "MY"
        },
        {
            "label": "Мозамбік",
            "value": "Мозамбік",
            "continent": "AF",
            "countryCode": "MZ"
        },
        {
            "label": "Намібія",
            "value": "Намібія",
            "continent": "AF",
            "countryCode": "NA"
        },
        {
            "label": "Нова Каледонія",
            "value": "Нова Каледонія",
            "continent": "OC",
            "countryCode": "NC"
        },
        {
            "label": "Нігер",
            "value": "Нігер",
            "continent": "AF",
            "countryCode": "NE"
        },
        {
            "label": "Острів Норфолк",
            "value": "Острів Норфолк",
            "continent": "OC",
            "countryCode": "NF"
        },
        {
            "label": "Нігерія",
            "value": "Нігерія",
            "continent": "AF",
            "countryCode": "NG"
        },
        {
            "label": "Нікарагуа",
            "value": "Нікарагуа",
            "continent": "NA",
            "countryCode": "NI"
        },
        {
            "label": "Нідерланди",
            "value": "Нідерланди",
            "continent": "EU",
            "countryCode": "NL"
        },
        {
            "label": "Норвегія",
            "value": "Норвегія",
            "continent": "EU",
            "countryCode": "NO"
        },
        {
            "label": "Непал",
            "value": "Непал",
            "continent": "AS",
            "countryCode": "NP"
        },
        {
            "label": "Науру",
            "value": "Науру",
            "continent": "OC",
            "countryCode": "NR"
        },
        {
            "label": "Нія",
            "value": "Нія",
            "continent": "OC",
            "countryCode": "NU"
        },
        {
            "label": "Нова Зеландія",
            "value": "Нова Зеландія",
            "continent": "OC",
            "countryCode": "NZ"
        },
        {
            "label": "Оман",
            "value": "Оман",
            "continent": "AS",
            "countryCode": "OM"
        },
        {
            "label": "Панама",
            "value": "Панама",
            "continent": "NA",
            "countryCode": "PA"
        },
        {
            "label": "Перу",
            "value": "Перу",
            "continent": "SA",
            "countryCode": "PE"
        },
        {
            "label": "Французька Полінезія",
            "value": "Французька Полінезія",
            "continent": "OC",
            "countryCode": "PF"
        },
        {
            "label": "Папуа-Нова Гвінея",
            "value": "Папуа-Нова Гвінея",
            "continent": "OC",
            "countryCode": "PG"
        },
        {
            "label": "Філіппіни",
            "value": "Філіппіни",
            "continent": "AS",
            "countryCode": "PH"
        },
        {
            "label": "Пакистан",
            "value": "Пакистан",
            "continent": "AS",
            "countryCode": "PK"
        },
        {
            "label": "Польща",
            "value": "Польща",
            "continent": "EU",
            "countryCode": "PL"
        },
        {
            "label": "Сен-Пʼєр і Мікелон",
            "value": "Сен-Пʼєр і Мікелон",
            "continent": "NA",
            "countryCode": "PM"
        },
        {
            "label": "Острови Піткерн",
            "value": "Острови Піткерн",
            "continent": "OC",
            "countryCode": "PN"
        },
        {
            "label": "Пуерто-Рико",
            "value": "Пуерто-Рико",
            "continent": "NA",
            "countryCode": "PR"
        },
        {
            "label": "Палестина",
            "value": "Палестина",
            "continent": "AS",
            "countryCode": "PS"
        },
        {
            "label": "Португалія",
            "value": "Португалія",
            "continent": "EU",
            "countryCode": "PT"
        },
        {
            "label": "Палау",
            "value": "Палау",
            "continent": "OC",
            "countryCode": "PW"
        },
        {
            "label": "Парагвай",
            "value": "Парагвай",
            "continent": "SA",
            "countryCode": "PY"
        },
        {
            "label": "Катар",
            "value": "Катар",
            "continent": "AS",
            "countryCode": "QA"
        },
        {
            "label": "Реюньйон",
            "value": "Реюньйон",
            "continent": "AF",
            "countryCode": "RE"
        },
        {
            "label": "Румунія",
            "value": "Румунія",
            "continent": "EU",
            "countryCode": "RO"
        },
        {
            "label": "Сербія",
            "value": "Сербія",
            "continent": "EU",
            "countryCode": "RS"
        },
        {
            "label": "Росія",
            "value": "Росія",
            "continent": "EU",
            "countryCode": "RU"
        },
        {
            "label": "Руанда",
            "value": "Руанда",
            "continent": "AF",
            "countryCode": "RW"
        },
        {
            "label": "Саудівська Аравія",
            "value": "Саудівська Аравія",
            "continent": "AS",
            "countryCode": "SA"
        },
        {
            "label": "Соломонові Острови",
            "value": "Соломонові Острови",
            "continent": "OC",
            "countryCode": "SB"
        },
        {
            "label": "Сейшельські Острови",
            "value": "Сейшельські Острови",
            "continent": "AF",
            "countryCode": "SC"
        },
        {
            "label": "Судан",
            "value": "Судан",
            "continent": "AF",
            "countryCode": "SD"
        },
        {
            "label": "Швеція",
            "value": "Швеція",
            "continent": "EU",
            "countryCode": "SE"
        },
        {
            "label": "Сінгапур",
            "value": "Сінгапур",
            "continent": "AS",
            "countryCode": "SG"
        },
        {
            "label": "Острів Святої Єлени",
            "value": "Острів Святої Єлени",
            "continent": "AF",
            "countryCode": "SH"
        },
        {
            "label": "Словенія",
            "value": "Словенія",
            "continent": "EU",
            "countryCode": "SI"
        },
        {
            "label": "Шпіцберген та Ян-Маєн",
            "value": "Шпіцберген та Ян-Маєн",
            "continent": "EU",
            "countryCode": "SJ"
        },
        {
            "label": "Словаччина",
            "value": "Словаччина",
            "continent": "EU",
            "countryCode": "SK"
        },
        {
            "label": "Сьєрра-Леоне",
            "value": "Сьєрра-Леоне",
            "continent": "AF",
            "countryCode": "SL"
        },
        {
            "label": "Сан-Марино",
            "value": "Сан-Марино",
            "continent": "EU",
            "countryCode": "SM"
        },
        {
            "label": "Сенегал",
            "value": "Сенегал",
            "continent": "AF",
            "countryCode": "SN"
        },
        {
            "label": "Сомалі",
            "value": "Сомалі",
            "continent": "AF",
            "countryCode": "SO"
        },
        {
            "label": "Суринам",
            "value": "Суринам",
            "continent": "SA",
            "countryCode": "SR"
        },
        {
            "label": "Південний Судан",
            "value": "Південний Судан",
            "continent": "AF",
            "countryCode": "SS"
        },
        {
            "label": "Сан Томе та Принсіпі",
            "value": "Сан Томе та Принсіпі",
            "continent": "AF",
            "countryCode": "ST"
        },
        {
            "label": "Сальвадор",
            "value": "Сальвадор",
            "continent": "NA",
            "countryCode": "SV"
        },
        {
            "label": "Сінт-Мартен",
            "value": "Сінт-Мартен",
            "continent": "NA",
            "countryCode": "SX"
        },
        {
            "label": "Сирія",
            "value": "Сирія",
            "continent": "AS",
            "countryCode": "SY"
        },
        {
            "label": "Есватіні",
            "value": "Есватіні",
            "continent": "AF",
            "countryCode": "SZ"
        },
        {
            "label": "Острови Теркс і Кайкос",
            "value": "Острови Теркс і Кайкос",
            "continent": "NA",
            "countryCode": "TC"
        },
        {
            "label": "Чад",
            "value": "Чад",
            "continent": "AF",
            "countryCode": "TD"
        },
        {
            "label": "Французькі Південні Території",
            "value": "Французькі Південні Території",
            "continent": "AN",
            "countryCode": "TF"
        },
        {
            "label": "Того",
            "value": "Того",
            "continent": "AF",
            "countryCode": "TG"
        },
        {
            "label": "Таїланд",
            "value": "Таїланд",
            "continent": "AS",
            "countryCode": "TH"
        },
        {
            "label": "Таджикистан",
            "value": "Таджикистан",
            "continent": "AS",
            "countryCode": "TJ"
        },
        {
            "label": "Токелау",
            "value": "Токелау",
            "continent": "OC",
            "countryCode": "TK"
        },
        {
            "label": "Тімор-Лешті",
            "value": "Тімор-Лешті",
            "continent": "OC",
            "countryCode": "TL"
        },
        {
            "label": "Туркменістан",
            "value": "Туркменістан",
            "continent": "AS",
            "countryCode": "TM"
        },
        {
            "label": "Туніс",
            "value": "Туніс",
            "continent": "AF",
            "countryCode": "TN"
        },
        {
            "label": "Тонга",
            "value": "Тонга",
            "continent": "OC",
            "countryCode": "TO"
        },
        {
            "label": "Туреччина",
            "value": "Туреччина",
            "continent": "AS",
            "countryCode": "TR"
        },
        {
            "label": "Тринідад і Тобаго",
            "value": "Тринідад і Тобаго",
            "continent": "NA",
            "countryCode": "TT"
        },
        {
            "label": "Тувалу",
            "value": "Тувалу",
            "continent": "OC",
            "countryCode": "TV"
        },
        {
            "label": "Тайвань",
            "value": "Тайвань",
            "continent": "AS",
            "countryCode": "TW"
        },
        {
            "label": "Танзанія",
            "value": "Танзанія",
            "continent": "AF",
            "countryCode": "TZ"
        },
        {
            "label": "Україна",
            "value": "Україна",
            "continent": "EU",
            "countryCode": "UA"
        },
        {
            "label": "Уганда",
            "value": "Уганда",
            "continent": "AF",
            "countryCode": "UG"
        },
        {
            "label": "Віддалені Острови США",
            "value": "Віддалені Острови США",
            "continent": "OC",
            "countryCode": "UM"
        },
        {
            "label": "США",
            "value": "США",
            "continent": "NA",
            "countryCode": "US"
        },
        {
            "label": "Уругвай",
            "value": "Уругвай",
            "continent": "SA",
            "countryCode": "UY"
        },
        {
            "label": "Узбекистан",
            "value": "Узбекистан",
            "continent": "AS",
            "countryCode": "UZ"
        },
        {
            "label": "Ватикан",
            "value": "Ватикан",
            "continent": "EU",
            "countryCode": "VA"
        },
        {
            "label": "Сент-Вінсент і Ґренадіни",
            "value": "Сент-Вінсент і Ґренадіни",
            "continent": "NA",
            "countryCode": "VC"
        },
        {
            "label": "Венесуела",
            "value": "Венесуела",
            "continent": "SA",
            "countryCode": "VE"
        },
        {
            "label": "Віргінські острови Британії",
            "value": "Віргінські острови Британії",
            "continent": "NA",
            "countryCode": "VG"
        },
        {
            "label": "Віргінські Острови (США)",
            "value": "Віргінські Острови (США)",
            "continent": "NA",
            "countryCode": "VI"
        },
        {
            "label": "Вʼєтнам",
            "value": "Вʼєтнам",
            "continent": "AS",
            "countryCode": "VN"
        },
        {
            "label": "Вануату",
            "value": "Вануату",
            "continent": "OC",
            "countryCode": "VU"
        },
        {
            "label": "Уолліс і Футуна",
            "value": "Уолліс і Футуна",
            "continent": "OC",
            "countryCode": "WF"
        },
        {
            "label": "Самоа",
            "value": "Самоа",
            "continent": "OC",
            "countryCode": "WS"
        },
        {
            "label": "Косово",
            "value": "Косово",
            "continent": "EU",
            "countryCode": "XK"
        },
        {
            "label": "Ємен",
            "value": "Ємен",
            "continent": "AS",
            "countryCode": "YE"
        },
        {
            "label": "Майот",
            "value": "Майот",
            "continent": "AF",
            "countryCode": "YT"
        },
        {
            "label": "Південно-Африканська Республіка",
            "value": "Південно-Африканська Республіка",
            "continent": "AF",
            "countryCode": "ZA"
        },
        {
            "label": "Замбія",
            "value": "Замбія",
            "continent": "AF",
            "countryCode": "ZM"
        },
        {
            "label": "Зімбабве",
            "value": "Зімбабве",
            "continent": "AF",
            "countryCode": "ZW"
        },
        {
            "label": "Andorra",
            "value": "Andorra",
            "continent": "EU",
            "countryCode": "AD"
        },
        {
            "label": "United Arab Emirates",
            "value": "United Arab Emirates",
            "continent": "AS",
            "countryCode": "AE"
        },
        {
            "label": "Afghanistan",
            "value": "Afghanistan",
            "continent": "AS",
            "countryCode": "AF"
        },
        {
            "label": "Antigua and Barbuda",
            "value": "Antigua and Barbuda",
            "continent": "NA",
            "countryCode": "AG"
        },
        {
            "label": "Anguilla",
            "value": "Anguilla",
            "continent": "NA",
            "countryCode": "AI"
        },
        {
            "label": "Albania",
            "value": "Albania",
            "continent": "EU",
            "countryCode": "AL"
        },
        {
            "label": "Armenia",
            "value": "Armenia",
            "continent": "AS",
            "countryCode": "AM"
        },
        {
            "label": "Angola",
            "value": "Angola",
            "continent": "AF",
            "countryCode": "AO"
        },
        {
            "label": "Antarctica",
            "value": "Antarctica",
            "continent": "AN",
            "countryCode": "AQ"
        },
        {
            "label": "Argentina",
            "value": "Argentina",
            "continent": "SA",
            "countryCode": "AR"
        },
        {
            "label": "American Samoa",
            "value": "American Samoa",
            "continent": "OC",
            "countryCode": "AS"
        },
        {
            "label": "Austria",
            "value": "Austria",
            "continent": "EU",
            "countryCode": "AT"
        },
        {
            "label": "Australia",
            "value": "Australia",
            "continent": "OC",
            "countryCode": "AU"
        },
        {
            "label": "Aruba",
            "value": "Aruba",
            "continent": "NA",
            "countryCode": "AW"
        },
        {
            "label": "Åland",
            "value": "Åland",
            "continent": "EU",
            "countryCode": "AX"
        },
        {
            "label": "Azerbaijan",
            "value": "Azerbaijan",
            "continent": "AS",
            "countryCode": "AZ"
        },
        {
            "label": "Bosnia and Herzegovina",
            "value": "Bosnia and Herzegovina",
            "continent": "EU",
            "countryCode": "BA"
        },
        {
            "label": "Barbados",
            "value": "Barbados",
            "continent": "NA",
            "countryCode": "BB"
        },
        {
            "label": "Bangladesh",
            "value": "Bangladesh",
            "continent": "AS",
            "countryCode": "BD"
        },
        {
            "label": "Belgium",
            "value": "Belgium",
            "continent": "EU",
            "countryCode": "BE"
        },
        {
            "label": "Burkina Faso",
            "value": "Burkina Faso",
            "continent": "AF",
            "countryCode": "BF"
        },
        {
            "label": "Bulgaria",
            "value": "Bulgaria",
            "continent": "EU",
            "countryCode": "BG"
        },
        {
            "label": "Bahrain",
            "value": "Bahrain",
            "continent": "AS",
            "countryCode": "BH"
        },
        {
            "label": "Burundi",
            "value": "Burundi",
            "continent": "AF",
            "countryCode": "BI"
        },
        {
            "label": "Benin",
            "value": "Benin",
            "continent": "AF",
            "countryCode": "BJ"
        },
        {
            "label": "Saint Barthélemy",
            "value": "Saint Barthélemy",
            "continent": "NA",
            "countryCode": "BL"
        },
        {
            "label": "Bermuda",
            "value": "Bermuda",
            "continent": "NA",
            "countryCode": "BM"
        },
        {
            "label": "Brunei",
            "value": "Brunei",
            "continent": "AS",
            "countryCode": "BN"
        },
        {
            "label": "Bolivia",
            "value": "Bolivia",
            "continent": "SA",
            "countryCode": "BO"
        },
        {
            "label": "Bonaire, Sint Eustatius, and Saba",
            "value": "Bonaire, Sint Eustatius, and Saba",
            "continent": "NA",
            "countryCode": "BQ"
        },
        {
            "label": "Brazil",
            "value": "Brazil",
            "continent": "SA",
            "countryCode": "BR"
        },
        {
            "label": "Bahamas",
            "value": "Bahamas",
            "continent": "NA",
            "countryCode": "BS"
        },
        {
            "label": "Bhutan",
            "value": "Bhutan",
            "continent": "AS",
            "countryCode": "BT"
        },
        {
            "label": "Bouvet Island",
            "value": "Bouvet Island",
            "continent": "AN",
            "countryCode": "BV"
        },
        {
            "label": "Botswana",
            "value": "Botswana",
            "continent": "AF",
            "countryCode": "BW"
        },
        {
            "label": "Belarus",
            "value": "Belarus",
            "continent": "EU",
            "countryCode": "BY"
        },
        {
            "label": "Belize",
            "value": "Belize",
            "continent": "NA",
            "countryCode": "BZ"
        },
        {
            "label": "Canada",
            "value": "Canada",
            "continent": "NA",
            "countryCode": "CA"
        },
        {
            "label": "Cocos (Keeling) Islands",
            "value": "Cocos (Keeling) Islands",
            "continent": "AS",
            "countryCode": "CC"
        },
        {
            "label": "DR Congo",
            "value": "DR Congo",
            "continent": "AF",
            "countryCode": "CD"
        },
        {
            "label": "Central African Republic",
            "value": "Central African Republic",
            "continent": "AF",
            "countryCode": "CF"
        },
        {
            "label": "Congo Republic",
            "value": "Congo Republic",
            "continent": "AF",
            "countryCode": "CG"
        },
        {
            "label": "Switzerland",
            "value": "Switzerland",
            "continent": "EU",
            "countryCode": "CH"
        },
        {
            "label": "Ivory Coast",
            "value": "Ivory Coast",
            "continent": "AF",
            "countryCode": "CI"
        },
        {
            "label": "Cook Islands",
            "value": "Cook Islands",
            "continent": "OC",
            "countryCode": "CK"
        },
        {
            "label": "Chile",
            "value": "Chile",
            "continent": "SA",
            "countryCode": "CL"
        },
        {
            "label": "Cameroon",
            "value": "Cameroon",
            "continent": "AF",
            "countryCode": "CM"
        },
        {
            "label": "China",
            "value": "China",
            "continent": "AS",
            "countryCode": "CN"
        },
        {
            "label": "Colombia",
            "value": "Colombia",
            "continent": "SA",
            "countryCode": "CO"
        },
        {
            "label": "Costa Rica",
            "value": "Costa Rica",
            "continent": "NA",
            "countryCode": "CR"
        },
        {
            "label": "Cuba",
            "value": "Cuba",
            "continent": "NA",
            "countryCode": "CU"
        },
        {
            "label": "Cabo Verde",
            "value": "Cabo Verde",
            "continent": "AF",
            "countryCode": "CV"
        },
        {
            "label": "Curaçao",
            "value": "Curaçao",
            "continent": "NA",
            "countryCode": "CW"
        },
        {
            "label": "Christmas Island",
            "value": "Christmas Island",
            "continent": "OC",
            "countryCode": "CX"
        },
        {
            "label": "Cyprus",
            "value": "Cyprus",
            "continent": "EU",
            "countryCode": "CY"
        },
        {
            "label": "Czechia",
            "value": "Czechia",
            "continent": "EU",
            "countryCode": "CZ"
        },
        {
            "label": "Germany",
            "value": "Germany",
            "continent": "EU",
            "countryCode": "DE"
        },
        {
            "label": "Djibouti",
            "value": "Djibouti",
            "continent": "AF",
            "countryCode": "DJ"
        },
        {
            "label": "Denmark",
            "value": "Denmark",
            "continent": "EU",
            "countryCode": "DK"
        },
        {
            "label": "Dominica",
            "value": "Dominica",
            "continent": "NA",
            "countryCode": "DM"
        },
        {
            "label": "Dominican Republic",
            "value": "Dominican Republic",
            "continent": "NA",
            "countryCode": "DO"
        },
        {
            "label": "Algeria",
            "value": "Algeria",
            "continent": "AF",
            "countryCode": "DZ"
        },
        {
            "label": "Ecuador",
            "value": "Ecuador",
            "continent": "SA",
            "countryCode": "EC"
        },
        {
            "label": "Estonia",
            "value": "Estonia",
            "continent": "EU",
            "countryCode": "EE"
        },
        {
            "label": "Egypt",
            "value": "Egypt",
            "continent": "AF",
            "countryCode": "EG"
        },
        {
            "label": "Western Sahara",
            "value": "Western Sahara",
            "continent": "AF",
            "countryCode": "EH"
        },
        {
            "label": "Eritrea",
            "value": "Eritrea",
            "continent": "AF",
            "countryCode": "ER"
        },
        {
            "label": "Spain",
            "value": "Spain",
            "continent": "EU",
            "countryCode": "ES"
        },
        {
            "label": "Ethiopia",
            "value": "Ethiopia",
            "continent": "AF",
            "countryCode": "ET"
        },
        {
            "label": "Finland",
            "value": "Finland",
            "continent": "EU",
            "countryCode": "FI"
        },
        {
            "label": "Fiji",
            "value": "Fiji",
            "continent": "OC",
            "countryCode": "FJ"
        },
        {
            "label": "Falkland Islands",
            "value": "Falkland Islands",
            "continent": "SA",
            "countryCode": "FK"
        },
        {
            "label": "Micronesia",
            "value": "Micronesia",
            "continent": "OC",
            "countryCode": "FM"
        },
        {
            "label": "Faroe Islands",
            "value": "Faroe Islands",
            "continent": "EU",
            "countryCode": "FO"
        },
        {
            "label": "France",
            "value": "France",
            "continent": "EU",
            "countryCode": "FR"
        },
        {
            "label": "Gabon",
            "value": "Gabon",
            "continent": "AF",
            "countryCode": "GA"
        },
        {
            "label": "United Kingdom",
            "value": "United Kingdom",
            "continent": "EU",
            "countryCode": "GB"
        },
        {
            "label": "Grenada",
            "value": "Grenada",
            "continent": "NA",
            "countryCode": "GD"
        },
        {
            "label": "Georgia",
            "value": "Georgia",
            "continent": "AS",
            "countryCode": "GE"
        },
        {
            "label": "French Guiana",
            "value": "French Guiana",
            "continent": "SA",
            "countryCode": "GF"
        },
        {
            "label": "Guernsey",
            "value": "Guernsey",
            "continent": "EU",
            "countryCode": "GG"
        },
        {
            "label": "Ghana",
            "value": "Ghana",
            "continent": "AF",
            "countryCode": "GH"
        },
        {
            "label": "Gibraltar",
            "value": "Gibraltar",
            "continent": "EU",
            "countryCode": "GI"
        },
        {
            "label": "Greenland",
            "value": "Greenland",
            "continent": "NA",
            "countryCode": "GL"
        },
        {
            "label": "The Gambia",
            "value": "The Gambia",
            "continent": "AF",
            "countryCode": "GM"
        },
        {
            "label": "Guinea",
            "value": "Guinea",
            "continent": "AF",
            "countryCode": "GN"
        },
        {
            "label": "Guadeloupe",
            "value": "Guadeloupe",
            "continent": "NA",
            "countryCode": "GP"
        },
        {
            "label": "Equatorial Guinea",
            "value": "Equatorial Guinea",
            "continent": "AF",
            "countryCode": "GQ"
        },
        {
            "label": "Greece",
            "value": "Greece",
            "continent": "EU",
            "countryCode": "GR"
        },
        {
            "label": "South Georgia and South Sandwich Islands",
            "value": "South Georgia and South Sandwich Islands",
            "continent": "AN",
            "countryCode": "GS"
        },
        {
            "label": "Guatemala",
            "value": "Guatemala",
            "continent": "NA",
            "countryCode": "GT"
        },
        {
            "label": "Guam",
            "value": "Guam",
            "continent": "OC",
            "countryCode": "GU"
        },
        {
            "label": "Guinea-Bissau",
            "value": "Guinea-Bissau",
            "continent": "AF",
            "countryCode": "GW"
        },
        {
            "label": "Guyana",
            "value": "Guyana",
            "continent": "SA",
            "countryCode": "GY"
        },
        {
            "label": "Hong Kong",
            "value": "Hong Kong",
            "continent": "AS",
            "countryCode": "HK"
        },
        {
            "label": "Heard and McDonald Islands",
            "value": "Heard and McDonald Islands",
            "continent": "AN",
            "countryCode": "HM"
        },
        {
            "label": "Honduras",
            "value": "Honduras",
            "continent": "NA",
            "countryCode": "HN"
        },
        {
            "label": "Croatia",
            "value": "Croatia",
            "continent": "EU",
            "countryCode": "HR"
        },
        {
            "label": "Haiti",
            "value": "Haiti",
            "continent": "NA",
            "countryCode": "HT"
        },
        {
            "label": "Hungary",
            "value": "Hungary",
            "continent": "EU",
            "countryCode": "HU"
        },
        {
            "label": "Indonesia",
            "value": "Indonesia",
            "continent": "AS",
            "countryCode": "ID"
        },
        {
            "label": "Ireland",
            "value": "Ireland",
            "continent": "EU",
            "countryCode": "IE"
        },
        {
            "label": "Israel",
            "value": "Israel",
            "continent": "AS",
            "countryCode": "IL"
        },
        {
            "label": "Isle of Man",
            "value": "Isle of Man",
            "continent": "EU",
            "countryCode": "IM"
        },
        {
            "label": "India",
            "value": "India",
            "continent": "AS",
            "countryCode": "IN"
        },
        {
            "label": "British Indian Ocean Territory",
            "value": "British Indian Ocean Territory",
            "continent": "AS",
            "countryCode": "IO"
        },
        {
            "label": "Iraq",
            "value": "Iraq",
            "continent": "AS",
            "countryCode": "IQ"
        },
        {
            "label": "Iran",
            "value": "Iran",
            "continent": "AS",
            "countryCode": "IR"
        },
        {
            "label": "Iceland",
            "value": "Iceland",
            "continent": "EU",
            "countryCode": "IS"
        },
        {
            "label": "Italy",
            "value": "Italy",
            "continent": "EU",
            "countryCode": "IT"
        },
        {
            "label": "Jersey",
            "value": "Jersey",
            "continent": "EU",
            "countryCode": "JE"
        },
        {
            "label": "Jamaica",
            "value": "Jamaica",
            "continent": "NA",
            "countryCode": "JM"
        },
        {
            "label": "Jordan",
            "value": "Jordan",
            "continent": "AS",
            "countryCode": "JO"
        },
        {
            "label": "Japan",
            "value": "Japan",
            "continent": "AS",
            "countryCode": "JP"
        },
        {
            "label": "Kenya",
            "value": "Kenya",
            "continent": "AF",
            "countryCode": "KE"
        },
        {
            "label": "Kyrgyzstan",
            "value": "Kyrgyzstan",
            "continent": "AS",
            "countryCode": "KG"
        },
        {
            "label": "Cambodia",
            "value": "Cambodia",
            "continent": "AS",
            "countryCode": "KH"
        },
        {
            "label": "Kiribati",
            "value": "Kiribati",
            "continent": "OC",
            "countryCode": "KI"
        },
        {
            "label": "Comoros",
            "value": "Comoros",
            "continent": "AF",
            "countryCode": "KM"
        },
        {
            "label": "St Kitts and Nevis",
            "value": "St Kitts and Nevis",
            "continent": "NA",
            "countryCode": "KN"
        },
        {
            "label": "North Korea",
            "value": "North Korea",
            "continent": "AS",
            "countryCode": "KP"
        },
        {
            "label": "South Korea",
            "value": "South Korea",
            "continent": "AS",
            "countryCode": "KR"
        },
        {
            "label": "Kuwait",
            "value": "Kuwait",
            "continent": "AS",
            "countryCode": "KW"
        },
        {
            "label": "Cayman Islands",
            "value": "Cayman Islands",
            "continent": "NA",
            "countryCode": "KY"
        },
        {
            "label": "Kazakhstan",
            "value": "Kazakhstan",
            "continent": "AS",
            "countryCode": "KZ"
        },
        {
            "label": "Laos",
            "value": "Laos",
            "continent": "AS",
            "countryCode": "LA"
        },
        {
            "label": "Lebanon",
            "value": "Lebanon",
            "continent": "AS",
            "countryCode": "LB"
        },
        {
            "label": "Saint Lucia",
            "value": "Saint Lucia",
            "continent": "NA",
            "countryCode": "LC"
        },
        {
            "label": "Liechtenstein",
            "value": "Liechtenstein",
            "continent": "EU",
            "countryCode": "LI"
        },
        {
            "label": "Sri Lanka",
            "value": "Sri Lanka",
            "continent": "AS",
            "countryCode": "LK"
        },
        {
            "label": "Liberia",
            "value": "Liberia",
            "continent": "AF",
            "countryCode": "LR"
        },
        {
            "label": "Lesotho",
            "value": "Lesotho",
            "continent": "AF",
            "countryCode": "LS"
        },
        {
            "label": "Lithuania",
            "value": "Lithuania",
            "continent": "EU",
            "countryCode": "LT"
        },
        {
            "label": "Luxembourg",
            "value": "Luxembourg",
            "continent": "EU",
            "countryCode": "LU"
        },
        {
            "label": "Latvia",
            "value": "Latvia",
            "continent": "EU",
            "countryCode": "LV"
        },
        {
            "label": "Libya",
            "value": "Libya",
            "continent": "AF",
            "countryCode": "LY"
        },
        {
            "label": "Morocco",
            "value": "Morocco",
            "continent": "AF",
            "countryCode": "MA"
        },
        {
            "label": "Monaco",
            "value": "Monaco",
            "continent": "EU",
            "countryCode": "MC"
        },
        {
            "label": "Moldova",
            "value": "Moldova",
            "continent": "EU",
            "countryCode": "MD"
        },
        {
            "label": "Montenegro",
            "value": "Montenegro",
            "continent": "EU",
            "countryCode": "ME"
        },
        {
            "label": "Saint Martin",
            "value": "Saint Martin",
            "continent": "NA",
            "countryCode": "MF"
        },
        {
            "label": "Madagascar",
            "value": "Madagascar",
            "continent": "AF",
            "countryCode": "MG"
        },
        {
            "label": "Marshall Islands",
            "value": "Marshall Islands",
            "continent": "OC",
            "countryCode": "MH"
        },
        {
            "label": "North Macedonia",
            "value": "North Macedonia",
            "continent": "EU",
            "countryCode": "MK"
        },
        {
            "label": "Mali",
            "value": "Mali",
            "continent": "AF",
            "countryCode": "ML"
        },
        {
            "label": "Myanmar",
            "value": "Myanmar",
            "continent": "AS",
            "countryCode": "MM"
        },
        {
            "label": "Mongolia",
            "value": "Mongolia",
            "continent": "AS",
            "countryCode": "MN"
        },
        {
            "label": "Macao",
            "value": "Macao",
            "continent": "AS",
            "countryCode": "MO"
        },
        {
            "label": "Northern Mariana Islands",
            "value": "Northern Mariana Islands",
            "continent": "OC",
            "countryCode": "MP"
        },
        {
            "label": "Martinique",
            "value": "Martinique",
            "continent": "NA",
            "countryCode": "MQ"
        },
        {
            "label": "Mauritania",
            "value": "Mauritania",
            "continent": "AF",
            "countryCode": "MR"
        },
        {
            "label": "Montserrat",
            "value": "Montserrat",
            "continent": "NA",
            "countryCode": "MS"
        },
        {
            "label": "Malta",
            "value": "Malta",
            "continent": "EU",
            "countryCode": "MT"
        },
        {
            "label": "Mauritius",
            "value": "Mauritius",
            "continent": "AF",
            "countryCode": "MU"
        },
        {
            "label": "Maldives",
            "value": "Maldives",
            "continent": "AS",
            "countryCode": "MV"
        },
        {
            "label": "Malawi",
            "value": "Malawi",
            "continent": "AF",
            "countryCode": "MW"
        },
        {
            "label": "Mexico",
            "value": "Mexico",
            "continent": "NA",
            "countryCode": "MX"
        },
        {
            "label": "Malaysia",
            "value": "Malaysia",
            "continent": "AS",
            "countryCode": "MY"
        },
        {
            "label": "Mozambique",
            "value": "Mozambique",
            "continent": "AF",
            "countryCode": "MZ"
        },
        {
            "label": "Namibia",
            "value": "Namibia",
            "continent": "AF",
            "countryCode": "NA"
        },
        {
            "label": "New Caledonia",
            "value": "New Caledonia",
            "continent": "OC",
            "countryCode": "NC"
        },
        {
            "label": "Niger",
            "value": "Niger",
            "continent": "AF",
            "countryCode": "NE"
        },
        {
            "label": "Norfolk Island",
            "value": "Norfolk Island",
            "continent": "OC",
            "countryCode": "NF"
        },
        {
            "label": "Nigeria",
            "value": "Nigeria",
            "continent": "AF",
            "countryCode": "NG"
        },
        {
            "label": "Nicaragua",
            "value": "Nicaragua",
            "continent": "NA",
            "countryCode": "NI"
        },
        {
            "label": "The Netherlands",
            "value": "The Netherlands",
            "continent": "EU",
            "countryCode": "NL"
        },
        {
            "label": "Norway",
            "value": "Norway",
            "continent": "EU",
            "countryCode": "NO"
        },
        {
            "label": "Nepal",
            "value": "Nepal",
            "continent": "AS",
            "countryCode": "NP"
        },
        {
            "label": "Nauru",
            "value": "Nauru",
            "continent": "OC",
            "countryCode": "NR"
        },
        {
            "label": "Niue",
            "value": "Niue",
            "continent": "OC",
            "countryCode": "NU"
        },
        {
            "label": "New Zealand",
            "value": "New Zealand",
            "continent": "OC",
            "countryCode": "NZ"
        },
        {
            "label": "Oman",
            "value": "Oman",
            "continent": "AS",
            "countryCode": "OM"
        },
        {
            "label": "Panama",
            "value": "Panama",
            "continent": "NA",
            "countryCode": "PA"
        },
        {
            "label": "Peru",
            "value": "Peru",
            "continent": "SA",
            "countryCode": "PE"
        },
        {
            "label": "French Polynesia",
            "value": "French Polynesia",
            "continent": "OC",
            "countryCode": "PF"
        },
        {
            "label": "Papua New Guinea",
            "value": "Papua New Guinea",
            "continent": "OC",
            "countryCode": "PG"
        },
        {
            "label": "Philippines",
            "value": "Philippines",
            "continent": "AS",
            "countryCode": "PH"
        },
        {
            "label": "Pakistan",
            "value": "Pakistan",
            "continent": "AS",
            "countryCode": "PK"
        },
        {
            "label": "Poland",
            "value": "Poland",
            "continent": "EU",
            "countryCode": "PL"
        },
        {
            "label": "Saint Pierre and Miquelon",
            "value": "Saint Pierre and Miquelon",
            "continent": "NA",
            "countryCode": "PM"
        },
        {
            "label": "Pitcairn Islands",
            "value": "Pitcairn Islands",
            "continent": "OC",
            "countryCode": "PN"
        },
        {
            "label": "Puerto Rico",
            "value": "Puerto Rico",
            "continent": "NA",
            "countryCode": "PR"
        },
        {
            "label": "Palestine",
            "value": "Palestine",
            "continent": "AS",
            "countryCode": "PS"
        },
        {
            "label": "Portugal",
            "value": "Portugal",
            "continent": "EU",
            "countryCode": "PT"
        },
        {
            "label": "Palau",
            "value": "Palau",
            "continent": "OC",
            "countryCode": "PW"
        },
        {
            "label": "Paraguay",
            "value": "Paraguay",
            "continent": "SA",
            "countryCode": "PY"
        },
        {
            "label": "Qatar",
            "value": "Qatar",
            "continent": "AS",
            "countryCode": "QA"
        },
        {
            "label": "Réunion",
            "value": "Réunion",
            "continent": "AF",
            "countryCode": "RE"
        },
        {
            "label": "Romania",
            "value": "Romania",
            "continent": "EU",
            "countryCode": "RO"
        },
        {
            "label": "Serbia",
            "value": "Serbia",
            "continent": "EU",
            "countryCode": "RS"
        },
        {
            "label": "Russia",
            "value": "Russia",
            "continent": "EU",
            "countryCode": "RU"
        },
        {
            "label": "Rwanda",
            "value": "Rwanda",
            "continent": "AF",
            "countryCode": "RW"
        },
        {
            "label": "Saudi Arabia",
            "value": "Saudi Arabia",
            "continent": "AS",
            "countryCode": "SA"
        },
        {
            "label": "Solomon Islands",
            "value": "Solomon Islands",
            "continent": "OC",
            "countryCode": "SB"
        },
        {
            "label": "Seychelles",
            "value": "Seychelles",
            "continent": "AF",
            "countryCode": "SC"
        },
        {
            "label": "Sudan",
            "value": "Sudan",
            "continent": "AF",
            "countryCode": "SD"
        },
        {
            "label": "Sweden",
            "value": "Sweden",
            "continent": "EU",
            "countryCode": "SE"
        },
        {
            "label": "Singapore",
            "value": "Singapore",
            "continent": "AS",
            "countryCode": "SG"
        },
        {
            "label": "Saint Helena",
            "value": "Saint Helena",
            "continent": "AF",
            "countryCode": "SH"
        },
        {
            "label": "Slovenia",
            "value": "Slovenia",
            "continent": "EU",
            "countryCode": "SI"
        },
        {
            "label": "Svalbard and Jan Mayen",
            "value": "Svalbard and Jan Mayen",
            "continent": "EU",
            "countryCode": "SJ"
        },
        {
            "label": "Slovakia",
            "value": "Slovakia",
            "continent": "EU",
            "countryCode": "SK"
        },
        {
            "label": "Sierra Leone",
            "value": "Sierra Leone",
            "continent": "AF",
            "countryCode": "SL"
        },
        {
            "label": "San Marino",
            "value": "San Marino",
            "continent": "EU",
            "countryCode": "SM"
        },
        {
            "label": "Senegal",
            "value": "Senegal",
            "continent": "AF",
            "countryCode": "SN"
        },
        {
            "label": "Somalia",
            "value": "Somalia",
            "continent": "AF",
            "countryCode": "SO"
        },
        {
            "label": "Suriname",
            "value": "Suriname",
            "continent": "SA",
            "countryCode": "SR"
        },
        {
            "label": "South Sudan",
            "value": "South Sudan",
            "continent": "AF",
            "countryCode": "SS"
        },
        {
            "label": "São Tomé and Príncipe",
            "value": "São Tomé and Príncipe",
            "continent": "AF",
            "countryCode": "ST"
        },
        {
            "label": "El Salvador",
            "value": "El Salvador",
            "continent": "NA",
            "countryCode": "SV"
        },
        {
            "label": "Sint Maarten",
            "value": "Sint Maarten",
            "continent": "NA",
            "countryCode": "SX"
        },
        {
            "label": "Syria",
            "value": "Syria",
            "continent": "AS",
            "countryCode": "SY"
        },
        {
            "label": "Eswatini",
            "value": "Eswatini",
            "continent": "AF",
            "countryCode": "SZ"
        },
        {
            "label": "Turks and Caicos Islands",
            "value": "Turks and Caicos Islands",
            "continent": "NA",
            "countryCode": "TC"
        },
        {
            "label": "Chad",
            "value": "Chad",
            "continent": "AF",
            "countryCode": "TD"
        },
        {
            "label": "French Southern Territories",
            "value": "French Southern Territories",
            "continent": "AN",
            "countryCode": "TF"
        },
        {
            "label": "Togo",
            "value": "Togo",
            "continent": "AF",
            "countryCode": "TG"
        },
        {
            "label": "Thailand",
            "value": "Thailand",
            "continent": "AS",
            "countryCode": "TH"
        },
        {
            "label": "Tajikistan",
            "value": "Tajikistan",
            "continent": "AS",
            "countryCode": "TJ"
        },
        {
            "label": "Tokelau",
            "value": "Tokelau",
            "continent": "OC",
            "countryCode": "TK"
        },
        {
            "label": "Timor-Leste",
            "value": "Timor-Leste",
            "continent": "OC",
            "countryCode": "TL"
        },
        {
            "label": "Turkmenistan",
            "value": "Turkmenistan",
            "continent": "AS",
            "countryCode": "TM"
        },
        {
            "label": "Tunisia",
            "value": "Tunisia",
            "continent": "AF",
            "countryCode": "TN"
        },
        {
            "label": "Tonga",
            "value": "Tonga",
            "continent": "OC",
            "countryCode": "TO"
        },
        {
            "label": "Türkiye",
            "value": "Türkiye",
            "continent": "AS",
            "countryCode": "TR"
        },
        {
            "label": "Trinidad and Tobago",
            "value": "Trinidad and Tobago",
            "continent": "NA",
            "countryCode": "TT"
        },
        {
            "label": "Tuvalu",
            "value": "Tuvalu",
            "continent": "OC",
            "countryCode": "TV"
        },
        {
            "label": "Taiwan",
            "value": "Taiwan",
            "continent": "AS",
            "countryCode": "TW"
        },
        {
            "label": "Tanzania",
            "value": "Tanzania",
            "continent": "AF",
            "countryCode": "TZ"
        },
        {
            "label": "Ukraine",
            "value": "Ukraine",
            "continent": "EU",
            "countryCode": "UA"
        },
        {
            "label": "Uganda",
            "value": "Uganda",
            "continent": "AF",
            "countryCode": "UG"
        },
        {
            "label": "U.S. Outlying Islands",
            "value": "U.S. Outlying Islands",
            "continent": "OC",
            "countryCode": "UM"
        },
        {
            "label": "United States",
            "value": "United States",
            "continent": "NA",
            "countryCode": "US"
        },
        {
            "label": "Uruguay",
            "value": "Uruguay",
            "continent": "SA",
            "countryCode": "UY"
        },
        {
            "label": "Uzbekistan",
            "value": "Uzbekistan",
            "continent": "AS",
            "countryCode": "UZ"
        },
        {
            "label": "Vatican City",
            "value": "Vatican City",
            "continent": "EU",
            "countryCode": "VA"
        },
        {
            "label": "St Vincent and Grenadines",
            "value": "St Vincent and Grenadines",
            "continent": "NA",
            "countryCode": "VC"
        },
        {
            "label": "Venezuela",
            "value": "Venezuela",
            "continent": "SA",
            "countryCode": "VE"
        },
        {
            "label": "British Virgin Islands",
            "value": "British Virgin Islands",
            "continent": "NA",
            "countryCode": "VG"
        },
        {
            "label": "U.S. Virgin Islands",
            "value": "U.S. Virgin Islands",
            "continent": "NA",
            "countryCode": "VI"
        },
        {
            "label": "Vietnam",
            "value": "Vietnam",
            "continent": "AS",
            "countryCode": "VN"
        },
        {
            "label": "Vanuatu",
            "value": "Vanuatu",
            "continent": "OC",
            "countryCode": "VU"
        },
        {
            "label": "Wallis and Futuna",
            "value": "Wallis and Futuna",
            "continent": "OC",
            "countryCode": "WF"
        },
        {
            "label": "Samoa",
            "value": "Samoa",
            "continent": "OC",
            "countryCode": "WS"
        },
        {
            "label": "Kosovo",
            "value": "Kosovo",
            "continent": "EU",
            "countryCode": "XK"
        },
        {
            "label": "Yemen",
            "value": "Yemen",
            "continent": "AS",
            "countryCode": "YE"
        },
        {
            "label": "Mayotte",
            "value": "Mayotte",
            "continent": "AF",
            "countryCode": "YT"
        },
        {
            "label": "South Africa",
            "value": "South Africa",
            "continent": "AF",
            "countryCode": "ZA"
        },
        {
            "label": "Zambia",
            "value": "Zambia",
            "continent": "AF",
            "countryCode": "ZM"
        },
        {
            "label": "Zimbabwe",
            "value": "Zimbabwe",
            "continent": "AF",
            "countryCode": "ZW"
        }
    ]
});

