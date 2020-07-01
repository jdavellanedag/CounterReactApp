const nombre = "Julian";
const apellido = "Avellaneda";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

//console.log( nombreCompleto );

export function getSaludo(nombre = "Jhon") {
  return "Hola " + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
