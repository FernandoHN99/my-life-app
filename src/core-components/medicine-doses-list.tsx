import MedicineDoseItem from '@/core-components/medicine-dose-item'
import { type DayItem, getDaysOfMonth } from '@/helpers/utils'
import useMedicine from '@/hooks/use-medicine'
import type { Medicine } from '@/models/medicine'

interface MedicineDosesListProps {
   days: DayItem[]
   medicineSelected: Medicine
}

export default function MedicineDosesList({
   days,
   medicineSelected,
}: MedicineDosesListProps) {
   const { getTotalDoseByDay } = useMedicine()

   if (!medicineSelected) {
      return null
   }

   return (
      <div className="grid grid-cols-7 gap-4 mx-auto">
         {days.map((day) => (
            <MedicineDoseItem
               key={`${medicineSelected.id}-${day.date.getTime()}`}
               medicineId={medicineSelected.id}
               doseUnit={medicineSelected.unit}
               basedAmount={medicineSelected.basedAmounts[0]}
               baseDate={day.date}
               totalDosePerDay={getTotalDoseByDay(
                  medicineSelected.id,
                  day.date,
               )}
            />
         ))}
      </div>
   )
}
