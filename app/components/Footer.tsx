'use client'

import * as React from "react";
import ModalContacts from '@/app/components/ModalContacts'
import ModalTerms from '@/app/components/ModalTerms'
import ModalRefund from "@/app/components/ModalRefund";

const Footer = () => {
    const [contactsOpen, setContactsOpen] = React.useState(false);
    const [termsOpen, setTermsOpen] = React.useState(false);
    const [refundOpen, setRefundOpen] = React.useState(false);

    const handleContactsOpen = () => setContactsOpen(true);
    const handleContactsClose = () => setContactsOpen(false);
    const handleTermsOpen = () => setTermsOpen(true);
    const handleTermsClose = () => setTermsOpen(false);
    const handleRefundOpen = () => setRefundOpen(true);
    const handleRefundClose = () => setRefundOpen(false);

    return (
        <footer className="footer">
            <div className="footer__container container">
                <ModalTerms open={termsOpen} handleClose={handleTermsClose} />
                <ModalRefund open={refundOpen} handleClose={handleRefundClose} />
                <ModalContacts open={contactsOpen} handleClose={handleContactsClose} />
                <div className="footer__info">
                    <button onClick={handleTermsOpen} className="footer__info_button">Правила і умови</button>
                    <button onClick={handleRefundOpen} className="footer__info_button">Правила повернення грошових коштів</button>
                    <button onClick={handleContactsOpen} className="footer__info_button">Контактна інформація</button>
                </div>
                <a href="https://budakovdmitry.github.io/my-site-portfolio/" target='_blank' className="footer__link">Created by Budakov Dmytro</a>
            </div>
        </footer>
    )
}

export default Footer;