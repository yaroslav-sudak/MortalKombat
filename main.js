const scorpion = {
	name: "SCORPION",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
	weapon: [" Gun", "Katana"],
	attack: function(){
		console.log(scorpion.name + " Fight...");
	}
}

const sonya = {
	name: "SONYA",
	hp: 90,
	img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
	weapon: [" Sword", "Magic"],
	attack: function(){
		console.log(sonya.name + " Fight...");

	}
}

function createPlayer(clas, name){
	const $player = document.createElement('div');
	const $progressbar = document.createElement('div');
	const $life = document.createElement('div');
	const $name = document.createElement('div');
	const $character = document.createElement('div');
	const $img = document.createElement('img');

	$player.classList = clas;
	$progressbar.classList = 'progressbar';
	$life.classList = 'life';
	$name.classList = 'name';
	$character.classList = 'character';

	$life.style.width = name.hp + '%';

	$name.innerText = name.name;

	$img.src = name.img;

	$player.appendChild($progressbar);
	$player.appendChild($character);

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$character.appendChild($img);

	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player);
}

createPlayer('player1', scorpion);
createPlayer('player2', sonya);
