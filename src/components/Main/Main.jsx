import {lazy, useState} from "react";
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

    // fourth home-work
    const [title, setTitle] = useState(true)
    const showTitle = (e) => {
        e.preventDefault()
        setTitle(prevState => !prevState)
    }

    // fifth home-work
    const [animation, setAnimation] = useState(true)
    const startAnimation = (e) => {
        e.preventDefault()
        setAnimation(prevState => !prevState)
    }

    // sixth home-work
    const [name,setName] = useState("HOME")

    // seventh home-work
    const seventh = [
        {
            id: 1,
            title: "item 1"
        },
        {
            id: 2,
            title: "item 2"
        },
        {
            id: 3,
            title: "item 3"
        },
        {
            id: 4,
            title: "item 4"
        },
        {
            id: 5,
            title: "item 5"
        },
    ]
    let itemText = ''

    const showItem = (props) => {
        seventh.forEach((item)=>{
            if (item.id === props){
                itemText = item.title
            }
        })
        document.getElementById('itemText').textContent = itemText

    }

    return (
        <main className={css.main} id={"12"}>

            {/*first home-work*/}
            <section className={css.section}>
                <Titles title={"Биринчи"}/>
                <Button text={text ? "Open" : "Close"} onClick={changeText}/>
            </section>

            {/*second home-work*/}
            <section className={css.section}>
                <Titles title={"Экинчи"}/>
                <Button text={"Increment"} onClick={plusCount}/>
                <span className={css.counter}>{count}</span>
                <Button text={"Decrement"} onClick={minusCount}/>
            </section>

            {/*third home-work*/}
            <section className={css.section}>
                <Titles title={"Учунчу"}/>
                <input className={css.inputCheck} type="checkbox" onChange={changeBackground}/>
            </section>

            {/*fourth home-work*/}
            <section className={css.section}>
                <Titles title={"Тортунчу"}/>
                <p>{!title ? "Upps!" : ''}</p>
                <Button text={title ? "Close" : "Open"} onClick={showTitle}/>
            </section>

            {/*fifth home-work*/}
            <section className={css.section}>
                <Titles title={"Бешинчи"}/>
                <Button text={animation ? "Start" : "stop"} onClick={startAnimation}/>
                <div>
                    {!animation ? <div className={css.loader}></div> : ''}
                </div>
            </section>

            {/*sixth home-work*/}
            <section className={css.section}>
                <Titles title={"Алтынчы"}/>
                <nav>
                    <Button text={'HOME'} onClick={() => setName('HOME')}/>
                    <Button text={'ABOUT'} onClick={() => setName('ABOUT')}/>
                    <Button text={'CONTACT'} onClick={() => setName('CONTACT')}/>
                    <p>{name}</p>
                </nav>
            </section>

            {/*seventh home-work*/}
            <section className={css.section}>
                <Titles title={"Жетинчи"}/>

                <div className={css.seventhMenu}>
                    {seventh.map(item => (
                        <div className={css.seventhItem} key={item.id}
                            onClick={() => showItem(item.id)}>{item.title}</div>
                    ))}
                </div>
                <span>You selected: <span id={'itemText'}></span></span>
            </section>


        </main>
    );
};

export default Main;