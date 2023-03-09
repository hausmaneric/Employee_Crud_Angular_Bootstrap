export interface Employee {
  id: number | null,
  name: string  | undefined ,
  gender: string | null,
  email?:string | null,
  phoneNumber?:number | null,
  contactPreference: string | null,
  dateOfBirth: Date| null,
  department: string | null,
  isActive: boolean | null,
  photoPath?: string | null,
  password?: string | null,
  confirmPassword?: string | null
}
