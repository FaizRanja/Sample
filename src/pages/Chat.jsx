import React, { Fragment, useRef } from "react";
import AppLayout from "../Components/layout/AppLayout";
import { Stack } from "@mui/system";
import { grayColor, orangr } from "../constant/color";
import { IconButton } from "@mui/material";
import { AttachFile, Send as SendIcon } from "@mui/icons-material";
import { InputBox } from "../Components/style/componentstyle";
import FileMenu from "../Components/Dialoug/FileMenu";
import { SampleMessage } from "../constant/sampleData";
import MessageComponent from "../Components/Shared/MessageComponent";


const user={
_id:"Rgshagdsa",
name:"Rana faiz uttra"

}
const Chat = () => {
  const cointainerRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={cointainerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          SampleMessage.map((i)=>(
<MessageComponent message={i} user={user} key={i._id} />
          ))
        }
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg"
          }} >
            <AttachFile />
          </IconButton>

          <InputBox placeholder="Enter your Message Here...." />

          <IconButton type="submit" sx={{
            bgcolor:orangr,
            rotate:"-30deg",
            color:"white",
            marginLeft:"1rem",
            padding:"0.5rem",
            "&:hover":{
              bgcolor:"error.dark",
            }
          }} >
            <SendIcon />
          </IconButton>
        </Stack>

<FileMenu/>

      </form>
    </Fragment>
  );
};

export default AppLayout()(Chat);
