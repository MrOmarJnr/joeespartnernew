
import NgicLoading from "@/components/htmlComponents/ngic_loading";

export default function Loading() {
    return (
        <section>
            <div className="container">
                <div className="w-full min-h-screen flex justify-center items-center">
                    <NgicLoading/>
                </div>
            </div>
        </section>
    );
}