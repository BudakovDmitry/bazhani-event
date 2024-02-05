'use client'

import * as React from "react";
import Modal from './Modal'

const Footer = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <footer className="footer">
            <div className="footer__container container">
                <Modal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} />
                <div className="footer__info">
                    <button className="footer__info_button">Правила і умови</button>
                    <button className="footer__info_button">Правила повернення грошових коштів</button>
                    <button className="footer__info_button">Контактна інформація</button>
                </div>
                <a href="https://budakovdmitry.github.io/my-site-portfolio/" target='_blank' className="footer__link">Created by Budakov Dmytro</a>
            </div>
        </footer>
    )
}

export default Footer;