export function calcularEdad(fecha) {
  let fechaActual = new Date();
  let fechaNacimiento = new Date(fecha);
  let diferencia = fechaActual - fechaNacimiento;
  let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return edad;
}
