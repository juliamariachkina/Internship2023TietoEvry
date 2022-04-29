import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  setLocked: React.Dispatch<React.SetStateAction<boolean>>;
};
const Assignment = ({ setLocked }: Props) => {
  const [input, setInput] = useState("");
  const handleUnlock = () => {
    if (input === "CI/CD") setLocked(false);
  };
  return (
    <Paper>
      <Typography align="center" variant="h1">
        Home assignment for Internship 2022
      </Typography>
      <Typography align="center" variant="h2">
        "Continous integration jobs visualizer internship"
      </Typography>
      <Typography sx={{ fontWeight: "bold" }} variant="h3">
        Personal spotify analyser:
      </Typography>
      <Typography>
        Create public repository on the site of your preference. Create
        application which will show playlist or songs you listen to on Spotify.
        In case you do not have Spotify, or you are reluctant to share
        information like this, choose some artist and his songs. Use Spotify
        REST API to fetch the data.
      </Typography>
      <Typography>
        Process the data and pick which data are worth showing. Provide some
        data analysis like average, min, max, sorting - anything you find
        interesting. Present analysed and computed data to the user in some
        elegant way.
      </Typography>
      <Typography sx={{ fontWeight: "bold" }} variant="h3">
        Things to consider:
      </Typography>
      <Typography>
        I can not stress this enough - PUBLIC REPOSITORY is necesary for project
        submission!
      </Typography>
      <Typography>
        Frequent commits with adequate messages are big plus. After the code
        itself its the best way of understanding your way of thinking.
      </Typography>
      <Typography>
        Do not forget to refactor your code in the end. It is okay to use plenty
        of comments, debug outputs and so on. But get rid of them in the end.
      </Typography>
      <Typography>
        Choose technology which will suit your needs. Python or Java or any
        flavour of JS.
      </Typography>
      <Typography>
        Appearance of data visualization should fall somewhere between EXAMPLE1
        & EXAMPLE2 (read on, to unlock it). Outputting plaintext in a way an
        EXAMPLE1 does, is the bare minimum for the assignment.
      </Typography>
      <Typography>
        Project is open for personalization, have fun with it!
      </Typography>
      <Typography sx={{ fontWeight: "bold" }} variant="h3">
        Instructions:
      </Typography>
      <Typography>
        Read the whole description page without checking the EXAMPLE1 & EXAMPLE2
        tabs.
      </Typography>
      <Typography>
        If you have an idea of your solution in mind, unlock examples of
        solutions by answering the following question.
      </Typography>
      <Typography>
        What is the shortcut of Continous Integration Continous Delivery? Hint:
        Check ID of input field or button in devtools.
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
      <Typography sx={{ fontWeight: "bold" }} variant="h3">
        Submission:
      </Typography>
      <Typography>
        Send link to your PUBLIC repository to stanislav.petrek@tietoevry.com.
        Should you have any questions, do not hesitate to ask them via the
        email.
      </Typography>
      <Box sx={{ pt: "50px" }}>
        <img src="/logo.png" />
      </Box>
    </Paper>
  );
};

export default Assignment;
