"use strict";
const io = require("../../index.js")

const CONTROLLER = [
    async function logoutInteractionV1Controller(req, res) {
        const sessionId = req.session.id;
        req.session.destroy(() => {
            // disconnect all Socket.IO connections linked to this session ID
            io.to(`session:${sessionId}`).disconnectSockets();
            res.status(204).redirect('/auth/interaction/login')
        })
    }
];

module.exports = CONTROLLER;
