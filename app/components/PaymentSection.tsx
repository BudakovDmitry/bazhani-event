'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import Ticket from "@/public/ticket.png";
import ArrowDown from "@/public/arrow_down.png";
import VisaLogo from "@/public/visa_logo.svg";
import MastercardLogo from "@/public/mastercard_logo.svg";
import GooglePayLogo from "@/public/google_pay_logo.svg";
import ApplePayLogo from "@/public/apple_pay_logo.svg";

const PaymentSection = () => {
    return (
        <section className="payment_section">
            <div className="payment_section__container container">
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{ease: "easeOut", duration: 1, delay: 3}}
                    viewport={{once: true}}
                    className="payment_section__hint"
                >
                    <span className='payment_section__hint_text'>Щоб придбати, натискай на квиток</span>
                    <Image src={ArrowDown} alt="Arrow down" className='payment_section__hint_icon' priority={true}
                           unoptimized/>
                </motion.div>
                <a href="https://secure.wayforpay.com/button/b0ef35876fc8d" className="payment_section__link">
                    <Image src={Ticket} alt="Ticket" className='payment_section__link_ticket' priority={true}
                           unoptimized/>
                </a>
                <div className="payment_section__payments">
                    <Image src={VisaLogo} alt="Visa" className='payment_section__payments_logo' priority={true}
                           unoptimized/>
                    <Image src={MastercardLogo} alt="Mastercard" className='payment_section__payments_logo' priority={true}
                           unoptimized/>
                    <Image src={GooglePayLogo} alt="Google Pay" className='payment_section__payments_logo' priority={true}
                           unoptimized/>
                    <Image src={ApplePayLogo} alt="Apple Pay" className='payment_section__payments_logo' priority={true}
                           unoptimized/>
                </div>
            </div>
        </section>
    )
}

export default PaymentSection;