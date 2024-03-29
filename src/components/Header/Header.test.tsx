import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header componente", () => {
  describe("When it's rendered with the text'Friends & Foes'", () => {
    test("Then it should show the text 'Friends & Foes' inside a heading", () => {
      const textHeading = "Friends & Foes";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const header = screen.getByRole("heading", { name: textHeading });

      expect(header).toBeInTheDocument();
    });
  });
});
