import sub from "date-fns/sub";


enum TimeRangesEnum {
  WEEK = "one week",
  MONTH = "one month",
}

export type ITimeRange = "WEEK" | "MONTH";

export type ISelectOption = { value: ITimeRange, label: TimeRangesEnum }
export const optionsWithDate =
{
  "WEEK": { label: TimeRangesEnum.WEEK, date: sub(new Date(), { weeks: 1 }).toISOString() },
  "MONTH": { label: TimeRangesEnum.MONTH, date: sub(new Date(), { months: 1 }).toISOString() }
}

export const selectOptions = Object.entries(optionsWithDate)
  .map(([key, val]) => ({ label: val.label, value: key }))











