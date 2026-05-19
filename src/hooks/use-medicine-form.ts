import { useState } from 'react'
import useMedicine from '@/hooks/use-medicine'

interface UseMedicineFormOptions {
   onCreated?: () => void
   onClose: () => void
}

export function useMedicineForm({
   onCreated,
   onClose,
}: UseMedicineFormOptions) {
   const { createMedicine } = useMedicine()
   const [name, setName] = useState('')
   const [unit, setUnit] = useState('mg')
   const [basedAmount, setBasedAmount] = useState('')

   const isValid =
      name.trim().length > 0 &&
      unit.trim().length > 0 &&
      basedAmount.trim().length > 0 &&
      !Number.isNaN(parseFloat(basedAmount)) &&
      parseFloat(basedAmount) > 0

   function reset() {
      setName('')
      setUnit('')
      setBasedAmount('')
   }

   function submit() {
      if (!isValid) return
      createMedicine(name.trim(), unit.trim(), parseFloat(basedAmount))
      reset()
      onClose()
      onCreated?.()
   }

   return {
      name,
      setName,
      unit,
      setUnit,
      basedAmount,
      setBasedAmount,
      isValid,
      submit,
      reset,
   }
}
