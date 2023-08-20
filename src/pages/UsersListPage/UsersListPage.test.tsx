import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import UsersListPAge from "./UsersListPage";

describe("Given a UsersListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heeading with the text 'Your Friends and Enemies'", () => {
      const headerText = "Your Friends and Enemies";
      const store = setupStore({
        usersStore: {
          users: usersMock,
        },
      });

      render(
        <Provider store={store}>
          <UsersListPAge />
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: headerText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
