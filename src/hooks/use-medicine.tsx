import { useLocalStorage } from 'usehooks-ts'
import { generateRandomId, isSameDay } from '@/helpers/utils'
import { type Dose, MEDICINE_KEY, type Medicine } from '@/models/medicine'

export default function useMedicine() {
   const [medicines, setMedicines] = useLocalStorage<Medicine[]>(
      MEDICINE_KEY,
      [],
   )

   function createMedicine(name: string, unit: string, basedAmount: number) {
      setMedicines([
         ...medicines,
         {
            id: generateRandomId(),
            name,
            doses: [],
            unit,
            basedAmounts: [basedAmount],
         },
      ])
   }

   function addDoseToMedicine(medicineId: string, dose: Dose) {
      setMedicines((prev) =>
         prev.map((medicine) =>
            medicine.id === medicineId
               ? {
                    ...medicine,
                    doses: [...medicine.doses, dose],
                 }
               : medicine,
         ),
      )
   }

   function removeLastDoseFromDay(medicineId: string, date: Date) {
      setMedicines((prev) =>
         prev.map((medicine) => {
            if (medicine.id !== medicineId) return medicine

            const dosesOfDay = medicine.doses.filter((dose) =>
               isSameDay(new Date(dose.usedDate), date),
            )

            if (dosesOfDay.length === 0) return medicine

            const lastDoseOfDay = dosesOfDay[dosesOfDay.length - 1]

            return {
               ...medicine,
               doses: medicine.doses.filter((dose) => dose !== lastDoseOfDay),
            }
         }),
      )
   }

   function getTotalDoseByMonth(id: string, baseDate: Date) {
      const year = baseDate.getFullYear()
      const month = baseDate.getMonth()

      return (
         medicines
            .find((medicine) => medicine.id === id)
            ?.doses.filter((dose) => {
               const doseDate = new Date(dose.usedDate)
               return (
                  doseDate.getFullYear() === year &&
                  doseDate.getMonth() === month
               )
            })
            .reduce((acc, dose) => acc + dose.amount, 0) ?? 0
      )
   }

   function getTotalDoseByDay(id: string, baseDate: Date) {
      const year = baseDate.getFullYear()
      const month = baseDate.getMonth()
      const day = baseDate.getDate()

      return (
         medicines
            .find((item) => item.id === id)
            ?.doses.filter((dose) => {
               const doseDate = new Date(dose.usedDate)
               return (
                  doseDate.getFullYear() === year &&
                  doseDate.getMonth() === month &&
                  doseDate.getDate() === day
               )
            })
            .reduce((acc, dose) => acc + dose.amount, 0) ?? 0
      )
   }

   return {
      medicines,
      createMedicine,
      addDoseToMedicine,
      removeLastDoseFromDay,
      getTotalDoseByDay,
      getTotalDoseByMonth,
   }
}
