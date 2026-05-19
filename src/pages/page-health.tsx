import { Plus } from 'lucide-react'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import MedicineDosesList from '@/core-components/medicine-doses-list'
import { MedicineFormSheet } from '@/core-components/medicine-form-sheet'
import { MedicineMonthlySummary } from '@/core-components/medicine-monthly-summary'
import MedicinesSummary from '@/core-components/medicines-summary'
import { useHealthPage } from '@/hooks/use-health-page'

function PageHealth() {
   const {
      currentDate,
      setCurrentDate,
      setSelectedMedicineId,
      isSheetOpen,
      setIsSheetOpen,
      medicines,
      days,
      medicineSelected,
      monthlySummary,
      handleMedicineCreated,
   } = useHealthPage()

   return (
      <Container as="article" className="py-6 flex flex-col gap-6">
         <h1 className="text-2xl self-center font-semibold tracking-tight">
            Saúde
         </h1>
         <div className="flex flex-wrap items-center gap-2">
            {medicines.length === 0 ? (
               <p className="text-sm text-muted-foreground">
                  Cadastre um medicamento.
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
         {medicineSelected && (
            <>
               <MedicinesSummary
                  currentDate={currentDate}
                  onChangeMonth={setCurrentDate}
               />
               <MedicineMonthlySummary
                  total={monthlySummary.total}
                  daysWithDose={monthlySummary.daysWithDose}
                  consecutiveStreak={monthlySummary.consecutiveStreak}
                  daysInMonth={monthlySummary.daysInMonth}
                  unit={medicineSelected.unit}
               />
            </>
         )}
         {medicineSelected && (
            <MedicineDosesList
               days={days}
               medicineSelected={medicineSelected}
            />
         )}
         <MedicineFormSheet
            open={isSheetOpen}
            onOpenChange={setIsSheetOpen}
            onCreated={handleMedicineCreated}
         />
      </Container>
   )
}

export default PageHealth
