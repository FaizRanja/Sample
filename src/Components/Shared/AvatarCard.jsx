import { Avatar, AvatarGroup } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { Fragment } from 'react';
import { transformImage } from '../../lib/Feature';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  // Ensure avatar is an array
  const avatarArray = Array.isArray(avatar) ? avatar : [];

  return (
    <Fragment>
      <Stack direction="row" spacing={0.5}   >
        <AvatarGroup max={max}
       
        >
          {avatarArray.map((i, index) => (
            <Avatar
              key={index} // Use index as key if no unique ID is available
              src={transformImage(i)}
              alt={`Avatar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "relative",
                left:{
                  xs:`${0.5 + index}rem`,
                  sm:`${index}rem`
                }
              }}
            />
          ))}
        </AvatarGroup>
      </Stack>
    </Fragment>
  );
};

export default AvatarCard;
