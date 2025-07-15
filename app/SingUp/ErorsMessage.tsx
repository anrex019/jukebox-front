import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function ErrorMassage(props: props) {
  return <span style={{ color: "red" }}>{props.children}</span>;
}
