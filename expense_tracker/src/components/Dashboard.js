import React, { useState } from 'react'
import img1 from '../asset/img/cart.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const [showerror, setShowError] = useState(false)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const doLogin = (event) => {
        event.preventDefault();
        console.log("Clicked", inputs);

        if (inputs.pass.length >= 8) {
            navigate("/dashboard");
        }
        else {
            setShowError(true);
        }
    }
    return (
        <div className='container'>
            <div className='leftcontainer'>
                <p>Please add your expenses</p>
                <img src={img1} />

            </div>
            <div className='rightcontainer'>
                <div className='formcard'>
                    <div>
                        <h2 style={{ alignSelf: 'center' }}>Add Expense</h2>
                    </div>
                    <form onSubmit={doLogin}>
                        <div>
                            <label>
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                placeholder='Enter your email'
                                value={inputs.email || ''}
                                onChange={handleChange}
                                name='email'

                            />
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                placeholder='Enter your Password'
                                value={inputs.pass || ''}
                                onChange={handleChange}
                                name='pass'

                            />
                        </div>
                        {
                            showerror ?
                                <div>
                                    <span style={{ color: 'red', alignSelf: 'center' }}>Password length must be greater then 8</span>
                                </div> : null
                        }

                        <div>
                            <button>Add</button>
                        </div>
                        <div>
                            <span style={{ alignSelf: 'center' }}>Not a user ?<Link to="/register">Register</Link> </span>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Dashboard
