import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import useMedicine from '@/hooks/use-medicine'

export interface MedicineDoseItemProps {
   medicineId: string
   baseDate: Date
   totalDosePerDay: number
   doseUnit: string
   basedAmount: number
   isToday: boolean
}

export default function MedicineDoseItem({
   medicineId,
   doseUnit,
   baseDate,
   basedAmount,
   totalDosePerDay,
   isToday,
}: MedicineDoseItemProps) {
   const [isHovering, setIsHovering] = useState(false)
   const { addDoseToMedicine, removeLastDoseFromDay } = useMedicine()
   const hasDoses = totalDosePerDay > 0

   function handleAddDose() {
      addDoseToMedicine(medicineId, {
         amount: basedAmount,
         usedDate: baseDate,
      })
   }

   function handleReduceDose() {
      removeLastDoseFromDay(medicineId, baseDate)
   }

   return (
      <Card
         className={[
            'h-max md:w-25',
            isToday
               ? 'ring-2 ring-accent'
               : hasDoses
                 ? 'ring-1 ring-primary/40'
                 : '',
         ].join(' ')}
         onMouseEnter={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
      >
         <CardHeader className="flex justify-center">
            <CardTitle className="font-bold">
               Dia {baseDate.getUTCDate()}
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p
               className={[
                  'mx-auto block text-sm',
                  hasDoses
                     ? 'font-semibold text-primary'
                     : 'font-medium text-muted-foreground',
               ].join(' ')}
            >
               {totalDosePerDay} {doseUnit}
            </p>
         </CardContent>
         <CardFooter className="p-1">
            <div
               className={[
                  'inline-flex justify-around w-full transition-opacity duration-200',
                  isHovering ? 'opacity-100' : 'opacity-0',
               ].join(' ')}
            >
               <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddDose}
                  className="cursor-pointer border-primary/30 hover:bg-primary/10 hover:text-primary"
               >
                  +
               </Button>
               <Button
                  size="sm"
                  variant="outline"
                  onClick={handleReduceDose}
                  className="cursor-pointer border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
               >
                  -
               </Button>
            </div>
         </CardFooter>
      </Card>
   )
}
