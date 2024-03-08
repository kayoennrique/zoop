import { useCallback } from "react";

const useCurrencyFormatter = (locale = "pt-BR", currency = "BRL") => {
  const currencyFormatted = useCallback(
    (amount: number) => {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(amount);
    },
    [locale, currency]
  );

  return currencyFormatted;
};

export default useCurrencyFormatter;
