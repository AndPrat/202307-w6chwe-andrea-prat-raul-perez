import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { userMock, usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import UserCard from "./UserCard";

describe("Given a UserCard componente", () => {
  describe("When it receives a user name 'catwoman'", () => {
    test("Then it should show the name 'catwoman' inside a heading", () => {
      const expectedHeaderText = "catwoman";
      const store = setupStore({
        usersStore: {
          users: usersMock,
        },
      });

      render(
        <Provider store={store}>
          <UserCard user={userMock} />
        </Provider>,
      );

      const userHeading = screen.getByRole("heading", {
        name: expectedHeaderText,
      });

      expect(userHeading).toBeInTheDocument();
    });
  });
});
