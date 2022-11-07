import { getClients } from "./getClients";

const mockedClient = [
  {
    id: "1",
    name: "Brendon Taylor",
    title: "Supervisor",
    avatar: "images/avatars/avatar_1.png",
    quote: "I am a super-visor!",
    nationality: "New Zealand",
  },
];
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: mockedClient,
      }),
  } as Response)
);

describe("getClients", () => {
  beforeEach(() => {
    process.env = {
      NODE_ENV: "test",
      NEXT_PUBLIC_API_PATH: "http://localhost:3000",
    };
  });

  it.only("should return an array of clients", async () => {
    const queryKey = ["page=1&limit=10"];
    const response = await getClients({ queryKey });

    expect(response).toEqual({ data: mockedClient });
  });
});
