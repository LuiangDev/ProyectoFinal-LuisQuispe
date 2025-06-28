import "./Footer.css";

export const Footer = () => {
  return (
    <div className="flex felx-row justify-between items-center bg-sky-900 text-white p-4">
      <h2>TyTo Pets</h2>
      <div className="bg-sky-900 text-white p-4 flex flex-col items-center">
        <h3>Mis Redes Sociales</h3>
        <div className="flex flex-row gap-4 ">
          <p>Youtube</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};
