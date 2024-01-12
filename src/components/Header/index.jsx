import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

export function Header({ isAuth = false}) {
    return (
        <div className={`d-flex flex-row justify-between align-center ${styles.header}`}>

            <div className="d-flex align-center cu-p">
                <img
                    width={60}
                    height={60}
                    src="/img/logo.svg"
                    alt="Логотип"
                />
                <div className="ml-5">
                    <h3 className="text-uppercase">CodeCraft</h3>
                    <p><em>Онлайн-школа</em></p>
                </div>
            </div>

            <div className="d-flex flex-row">
                {
                    isAuth 
                    ? <>
                        <button className={styles.menuButton}>Занятия</button>
                        <button className={styles.menuButton}>Курсы</button>
                            
                        <button className={`d-flex flex-row align-center justify-start ${styles.menuButton} ${styles.menuButtonRound} ${styles.dropMenuButton}`}>
                            <img 
                                className='mr-5'
                                width={32} 
                                height={32} 
                                src="img/user.svg" 
                                alt="Иконка пользователя"
                            />
                            <span>dmakddmdaddad</span> 
                            <div className={styles.dropMenu}>
                                <button className='d-flex align-center justify-center'>
                                    <img
                                        className='mr-5'
                                        src='img/user.svg' 
                                        alt="Иконка профиля"
                                    />
                                    Профиль
                                </button>
                                <Link to='/register'>
                                    <button className={`d-flex align-center justify-center ${styles.roundButton}`}>
                                        <img
                                            className='mr-5'
                                            src='img/exit.svg'
                                            alt="Иконка профиля"
                                        />
                                        Выйти
                                    </button>
                                </Link>
                            </div>
                        </button>
                    </>
                    : <>
                            <button className={styles.menuButton}>Регистрация</button>
                            <button className={`${styles.menuButton} ${styles.menuButtonRound}`}>Вход</button>

                    </>
                }

            </div>

            
        </div>
    )
}