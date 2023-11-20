// Import necessary libraries and components
import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { ButtonClass } from "./Button.style";

// Test suite for SubmitButton component
describe("SubmitButton", () => {
  // Test to check if the component renders without crashing
  it("renders without crashing", () => {
    render(
      <Button isSubmitting={false} classStyle={ButtonClass.primary}>
        Submit
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  // Test to check if the button is disabled when isSubmitting is true
  it("is disabled when isSubmitting is true", () => {
    render(
      <Button isSubmitting={true} classStyle={ButtonClass.primary}>
        Submit
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  // Test to check if the button is enabled when isSubmitting is false
  it("is enabled when isSubmitting is false", () => {
    render(
      <Button isSubmitting={false} classStyle={ButtonClass.primary}>
        Submit
      </Button>
    );
    expect(screen.getByRole("button")).toBeEnabled();
  });

  // Test to check if the button correctly applies given class names
  it("applies given class names with classEnhancer", () => {
    render(
      <Button
        isSubmitting={false}
        classStyle={ButtonClass.primary}
        classEnhancer="extra-class"
      >
        Submit
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass(twMerge(ButtonClass.primary, "extra-class"));
  });

  // Test to check if the button displays its children correctly
  it("displays the children", () => {
    render(
      <Button isSubmitting={false} classStyle={ButtonClass.primary}>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  // Add any additional tests as necessary
});
