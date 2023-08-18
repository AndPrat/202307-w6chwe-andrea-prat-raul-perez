import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("Given a UserCard componente", () => {
  describe("When is rendered with the character name 'Batman'", () => {
    test("Then it should return the name Batman inside a heading", () => {
      const headerText = "Batman";

      render(<UserCard />);

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
