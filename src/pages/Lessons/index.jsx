import React, { useState } from 'react'
import axios from 'axios'
import moment from 'moment-timezone'
import 'moment/locale/ru'

import { Card, Empty } from '../../components/index'

export function Lessons() {
    const [isLoading, setIsLoading] = useState(true)
    const [userTimezone, setUserTimezone] = useState('')
    const [lessons, setLessons] = useState([])
    const [nextLesson, setNextLessons] = useState({})
    const [searchValue, setSearchValues] = useState('')


    React.useEffect(() => {
        axios.get('https://658a813aba789a962237315f.mockapi.io/lessons')
            .then((response) => {
                response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
                setLessons(response.data)

                const filteredLessons = response.data.filter((obj) => obj.status === 'active')
                filteredLessons.sort((a, b) => new Date(a.date) - new Date(b.date))
                setNextLessons(filteredLessons[0])
                setIsLoading(false)
            })
            .catch((response) => {
                alert('Ошибка обращения к серверу')
            })

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
        if (!isLoading && !nextLesson) {
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
                isLoading={isLoading}
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

        const filteredLessons = lessons.filter((obj) => {
            const objDate = ((moment.tz(obj.date, userTimezone)).format('YYYY-MM-DD'))
            return searchValue ? objDate === searchValue : obj.status === 'completed'
        }
        )

        if (!isLoading && !filteredLessons.length) {
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

        return (isLoading ? [...Array(3)] : filteredLessons)
            .map((item, index) => (
                <Card
                    key={item?.id || index}
                    isLoading={isLoading}
                    course={item?.course}
                    lesson={item?.lesson}
                    teacher={item?.teacher}
                    date={getDateTime(item?.date)}
                    imageURL={item?.imageURL}
                    lessonURL={item?.lessonURL}
                />
            ))
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