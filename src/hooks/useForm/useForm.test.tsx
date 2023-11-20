import { useFormHandling } from "./useForm"; // Adjust the path as needed
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import { SubmitHandler } from "react-hook-form";
import { TSignUpSchema } from "../../lib/types";

function TestFormComponent({
  onSubmit,
}: {
  onSubmit: SubmitHandler<TSignUpSchema>;
}) {
  const { register, handleSubmit, errors } = useFormHandling();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="submit" />
    </form>
  );
}

describe("useFormHandling Hook", () => {
  it("should display error message when form is submitted with invalid email", async () => {
    // Arrange
    const mockSubmit = vi.fn();
    render(<TestFormComponent onSubmit={mockSubmit} />);

    // Act
    fireEvent.submit(screen.getByRole("button"));

    // Assert
    expect(await screen.findByText(/Invalid email/)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
