import Image from "next/image";
export default function Partners() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24 mt-96 mb-24">
        <h1 className="text-5xl font-bold text-center p-5 py-10">Our Partners</h1>
        <div className="text-center overflow">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center animate-loop-scroll  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <li>
                <Image src="/cams.png" width={100} height={100} alt="cams" />
              </li>
              <li>
                <Image src="/cdsl.png" width={100} height={100} alt="cdsl" />
              </li>
              <li>
                <Image src="/karvy.png" width={100} height={100} alt="karvy" />
              </li>
              <li>
                <Image src="/kfintech.png" width={100} height={100} alt="kfintech" />
              </li>
              <li>
                <Image src="/nsdl.png" width={100} height={100} alt="kfintech" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
