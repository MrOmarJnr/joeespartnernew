import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import NotFoundAnimation from "@/components/animations/notFoundAnimation";
import Link from "next/link";
import {pagePath} from "@/components/navigation/pagePath";
import NotFoundComponent from "@/components/htmlComponents/not-found-component";


function NotFound() {
    return (
        <>
            <Header/>
            <main>
                <NotFoundComponent/>
            </main>
            <Footer/>
        </>
    );
}

export default NotFound;