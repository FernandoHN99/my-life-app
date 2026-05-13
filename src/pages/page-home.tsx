import { HeartPulse } from 'lucide-react'
import Container from '@/components/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import useMedicine from '@/hooks/use-medicine'

function PageHome() {
   const { medicines } = useMedicine()
   const today = new Date()
   const formattedDate = today.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
   })

   return (
      <Container as="main" className="py-8 flex flex-col gap-6">
         <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground capitalize">
               {formattedDate}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">
               Bem-vindo de volta
            </h1>
         </div>
         <Card className="max-w-sm">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 text-base">
                  <HeartPulse className="size-4 text-primary" />
                  Saúde
               </CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground">
                  {medicines.length === 0
                     ? 'Nenhum medicamento registado.'
                     : `${medicines.length} medicamento${medicines.length > 1 ? 's' : ''} registado${medicines.length > 1 ? 's' : ''}.`}
               </p>
            </CardContent>
         </Card>
      </Container>
   )
}

export default PageHome
