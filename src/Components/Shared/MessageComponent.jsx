import { Typography } from "@mui/material";
import React, { memo } from "react";
import { blueColor } from "../../constant/color";
import moment from "moment";
import { Box } from "@mui/system";
import { Feature } from "../../lib/Feature";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, attachments = [], content, createdAt } = message;

 
  const sameSender = sender?._id === user?._id;

  const TimeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={blueColor} variant="caption" fontWeight={"600"}>
          {sender.name}
        </Typography>
      )}

      {content && <Typography variant="body1">{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = Feature(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                <RenderAttachment url={url} file={file} />
              </a>
            </Box>
          );
        })}
      <Typography variant="caption" color={"text.secondary"}>
        {TimeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
