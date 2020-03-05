module.exports = (req, res, next) => {
    const sessionID = req.header.sessionID;
    if (sessionID) {
        next();
        return;
    }

    const id = req.sessionID;
    res.header('sessionID', id).send(id);
    res.json({ id });
    next();
};