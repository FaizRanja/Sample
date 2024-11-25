import React, { Fragment, useState } from "react";
import { KeyboardDoubleArrowLeftTwoTone, KeyboardDoubleArrowRightTwoTone } from "@mui/icons-material";
import Profile from "../Specific/Profile";

const ProfileMenu = () => {
  const [toggle, settoggle] = useState(true);

  const handleToggle = () => {
    settoggle(!toggle);
  };

  return (
    <Fragment>
      <div className="sidebar-section">
        <div className={toggle ? 'sidebar-toggle sidebar' : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <KeyboardDoubleArrowRightTwoTone size={30} />
              ) : (
                <KeyboardDoubleArrowLeftTwoTone size={30} />
              )}
            </p>
          </div>
          <Profile toggle={toggle} />
        </div>
        <div className="container"></div>
      </div>
    </Fragment>
  );
};

export default ProfileMenu;
