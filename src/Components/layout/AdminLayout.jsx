import { Drawer, Grid, IconButton, Typography  } from '@mui/material'
import React, { useState } from 'react'
import { grayColor } from '../../constant/color'
import { Box, Stack } from '@mui/system'
import { Close, Dashboard, Menu } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import {Link} from "../style/componentstyle"

const adminRoute=[
    {
        name:"Dashboard",
        path:"/admin/dashboard",
        icon:<Dashboard/>,
        
    }
]

const SideBar=({w="100%"})=>{

    const location=useLocation()

    return (
     <Stack width={"50vw"} direction={"column"}  p={"3rem"} spacing={"3rem"} >
<Typography variant='h3'  textTransform={"uppercase"}  > admin </Typography>

<Stack spacing={"1rem"}>  {
    adminRoute.map((i)=>(
        <Link key={i.path}  to={i.path} >
        

<Stack direction={"row"} alignItems={"center"}  spacing={"1rem"}  > 
    {i.icon}
    <Typography> {i.name} </Typography>
     </Stack>

        </Link>
    ))
    }   </Stack>

     </Stack>
    )
}
const AdminLayout = ({children}) => {
    const [isMobile, setisMobile] = useState(false);
    const isMobilehandler=()=>setisMobile(!isMobile)
    const HandleClose=()=>setisMobile(false)
  return (
    <Grid  container minHeight={"100vh"}  >

<Box sx={{
    display:{xs:"block" , md:"none"},
position:"fixed",
right:"1rem",
top:"1rem",
}} >

<IconButton onClick={isMobilehandler} >
  {isMobile ? <Close/> : <Menu/>}
</IconButton>


</Box>



<Grid item md={4} lg={3} sx={{display:{
    xs:"none" ,md:"block"
}}} >
<SideBar/>
</Grid>

<Grid item md={8} lg={9} xs={12} sx={{
    bgcolor:grayColor
}} >
{children}
</Grid>
<Drawer open={isMobile}  onClose={HandleClose} >
<SideBar w="50vw"  /> 
</Drawer>
  </Grid>
  )
  
}

export default AdminLayout
