class Persona {
  #nombre;
  #edad;
  #DNI;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
  constructor(
    nombreParam,
    edadParam,
    DNIParam,
    sexoParam,
    pesoParam,
    alturaParam,
    anioNacimientoParam
  ) {
    this.#nombre = nombreParam;
    this.#edad = edadParam;
    this.#DNI = DNIParam;
    this.#sexo = sexoParam;
    this.#peso = pesoParam;
    this.#altura = alturaParam;
    this.#anioNacimiento = anioNacimientoParam;
  }

  mostrarGeneracion() {
    if (this.#anioNacimiento <= 1948) {
        alert(`${this.#nombre} es perteneciente a la Silent Generation y su rasgo caracteristico es: "Austeridad"`)
    } else if (this.#anioNacimiento <= 1968) {
      alert(`${this.#nombre} es perteneciente a la Baby Boom y su rasgo caracteristico es: "Ambicion"`)
    } else if (this.#anioNacimiento <= 1980) {
      alert(`${this.#nombre} es perteneciente a la Generacion X y su rasgo caracteristico es: "Obsesion por el exito"`)
    } else if (this.#anioNacimiento <= 1993) {
      alert(`${this.#nombre} es perteneciente a la Generacion Y (millennials) y su rasgo caracteristico es: "Frustracion"`)
    } else if (this.#anioNacimiento <= 2010) {
      alert(`${this.#nombre} es perteneciente a la Generacion Z y su rasgo caracteristico es: "Irreverencia"`)
    }
  }

  esMayorDeEdad() {
    if(this.#edad >= 18){
      alert(`${this.#nombre} es mayor de edad`)
    } else {
      alert(`${this.#nombre} es menor de edad`)
    }
  }

  mostrarDatos() {
    alert(`Datos del usuario:
      Nombre: ${this.#nombre}
      Edad: ${this.#edad}
      DNI: ${this.#DNI}
      Sexo: ${this.#sexo}
      Peso (Kg): ${this.#peso}
      Altura (m): ${this.#altura}
      Año de Nacimiento: ${this.#anioNacimiento}
      `)
  }
}

let personaCreada = null;

document.getElementById("crearPersona").addEventListener("click", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value.toUpperCase();
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const fechaNacimiento = document.getElementById("anioNacimiento").value;

  const anioNacimiento = new Date(fechaNacimiento).getFullYear();

  personaCreada = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

  alert("¡Datos ingresados correctamente!");
});

document.getElementById("generacion").addEventListener("click", function (e) {
  e.preventDefault();
  if (personaCreada) {
    personaCreada.mostrarGeneracion();
  } else {
    alert("Primero debes ingresar los datos en el formulario.");
  }
});

document.getElementById("mayorEdad").addEventListener("click", function (e) {
  e.preventDefault();
  if (personaCreada) {
    personaCreada.esMayorDeEdad();
  } else {
    alert("Primero debes ingresar los datos en el formulario.");
  }
});

document.getElementById("mostrarDatos").addEventListener("click", function (e) {
  e.preventDefault();
  if (personaCreada) {
    personaCreada.mostrarDatos();
  } else {
    alert("Primero debes ingresar los datos en el formulario.");
  }
});