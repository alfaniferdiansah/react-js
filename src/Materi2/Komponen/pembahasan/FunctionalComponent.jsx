import { useState } from "react";

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState (0);

    const handplus = () => {
        setValue(value +1);
    }

    const handminus = () => {
        if(value > 0)
        setValue(value -1);
    }

    return (
        <div>
            <h1>Make functional Component with React</h1>
            <h2>Please set value with add button {nama}</h2>
            <button onClick={handminus}>-</button>
            <span> {' '} {value} {' '} </span>
            <button onClick={handplus}>+</button>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    nama: '- or +'
}

export default FunctionalComponent;