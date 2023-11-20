import React from "react";
import { twMerge } from "tailwind-merge";
import { InputErrorStyle, InputStyle } from "./Input.style";

export interface InputProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  register: Function;
  name: string;
  type: string;
  placeholder?: string;
  classStyle?: InputStyle;
  classEnhancer?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  register,
  name,
  type,
  placeholder,
  classStyle = InputStyle.primary,
  classEnhancer,
  error,
}) => (
  <>
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={twMerge(classStyle, classEnhancer)}
    />
    {error && <p className={InputErrorStyle.primary}>{error}</p>}
  </>
);
