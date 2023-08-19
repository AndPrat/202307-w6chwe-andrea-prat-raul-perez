import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button componente", () => {
  describe("When is rendered with the text 'Turn to enemy'", () => {
    test("Then it should show a button with the text 'Turn to enemy", () => {
      const buttonText = "Turno to enemy";

      render(<Button text={buttonText} className="button" />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
