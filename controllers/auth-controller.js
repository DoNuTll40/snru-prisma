
exports.register = (req, res, next) => {
    const { email, password } = req.body;
    res.status(201).json({ email, password, message : "Register success" })
}

exports.login = (req, res, next) => {
    res.status(201).json({ message : "Login success"})
}