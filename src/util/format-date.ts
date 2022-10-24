import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

/**
 * @returns String like '24.10.2022'
 */
export const formatDate = (date: Date | string | Dayjs) =>
  dayjs(date).format('DD.MM.YYYY')

/**
 * @returns String like '24.10.2022'
 */
export const formatPeriodDay = (period: number, day: number) => {
  const date = dayjs(`${period}${day}`, 'YYYYMMD')
  return formatDate(date)
}
