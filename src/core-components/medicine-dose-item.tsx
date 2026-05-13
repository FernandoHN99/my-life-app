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
}

export default function MedicineDoseItem({
   medicineId,
   doseUnit,
   baseDate,
   basedAmount,
   totalDosePerDay,
}: MedicineDoseItemProps) {
   const [isHovering, setIsHovering] = useState(false)
   const { addDoseToMedicine, removeLastDoseFromDay } = useMedicine()

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
         className=" h-max md:w-25"
         onMouseEnter={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
      >
         <CardHeader className="flex justify-center">
            <CardTitle className="font-bold">
               Dia {baseDate.getUTCDate()}
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p className="mx-auto block text-sm font-medium">
               {totalDosePerDay} {doseUnit}
            </p>
         </CardContent>
         <CardFooter className="p-1">
            <div
               className={`inline-flex 
                  justify-around w-full 
                  transition-opacity duration-200 
                  ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            >
               <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAddDose}
                  className=" cursor-pointer"
               >
                  +
               </Button>
               <Button
                  size="sm"
                  variant="outline"
                  onClick={handleReduceDose}
                  className=" cursor-pointer"
               >
                  -
               </Button>
            </div>
         </CardFooter>
      </Card>
   )
}
