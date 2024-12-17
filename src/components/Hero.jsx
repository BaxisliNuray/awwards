import { useRef, useState } from "react";

const Hero = () => {
const[hasClicked,setHasClicked]=useState(false);
const [currentIndex,setCurrentIndex]=useState(1);
const[isLoading,setIsLoading]=useState(true);
const[loadedVideos,setLoadedVideos]=useState(0);
const totalVideos=4;

const nextVideoRef=useRef(null);

const handleVideoLoaded=()=>{
    setLoadedVideos((prev)=>prev+1)
}
const upcomingVideoIndex=(currentIndex % totalVideos)+1;

const handleMiniVdClick=()=>{
setHasClicked(true);
setCurrentIndex(upcomingVideoIndex);
}
const getVideoSrc=(index)=>`videos/hero-${index}.mp4`;


    return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="realtive z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75 ">
       <div>
        <div  className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in
            hover:scale-100 hover:opacity-100  ">
<video id="current-video" 
className="size-64 origin-center scale-150 object-center object-cover " 
ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)} loop muted
onLoadedData={handleVideoLoaded}/>

            </div>

        </div>
        <video id="next-video"
        className="absolute-center invisible absolute z-20 size-64 object-cover object-center "
        ref={nextVideoRef} src={getVideoSrc(currentIndex)} loop muted/>
        <video className="absolute left-0 top-0 size-full object-cover objdect-center"
        src={getVideoSrc(currentIndex===totalVideos-1 ? 1: currentIndex)} autoPlay loop muted 
        onLoadedData={handleVideoLoaded}/>
        </div> 
        <h1 className=" special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">g<b>a</b>ming</h1>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 ">redefi<b>n</b>e</h1>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Hero
