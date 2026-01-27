import { Icon } from "@iconify/react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-2/4">
      <Icon
        className="text-orange-500 "
        icon="line-md:loading-loop"
        width="60"
        height="60"
      />
    </div>
  );
};
