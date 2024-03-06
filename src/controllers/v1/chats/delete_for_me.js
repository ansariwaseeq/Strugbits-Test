
const { Chat } = require('../../../models');
const { DELETION_TYPE } = require('../../../constants')

const CONTROLLER = [
    async function handleDeleteForMeChatMessageController(req, res) {
        try {
            console.log(req.params)
            const { chatId } = req.params
            await Chat.updateOne(
                { _id: chatId },
                { $set: { deletionType: DELETION_TYPE.FOR_ME } }
            )
            res.status(200).send('msg set for delete for me')
        }
        catch (error) {
            console.error(error.message)

        }
    }
]
module.exports = CONTROLLER


