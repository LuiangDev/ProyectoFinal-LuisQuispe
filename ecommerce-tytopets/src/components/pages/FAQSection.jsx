import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer:
      'Aceptamos tarjetas de crédito, débito, Yape, Plin y transferencias bancarias. Todos los pagos son 100% seguros.',
  },
  {
    question: '¿Cuánto tarda el envío?',
    answer:
      'Los envíos dentro de Lima demoran entre 1 a 3 días hábiles. Para provincias, el tiempo estimado es de 3 a 7 días.',
  },
  {
    question: '¿Puedo cambiar o devolver un producto?',
    answer:
      'Sí, tienes hasta 7 días calendario para solicitar un cambio o devolución si el producto no cumple con tus expectativas o presenta fallas.',
  },
  {
    question: '¿Tienen atención personalizada?',
    answer:
      'Claro, puedes contactarnos por WhatsApp o redes sociales. Nuestro equipo está listo para ayudarte.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition duration-300"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-600 bg-gray-50 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
