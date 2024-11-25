import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SampleUser } from "../../constant/sampleData";
import UserItem from "../Shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation("");

  const [member, setmember] = useState(SampleUser);
  const [selectedmember, setselectedmember] = useState([]);

  const selectMemberhandler = (id) => {
    setselectedmember((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };
  const submithandler = () => {};
  return (
    <Dialog open>
      <Stack
        p={{
          xs: "1rem",
          sm: "3rem",
        }}
        Width={"25renm"}
        spacing={"2rem"}
      >
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group name"
          _
          value={groupName.value}
          onClick={groupName.changehandler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {member.map((i) => (
            <UserItem
              uselr={i}
              key={i._id}
              hander={selectMemberhandler}
              isAdded={selectedmember.includes(i._id)}
            />
          ))}
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="text" color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={submithandler}>
          Create
        </Button>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
