import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className={"relative w-[95%] pb-12 m-auto text-[#C0E8F0]"}>
        <div className="m-auto pt-24 w-[100%] py-6">
          <ul className="flex flex-col gap-8 items-star justify-between md:flex-row">
            <li className="flex-shrink-0">
              <h3 className="uppercase font-bold">Lo Basico</h3>
              <div className="flex flex-col">
                <a href="" className="py-1">
                  Sobre nosotros
                </a>
                <a href="" className="py-1">
                  Contacto
                </a>
                <a href="" className="py-1">
                  Foros de ayuda
                </a>
                <a href="" className="py-1">
                  Estado de el sistema
                </a>
              </div>
            </li>

            <li className="flex-shrink-0">
              <h3 className="uppercase font-bold">PARTICIPA</h3>
              <div className="flex flex-col">
                <a href="" className="py-1">
                  Guía de aportaciones
                </a>
                <a href="" className="py-1">
                  Añadir nueva película
                </a>
                <a href="" className="py-1">
                  Añadir nuevo programa de tv
                </a>
              </div>
            </li>

            <li>
              <h3 className="uppercase font-bold">COMUNIDAD</h3>
              <div className="flex flex-col">
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Directrices
                </a>
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Discusiones
                </a>
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Tabla de clasificación
                </a>
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Twitter
                </a>
              </div>
            </li>

            <li>
              <h3 className="uppercase font-bold">LEGAL</h3>
              <div className="flex flex-col">
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Términos de uso
                </a>
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Términos de uso de la API
                </a>
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Política de privacidad
                </a>
                <a
                  href=""
                  className="py-1 hover:text-[#C0E8F080] transition-colors duration-100"
                >
                  Preferencias de cookies
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center gap-7">
            <a href="#">
              <i className="text-4xl hover:opacity-80 transition-colors">
                <BsFacebook />
              </i>
            </a>

            <a href="#">
              <i className="text-4xl hover:opacity-80 transition-colors ">
                <BsInstagram />
              </i>
            </a>

            <a href="#">
              <i className="text-4xl hover:opacity-80 transition-colors">
                <BsTwitter />
              </i>
            </a>

            <a href="#">
              <i className="text-4xl hover:opacity-80 transition-colors">
                <BsGithub />
              </i>
            </a>
          </div>
        </div>
        <p className="text-center py-6">&copy; 2023 Movie.tv</p>
      </div>
    </footer>
  );
}
export default Footer;
