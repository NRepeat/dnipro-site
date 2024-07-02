import React, { FC } from "react";

type CardGridProps = {
  cards: React.ReactNode[];
  columns: number;
  rows: number;
};

const CardGrid: FC<CardGridProps> = ({ cards, columns, rows }) => {
  return (
    <div
      className={`flex justify-center items-center pt-4 gap-24  w-full grid-rows-${columns} grid-cols-${rows} w-full`}
    >
      {cards.map((card, i) => (
        <div key={i}> {card} </div>
      ))}
    </div>
  );
};

export default CardGrid;
