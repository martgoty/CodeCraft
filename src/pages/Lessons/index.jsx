import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
import moment from 'moment-timezone'
import 'moment/locale/ru'

import { Card, Empty } from '../../components/index'
import { fetchLessons } from '../../redux/slices/lessonsSlice'
import { selectIsAuth } from '../../redux/slices/authSlice'

export function Lessons() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const { items, status } = useSelector(state => state.lessons)
    const [userTimezone, setUserTimezone] = useState('')
    const [searchValue, setSearchValues] = useState('')
    
    const isLessonsLoading = status === 'pending'

    React.useEffect(() => {
        dispatch(fetchLessons('1'))
        setUserTimezone(moment.tz.guess())
    }, [])

    const getDateTime = (date) => {
        const localDate = moment.tz(date, userTimezone)
        return localDate.format('D MMMM, HH:mm, dddd')
    }

    const getDate = (date) => {
        const localDate = moment.tz(date, userTimezone)
        return localDate.format('D MMMM YYYY')
    }

    const onChangeSearchInput = (event) => {
        setSearchValues(event.target.value)
    }

    const renderNextLesson = () => {
        const sortedLessons = [...items].sort((a, b) => new Date(a.date) - new Date(b.date))

        const filteredLessons = sortedLessons.filter((obj) => {
            return obj.status === 'completed'
        })

        const nextLesson = filteredLessons[0]


        if (!isLessonsLoading && !nextLesson) {
            return (
                <Empty
                    imgURL={'img/sleep-smile.svg'}
                    text1={'Запланированных уроков нет'}
                    text2={'Уточните у вашего преподавателя'}
                />
            )
        }
        return (
            <Card
                key={nextLesson?.id}
                isLoading={isLessonsLoading}
                hasButton={true}
                course={nextLesson?.course}
                lesson={nextLesson?.lesson}
                teacher={nextLesson?.teacher}
                date={getDateTime(nextLesson?.date)}
                imageURL={nextLesson?.imageURL}
                lessonURL={nextLesson?.lessonURL}
            />
        )
    }

    const renderLessons = () => {

        const sortedLessons = [...items].sort((a, b) => new Date(b.date) - new Date(a.date))

        const filteredLessons = sortedLessons.filter((obj) => {
            const objDate = ((moment.tz(obj.date, userTimezone)).format('YYYY-MM-DD'))
            return searchValue ? objDate === searchValue : obj.status === 'completed'
        }
        )
         if (!isLessonsLoading && !filteredLessons.length) {
            if (!searchValue) {
                return (
                    <Empty
                        imgURL={'img/glass-smile.svg'}
                        text1={'Завершённых уроков нет'}
                        text2={''}
                    />
                )
            }

            return (
                <Empty
                    imgURL={'img/cry-smile.svg'}
                    text1={'Ничего не найдено'}
                    text2={''}
                />
            )

        }

        return (isLessonsLoading ? [...Array(3)] : filteredLessons)
            .map((item, index) => (
                <Card
                    key={item?.id || index}
                    isLoading={isLessonsLoading}
                    course={item?.course}
                    lesson={item?.lesson}
                    teacher={item?.teacher}
                    date={getDateTime(item?.date)}
                    imageURL={item?.imageURL}
                    lessonURL={item?.lessonURL}
                />
            ))
    }

    if(!isAuth){
        return <Navigate to='/auth' />
    }

    return(
        <div className="content">
            <h1 className="mb-35 mt-35">Следующее занятие</h1>
            {renderNextLesson()}
            <div className='d-flex justify-between align-center mb-35'>
                <h2>{searchValue ? `Поиск на ${getDate(searchValue)}` : 'История занятий'}</h2>
                <input
                    type="date"
                    value={searchValue}
                    onChange={onChangeSearchInput}
                />
            </div>
            {renderLessons()}
        </div>
    )
}