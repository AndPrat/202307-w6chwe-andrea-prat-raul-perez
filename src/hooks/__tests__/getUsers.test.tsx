import { renderHook } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { usersMock } from "../../mocks/userMocks";
import { setupStore } from "../../store";
import useUsersApi from "../useUsersApi";

describe("Given an useUsersApi custom hook", () => {
  describe("When a function getUsers is called with a request to an api rest of users", () => {
    test("Then it should return a list of user", async () => {
      const store = setupStore({
        uiStore: {
          isLoading: false,
          isError: false,
        },
      });

      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };

      const {
        result: {
          current: { getUsers },
        },
      } = renderHook(() => useUsersApi(), { wrapper });

      const users = await getUsers();

      expect(users).toStrictEqual(usersMock);
    });
  });
});
