import React from "react";

const ShippingReturns = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-primary">Envíos y Devoluciones</h2>

      {/* Sección de Envíos */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 border border-gray-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">🚚</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Envíos</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Envíos a nivel nacional según disponibilidad logística.</li>
              <li>Opción de retiro en planta o entrega por transporte externo.</li>
              <li>El plazo estimado varía según la ubicación y tipo de producto.</li>
              <li>El costo de envío se calcula al confirmar la compra.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección de Devoluciones */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 border border-gray-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">🔁</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Devoluciones</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Solo se aceptan devoluciones por inconformidad técnica comprobada.</li>
              <li>El reclamo debe realizarse dentro de los 3 días hábiles posteriores a la entrega.</li>
              <li>El producto debe conservarse en su empaque original y sin uso.</li>
              <li>La coordinación se realiza directamente con el vendedor.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300">
        <div className="flex items-start gap-3">
          <span className="text-xl mt-1">ℹ️</span>
          <p className="text-sm text-gray-600">
            Para más detalles, revisa los{" "}
            <a href="/politicas" className="underline text-primary font-medium">
              términos y condiciones
            </a>{" "}
            o comunícate con el vendedor antes de realizar tu compra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingReturns;
