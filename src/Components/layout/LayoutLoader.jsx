import { Grid ,Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

 export  const LayoutLoader = () => {

     return  <Grid  container  height={"calc(100vh - 4rem)"} spacing={"1rem"}>
     <Grid item  sm={4}  md={3}  sx={{
       display:{sx:"none",sm:"block"}
     }} height="100%" >
       <Skeleton variant='rectangular' height={"100vh"} />
     </Grid>
     <Grid item xs={12} sm={8} md={5} lg={6} height="100%" >
<Stack spacing={"1rem"}>
{Array.from({length: 10 }).map((_,index)=>(
    <Skeleton key={index} variant='rectangular' height={"5rem"} />
  ))}
</Stack>
     </Grid>
     <Grid item md={4} lg={3}  sx={{
       display:{sx:"none",sm:"block"},
     }} height="100%" >
      <Skeleton variant='rectangular' height={"100vh"} />
     </Grid>
   </Grid>

 }