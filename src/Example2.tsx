import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";

import { CityTemperatures } from "./App";

type Props = {
  temperatures: CityTemperatures[];
  sorted: string;
  sortByCity: () => void;
  sortByTemp: () => void;
  sortByFtemp: () => void;
  sortByHumidity: () => void;
  handleRefreshData: () => void;
};
const Example2 = ({
  temperatures,
  sorted,
  sortByCity,
  sortByTemp,
  sortByFtemp,
  sortByHumidity,
  handleRefreshData,
}: Props) => {
  const computeAvgTemp = (avgName: "temp" | "fTemp" | "humidity") => {
    const total = temperatures.reduce((sum, temp) => {
      return sum + temp[avgName];
    }, 0);
    return total / temperatures.length;
  };
  return (
    <>
      <Typography variant="h6">
        Please try to refresh not more then once. Openweather mapi supports
        60requests/hour. If refresh does not work, this is the reason.
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Button
                  variant={sorted === "city" ? "contained" : "text"}
                  fullWidth
                  onClick={sortByCity}
                >
                  City
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant={sorted === "temp" ? "contained" : "text"}
                  fullWidth
                  onClick={sortByTemp}
                >
                  Temperature
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant={sorted === "ftemp" ? "contained" : "text"}
                  fullWidth
                  onClick={sortByFtemp}
                >
                  Feels like
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant={sorted === "hum" ? "contained" : "text"}
                  fullWidth
                  onClick={sortByHumidity}
                >
                  Humidity
                </Button>
              </TableCell>
              <TableCell size="small" align="right">
                <IconButton onClick={handleRefreshData}>
                  <RefreshIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {temperatures.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.city}
                </TableCell>
                <TableCell align="center">{row.temp}</TableCell>
                <TableCell align="center">{row.fTemp}</TableCell>
                <TableCell align="center">{row.humidity}</TableCell>
              </TableRow>
            ))}
            <TableRow
              key={"Average"}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Average
              </TableCell>
              <TableCell align="center">{computeAvgTemp("temp")}</TableCell>
              <TableCell align="center">{computeAvgTemp("fTemp")}</TableCell>
              <TableCell align="center">{computeAvgTemp("humidity")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Example2;
