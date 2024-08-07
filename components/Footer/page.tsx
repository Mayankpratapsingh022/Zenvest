import Link from 'next/link'
import Image from 'next/image'
export default function Footer(){
    return(
        <>
        <footer className="bg-emerald-500 ">
  <div className="mx-auto max-w-screen-xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 ">
    <div className="mx-auto max-w-md">
      <strong className="block text-center text-xl font-semibold text-gray-50 sm:text-3xl">
   Receive exclusive Insights
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div className="flex justify-center items-center gap-5 text-center">
      <div className=" flex flex-col justify-center items-center">
        <p className="mt-4 text-center text-zinc-50 lg:text-center lg:text-lg">
        Receive exclusive Financial Insites  and head start your grand  FIRE 🔥Journey (Financial Independence, Retire Early) with like minded community 📈 supercharging your decisions with their insites
        </p>
        <div className='flex flex-row text-md'>
        <Link href="/policy">

          <p  className="underline p-1">Privacy Policy</p>
          </Link>

          <Link href="/Terms">

<p  className="underline p-1 ">Terms and Conditions</p>
</Link>
        </div>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="https://www.facebook.com/people/Zenvest-Finance/61558586353771/?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="https://www.instagram.com/zen_vestfinance/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>

          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="https://www.linkedin.com/company/zenvest-finance"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

          
<svg  className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
<g>
	
	<path id="Path_2520"  d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"/>

</g>















</svg>

          </a>

          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="https://discord.com/invite/uqvJRdjJ"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>


            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
<g>
	<path d="M20.317,4.37c-1.53-0.702-3.17-1.219-4.885-1.515c-0.031-0.006-0.062,0.009-0.079,0.037   c-0.211,0.375-0.445,0.865-0.608,1.249c-1.845-0.276-3.68-0.276-5.487,0C9.095,3.748,8.852,3.267,8.641,2.892   C8.624,2.864,8.593,2.85,8.562,2.855C6.848,3.15,5.208,3.667,3.677,4.37C3.664,4.375,3.652,4.385,3.645,4.397   c-3.111,4.648-3.964,9.182-3.546,13.66c0.002,0.022,0.014,0.043,0.031,0.056c2.053,1.508,4.041,2.423,5.993,3.029   c0.031,0.01,0.064-0.002,0.084-0.028c0.462-0.63,0.873-1.295,1.226-1.994c0.021-0.041,0.001-0.09-0.042-0.106   c-0.653-0.248-1.274-0.55-1.872-0.892c-0.047-0.028-0.051-0.095-0.008-0.128c0.126-0.094,0.252-0.192,0.372-0.291   c0.022-0.018,0.052-0.022,0.078-0.01c3.928,1.793,8.18,1.793,12.061,0c0.026-0.012,0.056-0.009,0.079,0.01   c0.12,0.099,0.246,0.198,0.373,0.292c0.044,0.032,0.041,0.1-0.007,0.128c-0.598,0.349-1.219,0.645-1.873,0.891   c-0.043,0.016-0.061,0.066-0.041,0.107c0.36,0.698,0.772,1.363,1.225,1.993c0.019,0.027,0.053,0.038,0.084,0.029   c1.961-0.607,3.95-1.522,6.002-3.029c0.018-0.013,0.029-0.033,0.031-0.055c0.5-5.177-0.838-9.674-3.548-13.66   C20.342,4.385,20.33,4.375,20.317,4.37z M8.02,15.331c-1.183,0-2.157-1.086-2.157-2.419s0.955-2.419,2.157-2.419   c1.211,0,2.176,1.095,2.157,2.419C10.177,14.246,9.221,15.331,8.02,15.331z M15.995,15.331c-1.182,0-2.157-1.086-2.157-2.419   s0.955-2.419,2.157-2.419c1.211,0,2.176,1.095,2.157,2.419C18.152,14.246,17.206,15.331,15.995,15.331z"/>
</g>















</svg>

          </a>


          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="https://www.reddit.com/r/Zenvest_Finance/?share_id=tIufT1fm5b8q4__KYH8XG"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
<g>
	<path d="M9.25,14.5C8.561,14.5,8,13.939,8,13.25C8,12.561,8.561,12,9.25,12c0.689,0,1.25,0.561,1.25,1.25   C10.5,13.939,9.939,14.5,9.25,14.5z"/>
	<path d="M14.97,16.095c0.127,0.127,0.126,0.332,0,0.458c-0.853,0.852-2.488,0.918-2.969,0.918c-0.481,0-2.116-0.066-2.968-0.918   c-0.127-0.127-0.127-0.331,0-0.458c0.127-0.127,0.331-0.127,0.458,0c0.538,0.538,1.688,0.728,2.51,0.728   c0.822,0,1.972-0.191,2.511-0.729C14.639,15.968,14.844,15.968,14.97,16.095z"/>
	<path d="M16,13.25c0,0.69-0.561,1.25-1.25,1.25c-0.69,0-1.25-0.561-1.25-1.25c0-0.689,0.561-1.25,1.25-1.25   C15.439,12,16,12.561,16,13.25z"/>
	<path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M18.957,13.599   c0.027,0.173,0.041,0.348,0.041,0.526c0,2.692-3.134,4.875-7,4.875c-3.866,0-7-2.183-7-4.875c0-0.179,0.015-0.355,0.042-0.529   C4.431,13.322,4.006,12.711,4.006,12c0-0.967,0.783-1.75,1.75-1.75c0.47,0,0.896,0.186,1.21,0.488   c1.212-0.873,2.886-1.431,4.749-1.483l0.89-4.185c0.017-0.081,0.066-0.152,0.135-0.197c0.069-0.045,0.154-0.061,0.235-0.044   l2.908,0.618C16.088,5.036,16.509,4.75,17,4.75c0.69,0,1.25,0.56,1.25,1.25S17.69,7.25,17,7.25c-0.67,0-1.213-0.529-1.244-1.191   l-2.604-0.554l-0.797,3.75c1.836,0.064,3.484,0.622,4.68,1.485c0.315-0.303,0.742-0.491,1.214-0.491c0.967,0,1.75,0.783,1.75,1.75   C19.998,12.714,19.57,13.327,18.957,13.599z"/>
</g>















</svg>

          </a>

          
          <a
            className="text-gray-50 transition hover:text-gray-700/75"
            href="https://www.whatsapp.com/channel/0029Vac1eLP3GJOuUKkxw42e"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>


            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
<g id="WA_Logo">
	<g>
		<path  d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"/>
	</g>
</g>















</svg>


          </a>
        </div>
      </div>

    </div>
    <div className='w-full flex items-center justify-center p-5'>
    <Image
      src="/commingsoon.png"
      width={200}
      height={200}
      alt="Google Play comming soon"
    />
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8">
      <p className='flex justify-center items-center'>Crafted with ❤️ by Mayank Pratap Singh </p>
      <p className="text-center text-xs/relaxed text-gray-50">
        © Zenvest 2024. All rights reserved.

        <br />

{/*      
        <a href="https://www.instagram.com/mayankpratapsingh_022/" target="_blank" className="text-gray-50 underline transition hover:text-gray-700/75">
        Front-End Done by Mayank
        </a> */}
    
      </p>

    </div>
  </div>
</footer>
        
        </>
    )
}