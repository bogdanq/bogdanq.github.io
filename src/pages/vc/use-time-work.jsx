function monthDiff(dateFrom, dateTo = new Date()) {
  const [year, month] = (
    (dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())) /
    12
  )
    .toFixed(1)
    .split(".");

  return [year, month];
}

export const useTimeWork = () => {
  const START_DATE = "2018-06-01";

  const [year, month] = monthDiff(new Date(START_DATE));

  function declOfNum(number, words) {
    const word =
      words[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
      ];

    return `${number} ${word}`;
  }

  const experience = `Опыт работы ${declOfNum(year, [
    "год",
    "года",
    "лет",
  ])} ${declOfNum(month, ["месяц", "месяца", "месяцев"])}`;

  return experience || "Опыт работы";
};
