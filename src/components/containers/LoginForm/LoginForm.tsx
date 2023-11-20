// Asegúrate de ajustar la ruta de importación

import { useFormHandling } from "../../../hooks/useForm/useForm";
import { useFormSubmission } from "../../../hooks/useFormSubmission/useFormSubmission";
import { Button } from "../../ui/Button/Button";
import { ButtonClass } from "../../ui/Button/Button.style";
import { Input } from "../../ui/Input/Input";

export default function FormWithReactHookFormAndZodAndServer() {
  const { register, handleSubmit, errors, isSubmitting, setError, reset } =
    useFormHandling();
  const onSubmit = useFormSubmission(setError, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <Input
        register={register}
        name="email"
        type="email"
        placeholder="Email"
        classEnhancer="mb-3"
        error={errors.email?.message}
      />

      <Input
        register={register}
        name="password"
        type="password"
        placeholder="Password"
        classEnhancer="mb-3"
        error={errors.password?.message}
      />

      <Input
        register={register}
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        classEnhancer="mb-3"
        error={errors.confirmPassword?.message}
      />

      <Button isSubmitting={isSubmitting} classStyle={ButtonClass.primary}>
        Submit
      </Button>
    </form>
  );
}
