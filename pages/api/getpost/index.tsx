import conn from "@/app/Util/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const query = "SELECT * FROM storage";
      const result = await conn?.query(query);
      res.status(200).json({ message: "Message successfully fetched!", result: result });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  } else {
    res.status(405).json({ error: "Invalid method!" });
  }
};
