import React from "react";
import { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  VideoCameraBack,
  Image,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";
import { hover } from "@testing-library/user-event/dist/hover";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "30px" },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={400}
          height="auto"
          borderRadius={5}
          p={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography>Remy Sharp</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-flexible"
            multiline
            maxRows={3}
            variant="filled"
            placeholder="What's on your mind ?"
          />
          <Stack direction="row" gap={1} mt={2} sx={{ cursor: "pointer" }}>
            <EmojiEmotions color="primary" />
            <VideoCameraBack color="secondary" />
            <Image color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
          >
            <Button sx={{ width: "100%" }}>Post</Button>
            <Button sx={{ width: "80px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </div>
  );
};

export default Add;
