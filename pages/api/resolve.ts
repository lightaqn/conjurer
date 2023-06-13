import { NextApiRequest, NextApiResponse } from "next";
import { openai } from "../../utils/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    // , option
    let textGenerated, error;
    try {
      const textResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 770,
        temperature: 0,
      });
      textGenerated = textResponse.data.choices[0].text;
      res.status(200).json(textGenerated);
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
