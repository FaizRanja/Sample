import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu  anchorEl={anchorE1} open={false} >
      <div style={{
        width:"10rem"
      }} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nam quis
        repudiandae? Quidem ab quae nam exercitationem? Officia, voluptate
        itaque. 
      </div>
    </Menu>
  );
};

export default FileMenu;
