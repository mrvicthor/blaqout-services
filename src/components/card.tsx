import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title: string;
};

const Card = ({ children, title }: CardProps) => {
  return (
    <li className="text-white/50 capitalize flex items-center gap-2 text-lg shrink-0 bg-[#0D0D0D] rounded-2xl py-2 px-4">
      {children} {title}
    </li>
  );
};

export default Card;
