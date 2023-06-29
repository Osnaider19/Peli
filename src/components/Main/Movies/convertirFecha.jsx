export const convertirFecha = (fechaOriginal) => {
  const partesFecha = fechaOriginal.split("-");
  const fecha = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);
  const meses = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  const nombreMes = meses[fecha.getMonth()];
  const nuevaFecha = fecha.getDate() + " " + nombreMes + " " + fecha.getFullYear();
  return nuevaFecha
};

export function roundedStar(star) {
  const convertidas = star.toFixed(1)
  return convertidas
}


export function convertirDuration(duration) {
  const duracion = duration; 
  const horas = Math.floor(duracion / 60); 
  const minutos = duracion % 60; 
  const duracionFormateada = `${horas}h ${minutos}m`; 
  return duracionFormateada
}


