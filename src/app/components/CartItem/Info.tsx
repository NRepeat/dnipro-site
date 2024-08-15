import React, { FC } from "react";

type Props = {
  name: string;
  size: string;
  color: string;
};
const Info: FC<Props> = ({ color, name, size }) => {
  const details = [color, name, size];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-ls font-bold flex-1 leading-6">{name}</h2>
      </div>
      <p className="text-xl text-gray-400">{details.join(",")}</p>
    </div>
  );
};

export default Info;
