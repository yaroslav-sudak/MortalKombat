<<<<<<< Updated upstream
console.log("Fight");
=======
const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $randomButton = document.querySelector('.button');
let userAttack = {};
let enemyAttack = {};
const HIT = {
	head: 30,
	body: 25,
	foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
	player: 1,
	name: "SCORPION",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
	weapon: [" Gun", "Katana"],
	changeHP,
	renderHP,
	elHp
}

const player2 = {
	player: 2,
	name: "SONYA",
	hp: 100,
	img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
	weapon: [" Sword", "Magic"],
	changeHP,
	renderHP,
	elHp
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
	$playerLife = document.querySelector('.player' + this.player + ' .life');
	return $playerLife;
}

function createReloadButton(){
	const $reloadDiv = createElement('div', 'reloadWrap');
	const $reloadButton = createElement('button', 'button');
	$reloadButton.innerText = 'Restart';
	$reloadDiv.appendChild($reloadButton);
	$reloadDiv.addEventListener('click', function(){
		window.location.reload();
	})
	return $reloadDiv;
}

function getRandom(max){

	let r = Math.ceil(Math.random() * max);
	return r;
}

function enemyDo(){
	const hit = ATTACK[getRandom(3)-1];
	const defence = ATTACK[getRandom(3)-1];

	return{
		value: getRandom(HIT[hit]),
		hit,
		defence
	}
}
$formFight.addEventListener('submit', function(e){
	e.preventDefault();

	const attack = {};

	for (let item of $formFight){
		if (item.checked && item.name === 'hit'){
			attack.value = getRandom(HIT[item.value]);
			attack.hit = item.value;
		}
		if (item.checked && item.name === 'defence'){
			attack.defence = item.value;
		}
		item.checked = false;
	}
	userAttack = attack;
	enemyAttack = enemyDo();
})

$randomButton.addEventListener('click', function(){
	if(userAttack.defence != enemyAttack.hit){
		player1.changeHP(getRandom(enemyAttack.value));
	}
	if(enemyAttack.defence != userAttack.hit){
		player2.changeHP(getRandom(userAttack.value));
	}
	if (player1.hp == 0 || player2.hp == 0){
		$arenas.appendChild(createReloadButton());
		$randomButton.disabled = true;
		$randomButton.classList.add('hiden');
	}
	if (player1.hp <= 0 && player2.hp <= 0){
		$arenas.appendChild(Draw());
	}
	else if (player1.hp <= 0){
		$arenas.appendChild(playerWin(player2.name));
	}
	else if (player2.hp <= 0){
		$arenas.appendChild(playerWin(player1.name));
	}
})


appendChild($arenas, player1);
appendChild($arenas, player2);
>>>>>>> Stashed changes
