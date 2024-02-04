'use client'

import { motion } from 'framer-motion';

const CashParty = () => {
    const numberOfElements = 10;

    return (
        <section className="cash_party_section">
            <div className="container">
                <h2 className="cash_party_section__title"><span
                    className="cash_party_section__title_green">Cash</span> party</h2>
                {Array.from({length: numberOfElements}).map((_, index) => {
                    const randomX = Math.random() * 375;
                    const randomRotation = (Math.random() - 0.5) * 360;

                    return (
                        <motion.div
                            key={index}
                            style={{
                                width: '40px',
                                height: '20px',
                                position: 'absolute',
                                left: randomX,
                                background: `url('https://upload.wikimedia.org/wikipedia/commons/1/1a/USA_100_Dollar_Bill_Series2009_Obverse.png')`,
                                backgroundSize: 'cover',
                                rotate: randomRotation,
                                zIndex: -1
                            }}
                            initial={{y: -100, opacity: 0}}
                            animate={{
                                y: [-30, 300],
                                opacity: [0, 1, 0],
                                transition: {repeat: Infinity, duration: 3, ease: 'linear', delay: index * 0.5}
                            }}
                        ></motion.div>
                    )
                })}
                <h3 className='cash_party_section__title_second'>Запрошуємо тебе на найбажаніший івент року про
                    гроші!</h3>
                <p className='cash_party_section__description'>Приготуйся до неймовірних вражень та розкішних
                    можливостей заробітку.</p>
            </div>
        </section>
    )
}

export default CashParty;
