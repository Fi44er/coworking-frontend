import style from './Header.module.scss'
import { Link } from 'react-scroll'

const Header = () => {
    return (
    <header className={style.header}>
        <div className={style.logo}>
            <h1>ОрГму</h1>
        </div>
        <nav className={style.headerNav}>
            <ul>
                <li><Link to='about' smooth={true} duration={3}>О нас</Link></li>
                <li><Link to='advantages' smooth={true} duration={3}>Преимущества</Link></li>
                <li><Link to='spaces' smooth={true} duration={3}>Пространства</Link></li>
                <li><Link to='booking' smooth={true} duration={3}>Бронирование</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header