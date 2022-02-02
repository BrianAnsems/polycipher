//Enigma Javascript Page
var PageManager = {
	init: function()
	{
		this.updateCodedText();
	},
	updateCodedText: function(plainText)
	{
		var instance = this;
		$('#encipher').click(function(e)
		{
			e.preventDefault();
			$.ajax({
				success: function()
				{
					var pText = document.getElementById("message").value.toLowerCase();
					var wKey = document.getElementById("wordkey").value.toLowerCase();
					var eText = function(text){
						var code = "";
						var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
						var cipherAlphabet = {};
						console.log(cipherAlphabet);
						//Give cipher Alphabet properties of each letter in the key word

						for(var t=0;t<wKey.length;t++)
						{
							cipherAlphabet["wCipher"+t]=[];
							console.log(cipherAlphabet["wCipher"+t]);
							for(var a=0;a<alphabet.length;a++)
							{
								cipherAlphabet["wCipher"+t].push(alphabet[a]);
							}								
							console.log(cipherAlphabet["wCipher"+t]);

							while(cipherAlphabet["wCipher"+t][0]!=wKey.charAt(t))
							{
								var letter = cipherAlphabet["wCipher"+t].pop();
								cipherAlphabet["wCipher"+t].unshift(letter);
							}						
						console.log(cipherAlphabet["wCipher"+t][0]);
						}

						var f = 0;
						//encipher plaintext with cipher alphabet
						for(var i=0;i<text.length;i++)
						{
							console.log(f);
							var ciphered = false;
							if(text[i]==" ")
							{
								code = code+" ";
								ciphered=true;
								f--;
							}
							for(var k=0;k<alphabet.length;k++)
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
					var codeText = eText(pText);
					$('#encipheredtext').html(codeText);
				}
			});
		}
		);
	}
}
PageManager.init();