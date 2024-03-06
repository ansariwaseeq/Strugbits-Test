const { Chat } = require('../../../models');
const { DELETION_TYPE } = require('../../../constants');

const CONTROLLER = [
    async function searchChatsController(req, res) {
        try {
            if(!req.session){
                res.status(403).send('forbidden')
            }
            const id = req.session.passport.user;
            const { search } = req.query;
            if(!search)throw new Error('no query provided')

            const chats = await Chat.findOne({
                $text: { $search: search },
                from: id,
                deletionType: {
                    $nin: [DELETION_TYPE.FOR_ME, DELETION_TYPE.FOR_EVERYONE]
                },
            }).select({ message: 1, from: 1, created_at: 1, _id: 0 }).exec();
            console.log(chats)
            if(chats != null )res.status(200).send(chats);
            else res.status(404).send('No record with this query')    
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Cannot fetch chats');
        }
    }
];

module.exports = CONTROLLER;