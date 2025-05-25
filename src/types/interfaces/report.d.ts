export {}

declare global {
  interface userReportType {
    title: string,
    icon: IconProp,
    date: string,
    screenTime: number,
    maxDuration: number,
    openings: number,
    scrollDistance: number,
    co2Impact: number
  }
}