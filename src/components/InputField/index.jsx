import styles from './InputField.module.scss'

export function InputField({ name, register, option, className = '', type, placeholder, errors }) {
    return (
        <div>
            <input
                {...register(name, option)}
                className={className}
                type={type}
                placeholder={placeholder}
                style={{ borderColor: errors && '#D62828'}}
            />
            <div className={`d-flex flex-row align-center justify-center mb-5 ${styles.warning}`}>
                {errors && 
                    <div className='d-flex flex-row'>
                        <img src="/img/warning.svg" alt="Предупреждение" />
                        <p>{`${errors.message}`}</p>
                    </div>
                }
            </div>
        </div>

    )
}