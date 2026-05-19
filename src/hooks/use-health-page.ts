import { useState } from 'react'
import { getDaysOfMonth } from '@/helpers/utils'
import useMedicine from '@/hooks/use-medicine'

export function useHealthPage() {
   const [currentDate, setCurrentDate] = useState(new Date())
   const [selectedMedicineId, setSelectedMedicineId] = useState<string | null>(
      null,
   )
   const [isSheetOpen, setIsSheetOpen] = useState(false)

   const { medicines, getMonthlySummary } = useMedicine()

   const days = getDaysOfMonth(currentDate)

   const medicineSelected = selectedMedicineId
      ? (medicines.find((m) => m.id === selectedMedicineId) ?? null)
      : (medicines[medicines.length - 1] ?? null)

   const { total, daysWithDose, consecutiveStreak } = medicineSelected
      ? getMonthlySummary(medicineSelected.id, currentDate, days)
      : { total: 0, daysWithDose: 0, consecutiveStreak: 0 }

   const monthlySummary = {
      total,
      daysWithDose,
      consecutiveStreak,
      daysInMonth: days.length,
   }

   function handleMedicineCreated() {
      setSelectedMedicineId(null)
   }

   return {
      currentDate,
      setCurrentDate,
      selectedMedicineId,
      setSelectedMedicineId,
      isSheetOpen,
      setIsSheetOpen,
      medicines,
      days,
      medicineSelected,
      monthlySummary,
      handleMedicineCreated,
   }
}
