import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing details." });
    }
    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No credit balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);
    console.log("CLIPDROP_API key:", process.env.CLIPDROP_API);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error("Error in generateImage:", error);
    if (error.response) {
      try {
        const errorData = JSON.parse(error.response.data.toString());
        console.error("Error data:", errorData);
        res.status(error.response.status).json({ success: false, message: error.message, error_details: errorData });
      } catch (e) {
        const errorData = error.response.data.toString();
        console.error("Error data (not json):", errorData);
        res.status(error.response.status).json({ success: false, message: error.message, error_details: errorData });
      }
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

export default generateImage;
