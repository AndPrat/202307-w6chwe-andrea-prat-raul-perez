import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import Counter from "./Counter";

describe("Given a Counter component", () => {
  describe("When it receives two friend and one enemies", () => {
    test("Then it should return two total friends counter ", () => {
      const store = setupStore({
        usersStore: {
          users: usersMock,
        },
      });

      const expectedCount = usersMock.filter((user) => user.isFriend).length;

      const expectedTotalFriends = `${expectedCount} total friends`;

      render(
        <Provider store={store}>
          <Counter />
        </Provider>,
      );

      const friendsNumber = screen.getByText(expectedTotalFriends);

      expect(friendsNumber).toBeInTheDocument();
    });
  });

  test("Then it should return one total friends counter ", () => {
    const store = setupStore({
      usersStore: {
        users: usersMock,
      },
    });

    const expectedCount = usersMock.filter(
      (user) => user.isFriend === false,
    ).length;

    const expectedTotalFriends = `${expectedCount} total enemies`;

    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    const friendsNumber = screen.getByText(expectedTotalFriends);

    expect(friendsNumber).toBeInTheDocument();
  });
});
