import Image from 'next/image'
import Herosection from '../components/Herosection'
import img from '@/app/images/MVP1.png'

export default function Home() {
  return (
    <>
      <Herosection title='WELCOME HERE GUYS' imgurl={img}/>
    </>
  )
}
