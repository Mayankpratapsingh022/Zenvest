import Card from "../LottiePlayer/page";

export default function Tag(){
    return(
        <>
        <div className="bg-gradient-to-r from-[#20203a] to-[#1b1b35] dark:text-gray-800">

        <Card  src='herom' css='w-72 h-72' size='flex justify-center items-center' loop={true} speed={1} />
	
		<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<p className="px-8 mt-8 mb-12 text-lg">Unlock Instant Cash from Your Investments with Hassle-Free Loans and Flexible Repayment Options!</p>
	</div>
</div>
        
        </>
    )
}