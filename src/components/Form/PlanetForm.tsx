import React, { useState, ChangeEvent } from "react";
// components
import { FormItem, FormFooter } from "./styled";
import { SquareButton as Button, Checkbox, Slider, TextInput } from "../../components/index";
// interface
import { PlanetValue } from "../../interface";

const checkboxGroup = ["temperate", "arid", "tropical", "murky"];

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
        <TextInput name="name" value={details.name} maxLength={10} onChange={(e: ChangeEvent) => handleUpdateInfo(e)} />
      </FormItem>
      <FormItem>
        <label htmlFor="population">Population:</label>
        <Slider
          name="population"
          min="0"
          max="2000000000"
          value={details.population === "unknown" ? "0" : details.population}
          onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="climate">Climate:</label>
        {checkboxGroup.map((item, index) => (
          <Checkbox
            key={`climate${index}`}
            checked={details.climate.includes(item)}
            name="climate"
            value={item}
            onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
          />
        ))}
      </FormItem>
      <FormFooter>
        <Button type="submit">Submit</Button>
        <Button onClick={props.onCloseModal}>Cancel</Button>
      </FormFooter>
    </form>
  );
};

export default PlanetForm;
