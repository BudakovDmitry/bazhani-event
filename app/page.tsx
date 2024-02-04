import './styles/main.scss'
import MainSection from "@/app/components/MainSection";
import CashParty from "@/app/components/CashParty";
import PaymentSection from "@/app/components/PaymentSection";

export default function Home() {
  return (
    <main>
        <MainSection />
        <CashParty />
        <PaymentSection />
    </main>
  );
}
