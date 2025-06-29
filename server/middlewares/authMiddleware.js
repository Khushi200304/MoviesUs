const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    try {
        console.log("Authorization Header:", req.headers.authorization); // Debug
        const token = req.headers.authorization.split(" ")[1];
        console.log("Extracted Token:", token); // Debug

        const decoded = jwt.verify(token, process.env.jwt_secret);
        console.log("Decoded Token:", decoded); // Debug

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("JWT Validation Error:", error.message); // Debug
        res.status(401).send({ success: false, message: "Invalid token" });
    }
};