const generateBtn = document.getElementById('generator-btn');
const passOneEl = document.getElementById('pass-one');
const passTwoEl = document.getElementById('pass-two');

let passwordLength = 15;
const chars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\',
  ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'
];

function randomIndex(){
	let randomIndex = Math.floor(Math.random() * chars.length);
	return chars[randomIndex];
}

function generatePassword() {
	let password1 = '';
	let password2 = '';

	for ( let i = 0; i < passwordLength; i++){
		let result1= randomIndex();	
		let result2= randomIndex();	
		password1 += result1;
		password2 += result2;

		
		passOneEl.value = password1;
		passOneEl.classList.add('active');

		passTwoEl.value = password2;
		passTwoEl.classList.add('active');
	}
}

generateBtn.addEventListener('click', generatePassword); 


  