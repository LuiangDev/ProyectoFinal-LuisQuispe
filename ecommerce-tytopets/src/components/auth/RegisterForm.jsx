import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(15, "El nombre de usuario no puede exceder los 15 caracteres")
        .required("El nombre de usuario es obligatorio"),
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
        .required("Confirmar contraseña es obligatorio"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      console.log("Datos de registro:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre de Usuario
        </label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-600 text-xs mt-1">
            {formik.errors.username}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo Electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-xs mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 text-xs mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirmar Contraseña
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-600 text-xs mt-1">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Registrarse
      </button>

      <div className="text-center text-sm text-gray-600">
        ¿Ya tienes una cuenta?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Iniciar sesión
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
