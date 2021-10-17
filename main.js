const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
	player: 1,
	name: "SCORPION",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
	weapon: [" Gun", "Katana"],
	attack: function(){
		console.log(player1.name + " Fight...");
	}
}

const player2 = {
	player: 2,
	name: "SONYA",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
	weapon: [" Sword", "Magic"],
	attack: function(){
		console.log(player2.name + " Fight...");

	}
}

function createElement(tag, className){
	const $tag = document.createElement(tag);
	if(className){
		$tag.classList.add(className);

		
	}
	return $tag;
}

function createPlayer(name){
	const $player =  createElement('div', 'player' + name.player);
	const $progressbar = createElement('div', 'progressbar');
	const $life = createElement('div', 'life');
	const $name = createElement('div', 'name');
	const $character = createElement('div', 'character');
	const $img = createElement('img');

	$life.style.width = name.hp + '%';

	$name.innerText = name.name;

	$img.src = name.img;

	$player.appendChild($progressbar);
	$player.appendChild($character);

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$character.appendChild($img);

	return $player;
}

function appendChild(div, player, object)
{
	div.appendChild(createPlayer(player, object));
}

function playerWin(name){
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' WIN!!!';

	return $loseTitle;
}
function Draw(){
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = 'DRAW';

	return $loseTitle;
}

function changeHP(player){
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp -= randomHP();
	$playerLife.style.width = player.hp + '%';
}
$randomButton.addEventListener('click', function(){
	changeHP(player1);
	changeHP(player2);
	if (player1.hp <= 0 && player2.hp <= 0){
		const $playerLife1 = document.querySelector('.player1 .life');
		const $playerLife2 = document.querySelector('.player2 .life');
		player1.hp = 0;
		player2.hp = 0;
		$playerLife1.style.width = 0 + '%';
		$playerLife2.style.width = 0 + '%';
		$arenas.appendChild(Draw());
		$randomButton.disabled = true;
		$randomButton.classList.add('hide')
	}
	else if (player1.hp <= 0){
		const $playerLife1 = document.querySelector('.player1 .life');
		player1.hp = 0;
		$playerLife1.style.width = 0 + '%';
		$arenas.appendChild(playerWin(player2.name));
		$randomButton.disabled = true;
		$randomButton.classList.add('hide')
	}
	else if (player2.hp <= 0){
		const $playerLife2 = document.querySelector('.player2 .life');
		player2.hp = 0;
		$playerLife2.style.width = 0 + '%';
		$arenas.appendChild(playerWin(player1.name));
		$randomButton.disabled = true;
		$randomButton.classList.add('hide');
	}
})

function randomHP(){

	let r = Math.ceil(Math.random() * 20);

	return r;
}
appendChild($arenas, player1);
appendChild($arenas, player2);

