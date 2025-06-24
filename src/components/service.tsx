import type { ReactNode } from "react";

type ServiceProps = {
  children: ReactNode;
  title: string;
  description: string;
};
const Service = ({ title, children, description }: ServiceProps) => {
  return (
    <article className="bg-[#0D0D0D] rounded-2xl px-6 py-8 space-y-6">
      <div className="border-b border-white/10 flex items-center gap-4 pb-4">
        {children}
        <h4 className="text-white capitalize text-2xl">{title}</h4>
      </div>
      <p className="text-white/50">{description}</p>
    </article>
  );
};

export default Service;
