//

window.addEventListener('load', () => {
	const country = [
		'Afganistán',
		'Albania',
		'Alemania',
		'Andorra',
		'Angola',
		'Antigua y Barbuda',
		'Arabia Saudita',
		'Argelia',
		'Argentina',
		'Armenia',
		'Australia',
		'Austria',
		'Azerbaiyán',
		'Bahamas',
		'Bangladés',
		'Barbados',
		'Baréin',
		'Bélgica',
		'Belice',
		'Benín',
		'Bielorrusia',
		'Birmania',
		'Bolivia',
		'Bosnia y Herzegovina',
		'Botsuana',
		'Brasil',
		'Brunéi',
		'Bulgaria',
		'Burkina Faso',
		'Burundi',
		'Bután',
		'Cabo Verde',
		'Camboya',
		'Camerún',
		'Canadá',
		'Catar',
		'Chad',
		'Chile',
		'China',
		'Chipre',
		'Ciudad del Vaticano',
		'Colombia',
		'Comoras',
		'Corea del Norte',
		'Corea del Sur',
		'Costa de Marfil',
		'Costa Rica',
		'Croacia',
		'Cuba',
		'Dinamarca',
		'Dominica',
		'Ecuador',
		'Egipto',
		'El Salvador',
		'Emiratos Árabes Unidos',
		'Eritrea',
		'Eslovaquia',
		'Eslovenia',
		'España',
		'Estados Unidos',
		'Estonia',
		'Etiopía',
		'Filipinas',
		'Finlandia',
		'Fiyi',
		'Francia',
		'Gabón',
		'Gambia',
		'Georgia',
		'Ghana',
		'Granada',
		'Grecia',
		'Guatemala',
		'Guyana',
		'Guinea',
		'Guinea ecuatorial',
		'Guinea-Bisáu',
		'Haití',
		'Honduras',
		'Hungría',
		'India',
		'Indonesia',
		'Irak',
		'Irán',
		'Irlanda',
		'Islandia',
		'Islas Marshall',
		'Islas Salomón',
		'Israel',
		'Italia',
		'Jamaica',
		'Japón',
		'Jordania',
		'Kazajistán',
		'Kenia',
		'Kirguistán',
		'Kiribati',
		'Kuwait',
		'Laos',
		'Lesoto',
		'Letonia',
		'Líbano',
		'Liberia',
		'Libia',
		'Liechtenstein',
		'Lituania',
		'Luxemburgo',
		'Madagascar',
		'Malasia',
		'Malaui',
		'Maldivas',
		'Malí',
		'Malta',
		'Marruecos',
		'Mauricio',
		'Mauritania',
		'México',
		'Micronesia',
		'Moldavia',
		'Mónaco',
		'Mongolia',
		'Montenegro',
		'Mozambique',
		'Namibia',
		'Nauru',
		'Nepal',
		'Nicaragua',
		'Níger',
		'Nigeria',
		'Noruega',
		'Nueva Zelanda',
		'Omán',
		'Países Bajos',
		'Pakistán',
		'Palaos',
		'Panamá',
		'Papúa Nueva Guinea',
		'Paraguay',
		'Perú',
		'Polonia',
		'Portugal',
		'Reino Unido',
		'República Centroafricana',
		'República Checa',
		'República de Macedonia',
		'República del Congo',
		'República Democrática del Congo',
		'República Dominicana',
		'República Sudafricana',
		'Ruanda',
		'Rumanía',
		'Rusia',
		'Samoa',
		'San Cristóbal y Nieves',
		'San Marino',
		'San Vicente y las Granadinas',
		'Santa Lucía',
		'Santo Tomé y Príncipe',
		'Senegal',
		'Serbia',
		'Seychelles',
		'Sierra Leona',
		'Singapur',
		'Siria',
		'Somalia',
		'Sri Lanka',
		'Suazilandia',
		'Sudán',
		'Sudán del Sur',
		'Suecia',
		'Suiza',
		'Surinam',
		'Tailandia',
		'Tanzania',
		'Tayikistán',
		'Timor Oriental',
		'Togo',
		'Tonga',
		'Trinidad y Tobago',
		'Túnez',
		'Turkmenistán',
		'Turquía',
		'Tuvalu',
		'Ucrania',
		'Uganda',
		'Uruguay',
		'Uzbekistán',
		'Vanuatu',
		'Venezuela',
		'Vietnam',
		'Yemen',
		'Yibuti',
		'Zambia',
		'Zimbabue',
	]

	const inputPadre = document.getElementById('personalData')
	const spanFirst = document.createElement('span')
	spanFirst.classList.add('dropdown-el')
	const SendCountry = document.createElement('select')
	SendCountry.id = 'nacionalidad'
	// SendCountry.setAttribute('name',"sortType")
	// SendCountry.setAttribute('checked',"checked")
	// SendCountry.setAttribute('id',"sort-relevance")

	country.forEach((element) => {
		spanFirst.appendChild(SendCountry)
		const labelRelevance = document.createElement('option')
		labelRelevance.setAttribute('for', 'sort-relevance')
		// https://codepen.io/j0be/pen/jWGVvV

		labelRelevance.innerHTML = element

		SendCountry.appendChild(labelRelevance)
	})
	inputPadre.appendChild(spanFirst)

	// $('.dropdown-el').click(function(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	$(this).toggleClass('expanded');
	// 	$('#'+$(e.target).attr('for')).prop('checked',true);
	//   });
	//   $(document).click(function() {
	// 	$('.dropdown-el').removeClass('expanded');
	//   });
})

//recibir tags

{
	/* <span class="dropdown-el">
    <input type="radio" name="sortType" value="Relevance" checked="checked" id="sort-relevance">
	<label for="sort-relevance">Relevance</label>
    <input type="radio" name="sortType" value="Popularity" id="sort-best"><label for="sort-best">Product Popularity</label>
    <input type="radio" name="sortType" value="PriceIncreasing" id="sort-low"><label for="sort-low">Price Low to High</label>
    <input type="radio" name="sortType" value="PriceDecreasing" id="sort-high"><label for="sort-high">Price High to Low</label>
    <input type="radio" name="sortType" value="ProductBrand" id="sort-brand"><label for="sort-brand">Product Brand</label>
    <input type="radio" name="sortType" value="ProductName" id="sort-name"><label for="sort-name">Product Name</label>
  </span> */
}
