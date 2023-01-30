import { FC, memo, ReactNode } from "react";

export type TooltipProps = {
  children: ReactNode;
  text: string;
};

const Tooltip: FC<TooltipProps> = memo((props) => {
  return (
    <span className="tooltip group ">
      <span className="text pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-azul-dark px-2 py-1 text-blanco-light opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-azul-dark before:content-[''] group-hover:opacity-100">
        {props.text}
      </span>

      {props.children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
