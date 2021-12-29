import { postData } from "../../../utils/http.helpers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log("email:", email);

    const res = await postData(
      `${process.env.CONVERTKIT_API_URL}forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
      { email: email, api_key: process.env.CONVERTKIT_API_KEY }
    );

    console.log("res IN API:", res);

    // Process a POST request
  } else {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  res.status(200).json({ data: "WOOHOO" });
}
