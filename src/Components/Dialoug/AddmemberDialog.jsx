import { Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { sampleData, SampleUser } from "../../constant/sampleData";
import UserItem from "../Shared/UserItem";
const AddmemberDialog = ({ isLoadingaddMember, chatId, addMember }) => {

  const [member, setmember] = useState(SampleUser);
  const [selectedmember, setselectedmember] = useState([]);

  const selectMemberhandler = (id) => {
    setselectedmember((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };  

  const addSubmitmemberhandler = () => {
    console.log("Hello  i am rana faiz ")
    Closehandler()
  };

  const Closehandler = () => {
    setselectedmember([])
    setmember([])
  };

  return (
    <Dialog open onClose={Closehandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

        <Stack spacing={"1rem"}>
          {member.length > 0 ? (
            member.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberhandler}
                isAdded={selectedmember.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}> No User Avaiable </Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={Closehandler}>
            {" "}
            Cancel
          </Button>
          <Button
            onClick={addSubmitmemberhandler}
            variant="contained"
            disabled={isLoadingaddMember}
          >
            {" "}
            Submit Changes{"  "}
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddmemberDialog;
