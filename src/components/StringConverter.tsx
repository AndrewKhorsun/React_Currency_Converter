import React, { useState } from "react";
import { exchangeRate } from "../types/exchangeRate";

type Props = {
  data: exchangeRate[];
};

export const StringConverter: React.FC<Props> = ({ data }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  let unit: string = "";

  const convert = (value: string) => {
    const arrWords = value.split(" ");
    const amount = +arrWords[0];
    const ConvertFrom = data.find((el) => el.cc === arrWords[1].toUpperCase())?.rate;
    const ConvertTo = data.find((el) => el.cc === arrWords[3].toUpperCase())?.rate;
    unit = arrWords[3];

    if (ConvertFrom && ConvertTo) {
      setResult(
        `${(amount * (ConvertFrom / ConvertTo)).toFixed(2)} 
        ${unit.toUpperCase()}`
      );
      setInput("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Введіть значення за прикладом: <br />
        "1 usd in uah"
      </h1>

      <input
        className="input is-success"
        type="text"
        value={input}
        placeholder="Введіть значення"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      <div>
        <button
          className="button is-success mt-2 mb-5"
          onClick={() => convert(input)}
        >
          Розрахувати
        </button>
      </div>
      <label className="label">
        Рузьтат: {result}
        {unit}{" "}
      </label>
    </div>
  );
};
