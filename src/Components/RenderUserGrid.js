
const RenderUserGrid = (props) => {

    const renderSquare = (square, index) => <div key={index} className="square"></div>

    return (
        <div className="user-grid">
            {props.grid.map(square => renderSquare(square))}
        </div>
    )
}

export default RenderUserGrid