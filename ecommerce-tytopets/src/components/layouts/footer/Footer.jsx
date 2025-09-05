import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white px-6 py-8 rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Marca */}
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-2">TyTo Pets</h2>
          <p className="text-sm">Amor, juego y cuidado en cada pedido.</p>
        </div>

        {/* Secciones */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Atención al Cliente</h3>
            <ul className="space-y-1">
              <Link to="/faq">
                <li>Preguntas Frecuentes</li>
              </Link>
              <Link to="/shipping">
                <li>Envíos y devoluciones</li>
              </Link>
              <Link to="/seguimiento">
                <li>Seguimiento de pedidos</li>
              </Link>
              <Link to="/payment">
                <li>Métodos de pago</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Categorías</h3>
            <ul className="space-y-1">
              <Link to="/category/Alimentos">
                <li>Alimentos</li>
              </Link>
              <Link to="/category/Accesorios">
                <li>Accesorios</li>
              </Link>
              <Link to="/category/Higiene">
                <li>Higiene</li>
              </Link>
              <Link to="/category/CamasyTransportadoras">
                <li>Camas y Transportadoras</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Mi Cuenta</h3>
            <ul className="space-y-1">
              <Link to="/login">
                <li>Iniciar Sesión</li>
              </Link>
              <Link to="/micarrito">
                <li>Mi carrito</li>
              </Link>
              <Link to="/mispedidos">
                <li>Mis pedidos</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="font-semibold mb-2">Mis Redes Sociales</h3>
          <div className="flex gap-4">
            <Link
              to="https://www.linkedin.com/in/tyto-pets"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-400 p-2 cursor-pointer"
            >
              <FaLinkedinIn />
            </Link>

            <Link
              to="https://www.facebook.com/tyto.pets"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-400 p-2 cursor-pointer"
            >
              <FaFacebookF />
            </Link>

            <Link
              to="https://www.instagram.com/tyto.pets"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-400 p-2 cursor-pointer"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} TyTo Pets — Todos los derechos reservados.
      </div>
    </footer>
  );
};
