import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

export const cors = Cors({
  methods: ["POST", "GET", "HEAD", "OPTIONS"],
});

export const middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
