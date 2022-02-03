//Enigma Javascript Page

function encipherText(){
	let pText = document.getElementById("message").value.toLowerCase();
	let wKey = document.getElementById("wordKey").value.toLowerCase();
	let eText = function(text){
		let code = "";
		let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		let cipherAlphabet = {};
		//Give cipher Alphabet properties of each letter in the key word

		for(let t=0;t<wKey.length;t++)
		{
			cipherAlphabet["wCipher"+t]=[];

			for(let a=0;a<alphabet.length;a++)
			{
				cipherAlphabet["wCipher"+t].push(alphabet[a]);
			}

			while(cipherAlphabet["wCipher"+t][0]!=wKey.charAt(t))
			{
				let letter = cipherAlphabet["wCipher"+t].pop();
				cipherAlphabet["wCipher"+t].unshift(letter);
			}
		}

		let f = 0;
		//encipher plaintext with cipher alphabet
		for(let i=0;i<text.length;i++)
		{
			let ciphered = false;
			if(text[i]==" ")
			{
				code = code+" ";
				ciphered=true;
				f--;
			}
			for(let k=0;k<alphabet.length;k++)
			{

				if(text[i]==alphabet[k])
				{
					code = code+cipherAlphabet["wCipher"+f][k];
					ciphered=true;
				}
			}
			if(ciphered==false)
			{
				code = code+text[i];
				f--;
			}
			else{ciphered=false;}
			f=f+1;
			if(f==wKey.length)
			{
				f=0;
			}
		}
		return code;
	};
	let codeText = eText(pText);

	document.getElementById("encipheredText").innerHTML = codeText;
}
