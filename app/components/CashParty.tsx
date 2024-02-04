'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import ListMarker from "@/public/list_marker.png";

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
                <p className='cash_party_section__list_title'>На нашому заході тебе чекає:</p>
                <ul className="cash_party_section__list">
                    <li className="cash_party_section__list_item">
                        <Image src={ListMarker} alt="List marker" className='cash_party_section__list_item_marker'
                               priority={true} unoptimized/>
                        Виступ експерта по грошовим законам (ексклюзивний доступ до унікальних фінансових стратегій)
                    </li>
                    <li className="cash_party_section__list_item">
                        <Image src={ListMarker} alt="List marker" className='cash_party_section__list_item_marker'
                               priority={true} unoptimized/>
                        Інтерактивні локації для швидкого збільшення твого капіталу в розважальному форматі.
                    </li>
                    <li className="cash_party_section__list_item">
                        <Image src={ListMarker} alt="List marker" className='cash_party_section__list_item_marker'
                               priority={true} unoptimized/>
                        Участь в аукціоні від наших спонсорів
                    </li>
                    <li className="cash_party_section__list_item">
                        <Image src={ListMarker} alt="List marker" className='cash_party_section__list_item_marker'
                               priority={true} unoptimized/>
                        Фуршет та ігристе
                    </li>
                    <li className="cash_party_section__list_item">
                        <Image src={ListMarker} alt="List marker" className='cash_party_section__list_item_marker'
                               priority={true} unoptimized/>
                        Фото та відео зйомка
                    </li>
                </ul>
                <p className='cash_party_section__list_description'>Приєднуйтеся до <span className='cash_party_section__list_description_upper'><span className='cash_party_section__list_description_upper cash_party_section__list_description_green'>Cash</span> Party</span>, де ми наповнимо твій ресурс знаннями та емоціями!</p>
            </div>
        </section>
    )
}

export default CashParty;
