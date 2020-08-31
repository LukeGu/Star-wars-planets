import React, { useState, ChangeEvent } from "react";
// components
import { FormItem, FormFooter } from "./styled";
import { SquareButton as Button } from "../../components/index";
// interface
import { PlanetValue } from "../../interface";

const PlanetForm = (props: {
  planetDetails: PlanetValue;
  onSubmitForm: (data: PlanetValue, e: React.FormEvent) => void;
  onCloseModal: () => void;
}) => {
  const [details, setDetails] = useState<PlanetValue>(props.planetDetails);
  //   console.log("PlanetForm", details);
  const handleUpdateInfo = (e: ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    let newValue;
    if (element.name === "climate") {
      const climateArray = details.climate === "" ? [] : details.climate.split(", ");
      if (details.climate.includes(element.value))
        newValue = climateArray.filter((item) => item !== element.value.toString()).join(", ");
      else {
        climateArray.push(element.value.toString());
        newValue = climateArray.length === 1 ? climateArray.join("") : climateArray.join(", ");
      }
    } else {
      newValue = element.value;
    }
    console.log("details", newValue);
    setDetails({
      ...details,
      [element.name]: newValue,
    });
  };

  return (
    <form onSubmit={(e: React.FormEvent) => props.onSubmitForm(details, e)}>
      <FormItem>
        <label htmlFor="name">Planet name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={details.name}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="population">Population:</label>
        <input
          type="range"
          id="population"
          name="population"
          min="0"
          max="2000000000"
          value={details.population === "unknown" ? "0" : details.population}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
        <input
          type="text"
          id="population-text"
          name="population"
          value={details.population === "unknown" ? "0" : details.population}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="climate">Climate:</label>
        <input
          type="checkbox"
          id="climate1"
          name="climate"
          value="temperate"
          checked={details.climate.includes("temperate")}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
        <label htmlFor="climate1"> Temperate</label>
        <input
          type="checkbox"
          id="climate2"
          name="climate"
          value="arid"
          checked={details.climate.includes("arid")}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
        <label htmlFor="climate2"> Arid</label>
        <input
          type="checkbox"
          id="climate3"
          name="climate"
          value="tropical"
          checked={details.climate.includes("tropical")}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
        <label htmlFor="climate3"> Tropical</label>
        <input
          type="checkbox"
          id="climate4"
          name="climate"
          value="murky"
          checked={details.climate.includes("murky")}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
        <label htmlFor="climate4"> Murky</label>
      </FormItem>
      <FormFooter>
        <Button type="submit">Submit</Button>
        <Button onClick={props.onCloseModal}>Cancel</Button>
      </FormFooter>
    </form>
  );
};

export default PlanetForm;
