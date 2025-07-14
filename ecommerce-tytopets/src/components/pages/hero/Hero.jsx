export const Hero = () => {
  return (
    <div className=" bg-gray-500 p-6 mb-8">
      <div className="flex flex-col items-center justify-center h-[400px]">
        <h1 className="text-4xl font-bold text-white">Bienvenido a TyTo Pets</h1>
        <p className="text-lg text-white mt-2">Todo lo que tu mascota necesita en un solo lugar</p>
        <button className="mt-4 px-6 py-2 cursor-pointer bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
          Explorar Productos
        </button>
      </div>
    </div>
  )
}
