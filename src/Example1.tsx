import { Button, Typography } from "@mui/material";
import { CityTemperatures } from "./App";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";

type Props = {
  temperatures: CityTemperatures[];
  handleRefreshData: () => void;
};
const Example1 = ({ temperatures, handleRefreshData }: Props) => {
  const computeAvgTemp = () => {
    const total = temperatures.reduce((sum, temp) => {
      return sum + temp.temp;
    }, 0);
    return total / temperatures.length;
  };

  return (
    <>
      <Typography variant="h6">
        Please limit the refresh rate. Openweather API supports 1
        request/minute.
      </Typography>
      <IconButton onClick={handleRefreshData}>
        <RefreshIcon />
      </IconButton>
      {temperatures.map((obj, i) => (
        <Typography key={i}>
          {obj.city} | {obj.temp}C | {obj.fTemp}C | {obj.humidity}%
        </Typography>
      ))}
      <Typography>Average temperature: {computeAvgTemp()}</Typography>
    </>
  );
};

export default Example1;
