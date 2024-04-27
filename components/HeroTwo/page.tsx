'use client'


import {useRive, useStateMachineInput} from '@rive-app/react-canvas'


export default function HeroTwo(){
    const {rive,RiveComponent} = useRive({
        src:'wave.riv',
        stateMachines:'State Machine 1',
        artboard:'compose',
        autoplay:true,
        onLoadError: () => console.log('ERROR loading animation'),
        onLoad: () => console.log('loaded animation')
    })
return(
    <main className='h-96 w-full  '>
<section className="">
	<div className="container  mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-2 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Meet your 
			<span className="dark:text-[#17f1c0]"> Financial </span> needs
		</h1>
		<p className="px-1 mt-8 mb-12 text-lg">Safeguard your investment by opting for quick capital against securities. Your units will remain yours, and you’ll keep on earning from them during your tenure for an instant loan for low credit score. So you can get the funds you need for capital or emergencies without having to redeem your securities.</p>
	
     
	</div>
</section>

<RiveComponent className='w-full h-full  '/>

    </main>
)


}