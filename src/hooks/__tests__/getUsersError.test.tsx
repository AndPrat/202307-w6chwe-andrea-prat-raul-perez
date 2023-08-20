import { renderHook } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/serve";
import { setupStore } from "../../store";
import useUsersApi from "../useUsersApi";

describe("Given an useUsersApi custom hook", () => {
  describe("When a function getUsers is called with a request to an api rest of users", () => {
    test("Then it should show a 'Can't get users right now!' message on console", async () => {
      const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
        return <Provider store={store}>{children}</Provider>;
      };
      server.resetHandlers(...errorHandlers);
      const store = setupStore({
        uiStore: {
          isLoading: false,
          isError: false,
        },
      });

      const expectedError = new Error("Can't get users right now!");

      const {
        result: {
          current: { getUsers },
        },
      } = renderHook(() => useUsersApi(), { wrapper });

      const users = getUsers();

      expect(users).rejects.toThrowError(expectedError);
    });
  });
});
