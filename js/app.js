


document.addEventListener('DOMContentLoaded', LoadApi)



function LoadApi() {
	const url = 'https://rickandmortyapi.com/api/character'

	fetch(url)
		.then( response => response.json() )
		.then( data => ViewContent(data.results) )
}


function ViewContent( dates ) {
	dates.forEach( date => {
		const { name, status, species, image } = date

		const content = document.querySelector('.row')

		const div = document.createElement('div')
		div.className = ' bor col-md-3 py-2 text-center text-white shadow p-3 mt-3 mb-5 bg-dark rounded'

		const article = document.createElement('article')

		const img = document.createElement('img')
		img.className = 'mt-2 alt'
		img.src = image

		const names = document.createElement('p')
		names.className = 'p-2 name'
		names.textContent = `Name: ${name}`

		const statu = document.createElement('p')
		statu.className = 'p-2 xtra show'
		statu.textContent = `Status: ${status}` 

		const specie = document.createElement('p')
		specie.className = 'p-2 xtra show'
		specie.textContent = `Species: ${species}` 

		div.appendChild(article)
		div.appendChild(img)
		div.appendChild(names)
		div.appendChild(statu)
		div.appendChild(specie)

		content.appendChild(div)
	})
}