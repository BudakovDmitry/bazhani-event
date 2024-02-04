import Image from "next/image";
import MainPhoto from "@/public/main_photo.png";
import LaunchCountdown from "@/app/components/LaunchCountDown";

const MainSection = () => {
    return (
        <section className="main_section">
            <div className="main_section__container container">
                <div className="main_section__date">
                    <p className="main_section__date_title">До початку залишилось:</p>
                    <div className="main_section__date_container">
                        <LaunchCountdown days={8}
                                         hours={23}
                                         minutes={55}
                                         seconds={41}
                        />
                    </div>
                </div>
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