import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const PizzaForm = () => {

    const [name, setName]= useState('');
    const [size, setSize]= useState('');
    const [topping1, setTopping1]= useState(false);
    const [topping2, setTopping2]= useState(false);
    const [special, setSpecial]= useState('');
    const [orders, setOrders] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            size: size,
            topping1: topping1,
            topping2: topping2,
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
            <form onSubmit={handleSubmit}>

                <div>Name: <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} /></div>
                <div>Size:<select onChange={e => setSize(e.target.value)} value={size}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                </select></div>
                <div>Pepperoni: <input type="checkbox" name="name" onChange={e => setTopping1(e.target.checked)} value={topping1} /></div>
                <div>Mushroom: <input type="checkbox" name="name" onChange={e => setTopping2(e.target.checked)} value={topping2} /></div>
                <div>Special: <input type="text" name="name" onChange={e => setSpecial(e.target.value)} value={special} /></div>

                <div><input type="submit" value="Add To Order"/></div>

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