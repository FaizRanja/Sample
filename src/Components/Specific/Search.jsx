import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItemText,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Search as SearchIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp"; // Make sure this path is correct
import UserItem from "../Shared/UserItem";
import { SampleUser } from "../../constant/sampleData";





const Search = () => {

  const [users, setusers] = useState(SampleUser)
  let  isLoadingFriendRequest=false
  const addfriendhandler=(id)=>{
console.log(id)
  }
  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label="Search"
          value={search.value}
          onChange={search.handleonChange}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addfriendhandler}
              handleIsLoading={isLoadingFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
