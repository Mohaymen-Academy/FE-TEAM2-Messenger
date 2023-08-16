// import { AnimatedButton, Paragraph } from "@/components/ui";
// import React, { useState, useRef, useEffect } from "react";
// import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";


// interface AudioProps {
//   src : string
// }

// const Audio: React.FC<AudioProps> = ({src}) => {
//   // state
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [duration, setDuration] = useState<number>(0);
//   const [currentTime, setCurrentTime] = useState<number>(0);

//   // references
//   const audioPlayer = useRef<HTMLAudioElement>(null); // reference our audio component
//   const progressBar = useRef<HTMLInputElement>(null); // reference our progress bar
//   const animationRef = useRef<number | null>(null); // reference the animation

//   useEffect(() => {
//     if (audioPlayer.current) {
//       const seconds = Math.floor(audioPlayer.current.duration);
//       setDuration(seconds);
//       if (progressBar.current) {
//         progressBar.current.max = String(seconds);
//       }
//     }
//   }, [
//     audioPlayer?.current?.onloadedmetadata,
//     audioPlayer?.current?.readyState,
//   ]);

//   const calculateTime = (secs: number): string => {
//     const minutes = Math.floor(secs / 60);
//     const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     const seconds = Math.floor(secs % 60);
//     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     return `${returnedMinutes}:${returnedSeconds}`;
//   };

//   const togglePlayPause = () => {
//     const prevValue = isPlaying;
//     setIsPlaying(!prevValue);
//     if (!prevValue && audioPlayer.current) {
//       audioPlayer.current.play();
//       animationRef.current = requestAnimationFrame(whilePlaying);
//     } else {
//       if (audioPlayer.current) {
//         audioPlayer.current.pause();
//         if (animationRef.current) {
//           cancelAnimationFrame(animationRef.current);
//         }
//       }
//     }
//   };

//   const whilePlaying = () => {
//     if (audioPlayer.current && progressBar.current) {
//       progressBar.current.value = audioPlayer.current.currentTime;
//       changePlayerCurrentTime();
//       animationRef.current = requestAnimationFrame(whilePlaying);
//     }
//   };

//   const changeRange = () => {
//     if (audioPlayer.current && progressBar.current) {
//       audioPlayer.current.currentTime = parseFloat(progressBar.current.value);
//       changePlayerCurrentTime();
//     }
//   };

//   const changePlayerCurrentTime = () => {
//     if (progressBar.current && duration) {
//       progressBar.current.style.setProperty(
//         "--seek-before-width",
//         `${(progressBar.current.value / duration) * 100}%`
//       );
//       setCurrentTime(parseFloat(progressBar.current.value));
//     }
//   };

//   return (
//     <div className="w-full flex items-center gap-2">
//       <div>
//         <audio
//           ref={audioPlayer}
//           src={src}
//           preload="metadata"
//         ></audio>

//         <button className="rounded-full flex justify-center items-center">
//           <AnimatedButton
//             className="rounded-full w-12 h-12 dark:bg-slate-600 dark:hover:!bg-slate-800 bg-blue-500 hover:!bg-blue-400 "
//             onClick={togglePlayPause}
//             FirstIcon={FaPlay}
//             size={20}
//             SecondIcon={FaPause}
//             isActive={isPlaying}
//           />
//         </button>

        
//       </div>

//       <div className="flex flex-col-reverse gap-1">
//         {!isPlaying ? (
//           <div>
//             <Paragraph size={"xs"}>Shadmehr - Chera Too Jangi</Paragraph>
//             <div className="">
//               {duration && !isNaN(duration) && calculateTime(duration)}
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col">
//             <Paragraph size={"xs"}>Shadmehr - Chera Too Jangi</Paragraph>
//             <input
//               type="range"
//               className="cursor-pointer h-1 p-1"
//               defaultValue="0"
//               ref={progressBar}
//               onChange={changeRange}
//             />
//             <div className="w-10">{calculateTime(currentTime)}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Audio;
























import { AnimatedButton, Paragraph } from "@/components/ui";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";

interface AudioProps {
  src: string;
}

const Audio: React.FC<AudioProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showInputRange, setShowInputRange] = useState<boolean>(false); // Initially hidden
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | null>(null);


  useEffect(() => {
    if (audioPlayer.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      if (progressBar.current) {
        progressBar.current.max = String(seconds);
      }
    }
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue && audioPlayer.current) {
      audioPlayer.current.play();
      setShowInputRange(true); 
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      if (audioPlayer.current) {
        audioPlayer.current.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    }
  };

    const stopMusic = () => {
      audioPlayer.current?.pause();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setShowInputRange(false);
      setIsPlaying(false);
      setCurrentTime(0);
      audioPlayer.current.currentTime = 0;
    };

  const whilePlaying = () => {
    if (audioPlayer.current && progressBar.current) {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      audioPlayer.current.currentTime = parseFloat(progressBar.current.value);
      changePlayerCurrentTime();
    }
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current && duration) {
      progressBar.current.style.setProperty(
        "--seek-before-width",
        `${(progressBar.current.value / duration) * 100}%`
      );
      setCurrentTime(parseFloat(progressBar.current.value));
    }
  };

  return (
    <div className="w-full flex items-center gap-2">
      <div>
        <audio
          ref={audioPlayer}
          src={src}
          preload="metadata"
        ></audio>

        <AnimatedButton
          className="rounded-full flex justify-center items-center relative w-12 h-12 dark:bg-slate-600 dark:hover:!bg-slate-800 bg-slate-500 hover:!bg-slate-600 "
          onClick={togglePlayPause}
          FirstIcon={FaPlay}
          size={20}
          SecondIcon={FaPause}
          isActive={isPlaying}
        />

        <button
          className="rounded-full absolute bottom-9 right-4"
          onClick={stopMusic}
        >
          <FaStop className="text-red-500 rounded-full" size={10} />
        </button>
      </div>

      <div className="flex flex-col-reverse gap-1">
        <div>
          <Paragraph size="xs">Shadmehr - Chera Too Jangi</Paragraph>

          
          {!showInputRange && (
            <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
          )}

        
          {showInputRange && (
            <div className="flex flex-col">
              <input
                type="range"
                className="cursor-pointer h-1 p-1"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
              <div className="w-10">{calculateTime(currentTime)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Audio;




















































// import { AnimatedButton, Paragraph } from "@/components/ui";
// import React, { useState, useRef, useEffect } from "react";
// import { FaPlay, FaStop } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";

// interface AudioProps {
//   src: string;
// }

// const Audio: React.FC<AudioProps> = ({ src }) => {
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [showInputRange, setShowInputRange] = useState<boolean>(false); // Initially hidden
//   const [duration, setDuration] = useState<number>(0);
//   const [currentTime, setCurrentTime] = useState<number>(0);

//   const audioPlayer = useRef<HTMLAudioElement>(null);
//   const progressBar = useRef<HTMLInputElement>(null);
//   const animationRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (audioPlayer.current) {
//       const seconds = Math.floor(audioPlayer.current.duration);
//       setDuration(seconds);
//       if (progressBar.current) {
//         progressBar.current.max = String(seconds);
//       }
//     }
//   }, [
//     audioPlayer?.current?.onloadedmetadata,
//     audioPlayer?.current?.readyState,
//   ]);

//   const calculateTime = (secs: number): string => {
//     const minutes = Math.floor(secs / 60);
//     const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     const seconds = Math.floor(secs % 60);
//     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     return `${returnedMinutes}:${returnedSeconds}`;
//   };

//   const playMusic = () => {
//     audioPlayer.current?.play();
//     setShowInputRange(true);
//     setIsPlaying(true);
//     animationRef.current = requestAnimationFrame(whilePlaying);
//   };

//   const stopMusic = () => {
//     audioPlayer.current?.pause();
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
//     setShowInputRange(false);
//     setIsPlaying(false);
//     setCurrentTime(0);
//     audioPlayer.current.currentTime = 0;
//   };

//   const togglePlayPause = () => {
//     if (!isPlaying) {
//       playMusic();
//     } else {
//       stopMusic();
//     }
//   };

//   const whilePlaying = () => {
//     if (audioPlayer.current && progressBar.current) {
//       progressBar.current.value = audioPlayer.current.currentTime;
//       changePlayerCurrentTime();
//       animationRef.current = requestAnimationFrame(whilePlaying);
//     }
//   };

//   const changeRange = () => {
//     if (audioPlayer.current && progressBar.current) {
//       audioPlayer.current.currentTime = parseFloat(progressBar.current.value);
//       changePlayerCurrentTime();
//     }
//   };

//   const changePlayerCurrentTime = () => {
//     if (progressBar.current && duration) {
//       progressBar.current.style.setProperty(
//         "--seek-before-width",
//         `${(progressBar.current.value / duration) * 100}%`
//       );
//       setCurrentTime(parseFloat(progressBar.current.value));
//     }
//   };

//   return (
//     <div className="w-full flex items-center gap-2">
//       <div>
//         <audio ref={audioPlayer} src={src} preload="metadata"></audio>

//         <button className="rounded-full flex justify-center items-center">
//           {/* <AnimatedButton
//             className="rounded-full w-12 h-12 dark:bg-slate-600 dark:hover:!bg-slate-800 bg-blue-500 hover:!bg-blue-400 "
//             onClick={togglePlayPause}
//             FirstIcon={isPlaying ? FaPause : FaPlay}
//             size={20}
//             isActive={isPlaying}
//           /> */}

//           <AnimatedButton
//             className="rounded-full w-12 h-12 dark:bg-slate-600 dark:hover:!bg-slate-800 bg-blue-500 hover:!bg-blue-400 "
//             onClick={togglePlayPause}
//             FirstIcon={FaPlay}
//             size={20}
//             SecondIcon={FaPause}
//             isActive={isPlaying}
//           />
//         </button>

//         {/* Add Stop button */}
//         <button
//           className="rounded-full w-12 h-12 bg-red-500 hover:bg-red-400"
//           onClick={stopMusic}
//         >
//           <FaStop size={20} />
//         </button>
//       </div>

//       <div className="flex flex-col-reverse gap-1">
//         <div>
//           <Paragraph size="xs">Shadmehr - Chera Too Jangi</Paragraph>

//           {/* Conditionally show the duration */}
//           {!showInputRange && (
//             <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
//           )}

//           {/* Conditionally show the input */}
//           {showInputRange && (
//             <div className="flex flex-col">
//               <input
//                 type="range"
//                 className="cursor-pointer h-1 p-1"
//                 defaultValue="0"
//                 ref={progressBar}
//                 onChange={changeRange}
//               />
//               <div className="w-10">{calculateTime(currentTime)}</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Audio;

