import { IClient } from "types/client";

export const sanitizedClients = (clients: IClient[]) =>
  clients.map((client: IClient) => {
    Object.keys(client).forEach((k) => {
      type IClientKey = keyof IClient;

      // I could fix the <sup /> scenario with (\<[A-z]+\>)(.+)?(\<\/[A-z]+\>) but
      // as a matter of principle, It is better removing it from the json itself
      // the same for the null attribute on a json object, but this seems like something that should be handled
      if (!client[k as IClientKey]) {
        delete client[k as IClientKey];
      }
    });

    return client;
  });
