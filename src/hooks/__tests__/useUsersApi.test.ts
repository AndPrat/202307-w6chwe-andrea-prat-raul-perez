import { renderHook } from "@testing-library/react";
import { usersMock } from "../../mocks/userMocks";
import useUsersApi from "../useUsersApi";

describe("Given an useUsersApi custom hook", () => {
  describe("When a function getUsers is called with a request to an api rest of users", () => {
    test("Then it should return a list of user", async () => {
      const {
        result: {
          current: { getUsers },
        },
      } = renderHook(() => useUsersApi());

      const users = await getUsers();

      expect(users).toStrictEqual(usersMock);
    });
  });
});
