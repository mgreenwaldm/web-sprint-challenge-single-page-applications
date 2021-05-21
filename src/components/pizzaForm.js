import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const PizzaForm = () => {

    const [name, setName]= useState('');
    const [size, setSize]= useState('');
    const [topping1, setTopping1]= useState(false);
    const [topping2, setTopping2]= useState(false);
    const [topping3, setTopping3]= useState(false);
    const [topping4, setTopping4]= useState(false);
    const [special, setSpecial]= useState('');
    const [orders,setOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const schema = yup.object().shape({
        name: yup.string().min(2)
    });

    schema.validate({
        name
    }).then(function (valid) {
        //if valid, then clear the error message
        if (valid) {
            setErrorMessage('');
        }
    }).catch(err=>{
        setErrorMessage(err.message);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            size: size,
            topping1: topping1,
            topping2: topping2,
            topping3: topping3,
            topping4: topping4,
            special: special,
        };

        console.log(data);

        axios.post('https://reqres.in/api/orders', data).then(result=>{
            console.log(result.data);
            setOrders([...orders, result.data]);
        });

    };


    return (
        <div>
            <h2>Pizza Order</h2>
            <Link to="/">Home</Link>
            <form id="pizza-form" onSubmit={handleSubmit}>

                <div>Name: <input id="name-input" type="text" name="name" onChange={e => setName(e.target.value)} value={name} /></div>
                <div>Size:<select name="size" id="size-dropdown" onChange={e => setSize(e.target.value)} value={size}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                </select></div>
                <div>Pepperoni: <input id="topping1" type="checkbox" name="topping1" onChange={e => setTopping1(e.target.checked)} value={topping1} /></div>

                <div>Mushroom: <input id="topping2" type="checkbox" name="topping2" onChange={e => setTopping2(e.target.checked)} value={topping2} /></div>
                <div>Ham: <input id="topping3" type="checkbox" name="topping3" onChange={e => setTopping3(e.target.checked)} value={topping3} /></div>
                <div>Pineapple: <input id="topping4" type="checkbox" name="topping4" onChange={e => setTopping4(e.target.checked)} value={topping4} /></div>
                <div>Special: <input id="special-text" type="text" name="special" onChange={e => setSpecial(e.target.value)} value={special} /></div>


                <div>{errorMessage}</div>
                <div><input id="order-button" type="submit" value="Add To Order"/></div>

            </form>
            <div>
                <h2>Orders</h2>
                {orders.map(order=>{
                    return (
                        <div key={order.createdAt}><pre>{JSON.stringify(order)}</pre></div>
                    );
                })}
            </div>
        </div>

    );
}
export default PizzaForm;