import { postData } from "../../../utils/http.helpers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, type } = req.body;
    let formId = process.env.CONVERTKIT_FORM_ID_FE_Ebook;

    if (type === "bonus") formId = process.env.CONVERTKIT_FORM_ID_FE_Extras;

    console.log("formId:", formId);

    if (!email || email.trim() === "")
      return res.status(400).json({ error: "Email is Required" });

    try {
      const res = await postData(
        `${process.env.CONVERTKIT_API_URL}forms/${formId}/subscribe`,
        { email: email, api_key: process.env.CONVERTKIT_API_KEY }
      );

      if (res.status >= 400)
        return res
          .status(res.status)
          .json({ error: "There was an Error subscribing to the list" });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }

    // Process a POST request
  } else {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  res.status(200).json({ error: "" });
}
