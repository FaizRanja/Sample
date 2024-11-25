import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Delete, Done, Edit, KeyboardBackspace, Menu } from "@mui/icons-material";
import { bggranded, matBlack } from "../constant/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, padding, Stack } from "@mui/system";
import { Link } from "../Components/style/componentstyle";
import AvatarCard from "../Components/Shared/AvatarCard";
import { sampleData } from "../constant/sampleData";
import AddmemberDialog from "../Components/Dialoug/AddmemberDialog";
import UserItem from "../Components/Shared/UserItem";
const ConfirmDelete = lazy(() => import("../Components/Shared/ConfirmDelete"));


const isAdMember=false

const Groups = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [GroupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false);

  const chatId = useSearchParams()[0].get("group");

  const navigateback = () => {
    navigate("/");
  };
  const ishandlemobile = () => {
    setisMobileMenuOpen((prev) => !prev);
  };
  const handledeleteGroup = () => {
    setconfirmDeleteDialog(true);
  };
  const handleConfirmDeleteClose = () => {
    setconfirmDeleteDialog(false);
  };
  const handleConfirmDelete = () => {
    console.log("Delete the Group successfully  ");
    setconfirmDeleteDialog(false);
  };
  const removememberhsndler =(_id)=>{
  console.log("Helo" + _id);
  }
  const handleAddMember = () => {
    console.log("Member added successfully");
  };
  const updateGroupName = () => {
    setisEdit(false);
    console.log("updateGroupName");
  };
  const deleteHandler = () => {
    console.log("deleteGroupName");
    handleConfirmDelete();
  };

  useEffect(() => {
   if(chatId){
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdatedValue(`Group Name ${chatId} `);
   }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setisEdit(false);
    };
  }, [chatId]);

  const handlemobileclose = () => setisMobileMenuOpen(false);
  const IconBtn = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <Tooltip title="Menu">
          <IconButton onClick={ishandlemobile}>
            <Menu />
          </IconButton>
        </Tooltip>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateback}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack direction={"row"} alignItems={"center"}>
      {isEdit ? (
        <>
          <TextField
            value={GroupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <Done />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setisEdit(true)}>
            <Edit />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: 0,
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        startIcon={<Delete />}
        onClick={handledeleteGroup}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<Add />}
        onClick={handleAddMember}
      >
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          
        }}
        sm={4}
        
      >
        <GroupList myGroup={sampleData} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtn}
        {groupName && (
          <>
            {GroupName}
            <Typography margin={"2rem"} alignSelf={"self-start"} variant="body1">
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0rem",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              // bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >

{/* Members */}

{sampleData.map((i)=>(
  <UserItem user={i} key={i._id} isAdded styling ={{
boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)",
padding:"1rem 2rem",
borderRadius:"1rem"

  }} handler={removememberhsndler}  />

))}

            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

{
  isAdMember &&    <Suspense fallback={<Backdrop open />}>
    <AddmemberDialog/>
  </Suspense>
}


      <Suspense fallback={<Backdrop open />}>
        <ConfirmDelete
          handleclose={handleConfirmDeleteClose}
          open={confirmDeleteDialog}
          deletehandler={deleteHandler}
        />
      </Suspense>
      <Drawer
        open={isMobileMenuOpen}
        onClose={handlemobileclose}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <GroupList w={"50vw"} myGroup={sampleData} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroup = [], chatId }) => {
  return (
    <Stack width={w} sx={{
      backgroundImage :bggranded ,
      height:"100vh",
      overflowY:"auto"
    }} >
      {myGroup.length > 0 ? (
        myGroup.map((group) => (
          <GroupItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupItem = memo(({ group, chatId }) => {
  const { avatar, name, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
