import Navbar from '@/components/ui/Navbar'
import Section from '@/components/ui/Section'
import VideoSection from '@/components/ui/VideoSection.jsx'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-brBlack text-brLime text-2xl lg:text-7xl font-bold overflow-y-scroll overflow-x-hidden relative parent">
      <Navbar/>
      <VideoSection/>
      <Section index={'5'} title={'Superpamaromic.'}/>
      <Section index={'3'} title={'Panarommic'}/>
      <Section index={'1'} title={'Club'}/>
      <Section index={'4'} title={'Solar Roof'}/>
      <Section index={'2'} title={'Coliseum Roof'}/>
    </main>
  );
}
