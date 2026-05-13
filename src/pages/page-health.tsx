import { Plus } from 'lucide-react'
import React from 'react'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import MedicineDosesList from '@/core-components/medicine-doses-list'
import { MedicineFormSheet } from '@/core-components/medicine-form-sheet'
import MedicinesSummary from '@/core-components/medicines-summary'
import { getDaysOfMonth } from '@/helpers/utils'
import useMedicine from '@/hooks/use-medicine'

function PageHealth() {
   const [currentDate, setCurrentDate] = React.useState(new Date())
   const [selectedMedicineId, setSelectedMedicineId] = React.useState<
      string | null
   >(null)
   const [isSheetOpen, setIsSheetOpen] = React.useState(false)
   const days = getDaysOfMonth(currentDate)
   const { medicines } = useMedicine()

   const medicineSelected = selectedMedicineId
      ? (medicines.find((m) => m.id === selectedMedicineId) ?? null)
      : (medicines[medicines.length - 1] ?? null)

   return (
      <Container as="article" className="py-6 flex flex-col gap-6">
         <h1 className="text-xl font-semibold tracking-tight">Saúde</h1>
         <div className="flex items-center gap-2">
            {medicines.length === 0 ? (
               <p className="text-sm text-muted-foreground">
                  Nenhum medicamento cadastrado.
               </p>
            ) : (
               medicines.map((med) => {
                  const isSelected = med.id === medicineSelected?.id
                  return (
                     <button
                        key={med.id}
                        type="button"
                        onClick={() => setSelectedMedicineId(med.id)}
                        className={
                           isSelected
                              ? 'text-sm font-medium text-primary bg-primary/10 hover:bg-primary/15 px-3 h-8 rounded-md transition-colors duration-150'
                              : 'text-sm font-medium text-muted-foreground hover:text-foreground px-3 h-8 rounded-md transition-colors duration-150'
                        }
                     >
                        {med.name}
                     </button>
                  )
               })
            )}
            <Button
               variant="ghost"
               size="sm"
               className="ml-auto text-sm font-medium text-muted-foreground hover:text-primary gap-1.5"
               onClick={() => setIsSheetOpen(true)}
            >
               <Plus className="size-4" />
               Novo
            </Button>
         </div>
         <MedicinesSummary
            currentDate={currentDate}
            onChangeMonth={setCurrentDate}
         />
         {medicineSelected && (
            <MedicineDosesList
               days={days}
               medicineSelected={medicineSelected}
            />
         )}
         <MedicineFormSheet
            open={isSheetOpen}
            onOpenChange={setIsSheetOpen}
            onCreated={() => setSelectedMedicineId(null)}
         />
      </Container>
   )
}

export default PageHealth
