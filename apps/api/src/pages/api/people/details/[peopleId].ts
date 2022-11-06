import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query.peopleId);
  res.status(200).json({ name: "John Doe", age: req.query.peopleId });
}
