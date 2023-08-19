import { usersMock } from "../../../mocks/userMocks";
import { UsersState } from "../types";
import { toogleUserActionCreator, usersReducer } from "../usersSlice";

describe("Given a toogleUser reducer", () => {
  describe("When it receives an userState and a toogleUser action with the number 1", () => {
    test("Then it should return a new state with the isFriend property of 'Batman' togled to false ", () => {
      const currentUserState: UsersState = {
        users: usersMock,
      };
      const characterId = 1;

      const togleUserAction = toogleUserActionCreator(characterId);
      const newUserState = usersReducer(currentUserState, togleUserAction);

      const usertoTogle = newUserState.users[0];

      expect(usertoTogle).toHaveProperty("isFriend", false);
    });
  });
});
