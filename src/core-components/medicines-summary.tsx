import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MonthSummaryProps {
   currentDate: Date
   onChangeMonth: (date: Date) => void
}

export default function MedicinesSummary({
   currentDate,
   onChangeMonth,
}: MonthSummaryProps) {
   function handlePreviousMonth() {
      onChangeMonth(
         new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
      )
   }

   function handleNextMonth() {
      onChangeMonth(
         new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      )
   }

   return (
      <div className="flex items-center justify-between gap-4">
         <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
            <ChevronLeft className="size-4" />
         </Button>

         <strong className="text-lg font-semibold first-letter:uppercase">
            {currentDate.toLocaleDateString('pt-BR', {
               month: 'long',
               year: 'numeric',
            })}
         </strong>

         <Button variant="outline" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="size-4" />
         </Button>
      </div>
   )
}
