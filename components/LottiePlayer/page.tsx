"use client"
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

interface CardProps {

  src: string,
   loop:boolean,
   css:string,
   speed:number,
   size:string,
}

const Card: React.FC<CardProps> = ({ src,loop,css,speed,size}: CardProps) => {
    return(
        <>
   <div className={`${size}`}>
  <div className={`${css}`} >
 
      <DotLottiePlayer
        src={`/${src}.lottie`}
        autoplay
        loop={loop}
        speed={speed}
        
   
      >
      </DotLottiePlayer>

   
   </div>
   </div>
</>
    )
}

export default Card;