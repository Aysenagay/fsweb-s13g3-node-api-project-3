const Users = require("../users/users-model");

function logger(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  console.log(`${new Date().toISOString()} ${req.method} to ${req.url}`);
  next();
}

function validateUserId(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  const user = Users.getById(req.params.id);
  if (!user) {
    next({ status: 404, message: `${id}'li user yok!...` });
  } else {
    next();
  }
}

function validateUser(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: "gerekli name alanı eksik" });
  } else {
    req.name = name;
    next();
  }
}

function validatePost(req, res, next) {
  // SİHRİNİZİ GÖRELİM
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ message: "gerekli text alanı eksik" });
  } else {
    req.text = text;
    next();
  }
}

// bu işlevleri diğer modüllere değdirmeyi unutmayın
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
