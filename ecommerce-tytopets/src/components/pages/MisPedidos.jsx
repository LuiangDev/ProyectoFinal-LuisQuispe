import React from "react";

const pedidos = [
  {
    id: "PED001",
    fecha: "2025-07-20",
    estado: "Entregado",
    total: "S/ 89.90",
    productos: [
      { nombre: "Croquetas DogPlus 5kg", cantidad: 1 },
      { nombre: "Juguete Hueso de Caucho", cantidad: 2 },
    ],
  },
  {
    id: "PED002",
    fecha: "2025-07-15",
    estado: "En camino",
    total: "S/ 45.00",
    productos: [
      { nombre: "Snacks para gato", cantidad: 3 },
    ],
  },
];

const MisPedidos = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary">Mis pedidos</h2>

      {pedidos.length === 0 ? (
        <p className="text-gray-500">No has realizado pedidos aún.</p>
      ) : (
        <div className="space-y-6">
          {pedidos.map((pedido) => (
            <div
              key={pedido.id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-lg font-semibold">Pedido #{pedido.id}</p>
                  <p className="text-sm text-gray-500">
                    Fecha: {pedido.fecha}
                  </p>
                </div>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    pedido.estado === "Entregado"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {pedido.estado}
                </span>
              </div>

              <ul className="mb-3 text-sm text-gray-600">
                {pedido.productos.map((producto, index) => (
                  <li key={index}>
                    • {producto.nombre} × {producto.cantidad}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-gray-700">
                  Total: {pedido.total}
                </p>
                <button className="text-sm text-primary font-medium hover:underline">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MisPedidos;
