import * as React from "react";

import { Sidebar, Feed, Rightbar, Navbar } from "./components";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
