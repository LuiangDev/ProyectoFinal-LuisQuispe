import RegisterForm from "../auth/RegisterForm"


const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Registrarse</h1>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
