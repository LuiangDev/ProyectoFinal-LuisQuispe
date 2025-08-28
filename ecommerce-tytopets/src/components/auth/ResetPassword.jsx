import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("⚠️ Las contraseñas no coinciden.");
      return;
    }

    console.log("Restableciendo contraseña:", password);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-cyan-700 mb-6">
          🔒 Restablecer Contraseña
        </h2>

        {success ? (
          <div className="text-center text-black font-normal">
            ✅ Tu contraseña ha sido restablecida con éxito.
            <div className="mt-6">
            <Link
              type="submit"
                to="/login"
              className="w-full bg-sky-900 text-white cursor-pointer py-2 px-4 rounded-md transition duration-300"
            >
              Iniciar sesión
            </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nueva contraseña
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmar contraseña
              </label>
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
              className="w-full bg-sky-900 text-white cursor-pointer py-2 px-4 rounded-md transition duration-300"
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
