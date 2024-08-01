import React, { ReactNode } from "react";

interface GridItemProps {
  title: string;
  children: ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col md:flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl">
      <h3 className="text-2xl font-semibold text-white my-4">{title}</h3>
      {children}
    </div>
  );
};

export default GridItem;
