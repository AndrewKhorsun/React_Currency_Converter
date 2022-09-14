import React from "react";
import { useGetExchangeRatesQuery } from "../app/api";

export const ExchangeRates: React.FC = () => {
  const { data = [] } = useGetExchangeRatesQuery();

  return (
    <>
      {data.length > 0 ? (
        <p className="title">
          Офіційний курс гривні до іноземних валют на{" "}
          {data[3].exchangedate.toString()}
        </p>
      ) : (
        ""
      )}

      <ul className="category-list">
        {data.map((el) => (
          <li key={el.cc}>
            <strong>1 {el.cc}</strong> - {el.txt} ={" "}
            <strong>{el.rate} UAH</strong>
          </li>
        ))}
      </ul>
    </>
  );
};
