import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginAction } from './actions'
import Image from 'next/image'
import { PixInfinit } from '@/components/pix-infinit'

export default function Login() {
  return (
    <div className="h-screen max-w-screen overflow-hidden flex justify-center items-center flex-col gap-12 px-8">
      <div className="fixed top-10">
        <PixInfinit />
      </div>
      <Image src={'/LOGO.png'} width={200} height={80} alt="" />

      <form action={loginAction} className="space-y-4">
        <p>Para acessar sua conta, digite seu e-mail abaixo:</p>
        <Input
          name="email"
          type="email"
          required
          placeholder="Digite o seu Email"
          className="border border-primary"
        />
        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  )
}
