import {
  AppBar,
  Backdrop,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense, lazy, useState } from "react";
import { orangr } from "../../constant/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const SearchDialog =lazy(()=> import ("../Specific/Search") )
const NotificationDialog =lazy(()=> import ("../Specific/Notifaction") )
const NewGroupDialog =lazy(()=> import ("../Specific/NewGroup") )


const Headers = () => {

  const navigate = useNavigate();
const [isSearch, setisSearch] = useState(false)
const [isnewGroup, setisnewGroup] = useState(false)
const [isLougout, setisLougout] = useState(false)
const [isnotifaction, setisnotifaction] = useState(false)

  const handlemobile = () => {
    console.log("mobile handle mobile");
  };
  const openSerchDialup = () => {
   setisSearch((prev)=>!prev)
  };
  const openGrouphandler = (e) => {
    setisnewGroup((prev)=>!prev)
  };
  const mangeGroupHandler = () => navigate("/group");

  const LogoutHandler =()=>{
    setisLougout((prev)=>!prev)
  }
  const openNotifationHandler =()=>{
  setisnotifaction((prev)=>!prev)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orangr,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chattu
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handlemobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSerchDialup}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openGrouphandler}
              />
              <IconBtn
                title={"Mange Group"}
                icon={<GroupIcon />}
                onClick={mangeGroupHandler}
              />
              <IconBtn
                title={"Notifaction"}
                icon={<NotificationsIcon />}
                onClick={openNotifationHandler}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={LogoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>


{
  isSearch && (
   <Suspense fallback={<Backdrop open />} >
<SearchDialog/>
   </Suspense>
  )
}
{
  isnotifaction && (
     <Suspense fallback={<Backdrop open />} >
<NotificationDialog/>
   </Suspense>
  )
}
{
  isnewGroup && (
    <Suspense fallback={<Backdrop open />} >
<NewGroupDialog/>
   </Suspense>
  )
}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Headers;
