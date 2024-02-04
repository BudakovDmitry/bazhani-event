'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import Ticket from "@/public/ticket.png";
import ArrowDown from "@/public/arrow_down.png";

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
                <a href="#" className="payment_section__link">
                    <Image src={Ticket} alt="Ticket" className='payment_section__link_ticket' priority={true}
                           unoptimized/>
                </a>
            </div>
        </section>
    )
}

export default PaymentSection;