'use client'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
// animation name values = [fadeInUp, fadeInBottom, fadeInLeft, fadeInRight, scaleUp]
export default function Reveal({ children, className, name, delayTime}) {
    const fadeInUpAnimation = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };
    const fadeInBottomAnimation = {
        initial: {
            opacity: 0,
            y: -100,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    };
    const fadeInLeftAnimation = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
        }
    };
    const fadeInRightAnimation = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
        }
    };
    const scaleUpAnimation = {
        initial: {
            opacity: 0,
            scale: 0.3,
        },
        animate: {
            opacity: 1,
            scale: 1,
        }
    }
    const animationVariants = name === 'fadeInLeft' ? fadeInLeftAnimation : name === 'fadeInRight' ? fadeInRightAnimation : name === 'fadeInBottom' ? fadeInBottomAnimation : name === 'scaleUp' ? scaleUpAnimation : fadeInUpAnimation
    const [ref, isInView] = useInView({
        threshold: 0.2,
        rootMargin: "0% 0% 0% 0%",
        triggerOnce: true
    });
    return (
        <motion.div
            ref={ref}
            variants={animationVariants}
            initial="initial"
            animate={isInView? "animate" : "initial"}
            transition={
                {
                    duration: 0.8,
                    delay: delayTime ? delayTime : 0,
                }
            }
            className={`${className ? className : ''}`}
        >{ children }</motion.div>
    )
}