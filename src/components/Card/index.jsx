import ContentLoader from "react-content-loader"

import styles from './Card.module.scss'

export function Card({
    isLoading = false,
    hasButton,
    lessonURL,
    imageURL, 
    teacher, 
    lesson, 
    course, 
    date 
}) {
    const handleButtonClick = () => {
        window.open(lessonURL, '_blank')
    }

    return (
        <div className={"d-flex align-center justify-between mb-35 " + styles.card}>
            {
                isLoading
                ?   <ContentLoader
                        speed={2}
                        width={1144}
                        height={188}
                        viewBox="0 0 1144 188"
                        backgroundColor="#ffffff"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="30" rx="30" ry="30" width="128" height="128" />
                        <rect x="148" y="74" rx="5" ry="5" width="263" height="18" />
                        <rect x="148" y="107" rx="5" ry="5" width="268" height="18" />
                        <rect x="148" y="140" rx="5" ry="5" width="256" height="18" />
                        <rect x="148" y="30" rx="5" ry="5" width="392" height="24" />
                        { 
                            hasButton && <rect x="893" y="74" rx="10" ry="10" width="251" height="40" />
                        }
                        
                    </ContentLoader>
                :   <>
                        <div className="d-flex flex-row align-center">
                            <img
                                className="mr-20"
                                src={imageURL}
                                alt="Логотип курса"
                            />
                            <ul>
                                <p className="mb-15"><strong>{date}</strong></p>
                                <li className="d-flex flex-row align-center">
                                    <img
                                        className="mr-5"
                                        width={18}
                                        height={18}
                                        src={"img/course.svg"}
                                        alt="Иконка курса"
                                    />
                                    <p><em>{course}</em></p>
                                </li>
                                <li className="d-flex flex-row align-center">
                                    <img
                                        className="mr-5"
                                        width={18}
                                        height={18}
                                        src="img/lesson.svg"
                                        alt="Иконка урока"
                                    />
                                    <p><em>{lesson}</em></p>
                                </li>
                                <li className="d-flex flex-row align-center">
                                    <img
                                        className="mr-5"
                                        width={18}
                                        height={18}
                                        src="img/teacher.svg"
                                        alt="Иконка учителя"
                                    />
                                    <p><em>{teacher}</em></p>
                                </li>
                            </ul>
                        </div>
                        {
                            hasButton && <button className="button" onClick={() => { handleButtonClick() }}>
                                <p className="mr-5">Подключиться</p>
                                <img
                                    width={18}
                                    height={18}
                                    src="img/arrow.svg"    
                                    alt="Стрелка вправо"
                                />
                            </button>
                        }
                    </>          
            }
        </div>
    )
}