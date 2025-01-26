const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  // Check if Authorization header exists
  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Extract token from the "Bearer <token>" format
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token is not valid" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request object
    next(); // Proceed to the next middleware or route
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

// Export the middleware
module.exports = authMiddleware;
