import { cn } from "@/lib/utils";
import React, { FC } from "react";
type Props = {
  value: number;
  className?: string;
};

const Price: FC<Props> = ({ value, className }) => {
  return <span className={cn("font-bold", className)}>{value} $</span>;
};

export default Price;
