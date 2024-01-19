import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Register.module.scss'
import { MediaButton, InputField } from '../../components'
import { selectIsAuth, fetchRegister } from '../../redux/slices/authSlice'

export function Register() {
    const { error } = useSelector(state => state.auth)
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
 
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: 'Аркадий',
            email: 'email@email.com',
            password: '12345678',
        },
        mode: 'onChange',
    })

    const onSubmit = (data) => {
        dispatch(fetchRegister(data))
    }

    const handleRequestErrors = () => {
        if(error){
            alert(error)
        }
    }

    if(isAuth){
        return <Navigate to='/lessons' />
    }

    return (
        
        <div className={`d-flex flex-row ${styles.form}`}>
            {handleRequestErrors()}
            <div className={`d-flex flex-column align-center justify-center ${styles.left}`}>
                <h1>Регистрация</h1>

                <form className='d-flex flex-column align-center' onSubmit={handleSubmit(onSubmit)}>
                    <InputField 
                        name='name'
                        register={register}
                        option={{
                            required: 'Не должно быть пустым',
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа'
                            }
                        }}
                        type={'text'}
                        placeholder={'Имя'}
                        errors={errors?.name}
                    />
                    <InputField
                        name='email'
                        register={register}
                        option={{
                            required: 'Не должно быть пустым',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Необходимо указать почту'
                            }
                        }}
                        type={'email'}
                        placeholder={'Почта'}
                        errors={errors?.email}
                    />
                        <InputField
                            name='password'
                            register={register}
                            option={{
                                required: 'Не должно быть пустым',
                                minLength: {
                                    value: 8,
                                    message: 'Не меньше 8 символов'
                                }
                            }}
                            type={'password'}
                            placeholder={'Пароль'}
                            errors={errors?.password}
                        />
                    <div className={`d-flex flex-row align-center ${styles.checkbox}`}>
                        <input 
                            {...register('agreement', {
                                required: 'Необходимо принять политику'
                            })}
                            className='mr-10' 
                            type='checkbox' />
                        <p>Я принимаю <a href='#'>политику безопасности</a> сайта</p>
                    </div>
                    <button className='button' disabled={!isValid}>
                        <p>Регистрация</p>
                        <img
                            width={18}
                            height={18}
                            src='img/arrow.svg'
                            alt='Стрелка вправо'
                            className='ml-5'
                        />
                    </button> 
                    <Link className='mt-10' to='/auth'>Уже есть аккаунт?</Link>
                </form>
            </div>

            <div className={`d-flex flex-column align-center justify-center ${styles.right}`}>
                <MediaButton
                    key={1}
                    imageURL={'img/media/vk.svg'}
                    text={'Войти через VK'}
                    color={'#385796'}
                />
                <MediaButton
                    key={2}
                    imageURL={'img/media/google.svg'}
                    text={'Войти через Google'}
                    color={'#4285F4'}
                />
                <MediaButton
                    key={3}
                    imageURL={'img/media/yandex.svg'}
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