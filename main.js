



let out = document.querySelector(".out")

let outWrapper = document.querySelector(".out-wrapper")

let btn = document.querySelector(".btn")
let btnReset = document.querySelector(".btn-reset")

function setPocemonImg(setPocemonImg, pocemonName){
	
	
	out.style = `
	opacity: 1;
	display: flex;
	border: 1px solid #fff;
	border-radius: 15px;
	
	flex-direction: column;
	align-items: center;
	justify-content: start;
	transition: 2s ease-in;
	`

	out.innerHTML += `
	<span class="remove-button">[x]</span>
	<img src="${setPocemonImg}" title="${pocemonName}">
	<p>Hi! I\`m <b>${pocemonName}</b> !</p>
	
	`
	let closeCard = document.querySelector(".remove-button")
	closeCard.style=`display: inline;`


	closeCard.addEventListener("click", ()=>{
		out.innerHTML = "";
		out.style=`display: none;`

		/* out.remove() */
	
	})
	
}

let newPokemon = () => {

	out.innerHTML = "";
	out.style=`transform: scale(0); 
	opacity: 0; `

	

	function getRandomId()
	{
		
		let randId =  Math.floor(Math.random() * (600 - 1) + 1);
		console.log("Random pokemon ID :" + randId);
		return randId
		
	} 

	let randomId = getRandomId()


	fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
		.then(response => {
			console.log("Fetch status: " + response.status)
			return response.json()
		})
		.then(json => {
			let pocemonName = json.name.toUpperCase();
			let pocemonImg = json.sprites.other[ "dream_world" ][ "front_default" ];

			setPocemonImg(pocemonImg, pocemonName)


		})
}

btn.addEventListener("click",  newPokemon)










/* MEOWTH - id = 52 */







