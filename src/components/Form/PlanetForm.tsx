import React, { useState, ChangeEvent } from "react";
// components
import { FormItem, FormLabel, FormFooter } from "./styled";
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
  const handleUpdateInfo = (e: ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    let newValue;
    if (element.name === "climate") {
      const climateArray = details.climate === "unknown" ? [] : details.climate.split(", ");
      if (details.climate.includes(element.value)) {
        newValue = climateArray.filter((item) => item !== element.value.toString()).join(", ");
        if (newValue === "") newValue = "unknown";
      } else {
        climateArray.push(element.value.toString());
        newValue = climateArray.length === 1 ? climateArray.join("") : climateArray.join(", ");
      }
    } else {
      newValue = element.value;
    }
    setDetails({
      ...details,
      [element.name]: newValue,
    });
  };

  return (
    <form onSubmit={(e: React.FormEvent) => props.onSubmitForm(details, e)}>
      <FormItem>
        <FormLabel htmlFor="name">Planet name:</FormLabel>
        <TextInput name="name" value={details.name} maxLength={10} onChange={(e: ChangeEvent) => handleUpdateInfo(e)} />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="population">Population:</FormLabel>
        {Number(details.population) > 2000000000 ? (
          <TextInput name="population" value={details.population} onChange={(e: ChangeEvent) => handleUpdateInfo(e)} />
        ) : (
          <Slider
            name="population"
            min="0"
            max="2000000000"
            value={details.population === "unknown" ? "0" : details.population}
            onChange={(e: ChangeEvent) => handleUpdateInfo(e)}
          />
        )}
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="climate">Climate:</FormLabel>
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
        <Button onClick={props.onCloseModal} color="#c8453c">
          Cancel
        </Button>
      </FormFooter>
    </form>
  );
};

export default PlanetForm;
