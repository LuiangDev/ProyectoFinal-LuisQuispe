import React, { useState } from 'react';

const paymentOptions = [
  {
    id: 'card',
    name: 'Tarjeta de Crédito / Débito',
    description: 'Visa, MasterCard, American Express',
    icon: '💳',
  },
  {
    id: 'bank',
    name: 'Transferencia Bancaria',
    description: 'Interbank, BCP, BBVA, Scotiabank',
    icon: '🏦',
  },
  {
    id: 'yape',
    name: 'Pago móvil (Yape / Plin)',
    description: 'Escanea el QR con tu app',
    icon: '📲',
  },
];

const PaymentMethods = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (methodId) => {
    setSelected(methodId);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-sky-900">Selecciona tu Medio de Pago</h2>
      <div className="grid gap-4">
        {paymentOptions.map((method) => (
          <div
            key={method.id}
            onClick={() => handleSelect(method.id)}
            className={`cursor-pointer border-2 rounded-xl p-4 flex items-center justify-between transition-all duration-200 ${
              selected === method.id
                ? 'border-primary bg-primary/10'
                : 'border-gray-200 hover:border-primary'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{method.icon}</span>
              <div>
                <p className="font-semibold">{method.name}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
            {selected === method.id && (
              <span className="text-primary font-bold">✓</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          disabled={!selected}
          className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
            selected
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          Confirmar Método de Pago
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
