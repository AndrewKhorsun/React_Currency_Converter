import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { exchangeRate } from "../types/exchangeRate";

const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getExchangeRates: builder.query<exchangeRate[], void>({
      query: () => `exchange?json`,
    }),
  }),
});

export const { useGetExchangeRatesQuery } = api;
