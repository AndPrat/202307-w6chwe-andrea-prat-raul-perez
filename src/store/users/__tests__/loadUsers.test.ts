import { usersMock } from "../../../mocks/userMocks";
import { User } from "../../../types";

import { UsersState } from "../types";
import { loadUsersActionCreator, usersReducer } from "../usersSlice";

describe("Given a loadUsers reducer", () => {
  describe("When it receives an userState and a loadUser action with three users 'catwoman', 'jocker' and 'harley quinn'", () => {
    test("Then it should return a new state with three users 'catwoman', 'jocker' and 'harley quinn'", () => {
      const currentUserState: UsersState = {
        users: [],
      };
      const users: User[] = usersMock;

      const loadUserAction = loadUsersActionCreator(users);
      const newUserState = usersReducer(currentUserState, loadUserAction);

      expect(newUserState).toHaveProperty("users", usersMock);
    });
  });
});
