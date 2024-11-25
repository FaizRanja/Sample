import {styled} from "@mui/material"
import { Link as LinkComponents } from 'react-router-dom';
import { grayColor } from "../../constant/color";


export const VisuallyHiddenInput=styled("input")({

    position:"absolute",
    width:"1",
    height:"1",
    margin:-1,
    padding:0,
    overflow:"hidden",
    clip:"rect(0,0,0,0)",
    whiteSpace:"nowrap",
    border:0,
    clipPath:"inset(100%)",

})

export const Link=styled(LinkComponents)`
text-decoration: none;
color:black ;
padding:1rem ;
&:hover{
    background-color:rgba(0,0,0,0.1)
}
`

export const InputBox=styled("input")`
width:100%;
height:100%;
border:none;
outline:none;
padding:0 3rem;
border-radius:1.5rem
background-color:${grayColor}

`
;