
//funcion para los acronimos de los algunos ideomas 
export function acronimoAIdioma(acronimo) {
    let idiomas = {
      es: "español",
      en: "inglés",
      fr: "francés",
      de: "alemán",
      ja: "japonés",
      // Agrega más acrónimos y nombres de idiomas según sea necesario
    };
  
    if (idiomas.hasOwnProperty(acronimo)) {
      return idiomas[acronimo];
    } else {
      return acronimo;
    }
  }

  
