import { Balls } from '@/components/Balls'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-brBlack text-brLime text-2xl lg:text-7xl font-bold overflow-hidden flex p-10 relative justify-center items-center">
      <div className='flex flex-col z-10 pointer-events-none mix-blend-difference'>
        <div className="text-brRed hover:italic">
          North East Elite Padel
        </div>

        <div className="text-brLime hover:font-black">
          North East Elite Padel
        </div>

        <div className="text-brGray hover:italic">
          North East Elite Padel
        </div>
      </div>
      <div className='absolute top-0 left-0 w-screen h-screen z-0 bg-gradient-to-tr from-brBlack  to-gray-800'><Balls className={'w-full h-full'}/></div>
    </main>
  );
}
