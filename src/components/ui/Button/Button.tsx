import { twMerge } from "tailwind-merge";
import { ButtonClass } from "./Button.style";

export interface ButtonProps {
  isSubmitting: boolean;
  classStyle: ButtonClass;
  classEnhancer?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  isSubmitting,
  classStyle,
  classEnhancer,
  children,
}) => (
  <button
    disabled={isSubmitting}
    type="submit"
    className={twMerge(classStyle, classEnhancer)}
  >
    {children}
  </button>
);
