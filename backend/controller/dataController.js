import Data from "../model/jsonData.js";

export const initializeData = async (req, res) => {
  try {
    const jsonData = req.body;
    const savedData = await Data.create(jsonData);
    res.status(201).json(savedData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAllData = async (req, res) => {
  try {
    const result = await Data.deleteMany({});

    res
      .status(200)
      .json({
        message: `${result.deletedCount} documents deleted successfully`,
      });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
