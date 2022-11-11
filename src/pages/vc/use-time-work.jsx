export const useTimeWork = () => {
  const START_DATE = "2018-06-01";

  const year = new Date().getFullYear() - new Date(START_DATE).getFullYear();
  const month = new Date().getMonth() - new Date(START_DATE).getMonth();

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
