import { render, screen } from "@testing-library/react";

import { userMock } from "../../mocks/userMocks";
import UserCard from "./UserCard";

describe("Given a UserCard componente", () => {
  describe("When it receives a user name 'catwoman'", () => {
    test("Then it should show the name 'catwoman' inside a heading", () => {
      const expectedHeaderText = "catwoman";

      render(<UserCard user={userMock} />);

      const userHeading = screen.getByRole("heading", {
        name: expectedHeaderText,
      });

      expect(userHeading).toBeInTheDocument();
    });
  });
});
