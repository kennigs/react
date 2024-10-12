import { useState } from 'react'
// import { useHistory } from 'react'
import styles from './App.module.css'



function App() { 
    const [value, setValue] = useState()
    const [list,setList] = useState([])
    const [error, setError] = useState('')

    const onInputButtonClick = ()=> {
        const promptValue = prompt('Введите значение')

        if(promptValue.length < 3) {
            setError('Введенное значение должно содержать минимум 3 символа')
        } else {
            setError('')
            setValue(promptValue)
        }

    }
    let isValueValid = ''
    if(error.length > 0) {
            isValueValid = true
    } else {
            isValueValid = false
    }

    const onAddButtonClick = ()=> {
        let id = Date.now()
        let newDate = new Date()
        const date = newDate.toDateString() + ' ' + newDate.toTimeString()
        const updatedList = [...list, {id, value, date}]
        setList(updatedList)
        setValue('')
        setError('')
    }

    return (
    <>
    <div className={styles.app}>
    <h1 className={styles.pageHeading}>Ввод значения</h1>
    <p className={styles.currentValue}> Текущее значение <code></code>: `<output className="no-margin-text"> { value } </output>`
    </p>
    {error !== '' && <div className={styles.error}>Введенное значение должно содержать минимум 3 символа</div>}
    <div className={styles.buttonsContainer}>
    <button className={styles.button} onClick={onInputButtonClick}>Ввести новое </button>
    <button className={styles.button} disabled = {isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
    </div>
    <div className={styles.listContainer}>
    <h2 className={styles.listHeading}>Список:</h2>
    {list !== '' && <p className={styles.noMarginText}>Нет добавленных элементов</p> }
    {list !== '' && <ul className={styles.list}>
    {list.map(({ id, value, date }) => <li className={styles.listItem} key={id} >{ value } - время {date}</li>)}
    </ul>}
    </div>
</div>
    </>
)
}

export default App
