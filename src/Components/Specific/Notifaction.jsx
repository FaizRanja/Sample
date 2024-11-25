import React, { memo } from "react";

import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { SampleNotifaction } from "./../../constant/sampleData";

const Notifaction = () => {
  const friendrequisthandler = ({ _id, accept }) => {
    console.log("friendrequisthandler");
  };

  return (
    <Dialog open>
      <Stack
        p={{
          xs: "1rem",
          sm: "2rem",
        }}
        maxWidth={"25renm"}
      >
        <DialogTitle>Notifaction</DialogTitle>

        {SampleNotifaction.length > 0 ? (
          SampleNotifaction.map(({ sender, _id, handler }) => (
            <NotifactionItem
              sender={sender}
              _id={_id}
              handler={friendrequisthandler}
              key={_id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notifaction</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotifactionItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar  />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-flex",
            WebkitLineClamp: 1,
            webkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} send you a friend request  `}
        </Typography>
        <Stack
          direction={{
            xs: "column",
           sm:"row"
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accpet</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifaction;
