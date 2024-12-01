const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// authentication middleware

const authMiddleware = async (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    token = token.replace('Bearer ', '');
    try {
        const decoded = await jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
}

module.exports = authMiddleware;