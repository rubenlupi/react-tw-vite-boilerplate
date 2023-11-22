import { UseFormReset, UseFormSetError } from "react-hook-form";
import { TSignUpSchema } from "@/lib/types";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { postFetch } from "@/services/post-fetch";
import { useNavigate } from "react-router-dom";

export function useFormSubmission(
  setError: UseFormSetError<TSignUpSchema>,
  reset: UseFormReset<TSignUpSchema>
) {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (data: TSignUpSchema) => {
    try {
      const response: Response = await postFetch<unknown>("/api/signup", data);

      const responseData = await response.json();

      if (!response.ok) {
        alert("Submitting form failed!");
        return;
      }

      if (responseData.errors) {
        const errors = responseData.errors;

        if (errors.email) {
          setError("email", {
            type: "server",
            message: errors.email,
          });
        } else if (errors.password) {
          setError("password", {
            type: "server",
            message: errors.password,
          });
        } else if (errors.confirmPassword) {
          setError("confirmPassword", {
            type: "server",
            message: errors.confirmPassword,
          });
        } else {
          alert("Something went wrong!");
        }
      }

      login({ name: data.email });
      reset();
      navigate("/home");
    } catch (error) {
      alert("An error occurred!");
    }
  };

  return onSubmit;
}
