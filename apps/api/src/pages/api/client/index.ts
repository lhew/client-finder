import { NextApiRequest, NextApiResponse } from "next";
import clients from "../../../data/clients.json";
import { IClient } from "types/client";
import {
  isFilled,
  cors,
  middleware,
  sanitizedClients,
  compareWith,
} from "../../../utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await middleware(req, res, cors);
  const {
    name,
    nationality,
    quote,
    title,
  }: Partial<Omit<IClient, "id" | "avatar">> = req.query;

  // // removes 'null' and 'undefined' so they won't be filtered if queryValue is "null" or "undefined"

  const queryObj: Partial<IClient> = { name, nationality, quote, title };
  const queryItems = Object.values(queryObj).filter((value) =>
    isFilled(value as string)
  );

  if (queryItems.length === 0) {
    res.status(200).json({ message: "No query provided" });
    return;
  }

  const results = sanitizedClients(clients).filter((client) => {
    let matchLength = 0;
    Object.keys(queryObj).forEach((k) => {
      const key = k as keyof typeof queryObj;
      type IClientKey = keyof IClient;

      if (
        compareWith(
          client[key as IClientKey] as string,
          queryObj[key] as string
        )
      ) {
        matchLength++;
      }
    });

    return matchLength === queryItems.length;
  });

  res.status(200).json({ clients: results });
  // }
}
