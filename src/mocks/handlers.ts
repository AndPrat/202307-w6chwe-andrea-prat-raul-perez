import { rest } from "msw";
import { apiUrl } from "../hooks/useUsersApi";
import { usersMockApi } from "./userMocks";

export const handlers = [
  rest.get(`${apiUrl}/users`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersMockApi));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}/users`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get users right now"));
  }),
];
