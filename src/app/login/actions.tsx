'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  console.log(formData.get('email'))
  const email = formData.get('email')?.toString()
  const cookieStore = await cookies()
  cookieStore.set('token', email!)
  redirect(`/`)
}
