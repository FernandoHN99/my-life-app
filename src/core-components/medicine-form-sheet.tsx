import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
} from '@/components/ui/sheet'
import { useMedicineForm } from '@/hooks/use-medicine-form'

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
   const {
      name,
      setName,
      unit,
      setUnit,
      basedAmount,
      setBasedAmount,
      isValid,
      submit,
   } = useMedicineForm({ onCreated, onClose: () => onOpenChange(false) })

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
                  <Select value={unit} onValueChange={setUnit}>
                     <SelectTrigger id="medicine-unit">
                        <SelectValue />
                     </SelectTrigger>
                     <SelectContent position="popper" align="start">
                        <SelectItem value="mg">Miligramas (mg)</SelectItem>
                        <SelectItem value="g">Gramas (g)</SelectItem>
                     </SelectContent>
                  </Select>
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
                     min="0"
                     value={basedAmount}
                     onChange={(e) => setBasedAmount(e.target.value)}
                  />
               </div>
               <Button
                  variant="default"
                  className="w-full mt-2"
                  type="submit"
                  disabled={!isValid}
                  onClick={submit}
               >
                  Salvar medicamento
               </Button>
            </div>
         </SheetContent>
      </Sheet>
   )
}
