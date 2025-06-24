import type { ReactNode } from "react";

type ProcessProps = {
  children: ReactNode;
  title: string;
  content: string;
  step: number;
};

const Process = ({ children, title, content, step }: ProcessProps) => {
  return (
    <div className="bg-[#0D0D0D] rounded-2xl relative">
      <div className="pt-8 px-6 space-y-6 pb-6">
        {children}

        <h4 className="text-white text-4xl capitalize">{title}</h4>
        <div className="h-[0.5px] bg-white/40" />
        <p className="text-white/50">{content}</p>
      </div>
      <span className="absolute top-4 right-4 h-8 w-8 rounded-t-full border-t-2 flex items-center justify-center border-[#1C1C1C] text-white">
        {step}
      </span>
    </div>
  );
};

export default Process;
