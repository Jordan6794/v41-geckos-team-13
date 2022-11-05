
const RenderEnemyGrid = (props) => {

    const renderSquare = (square, index) => <div key={index} className="square"></div>

    return (
        <div className="enemy-grid">
            {props.grid.map(square => renderSquare(square))}
        </div>
    )
}

export default RenderEnemyGrid