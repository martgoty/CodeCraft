import styles from './Empty.module.scss'

function Empty({imgURL, text1, text2}) {
    return (
        <div className={"d-flex flex-column align-center justify-center mb-35 " + styles.empty}>
            <img
                width={48}
                height={48}
                src={imgURL}
                alt="Cмайлик"
            />
            <p className='mb-10'><strong>{text1}</strong></p>
            <p><em>{text2}</em></p>

        </div>
    )
}

export default Empty