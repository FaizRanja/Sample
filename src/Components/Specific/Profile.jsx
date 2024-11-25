import { Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Fragment } from 'react';
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalendarIcon } from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Fragment>
      <Avatar sx={{
        width: 150,
        justifyContent:"center",
        height: 150,
        objectFit: "contain",
        marginBottom: "2rem",
        border: "5px solid white",
      }} />

      <Stack spacing={"1rem"} direction={"column"} alignItems={"center"}>
        <ProfileCard heading={"Bio"} text={"This is a sample product"} />
        <ProfileCard heading={"UserName"} text={"RanaFaiz"} Icon={<UsernameIcon />} />
        <ProfileCard heading={"Name"} text={"Rana Faiz Developer"} Icon={<FaceIcon />} />
        <ProfileCard heading={"Joined"} text={moment('2024-06-04T10:50:47.641Z').fromNow()} Icon={<CalendarIcon />} />
      </Stack>
    </Fragment>
  );
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
