import { Card, CardContent } from '@/components/ui/card'

interface MedicineMonthlySummaryProps {
   total: number
   daysWithDose: number
   consecutiveStreak: number
   daysInMonth: number
   unit: string
}

function StatItem({ label, value }: { label: string; value: string }) {
   return (
      <div className="flex flex-col gap-0.5 items-center">
         <span className="text-xs text-muted-foreground">{label}</span>
         <span className="text-sm font-semibold">{value}</span>
      </div>
   )
}

export function MedicineMonthlySummary({
   total,
   daysWithDose,
   consecutiveStreak,
   daysInMonth,
   unit,
}: MedicineMonthlySummaryProps) {
   const averageConsuming =
      daysInMonth > 0 ? Number((total / daysInMonth).toFixed(2)) : 0
   return (
      <Card>
         <CardContent className="flex justify-around gap-6 py-1">
            <StatItem label="Total" value={`${total} ${unit}`} />
            <StatItem
               label="Dias Utilizados"
               value={`${daysWithDose} / ${daysInMonth}`}
            />
            <StatItem label="Sequência" value={`${consecutiveStreak} dias`} />
            <StatItem
               label={`Média`}
               value={`${averageConsuming.toFixed(1)} ${unit}/dia`}
            />
         </CardContent>
      </Card>
   )
}
