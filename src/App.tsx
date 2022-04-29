import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import Example1 from "./Example1";
import Example2 from "./Example2";
import Assignment from "./Assignment";

export type CityTemperatures = {
  city: string;
  temp: number;
  fTemp: number;
  humidity: number;
};

const App = () => {
  document.title = `CI/CD`;
  const [temperatures, setTemperatures] = useState<CityTemperatures[]>([
    {
      city: "Brno",
      temp: -15,
      fTemp: -11,
      humidity: 10,
    },
    {
      city: "Prague",
      temp: -10,
      fTemp: -12,
      humidity: 10,
    },
    {
      city: "Bratislava",
      temp: -25,
      fTemp: -20,
      humidity: 10,
    },
    {
      city: "Krakow",
      temp: -7,
      fTemp: -1,
      humidity: 10,
    },
  ]);
  const [value, setValue] = useState("1");
  const [sorted, setSorted] = useState<
    "city" | "temp" | "ftemp" | "hum" | "none"
  >("none");
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(true);
  const cities = ["Brno", "Bratislava", "Prague", "Krakow"];

  const handleRefreshData = () => {
    setLoading(true);
    let newData: CityTemperatures[] = [];
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/group?id=3078610,3060972,3067696,3094802&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.list);
        const data: CityTemperatures[] = response.data.list.map((obj: { [x: string]: { [x: string]: any; }; }, i: number) => {
          return {
            city: cities[i],
            temp: obj["main"]["temp"],
            fTemp: obj["main"]["feels_like"],
            humidity: obj["main"]["humidity"],
          };
        });
        setTemperatures(data);
        setLoading(false);
      });
  };

  const sortByCity = () => {
    const copy = [...temperatures];
    copy.sort((a, b) => a.city.localeCompare(b.city));
    setTemperatures(copy);
    setSorted("city");
  };

  const sortByTemp = () => {
    const copy = [...temperatures];
    copy.sort((a, b) => a.temp - b.temp);
    setTemperatures(copy);
    setSorted("temp");
  };

  const sortByFtemp = () => {
    const copy = [...temperatures];
    copy.sort((a, b) => a.fTemp - b.fTemp);
    setTemperatures(copy);
    setSorted("ftemp");
  };

  const sortByHumidity = () => {
    const copy = [...temperatures];
    copy.sort((a, b) => a.humidity - b.humidity);
    setTemperatures(copy);
    setSorted("hum");
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return locked ? (
    <Assignment setLocked={setLocked} />
  ) : (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Assignment" value="1" />
              <Tab label="Example 1" value="2" />
              <Tab label="Example 2" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Assignment setLocked={setLocked} />
          </TabPanel>
          <TabPanel value="2">
            <Example1
              temperatures={temperatures}
              handleRefreshData={handleRefreshData}
            />
          </TabPanel>
          <TabPanel value="3">
            <Example2
              temperatures={temperatures}
              sorted={sorted}
              sortByCity={sortByCity}
              sortByTemp={sortByTemp}
              sortByFtemp={sortByFtemp}
              sortByHumidity={sortByHumidity}
              handleRefreshData={handleRefreshData}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default App;
