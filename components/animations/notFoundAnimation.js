import dynamic from "next/dynamic";
import notFoundAnimation from '@/public/lottie/not_found.json';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFoundAnimation() {
    return (
        <Lottie animationData={notFoundAnimation} loop={true} className="w-2/3" />
    );
}
