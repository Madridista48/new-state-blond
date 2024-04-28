import {useState} from "react";
import Titles from "../Titles/Titles.jsx";
import Button from "../UI/Button/Button.jsx";
import css from './Main.module.css'

const Main = () => {

    const [text, setText] = useState(true)
    const changeText = (e) => {
        e.preventDefault()
        setText(prevState => !prevState)
    }

    const [count, setCount] = useState(0)
    const plusCount = (e) => {
        e.preventDefault()
        setCount(prevState => prevState === 10? prevState: prevState+1)
    }
    const minusCount = (e) => {
        e.preventDefault()
        setCount(prevState => prevState === -10? prevState: prevState-1)
    }



    return (
        <main className={css.main}>
            <section className={css.section}>
                <Titles title={"Биринчи"}/>
                <Button text={text ? "Open" : "Close"} onClick={changeText}/>
            </section>

            <section className={css.section}>
                <Titles title={"Экинчи"}/>
                <Button text={"Increment"} onClick={plusCount}/>
                <span className={css.counter}>{count}</span>
                <Button text={"Decrement"} onClick={minusCount}/>
            </section>


        </main>
    );
};

export default Main;