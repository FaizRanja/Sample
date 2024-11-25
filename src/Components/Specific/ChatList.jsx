// ChatList.js
import React from "react";
import { Stack } from "@mui/system";
import ChatItem from "../Shared/Chatitem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onLineUser = [],
  newMessageAlert = [],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"} >
      {chats.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        // Find the new message alert for the current chat
        const newMessageAlertItem = newMessageAlert.find(
          (alert) => alert.chatId === _id
        );
        const newMessageCount = newMessageAlertItem ? newMessageAlertItem.count : 0;

        // Check if any member of the chat is online
        const isOnline = members?.some((member) =>
          onLineUser.includes(member)
        );
        return (
          <ChatItem
            index={index}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            key={_id}
            sameSender={chatId === _id}
            newMessageCount={newMessageCount}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
