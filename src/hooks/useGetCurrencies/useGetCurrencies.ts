import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface Currencies {
  [key: string]: string;
}

const fetchCurrencies = async (): Promise<Currencies> => {
  const response = await fetch("https://api.frankfurter.app/currencies");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export function useCurrencies(): UseQueryResult<Currencies, Error> {
  return useQuery({ queryKey: ["currencies"], queryFn: fetchCurrencies });
}
