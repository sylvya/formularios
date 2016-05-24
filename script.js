//alert("hola mundo");
	//FORMULARIO1

function soloLetras(e){
       key = e.keyCode || e.which;
		//String.fromCharCode(key):Se obtiene el caracter presionado por el usuario, 
		//convirtiendola a minusculas con la sentencia tolowerCase y lo almacenamos en
		// la variable tecla.
		tecla = String.fromCharCode(key).toLowerCase();
		//Guardamos en la variable letras la cadena de texto permitida por nosotros.
		letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
		//guardamos el keycode de las teclas especiales que son:
		//tales como (BackSpace , flecha izquierda, flecha derecha, Supr). 
		especiales = "8-37-39-46";

		tecla_especial = false
		//En el ciclo for se busca si está la tecla presionada por el usuario en 
		//el array de teclas especiales "especiales"
		for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }
		/*dentro del condicional hacemos uso de la propiedad indexOf() que averigua si 
		una cadena se encuentra dentro de otra cadena devolviendo como valor 
		la posición de la cadena encontrada o el valor de -1 si es que no la encuentra , 
		que para este caso queremos averiguar si el caracter presionado se encuentra 
		entre las letras permitidas.

		diríamos que el condicional retorna falso si la tecla presionada no
		está en la lista de letras permitidas hecha por nosotros
		*/
		if(letras.indexOf(tecla)==-1 && !tecla_especial){
			alert("Sólo se admiten letras de la a-z");
            return false;
        }
    }

	//FORMULARIO2
	$('.btn-validar').click(function(event){
		//prevenir el evento{}
		event.preventDefault();

		//alert("le has dado click en el boton!!!!!!!!");
		//obtener el valor de un cuadro de texto con la clase apellidos.
		 var valor = ($(".apellidos").val());
		//alert("ESTE ES EL APELLIDO:  "+valor);
		//La variable alfabeto almacena la cadena de caracteres permitidos.
		var alfabeto = "abcdefghijklmnñopqrstuvwxyz";
		
		//el valor ingresado por el usuario se convierte
		//todo en minusculas y luego se almacena en la variable texto.
		texto = valor.toLowerCase();

		//
		for (i = 0; i < texto.length; i++){
			//console.log(texto[i]);
			//se está recorriendo la cadena de texto y se almacena 
			// en la variablerecorrido.
			var recorrido = alfabeto.indexOf(texto[i])
			//console.log( recorrido);
			
			//validar que lo que fue ingresado por el usuario este dentro de la cadena 
			//de texto permitido.
			if (recorrido==-1) {
				//console.log("no esta permitido :(");
				//En caso contrario limpiamos el cuadro de texto.
				$(".apellidos").val("");
				alert("Sólo se admiten letras de la a-z");
				return;
			};
		}	
		

	});
	
	//FORMULARIO3
	function soloNumeros(n){
       key = n.keyCode || n.which;
		//String.fromCharCode(key):Se obtiene el caracter presionado por el usuario, 
		//convirtiendola a minusculas con la sentencia tolowerCase y lo almacenamos en
		// la variable tecla.
		tecla = String.fromCharCode(key).toLowerCase();
		//Guardamos en la variable letras la cadena de texto permitida por nosotros.
		letras = "0123456789";
		//guardamos el keycode de las teclas especiales que son:
		//tales como (BackSpace , flecha izquierda, flecha derecha, Supr). 
		especiales = "8-37-39-46";

		tecla_especial = false
		//En el ciclo for se busca si está la tecla presionada por el usuario en 
		//el array de teclas especiales "especiales"
		for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }
		/*dentro del condicional hacemos uso de la propiedad indexOf() que averigua si 
		una cadena se encuentra dentro de otra cadena devolviendo como valor 
		la posición de la cadena encontrada o el valor de -1 si es que no la encuentra , 
		que para este caso queremos averiguar si el caracter presionado se encuentra 
		entre las letras permitidas.

		diríamos que el condicional retorna falso si la tecla presionada no
		está en la lista de letras permitidas hecha por nosotros
		*/
		if(letras.indexOf(tecla)==-1 && !tecla_especial){
			alert("Sólo se admiten numeros del 0-9");
            return false;
        }
        alert("Haz ingresado correctamente los datos.");
    }

    //FORMULARIO4
	$('.btn-telefono').click(function(event){
		//prevenir el evento{}
		event.preventDefault();

		//alert("le has dado click en el boton!!!!!!!!");
		//obtener el valor de un cuadro de texto con la clase apellidos.
		 var valor = ($(".telefono").val());
		//alert("ESTE ES EL APELLIDO:  "+valor);
		//La variable alfabeto almacena la cadena de caracteres permitidos.
		var alfabeto = "0123456789";
		
		//el valor ingresado por el usuario se convierte
		//todo en minusculas y luego se almacena en la variable texto.
		texto = valor.toLowerCase();

		//
		for (i = 0; i < texto.length; i++){
			//console.log(texto[i]);
			//se está recorriendo la cadena de texto y se almacena 
			// en la variablerecorrido.
			var recorrido = alfabeto.indexOf(texto[i])
			//console.log( recorrido);
				
			
			//validar que lo que fue ingresado por el usuario este dentro de la cadena 
			//de texto permitido.
			if (recorrido==-1) {
				//console.log("no esta permitido :(");
				//En caso contrario limpiamos el cuadro de texto.
				$(".telefono").val("");
				alert("Sólo se admiten números de 0-9");
				return;
			};	
		}	
		alert("haz ingresado correctamente los datos");
	});

	//FORMULARIO5
	function soloSimbolos(s){
		var code = (s.keyCode ? s.keyCode : s.which);
		if(code == 13) { //Enter keycode
			return false;
		}
       key = s.keyCode || s.which;
		//String.fromCharCode(key):Se obtiene el caracter presionado por el usuario, 
		//convirtiendola a minusculas con la sentencia tolowerCase y lo almacenamos en
		// la variable tecla.
		tecla = String.fromCharCode(key).toLowerCase();
		//Guardamos en la variable letras la cadena de texto permitida por nosotros.
		letras = "°|!#$%&/()=?¡*¨\\¬[];:_,.-{}¿'~@^"+'"';
		
		//guardamos el keycode de las teclas especiales que son:
		//tales como (BackSpace , flecha izquierda, flecha derecha, Supr). 
		especiales = "8-37-39-46-13";

		tecla_especial = false
		//En el ciclo for se busca si está la tecla presionada por el usuario en 
		//el array de teclas especiales "especiales"
		for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }
        
		/*dentro del condicional hacemos uso de la propiedad indexOf() que averigua si 
		una cadena se encuentra dentro de otra cadena devolviendo como valor 
		la posición de la cadena encontrada o el valor de -1 si es que no la encuentra , 
		que para este caso queremos averiguar si el caracter presionado se encuentra 
		entre las letras permitidas.

		diríamos que el condicional retorna falso si la tecla presionada no
		está en la lista de letras permitidas hecha por nosotros
		*/
		if(letras.indexOf(tecla)==-1 && !tecla_especial){
			alert("Sólo se admiten caracteres especiales Ejemplo: °!#$%&/()=?¡[{.-,;:_\\}]");

            return false;
        }

    }

    $('.btn-simbolo').click(function(event){
		//prevenir el evento{}
		event.preventDefault();

		//alert("le has dado click en el boton!!!!!!!!");
		//obtener el valor de un cuadro de texto con la clase apellidos.
		 var valor = ($(".simbolo2").val());
		//alert("ESTE ES EL APELLIDO:  "+valor);
		//La variable alfabeto almacena la cadena de caracteres permitidos.
		var alfabeto = "°|!#$%&/()=?¡*¨\\¬[];:_,.-{}¿'~@^";
		
		//el valor ingresado por el usuario se convierte
		//todo en minusculas y luego se almacena en la variable texto.
		texto = valor.toLowerCase();

		//
		for (i = 0; i < texto.length; i++){
			//console.log(texto[i]);
			//se está recorriendo la cadena de texto y se almacena 
			// en la variablerecorrido.
			var recorrido = alfabeto.indexOf(texto[i])
			//console.log( recorrido);
				
			
			//validar que lo que fue ingresado por el usuario este dentro de la cadena 
			//de texto permitido.
			if (recorrido==-1) {
				//console.log("no esta permitido :(");
				//En caso contrario limpiamos el cuadro de texto.
				$(".simbolo2").val("");
				alert("Sólo se admiten caracteres especiales Ejemplo: °!#$%&/()=?¡[{.-,;:_\\}]");
				return;
			};	
		}	
		alert("haz ingresado correctamente los datos");
	});


	$('#formCorreo').submit(function(event){
		event.preventDefault();
		alert("todo está bien.");
	});

	//VALIDAR CORREO CON EXPRESIONES REGULARES.
	$('#valCorreo').submit(function(event){
		event.preventDefault();
		var valor =  $(".correo2").val();
		console.log(valor);
		if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(valor)){
			alert("Bien!! haz ingresado tu cuenta correctamente.");
		} else {
			alert("Dame tu email correctamente.");
		}
	});

	/*function validarCorreo(){
		event.preventDefault();	
		var valor = $(".correo2").val();
		console.log(valor);
	};
	//Otra forma de obtener el elemento por medio de un id y agregar al evento a la escucha al evento click y llamar la función.
	document.getElementById("myBtn").addEventListener("click", validarCorreo);

	*/