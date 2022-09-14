import React, { useState } from "react";
import { useGetExchangeRatesQuery } from "../app/api";
import { exchangeRate } from "../types/exchangeRate";

export const Task1: React.FC = () => {
  const { data = [] } = useGetExchangeRatesQuery();
  const [firstInput, setFirstInput] = useState<number | undefined>(undefined);
  const [secondInput, setSecondInput] = useState<number | undefined>(undefined);
  const [firstSelect, setFirstSelect] = useState(1);
  const [secondSelect, setSecondSelect] = useState(1);

  const preparedData: exchangeRate[] = [
    {
      r030: 1,
      txt: "Українська гривня",
      rate: 1,
      cc: "UAH",
      exchangedate: new Date().toString(),
    },
    ...data,
  ].sort((a, b) => a.txt.localeCompare(b.txt));

  function FirstValue(event: any) {
    setFirstInput(event.target.value);
    setSecondInput(
      +((event.target.value * firstSelect) / secondSelect).toFixed(2)
    );
  }

  function SecondValue(event: any) {
    setSecondInput(event.target.value);
    setFirstInput(
      +((event.target.value * secondSelect) / firstSelect).toFixed(2)
    );
  }

  function FirstCurrencySelect(event: any) {
    const currency = preparedData.find((el) => event.target.value === el.txt);
    if (currency) {
      setFirstSelect(currency.rate);
      if (firstInput) {
        setSecondInput(
          +((firstInput * currency.rate) / secondSelect).toFixed(2)
        );
      }
    }
  }

  function SecondCurrencySelect(event: any) {
    const currency = preparedData.find((el) => event.target.value === el.txt);
    if (currency) {
      setSecondSelect(currency.rate);
      if (secondInput) {
        setFirstInput(
          +((secondInput * currency.rate) / firstSelect).toFixed(2)
        );
      }
    }
  }

  return (
    <>
      <div className="title">Конвертер валют</div>
      <div className="exchange">
        <div className="exchange__block">
          <input
            className="input is-success"
            type="number"
            min={0}
            placeholder="Введіть кількість одиниць"
            value={firstInput}
            onChange={(event) => {
              FirstValue(event);
            }}
          ></input>

          <div className="select is-success">
            <select onChange={(event) => FirstCurrencySelect(event)}>
              <option>Оберіть валюту</option>
              {preparedData.map((el) => (
                <option key={el.txt}>{el.txt}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="exchange__block">
          <input
            className="input is-success"
            type="number"
            min={0}
            placeholder="Введіть кількість одиниць"
            value={secondInput}
            onChange={(event) => SecondValue(event)}
          ></input>
          <div className="select is-success">
            <select onChange={(event) => SecondCurrencySelect(event)}>
              <option>Оберіть валюту</option>
              {preparedData.map((el) => (
                <option key={el.txt}>{el.txt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
