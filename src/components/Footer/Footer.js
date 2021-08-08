import s from './Footer.module.css'

const Footer = ({ first, second, children, color, user: { name, state, questions } }) => {
    // props = { first: 1, second: 2 } 
    return (
        <footer className={s.Footer} >
            <p>Everyone has come back from the break</p>
            <p>
               First {first} is less then 10 that is {first < 10 ? 'correct' : 'lie' } 
            </p>
            {children}
            {/* <h1>{message}</h1> */}
            <p>Me name is {name}, I am {state} and I will try my best cover all{' '} {questions} questions </p>
    </footer>
    )
}

Footer.defaultProps = {
    first: 3,
}

export default Footer