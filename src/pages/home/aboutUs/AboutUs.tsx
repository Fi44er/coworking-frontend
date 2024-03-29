import InfoItem from '../../../components/infoItem/InfoItem'
import Slider from '../../../components/slider/Slider'
import style from './AboutUs.module.scss'

const AboutUs = () => {
    const images = [
        '/src/assets/photo_5334554922043165784_y.jpg',
        '/src/assets/photo_5400218654102113532_y.jpg',
        '/src/assets/photo_5400218654102113537_y.jpg',
        '/src/assets/photo_5400218654102113540_y.jpg',
        '/src/assets/photo_5400218654102113542_y.jpg'
    ]
    return (
        <>
            <div className={style.aboutBlock}>
                <div className={style.aboutInfo}>
                    <h1>Места удобных коворкингов</h1>
                    <div className={style.infoItems}>
                        <InfoItem topVal={10} title='помещенрй в коворкинге' />
                        <InfoItem topVal={10} title='помещенрй в коворкинге' />
                        <InfoItem topVal={10} title='помещенрй в коворкинге' />
                    </div>
                    <div className={style.buttonBlock}>
                        <p>Забронируйте помещение прямо сейчас</p>
                        <button>Забронировать</button>
                    </div>
                </div>
                <div className={style.aboutSlider}>
                    <Slider images={images} />
                </div>
            </div>
        </>
    )
}

export default AboutUs