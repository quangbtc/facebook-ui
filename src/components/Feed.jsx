import React from "react";
import { Box } from "@mui/material";
import { Post } from "../components";

const Feed = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"} flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
