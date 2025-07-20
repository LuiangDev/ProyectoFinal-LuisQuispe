import React, { useState } from 'react';

const pedidosDemo = [
  {
    id: 'PET-1001',
    fecha: '2025-07-20',
    estado: 'Entregado',
    total: 'S/ 120.00',
    mascota: '🐶',
  },
  {
    id: 'PET-1002',
    fecha: '2025-07-19',
    estado: 'En camino',
    total: 'S/ 59.90',
    mascota: '🐱',
  },
  {
    id: 'PET-1003',
    fecha: '2025-07-18',
    estado: 'Pendiente',
    total: 'S/ 32.50',
    mascota: '🐰',
  },
];

const estadoColor = {
  'Entregado': 'bg-green-100 text-green-600',
  'En camino': 'bg-yellow-100 text-yellow-600',
  'Pendiente': 'bg-orange-100 text-orange-600',
  'Cancelado': 'bg-red-100 text-red-600',
};

export const SeguimientoPedidosMascotas = () => {
  const [busqueda, setBusqueda] = useState('');

  const pedidosFiltrados = pedidosDemo.filter((pedido) =>
    pedido.id.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📦 Seguimiento de tus pedidos</h2>

      <p className="mb-4 text-gray-600">Consulta el estado de tus productos para tu mascota 🐾</p>

      <input
        type="text"
        placeholder="🔍 Buscar por ID de pedido..."
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-primary focus:outline-none"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="overflow-x-auto shadow-md border rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Pedido</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Mascota</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {pedidosFiltrados.map((pedido) => (
              <tr key={pedido.id} className="border-t hover:bg-gray-50 transition-all">
                <td className="px-4 py-3 font-medium">{pedido.id}</td>
                <td className="px-4 py-3">{pedido.fecha}</td>
                <td className="px-4 py-3 text-xl">{pedido.mascota}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${estadoColor[pedido.estado]}`}
                  >
                    {pedido.estado}
                  </span>
                </td>
                <td className="px-4 py-3">{pedido.total}</td>
                <td className="px-4 py-3">
                  <button className="text-primary hover:underline font-medium">
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
            {pedidosFiltrados.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No se encontraron pedidos con ese ID. 🐾
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
