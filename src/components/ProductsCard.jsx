import { Link } from "react-router-dom";

export const ProductsCard = ({ id, title, price, image }) => {
  return (
    <Link
      to={`product/${id}`}
      className="flex flex-col   justify-center items-center border border-white w-60  sm:w-75 mx-auto rounded-lg m-2 bg-white dark:bg-zinc-950 dark:text-white cursor pointer text-orange-400 hover:text-orange-600  hover:border-orange-400/50 transition-colors duration-300  "
    >
      <div className="">
        <h2 className="p-2 text-center font-bold text-1xl  ">{title}</h2>
        <div className="flex justify-center items-center p-4 gap-4">
          <img className="w-50 h-50  " src={image} alt={title} />
        </div>
        <div className="p-4 ">
          <p className="font-semibold text-center">Price: ${price}</p>
        </div>
      </div>
    </Link>
  );
};
