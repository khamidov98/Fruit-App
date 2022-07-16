import './Fruit.css';
import React, {useState} from 'react';


// props ma'lumotni otadan bolaga o'tkazdirib beradi


const Fruit = (props) => {
    const [button, setButton] = useState(true);
    const [count, setCount] = useState(0);

    const changeButton = () => {
        setButton(() =>  false)
    };

    return (
        <div className="main">
            <div className="rasm">
                <img src={props.data.img} className="card-img" alt=""/>
            </div>
            <div className="details">
                <div className="top">
                    <h1>{props.data.title}</h1>
                    {button ? <button className="button" onClick={changeButton}>Add</button> :
                    <div className=" buttons plus-minus" >
                        <button className="next-button" onClick={() => setCount(count - 1)}>-</button>
                        <span>{count}</span>
                        <button className="next-button" onClick={() => setCount(count + 1)}>+</button>
                    </div>}
                </div>

                <div className="bottom">
                    <div className="data">
                        <p className="title">02</p>
                        <p className="value">{props.data.uom}</p>
                    </div>

                    <div className="data">
                        <p className="title">Pack Size</p>
                        <p className="value">02</p>
                    </div>

                    <div className="data">
                        <p className="title">Per Unit</p>
                        <p className="value">02</p>
                    </div>

                    <div className="data">
                        <p className="title">Total</p>
                        <p className="value">02</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fruit;