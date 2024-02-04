import Image from "next/image";
import MainPhoto from "@/public/main_photo.png";

const MainSection = () => {
    return (
        <section className="main_section">
            <div className="main_section__container container">
                <Image src={MainPhoto} alt="Main photo" className='main_section__photo' priority={true} unoptimized/>
                <div className="main_section__title_container">
                    <h1 className="main_section__title">Bazhani</h1>
                    <p className='main_section__subtitle'>Event</p>
                </div>
            </div>
        </section>
    )
}

export default MainSection;