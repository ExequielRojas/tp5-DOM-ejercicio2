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
      Peso: ${this.#peso}
      Altura: ${this.#altura}
      Año de Nacimiento: ${this.#anioNacimiento}
      `)
  }
}