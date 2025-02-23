import Image from "next/image";
export default function NgicLoading() {

    return (
        <div className={`relative`}>
            <Image
            className={`animate-bounce`}
            src='/home/loader.svg'
            width={550}
            height={550}
            alt="animation"
            />
        </div>
    );
}
