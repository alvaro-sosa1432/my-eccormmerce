import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Loader } from "./Loader";

export const ProductDetailSection = ({ data, isPending, error }) => {
  const navigate = useNavigate();

  if (error) {
    navigate("*");
    return null;
  }
  return (
    <section className="max-w-6xl flex flex-col md:flex-row md:justify-center mx-auto ">
      {isPending && <Loader />}
      <div className="mx-auto mt-10">
        <section className="flex flex-col items-center p-6 dark rounded-md ">
          <h1 className="text-1xl font-bold sm:text-2xl md:text-3xl">
            {data?.title}
          </h1>
          <img className="w-60 mt-10 sm:w-70 md:w-90" src={data?.image} />
        </section>
      </div>
      <section className="flex flex-col items-center justify-center h-full md:w-2/5  rounded-lg   gap-5 mt-10 md:bg-white ">
        <div className="flex  flex-wrap justify-around  mt-10 gap-6  w-full  ">
          <h3 className="text-1xl sm:text-2xl font-semibold">
            Precio: ${data?.price}
          </h3>
          <button className="cursor-pointer text-center flex  gap-4 items-center justify-center border border-orange-400  rounded-lg bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 p-2 ">
            <p className="font-semibold ">Add To Cart</p>
            <Icon className="" icon="iconoir:cart" width="24" height="24" />
          </button>
        </div>
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
