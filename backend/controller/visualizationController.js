import Data from "../model/jsonData.js";

export const visualData = async (req, res) => {
  try {
    const data = await Data.find({}).limit(30);
    if (!data) {
      res.status(200).json({ message: "No Data Found" });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
