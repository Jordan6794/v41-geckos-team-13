import { useState } from "react"
const MainPage = () => {
    // grid-case :
    // o : empty / b : boat / h : hit / x : missed 
    const [userGrid, setUserGrid] = useState([
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',]
    ])

    return(
        <>
            <h1>Welcome to battleship game!</h1>
            <p>Here is your grid : </p>
        </>
    )
}

export default MainPage