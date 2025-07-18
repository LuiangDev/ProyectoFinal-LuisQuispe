import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo inválido').required('Campo obligatorio'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Campo obligatorio'),
  })

  const handleSubmit = (values) => {
    console.log('Datos enviados:', values)
    // Aquí va la lógica de login (auth + redirección)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <Field
            name="email"
            type="email"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <Field
            name="password"
            type="password"
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ingresar
        </button>
      </Form>
    </Formik>
  )
}

export default LoginForm
