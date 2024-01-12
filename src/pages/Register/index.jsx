import { Link } from "react-router-dom"

import styles from './Register.module.scss'
import { MediaButton } from '../../components/MediaButton'

export function Register() {
    return (
        <div className={`d-flex flex-row ${styles.reg}`}>

            <div className={`d-flex flex-column align-center ${styles.left}`}>
                <h1>Регистрация</h1>
                <form className="d-flex flex-column align-center" action="">
                    <input className="mb-20" type="text" placeholder="Имя" />
                    <input className="mb-20" type="email" placeholder="Почта" />
                    <input className="mb-20" type="password" placeholder="Пароль" />
                    <div className={`d-flex flex-row align-center mb-35 ${styles.checkbox}`}>
                        <input className="mr-10" type="checkbox" />
                        <p>Я принимаю <a href="#">политику безопасности</a> сайта</p>
                    </div>
                    <Link to="/lessons">
                        <button className="button">
                            <p>Регистрация</p>
                            <img
                                width={18}
                                height={18}
                                src="img/arrow.svg"
                                alt="Стрелка вправо"
                                className='ml-5'
                            />
                        </button>
                    </Link>

                    <a href="#">Уже есть аккаунт?</a>
                </form>
            </div>

            <div className={`d-flex flex-column align-center justify-center ${styles.right}`}>
                <MediaButton
                    key={1}
                    imageURL={'/img/media/vk.svg'}
                    text={'Войти через VK'}
                    color={'#385796'}
                />
                <MediaButton
                    key={2}
                    imageURL={'/img/media/google.svg'}
                    text={'Войти через Google'}
                    color={'#4285F4'}
                />
                <MediaButton
                    key={3}
                    imageURL={'/img/media/yandex.svg'}
                    text={'Войти через Yandex'}
                    color={'#FC3F1D'}
                />
            </div>

            <div className={`d-flex align-center justify-center ${styles.decoration}`}>
                <p className='d-flex align-center justify-center'>или</p>
            </div>

        </div>
    )

}