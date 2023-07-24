// validations/checkSongs.js
const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  const checkArtist = (req, res, next) => {
    if (req.body.artist) {
      next();
    } else {
      res.status(400).json({ error: "Artist is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      is_favorite == "true" ||
      is_favorite == true ||
      is_favorite == "false" ||
      is_favorite == false ||
      is_favorite == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };
  
  module.exports = { checkBoolean, checkName, checkArtist };
  