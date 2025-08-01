import LoginForm from "../auth/LoginForm"


const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-sky-900 mb-6">Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
