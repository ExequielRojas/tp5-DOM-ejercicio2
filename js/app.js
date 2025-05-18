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
        
    } else if (this.#anioNacimiento <= 1968) {

    } else if (this.#anioNacimiento <= 1980) {

    } else if (this.#anioNacimiento <= 1993) {

    } else if (this.#anioNacimiento <= 2010) {

    }
  }

  esMayorDeEdad() {
    if(this.#edad >= 18){

    } else {

    }
  }

  mostrarDatos() {
    
  }
}