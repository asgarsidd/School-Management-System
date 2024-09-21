const userLogin =
  ("/login",
  (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "Please add email or password" });
    }

    User.findOne({ email: email }).then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid email or password" });
      }

      bcrypt.compare(password, hash, function (err, result) {
        // result == true
        if (password !== savedUser.password) {
          return res.status(422).json({ error: "Invalid email or password" });
        }
        res.json({ message: "Login successful" });
      });
    });
  });

const userRegister =
  ("/register",
  (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(422).json({ error: "Please add all fields" });
    }
    User.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "User already exists" });
      }
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          return res.status(422).json({ error: err });
        }
        const user = new User({
          name,
          email,
          password: hash,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "Saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });

module.exports = { userLogin, userRegister };
