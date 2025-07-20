import React, { useState } from 'react';

const productosIniciales = [
  {
    id: '1',
    nombre: 'Croquetas para Perro Adulto',
    precio: 45.90,
    cantidad: 2,
    imagen: 'https://i.imgur.com/jy6AyzP.png', // Cambia por tus URLs reales
  },
  {
    id: '2',
    nombre: 'Cama Acolchada para Gato',
    precio: 89.50,
    cantidad: 1,
    imagen: 'https://i.imgur.com/QDFJvCR.png',
  },
];

export const MiCarrito = () => {
  const [carrito, setCarrito] = useState(productosIniciales);

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCarrito((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, cantidad: Math.max(1, nuevaCantidad) } : prod
      )
    );
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((prod) => prod.id !== id));
  };

  const calcularTotal = () =>
    carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0).toFixed(2);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Mi Carrito</h2>

      {carrito.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío. 🐶 Agrega productos para continuar.</p>
      ) : (
        <>
          <div className="space-y-6">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="flex flex-col sm:flex-row items-center border rounded-lg p-4 shadow-sm gap-4"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {producto.nombre}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">S/ {producto.precio.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="px-2 font-medium">{producto.cantidad}</span>
                  <button
                    onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <div className="text-right ml-auto">
                  <p className="font-semibold text-gray-700">
                    S/ {(producto.precio * producto.cantidad).toFixed(2)}
                  </p>
                  <button
                    onClick={() => eliminarProducto(producto.id)}
                    className="text-sm text-red-500 hover:underline mt-1"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-6">
            <p className="text-lg font-semibold text-gray-800">
              Total: <span className="text-primary">S/ {calcularTotal()}</span>
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-red-600 transition">
              Finalizar Compra 🐾
            </button>
          </div>
        </>
      )}
    </div>
  );
};
