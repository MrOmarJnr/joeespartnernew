'use client'

import {TypeAnimation} from "react-type-animation";

export default function CustomTypingAnimation({seq, clsName, wrap, loop, speed}) {
    return (
        <TypeAnimation
            sequence={seq}
            repeat={loop ? loop : 0}
            cursor={false}
            className={clsName}
            speed={speed}
            wrapper={wrap? wrap : 'span'}
        />
    );
}