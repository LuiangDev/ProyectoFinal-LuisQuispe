import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white px-6 py-8 rounded-t-3xl">
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
              <li>Preguntas Frecuentes</li>
              <li>Envíos y devoluciones</li>
              <li>Seguimiento de pedidos</li>
              <li>Métodos de pago</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Categorías</h3>
            <ul className="space-y-1">
              <li>Alimentos</li>
              <li>Juguetes</li>
              <li>Higiene</li>
              <li>Ropa y accesorios</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Mi Cuenta</h3>
            <ul className="space-y-1">
              <li>Iniciar Sesión</li>
              <li>Mi carrito</li>
              <li>Mis pedidos</li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="font-semibold mb-2">Mis Redes Sociales</h3>
          <div className="flex gap-4">
            <div className="rounded-full bg-amber-400 p-2 cursor-pointer"><FaLinkedinIn /></div>
            <div className="rounded-full bg-amber-400 p-2 cursor-pointer"><FaFacebookF /></div>
            <div className="rounded-full bg-amber-400 p-2 cursor-pointer"><FaInstagram /></div>
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
