var alertBox = document.querySelector('.alertBox')

function getPassword(){
			var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&()_+?><:{}[]";
			var passwordLength = 16;
			var password = "";

			for(var i=0; i<passwordLength; i++){
				var randomNumber = Math.floor(Math.random() * chars.length);
				password += chars.substring(randomNumber, randomNumber+1);
			}
			document.getElementById("password").value = password;
			alertBox.innerHTML = "Nueva Contraseña Copiada: <br>" + password;
		}

		function limpiar(){
		    var limpiar = document.getElementById("password");
		   document.getElementById("password").value = "";
		}

		function copyPass(){
			var copyPass = document.getElementById("password");
			copyPass.select();
			copyPass.setSelectionRange(0,9999);
			document.execCommand("copiar");
			alertBox.classList.toggle('active');
			setTimeout(function(){
				alertBox.classList.toggle('active');
			},2000)
		}
