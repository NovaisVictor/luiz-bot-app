import { PixInfinit } from '@/components/pix-infinit'
import SignalComponent from './signal'

export default function Aviator() {
  return (
    <div className="">
      <div className="w-screen h-screen flex flex-col px-10 gap-12">
        <PixInfinit />
        <div className="w-11/12">
          <SignalComponent />
        </div>
        <div className="h-full">
          <iframe
            className="h-full w-11/12"
            // style="height: 600px; border-radius: 25px; box-shadow: 0 0 31px -4px black;  border-width: 1px;"
            src="https://go.aff.sortenabet.com/tf9esqb9?utm_campaign=app&utm_content=luiz"
          />
        </div>
      </div>
    </div>
  )
}
