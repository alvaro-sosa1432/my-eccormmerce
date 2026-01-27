import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-orange-400 min-h-screen flex items-center flex-col justify-center">
      <h2 className="text-3xl font-bold text-white">Ups, Hubo un error </h2>
      <button
        className="border-white border w-40 rounded-lg text white cursor-pointer p-1 text-orange-500 bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 hover:border-orange-500  "
        onClick={() => navigate("/")}
      >
        Inicio
      </button>
    </section>
  );
};
