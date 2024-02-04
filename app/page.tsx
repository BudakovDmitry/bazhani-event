import './styles/main.scss'
import MainSection from "@/app/components/MainSection";
import CashParty from "@/app/components/CashParty";
import PaymentSection from "@/app/components/PaymentSection";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <MainSection/>
                <CashParty/>
                <PaymentSection/>
            </main>
            <Footer/>
        </>
    );
}
