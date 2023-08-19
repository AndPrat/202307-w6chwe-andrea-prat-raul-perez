import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import UsersList from "./UsersList";

describe("Given an UsersList component", () => {
  describe("When is rendered with 'catwoman', 'jocker' and 'harley quinn' users card", () => {
    test("Then it should show the users 'catwoman', 'jocker' and 'harley quinn' inside heading", () => {
      const store = setupStore({
        usersStore: {
          users: usersMock,
        },
      });

      render(
        <Provider store={store}>
          <UsersList />
        </Provider>,
      );

      usersMock.forEach((user) => {
        const expectedUserHeading = screen.getByRole("heading", {
          name: user.name,
        });

        expect(expectedUserHeading).toBeInTheDocument();
      });
    });
  });
});
