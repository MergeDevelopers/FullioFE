
export function getCalenderInfo( dateObject ) {
  const date = dateObject || new Date();
  const currentYear = date.getFullYear();
  const currentMonthIndex = date.getMonth();
  const daysInCurrenMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate(); // 1 ~ 31
  const firstDayOfWeekIndex = new Date(currentYear, currentMonthIndex, 1).getDay(); //0 ~ 6

  return {
    currentYear,
    currentMonthIndex,
    daysInCurrenMonth,
    firstDayOfWeekIndex,
  }
}

