import "@testing-library/jest-dom";
import { server } from "./mocks/serve";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
