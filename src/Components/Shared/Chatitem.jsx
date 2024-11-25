import React, { memo } from 'react'
import { Link } from '../style/componentstyle'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const Chatitem = ({
  avatar,
  name,
  _id,
groupChat=false,
sameSender,
isOnline,
newMessageCount,
index=0,
handleDeleteChat
}) => {
  return (
   <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}>
<div style={{
  display:"flex",
  alignItems:"center",
  padding:"1rem",
backgroundColor:sameSender ? "black" : "unset",
color:sameSender ? "white" : "unset",
position:"relative",
gap:"1rem",
}} >

<AvatarCard avatar={avatar} />

<Stack>
  <Typography>{name}</Typography>
  {
newMessageCount > 0 && (
  <Typography> {newMessageCount} New Message </Typography>
)
  }
</Stack>

{
  isOnline && (
    <Box  
    sx={{
    width:"10px",
    height:"10px",
    borderRadius:"50%",
    backgroundColor:"green",
    position:"absolute",
  top:"50%",
right:"1rem",
    transform:"translate(-50%)",

      
    }} />
  )
}


</div>
   </Link>
  )
}

export default memo(Chatitem)