import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Loader } from "../Loader";

export const ProductDetailSection = ({ data, isPending, error }) => {
  const navigate = useNavigate();

  if (error) {
    navigate("*");
    return null;
  }
  return (
    <section className="max-w-6xl flex flex-col md:flex-row md:justify-center mx-auto p-4 ">
      {isPending && <Loader />}
      <div className="mx-auto mt-10">
        <section className="flex flex-col items-center p-6 dark rounded-md ">
          <h1 className="text-1xl font-bold sm:text-2xl md:text-3xl">
            {data?.title}
          </h1>
          <img className="w-60 mt-10 sm:w-70 md:w-90" src={data?.image} />
        </section>
      </div>
      <section className="flex flex-col items-center justify-center h-full md:w-2/5  rounded-lg   gap-2 mt-10 md:bg-white md:dark:bg-zinc-950  dark:hover:border-white  transition-all duration-400 shadow-xl/20 dark:shadow-white/20  hover:shadow-orange-500/50 ">
        <div className="flex  flex-wrap justify-around  mt-10     w-full   ">
          <h3 className="text-1xl sm:text-2xl font-semibold">
            Precio: ${data?.price}
          </h3>
          <button className="flex bg-orange-400 text-white p-2 rounded-lg shadow-xl hover:shadow-orange-400/50 cursor-pointer hover:bg-white border hover:border-orange-400 hover:text-orange-400 transition-all duration-300 gap-2 ">
            <p className="font-semibold ">Add To Cart</p>
            <Icon className="" icon="iconoir:cart" width="24" height="24" />
          </button>
        </div>
        bo
        <div className="flex justify-start">
          <h2 className="">{data?.category}</h2>
        </div>
        <div className="flex flex-col ">
          <h2 className="text-center text-3xl">Description</h2>
          <p className="text-start m-4 ">{data?.description}</p>
        </div>
      </section>
    </section>
  );
};
