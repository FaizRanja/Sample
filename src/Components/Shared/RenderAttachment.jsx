import React from "react";
import { transformImage } from "../../lib/Feature";
import { FileOpen } from "@mui/icons-material";

const RenderAttachment = ({ url, file }) => {
  if (!url) {
    console.log("url is missing");
    return null;
  }

  switch (file) {
    case "video":
      return <video src={url} preload="none" width="200px" controls />;
    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Attachment"
          height="200px"
          width="200px"
          style={{
            objectFit: "contain",
          }}
        />
      );
    case "audio":
      return <audio src={url} preload="none" controls />;
    default:
      return <FileOpen />;
  }
};

export default RenderAttachment;
