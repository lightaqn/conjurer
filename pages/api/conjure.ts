// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { openai } from "../../utils/config";
// type Data = {
//   name: string;
// };
// <Data>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { prompt, resolution }: any = req.body;

    let imageUrl, error;
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: resolution,
      });

      imageUrl = response.data.data[0].url;

      res.status(200).json(imageUrl);
    } catch (error) {
      if (error?.response) {
        console.log(error?.response.status);
        console.log(error?.response.data);
      } else {
        console.log(error?.response);
      }
    }
  }
}
