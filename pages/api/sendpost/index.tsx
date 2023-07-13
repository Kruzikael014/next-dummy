import conn from "@/app/Util/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { content } = req.body;
      const query = "INSERT INTO storage (message) VALUES ($1)";
      const values = [content];
      await conn?.query(query, values);
      console.log("Message saved:", content);
      res.status(200).json({ message: "Message saved successfully" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
