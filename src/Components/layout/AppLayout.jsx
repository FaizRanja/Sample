import React, { Fragment } from "react";
import Title from "../Shared/Tittle";
import Headers from "./Headers";
import { Grid, IconButton, Menu, Tooltip } from "@mui/material";
import ChatList from "../Specific/ChatList";
import { useParams } from "react-router-dom";
import Profile from "../Specific/Profile";
import { sampleData } from "../../constant/sampleData";
import { Box } from "@mui/system";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId; // Defaulting chatId to "1" if not found in params

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Chat deleted", _id, groupChat);
    };

    return (
      <Fragment>
        <Title />
        <Headers />
        <Grid container height={"calc(100vh - 4rem)"} overflow="hidden">
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              transition: "all 0.3s ease",
            }}
            height="100%"
          >
            <ChatList
              chats={sampleData}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={6} height="100%">
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", sm: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height="100%"
          >
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
                position: "absolute",
                right: "1rem",
                top: "1rem",
              }}
            >
              <Tooltip title="Menu">
                <IconButton>
                  <Menu />
                </IconButton>
              </Tooltip>
            </Box>
            <Profile />
          </Grid>
        </Grid>
      </Fragment>
    );
  };
};

export default AppLayout;
