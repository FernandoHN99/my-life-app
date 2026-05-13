export const MEDICINE_KEY = 'medicines'

export interface Dose {
   usedDate: Date
   amount: number
}

export interface Medicine {
   id: string
   name: string
   doses: Dose[]
   unit: string
   basedAmounts: number[]
}
