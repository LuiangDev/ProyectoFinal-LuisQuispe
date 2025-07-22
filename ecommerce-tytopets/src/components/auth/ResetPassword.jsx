import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('⚠️ Las contraseñas no coinciden.');
      return;
    }

    // Aquí iría tu lógica de conexión al backend (por token o email)
    console.log('Restableciendo contraseña:', password);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">🔒 Restablecer Contraseña</h2>

        {success ? (
          <div className="text-center text-green-600 font-semibold">
            ✅ Tu contraseña ha sido restablecida con éxito. Ahora puedes iniciar sesión.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nueva contraseña</label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition duration-300"
            >
              Restablecer contraseña
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
