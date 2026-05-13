import React from 'react'
import Container from '@/components/container'
import MedicineDosesList from '@/core-components/medicine-doses-list'
import MedicinesSummary from '@/core-components/medicines-summary'
import { getDaysOfMonth } from '@/helpers/utils'
import useMedicine from '@/hooks/use-medicine'

function PageHealth() {
   const [currentDate, setCurrentDate] = React.useState(new Date())
   const days = getDaysOfMonth(currentDate)
   const { medicines } = useMedicine()
   const medicineSelected = medicines.find((med) => med.name === 'Alprazolan')

   return (
      <Container as="article">
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
      </Container>
   )
}

export default PageHealth
