import { useState } from "react"
import RenderUserGrid from "./RenderUserGrid"
import RenderEnemyGrid from "./RenderEnemyGrid"

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

    const [enemyGrid, setEnemyGrid] = useState([
        ['o','o','o','o','b','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','b','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','b','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','o','o','o','o','o','o','o','o','o',],
        ['o','b','o','o','o','o','o','o','b','o',],
        ['o','o','o','o','o','o','o','o','o','o',]
    ])

    const boatsLeftToFind = enemyGrid.filter(square => square === 'b').length

    const [boatsToPlace, setBoatsToplace] = useState(5)
    const [hasGameStarted, setHasGameStarted] = useState(false)

    return(
        <>
            <h1>Welcome to battleship game!</h1>
            <p>Here is your grid : </p>
            <RenderUserGrid grid={userGrid} />

            <p>Here is your enemy grid : </p>
            <RenderEnemyGrid grid={userGrid} />
        </>
    )
}

export default MainPage