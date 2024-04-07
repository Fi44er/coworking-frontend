import Slider from '../../slider/Slider'
import style from './BlockSpace.module.scss'
import mail from '/src/assets/icon/free-icon-email-11111620.png'
import time from '/src/assets/icon/free-icon-time-4117983.png'
import location from '/src/assets/icon/free-icon-location-11559879.png'

const images = [
    '/src/assets/photo_5334554922043165784_y.jpg',
    '/src/assets/photo_5400218654102113532_y.jpg',
    '/src/assets/photo_5400218654102113537_y.jpg',
    '/src/assets/photo_5400218654102113540_y.jpg',
    '/src/assets/photo_5400218654102113542_y.jpg'
]
export const BlockSpace = () => {
    return (
        <div className={style.blockSpace}>
            <div className={style.spaceSlider}>
                <Slider images={images} />
            </div>
            <div className={style.spaceInfoBlock}>
                <h2>Помещение #1</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi impedit? Asperiores provident libero rem explicabo molestiae magnam, reiciendis laborum architecto exercitationem deleniti reprehenderit consectetur distinctio nostrum? Repudiandae, earum fuga.</p>
                <div className={style.plit}>
                    <img src={mail} alt="mail" />
                    <p>test@mail.ru</p>
                </div>
                <div className={style.plit}>
                    <img src={time} alt="mail" />
                    <p>Ежедневно с 9:00 до 18:00</p>
                </div>
                <div className={style.plit}>
                    <img src={location} alt="mail" />
                    <p>Тихорецкий пр-т., д. 17А</p>
                </div>
                <button>Забронировать</button>
            </div>
        </div>
    )
}