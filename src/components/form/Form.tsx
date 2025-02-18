import { PropsWithChildren } from "react";
import { FormItemType } from "../../utils/constants";
import "./form.styles.css";

type FormProps = FormItemType & PropsWithChildren;

export const Form = ({ id, children }: FormProps) => {
  return <form id={id}>{children}</form>;
};
