/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { saveSearchHistory } from "../utils/helper";
import { ApiContext } from "../App";

function SearchBar() {
  const { getCurrentWeatherApi } = useContext(ApiContext);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const clear = () => {
    setCity("");
    setCountry("");
  };

  const search = async () => {
    const { success, data } = await getCurrentWeatherApi.request(`${city},${country}`);
    clear();
    if(success) saveSearchHistory(data);
  }

  return (
    <div className="flex mt-6 flex-wrap">
      <TextInput
        className="mr-2 mt-6 w-full md:w-auto"
        name="city"
        label="City"
        value={city}
        onChange={setCity}
        placeholder={"Please enter city"}
      />
      <TextInput
        className="mr-2 mt-6 w-full md:w-auto"
        name="country"
        label="Country"
        onChange={setCountry}
        value={country}
        placeholder="Please enter country"
      />
      <Button
        className="mr-2 mt-6 h-[42px]"
        type="primary"
        onClick={search}
        disabled={city === "" && country === ""}
      >
        Submit
      </Button>
      <Button className="mr-2 mt-6 h-[42px]" type="secondary" onClick={clear}>
        Clear
      </Button>
    </div>
  );
}

export default SearchBar;
