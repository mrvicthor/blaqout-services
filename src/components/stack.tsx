import type { ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  title: string;
};

const Stack = ({ children, title }: StackProps) => {
  return (
    <li className="text-white/50 capitalize flex items-center gap-2 text-lg sm:text-xl md:text-2xl shrink-0">
      {children}
      {title}
    </li>
  );
};

export default Stack;
