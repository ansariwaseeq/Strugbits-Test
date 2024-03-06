const { Chat } = require('../../../models');
const { DELETION_TYPE } = require('../../../constants');

const CONTROLLER = [
    async function getAllChatsForUserController(req, res) {
        try {
            const id = req.session.passport.user;

            const chats = await Chat.find({
                from: id,
                deletionType: {
                    $nin: [DELETION_TYPE.FOR_ME, DELETION_TYPE.FOR_EVERYONE]
                }
            }).select({ message: 1, from: 1, _id: 0 });

            res.status(200).send(chats);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('cannot fetch');
        }
    }
];

module.exports = CONTROLLER;
