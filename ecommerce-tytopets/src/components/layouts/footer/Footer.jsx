import { FaLinkedinIn,FaFacebookF,FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="flex felx-row justify-between items-center bg-sky-900 text-white p-4 rounded-t-3xl">
      <h2 className="font-semibold">TyTo Pets</h2>
      <div className="bg-sky-900 text-white p-4 flex flex-col items-center">
        <h3 className="font-semibold mb-2">Mis Redes Sociales</h3>
        <div className="flex flex-row gap-4 font-normal ">
          <div className="rounded-full bg-amber-400 p-2"><FaLinkedinIn /></div>
          <div className="rounded-full bg-amber-400 p-2"><FaFacebookF /></div>
          <div className="rounded-full bg-amber-400 p-2"><FaInstagram /></div>
        </div>
      </div>
    </div>
  );
};
