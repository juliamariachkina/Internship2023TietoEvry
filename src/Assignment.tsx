import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { useState } from "react";
import React from "react";

type Props = {
  setLocked: React.Dispatch<React.SetStateAction<boolean>>;
};
const Assignment = ({ setLocked }: Props) => {
  const [input, setInput] = useState("");
  const handleUnlock = () => {
    if (input === "CI/CD") setLocked(false);
  };
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Paper
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <Box>
          <Typography align="center" variant="h1">
            Visualizer of CI Jobs
          </Typography>
          <Typography align="center" variant="h3">
            2023 Home Assignment
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", padding: "2rem 0 0 1rem" }}
            variant="h4"
          >
            Visualizer of Spotify artist's top tracks
          </Typography>
          <Typography>
            <ul>
              <li>
                Create a public repository on a code hosting service of your
                preference.
              </li>
              <li>
                Create an application which will fetch data from Spotify REST
                API and display it to a user in a simple table format.
              </li>
              <li>
                The data you need to fetch are top tracks of any artist (your
                choice).
              </li>
              <li>
                Display any information you find interesting with a minimum of
                track's name, id, album, popularity and genres.
              </li>
            </ul>
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", padding: "1rem 0 0 1rem" }}
            variant="h4"
          >
            Things to consider:
          </Typography>
          <Typography>
            <ul>
              <li>The repository has to be public.</li>
              <li>
                Frequent commits with meaningful messages are a big plus. It
                allows to trace your thinking process better.
              </li>
              <li>
                Consider refactoring your code at the end. It is okay to use
                plenty of comments, debug outputs and so on. But get rid of them
                before submitting.
              </li>
              <li>
                The existing application uses Python and React, therefore we
                prefer for your solution to use these technologies as well. This
                is not a requirement, but it's highly suggested.
              </li>
              <li>
                Appearance of data visualization should fall somewhere between
                EXAMPLE1 & EXAMPLE2 (read on to unlock it). Outputting plain
                text in a way the EXAMPLE1 does is the bare minimum for the
                assignment.
              </li>
              <li>Project is open for personalization, have fun with it!</li>
            </ul>
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", padding: "1rem 0 0 1rem" }}
            variant="h4"
          >
            Instructions:
          </Typography>
          <Typography sx={{ padding: "1rem 0 0 1rem" }}>
            Read the assignment description without checking EXAMPLE1 & EXAMPLE2
            tabs.
          </Typography>
          <Typography sx={{ padding: "0 0 0 1rem" }}>
            If you have an idea of a solution in mind, unlock examples of
            solutions by answering the following question:
          </Typography>
          <Typography sx={{ padding: "2rem 0 1rem 0" }}>
            What is the shortcut of Continous Integration Continous Delivery?
            Hint: Check the ID of input field or button element of this page in
            devtools.
          </Typography>
          <TextField
            id="CI/CD"
            value={input}
            label="Answer"
            fullWidth
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            id="CI/CD"
            disabled={input === "" ? true : false}
            onClick={handleUnlock}
          >
            Unlock examples
          </Button>
          <Typography sx={{ fontWeight: "bold" }} variant="h4">
            Submission:
          </Typography>
          <Typography sx={{ padding: "0 0 0 1rem" }}>
            Send link to your PUBLIC repository to
            stanislav.petrek@tietoevry.com. If you have any questions, do not
            hesitate to ask them via email.
          </Typography>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Box component="img" src="/logo.png" />
        </div>
      </Paper>
    </Container>
  );
};

export default Assignment;
