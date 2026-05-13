import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
} from '@/components/ui/sheet'
import useMedicine from '@/hooks/use-medicine'

interface MedicineFormSheetProps {
   open: boolean
   onOpenChange: (open: boolean) => void
   onCreated: () => void
}

export function MedicineFormSheet({
   open,
   onOpenChange,
   onCreated,
}: MedicineFormSheetProps) {
   const { createMedicine } = useMedicine()
   const [name, setName] = React.useState('')
   const [unit, setUnit] = React.useState('')
   const [basedAmount, setBasedAmount] = React.useState('')

   const handleSubmit = () => {
      if (
         !name.trim() ||
         !unit.trim() ||
         Number.isNaN(parseFloat(basedAmount))
      ) {
         return
      }
      createMedicine(name.trim(), unit.trim(), parseFloat(basedAmount))
      setName('')
      setUnit('')
      setBasedAmount('')
      onOpenChange(false)
      onCreated()
   }

   return (
      <Sheet open={open} onOpenChange={onOpenChange}>
         <SheetContent side="right" className="w-full sm:w-[400px]">
            <div className="flex flex-col gap-6 p-8">
               <SheetHeader>
                  <SheetTitle>Novo medicamento</SheetTitle>
                  <SheetDescription>
                     Preencha os dados do medicamento.
                  </SheetDescription>
               </SheetHeader>
               <div className="flex flex-col gap-1.5">
                  <label
                     htmlFor="medicine-name"
                     className="text-sm font-medium text-foreground"
                  >
                     Nome
                  </label>
                  <Input
                     id="medicine-name"
                     placeholder="Ex: Alprazolam"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="flex flex-col gap-1.5">
                  <label
                     htmlFor="medicine-unit"
                     className="text-sm font-medium text-foreground"
                  >
                     Unidade
                  </label>
                  <Input
                     id="medicine-unit"
                     placeholder="Ex: mg"
                     value={unit}
                     onChange={(e) => setUnit(e.target.value)}
                  />
               </div>
               <div className="flex flex-col gap-1.5">
                  <label
                     htmlFor="medicine-based-amount"
                     className="text-sm font-medium text-foreground"
                  >
                     Dose padrão
                  </label>
                  <Input
                     id="medicine-based-amount"
                     type="number"
                     step="0.01"
                     placeholder="Ex: 0.5"
                     value={basedAmount}
                     onChange={(e) => setBasedAmount(e.target.value)}
                  />
               </div>
               <Button
                  variant="default"
                  className="w-full mt-2"
                  type="submit"
                  onClick={handleSubmit}
               >
                  Salvar medicamento
               </Button>
            </div>
         </SheetContent>
      </Sheet>
   )
}
