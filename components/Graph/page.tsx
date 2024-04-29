import Card from "../LottiePlayer/page";

export default function GraphAnimaton(){
    return(
        <>
        <div className=" flex  flex-wrap p-5  justify-center items-center gap-20 py-20 m-20"> 
        <div className="border-gray-950 lg:w-2/6 bg-black rounded-xl border  p-4">

        <Card  src='poverty' css='w-96 h-96' size='flex justify-center items-center' loop={true} speed={1} />
        <p className="p-3">
Reaching FIRE transforms savings into investments, akin to breaking the S-curve of poverty with loans on mutual fund investments, leading to a wealth point where money secures a better future.</p>

        </div>


        <div className="border-gray-950  lg:w-2/6 bg-black rounded-xl border  p-4">

        <Card  src='lmsf' css='w-96 h-96' size='flex justify-center items-center' loop={true} speed={1} />
        <p className="p-3">Nurture your financial future! Commit to your investments for compound interest benefits and keep more in your pocket by reducing taxes and avoiding unnecessary fees.</p>
        </div>
        </div>
        </>
    )
}