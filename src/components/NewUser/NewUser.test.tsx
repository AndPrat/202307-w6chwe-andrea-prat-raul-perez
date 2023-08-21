import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import NewUser from "./NewUser";

describe("Given a NewUser component", () => {
  const store = setupStore({
    usersStore: {
      users: usersMock,
    },
  });
  const nameInputLabelText = "Name:";
  const ageInputLabelText = "Age:";
  const zodiacInputLabelText = "Zodiac:";
  const favAnimalInputLabelText = "Favourite Animal:";
  const favDrinkInputLabelText = "Favourite Drink:";
  const isFriendCheckboxLabel = "Is Friend?";
  const imageUrlInputLabel = "Image URL:";

  const nameText = "Robin";
  const age = 25;
  const zodiac = "Tauro";
  const animal = "snake";
  const drink = "Lemonade";
  const image =
    "https://s2.qwant.com/thumbr/0x380/d/8/5296e3ceaa1f6f98c7aa54081ec63ef71eaf324aa5c18ace6373c517de5a7a/batman-c-e-robin-dick-grayson-verita-robins-1-v3-534607-1536x864.jpg?u=https%3A%2F%2Fanimesweet.com%2Fwp-content%2Fuploads%2F2021%2F08%2Fbatman-c-e-robin-dick-grayson-verita-robins-1-v3-534607-1536x864.jpg&q=0&b=1&p=0&a=0";

  describe("When it's rendered", () => {
    test("Then it should show the fields:'Name:','Age:','zodiac:','Favourite Animal:', 'Favourite Drink:', 'Is friend?'and 'Image URL:' ", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewUser />
          </Provider>
        </BrowserRouter>,
      );

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

  describe("When an user types all the data for a new user and marks the isFriend checkbox", () => {
    test("Then it should show the typed data about the new user in the input textboxes and the 'Is Friend?' checkbox marked", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewUser />
          </Provider>
        </BrowserRouter>,
      );

      const nameInput = screen.getByLabelText(
        nameInputLabelText,
      ) as HTMLInputElement;
      const ageInput = screen.getByLabelText(
        ageInputLabelText,
      ) as HTMLInputElement;
      const zodiacInput = screen.getByLabelText(
        zodiacInputLabelText,
      ) as HTMLInputElement;
      const favAnimalInput = screen.getByLabelText(
        favAnimalInputLabelText,
      ) as HTMLInputElement;
      const favDrinkInput = screen.getByLabelText(
        favDrinkInputLabelText,
      ) as HTMLInputElement;
      const isFriendInput = screen.getByLabelText(
        isFriendCheckboxLabel,
      ) as HTMLInputElement;
      const imageUrlInput = screen.getByLabelText(
        imageUrlInputLabel,
      ) as HTMLInputElement;

      await userEvent.type(nameInput, nameText);
      await userEvent.type(ageInput, age.toString());
      await userEvent.type(zodiacInput, zodiac);
      await userEvent.type(favAnimalInput, animal);
      await userEvent.type(favDrinkInput, drink);
      await userEvent.click(isFriendInput);
      await userEvent.type(imageUrlInput, image);

      expect(nameInput.value).toBe(nameText);
      expect(ageInput.value).toBe(age.toString());
      expect(zodiacInput.value).toBe(zodiac);
      expect(favAnimalInput.value).toBe(animal);
      expect(favDrinkInput.value).toBe(drink);
      expect(isFriendInput.value).toBe("on");
      expect(imageUrlInput.value).toBe(image);
    });
  });
});
