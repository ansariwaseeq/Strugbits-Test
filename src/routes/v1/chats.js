"use strict";
const {handleDeleteForMeChatMessageController, handleDeleteForEveryoneChatMessageController ,getAllChatsForaUserController, showChatForaUserController} = require("../.././controllers");
const { Router } = require("express");

const router = Router();

// ------------------------- Chat  --------------------------------

router.route('/get-all-chats') // works when user is in session 
  .get(getAllChatsForaUserController)

router.route("/delete-for-me/:chatId")
  .put(handleDeleteForMeChatMessageController);

router.route('/delete-for-everyone/:chatId')
  .put(handleDeleteForEveryoneChatMessageController)

router.route('/show-chat')
  .get(showChatForaUserController)

// ------------------------- Exports -----------------------------------

module.exports = Router().use("/chats", router);
