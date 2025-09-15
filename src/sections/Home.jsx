import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { PiHexagonThin } from "react-icons/pi";
import Button from "../components/Button.jsx"
import { words } from "../constants/index.js"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', 
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.inOut'
        },
    )
    })

  return (
    <section id="home" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg1.png" alt="background" />
        </div>

        <div className='hero-layout'>
            {/*LEFT: HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>
                            Turning
                            <span className="slide">
                                <span className="wrapper">
                                {words.map((word) => (
                                   <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img
                                         src={word.imgPath}
                                         alt={word.text}
                                         className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />
                                        <span>{word.text}</span>
                                   </span> 
                                ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into reality</h1>
                        <h1>Let's dream beyond limits</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hey, I'm Donna Princess — a developer who loves bringing ideas to life through code.
                        </p>
                        <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my work"
                        />
                </div>
            </header>
            {/*RIGHT: 3D MODEL */} 
                <div className="flex">
                    {/* <HeroExperience /> */}
                    <img src="/images/donna.png" alt="Donna Princess" className="hero-3d-layout" />
                    
                    <div className="hero-style animate-pulse ">
                        <PiHexagonThin className="xl:w-[105%] w-full h-full min-h-[80vh] blur-md animate-[spin_20s_linear_infinite] " color="#CD7C2E" />
                        
                    </div>
                </div>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Home