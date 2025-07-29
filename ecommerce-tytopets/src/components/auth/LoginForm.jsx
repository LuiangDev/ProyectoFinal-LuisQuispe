import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .required("Campo obligatorio"),
  });

  const handleSubmit = (values) => {
    console.log("Datos enviados:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <Field
            name="email"
            type="email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <Field
            name="password"
            type="password"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        <div className="text-left text-sm text-gray-600">
          ¿Olvidaste tu contraseña?{" "}
          <a href="/resetpassword" className="text-blue-600 hover:underline">
            Restablecer
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-sky-900 cursor-pointer text-white py-2 rounded-lg hover:bg-sky-950 transition-colors"
        >
          Ingresar
        </button>

        <div className="text-center text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Regístrate
          </a>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
