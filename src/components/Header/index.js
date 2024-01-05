import styles from './Header.module.scss'

function Header() {
    return (
        <div className={`d-flex flex-row justify-between align-center ${styles.header}`}>

            <div className="d-flex align-center cu-p">
                <img
                    width={62}
                    height={62}
                    src="/img/logo.svg"
                    alt="Логотип"
                />
                <div className="ml-5">
                    <h3 className="text-uppercase">CodeCraft</h3>
                    <p><em>Онлайн-школа</em></p>
                </div>
            </div>

            <div className="d-flex flex-row">
                <p className={`d-flex align-center justify-center ${styles.link} ${styles.active}`}>Занятия</p>
                <p className={`d-flex align-center justify-center ${styles.link} ${styles.inactive}`}>Курсы</p>
                <div className={`d-flex align-center justify-center ${styles.profile}`}>
                    <img width={32} height={32} src="img/user.svg" alt="Иконка пользователя" />
                    <p className="ml-5">user_1210181231313</p>
                    <div className={styles.dropMenu}>
                        <button className='d-flex align-center justify-center cu-p'>
                            <img 
                                src="img/user.svg" 
                                alt="Иконка профиля" 
                                className='mr-5'
                            />
                            <p>Профиль</p>
                        </button>
                        <button className={`d-flex align-center justify-center cu-p ${styles.lastButton}`}>
                            <img
                                src="img/exit.svg"
                                alt="Иконка профиля"
                                className='mr-5'
                            />
                            <p>Выйти</p>
                        </button>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Header