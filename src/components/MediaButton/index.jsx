import styles from './MediaButton.module.scss'

export function MediaButton({imageURL, text, color}) {
    return(
        <button style={{ backgroundColor: `${color}`}} className={`d-flex flex-row align-center ${styles.mediaButton}`}>
            <img
                width={18}
                height={18}
                src={imageURL}
                alt="Логотип"
                className='d-flex flex-start'
            />
            <p className='d-flex flex justify-center align-center'>{text}</p>
        </button>
    )
}