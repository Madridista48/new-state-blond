import {useState} from "react";
import Titles from "../Titles/Titles.jsx";
import Button from "../UI/Button/Button.jsx";
import css from './Main.module.css'

const Main = () => {
    // first home-work
    const [text, setText] = useState(true)
    const changeText = (e) => {
        e.preventDefault()
        setText(prevState => !prevState)
    }

    // second home-work
    const [count, setCount] = useState(0)
    const plusCount = (e) => {
        e.preventDefault()
        setCount(prevState => prevState === 10? prevState: prevState+1)
    }
    const minusCount = (e) => {
        e.preventDefault()
        setCount(prevState => prevState === -10? prevState: prevState-1)
    }

    //  third home-work
    const [state, setState] = useState(false)
    const changeBackground = () =>{
        setState(prevState => !prevState)
        if (!state){
            document.querySelector('main').style.backgroundColor = 'black'
            document.querySelector('main').style.color = 'white'
        }else {
            document.querySelector('main').style.backgroundColor = 'white'
            document.querySelector('main').style.color = 'black'
        }
    }


    return (
        <main className={css.main} id={"12"}>
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

            <section className={css.section}>
                <Titles title={"Учунчу"}/>
                <input className={css.inputCheck} type="checkbox" onChange={changeBackground}/>
            </section>

        </main>
    );
};

export default Main;