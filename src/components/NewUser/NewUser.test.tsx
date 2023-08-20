import { render, screen } from "@testing-library/react";
import NewUser from "./NewUser";

describe("Given a NewUser component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the fields:'Name:','Age:','zodiac:','Favourite Animal:', 'Favourite Drink:', 'Is friend?'and 'Image URL:' ", () => {
      const nameInputLabelText = "Name:";
      const ageInputLabelText = "Age:";
      const zodiacInputLabelText = "Zodiac:";
      const favAnimalInputLabelText = "Favourite Animal:";
      const favDrinkInputLabelText = "Favourite Drink:";
      const isFriendCheckboxLabel = "Is Friend?";
      const imageUrlInputLabel = "Image URL:";

      render(<NewUser></NewUser>);

      const nameInput = screen.getByLabelText(nameInputLabelText);
      const ageInput = screen.getByLabelText(ageInputLabelText);
      const zodiacInput = screen.getByLabelText(zodiacInputLabelText);
      const favAnimalInput = screen.getByLabelText(favAnimalInputLabelText);
      const favDrinkInput = screen.getByLabelText(favDrinkInputLabelText);
      const isFriendInput = screen.getByLabelText(isFriendCheckboxLabel);
      const imageUrlInput = screen.getByLabelText(imageUrlInputLabel);

      expect(nameInput).toBeInTheDocument();
      expect(ageInput).toBeInTheDocument();
      expect(zodiacInput).toBeInTheDocument();
      expect(favAnimalInput).toBeInTheDocument();
      expect(favDrinkInput).toBeInTheDocument();
      expect(isFriendInput).toBeInTheDocument();
      expect(imageUrlInput).toBeInTheDocument();
    });
  });
});
