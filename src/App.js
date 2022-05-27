import * as React from "react";
import { useState } from "react";
import { Sidebar, Feed, Rightbar, Navbar, Add } from "./components";
import { Box, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Navbar */}
        <Navbar mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
