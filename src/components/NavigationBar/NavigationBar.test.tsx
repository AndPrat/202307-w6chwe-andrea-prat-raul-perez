import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When is rendered", () => {
    test("Then it should have a linx with a text 'home'", () => {
      const linkText = "home";

      render(
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>,
      );

      const navLink = screen.getByRole("link", {
        name: linkText,
      });
      expect(navLink).toBeInTheDocument();
    });
  });
});
