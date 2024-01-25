import { ReactNode } from "react";

interface ButtonProps {
  onclick?: () => void;
  children: ReactNode;
}

export default function Button({ onclick, children }: ButtonProps) {
  return <button onClick={onclick}>{children}</button>;
}
