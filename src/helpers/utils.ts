export type DayItem = {
   date: Date
   isToday: boolean
}

export function getDaysOfMonth(date: Date): DayItem[] {
   const year = date.getFullYear()
   const month = date.getMonth()

   const today = new Date()

   const daysInMonth = new Date(year, month + 1, 0).getDate()

   const days: DayItem[] = []

   for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day)

      days.push({
         date: currentDate,
         isToday: currentDate.toDateString() === today.toDateString(),
      })
   }

   return days
}

export function formatDate(date: Date): string {
   const day = String(date.getDate()).padStart(2, '0')
   const month = String(date.getMonth() + 1).padStart(2, '0')
   const year = String(date.getFullYear()).slice(-2)

   return `${day}/${month}/${year}`
}

export function generateRandomId() {
   return Math.random().toString(36).substring(2, 9)
}

export function isSameDay(d1: Date, d2: Date) {
   return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
   )
}
