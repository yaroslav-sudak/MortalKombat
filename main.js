const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $reloadButton = createReloadButton();
const player1 = {
	player: 1,
	name: "SCORPION",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
	weapon: [" Gun", "Katana"],
	changeHP: changeHP,
	renderHP: renderHP,
	elHp: elHp
}

const player2 = {
	player: 2,
	name: "SONYA",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
	weapon: [" Sword", "Magic"],
	changeHP: changeHP,
	renderHP: renderHP,
	elHp: elHp
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

function appendChild(div, child){
	//Append child
	div.appendChild(createPlayer(child));
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

function changeHP(minusHP){
	this.hp -= minusHP;
	if(this.hp < 0){
		this.hp = 0;
	}
	this.renderHP();
}

function renderHP(){
	const $playerLife = this.elHp();
	$playerLife.style.width = this.hp + '%';
}

function elHp(){

	// Не понимаю при чём тут querySelector, если мы ссылаемся на объект в js, а не в html.
	// Буду очень рад ответу

	$playerLife = document.querySelector('.player' + this.player + ' .life');
	return $playerLife;
}

function createReloadButton(){
	const $reloadDiv = createElement('div', 'reloadWrap');
	const $reloadButton = createElement('button', 'button');
	$reloadButton.innerText = 'Restart';
	$reloadDiv.appendChild($reloadButton);

	return $reloadDiv;
}

function randomHP(max){

	let r = Math.ceil(Math.random() * max);
	return r;
}

$reloadButton.addEventListener('click', function(){
	window.location.reload();
})

$randomButton.addEventListener('click', function(){
	player1.changeHP(randomHP(20));
	player2.changeHP(randomHP(20));
	if (player1.hp == 0 || player2.hp == 0){
		$arenas.appendChild($reloadButton);
		console.log($arenas);
	}
	if (player1.hp <= 0 && player2.hp <= 0){
		$arenas.appendChild(Draw());
		$randomButton.disabled = true;
		$randomButton.classList.add('hiden');
	}
	else if (player1.hp <= 0){
		$arenas.appendChild(playerWin(player2.name));
		$randomButton.disabled = true;
		$randomButton.classList.add('hiden');
	}
	else if (player2.hp <= 0){
		$arenas.appendChild(playerWin(player1.name));
		$randomButton.disabled = true;
		$randomButton.classList.add('hiden');
	}
})


appendChild($arenas, player1);
appendChild($arenas, player2);