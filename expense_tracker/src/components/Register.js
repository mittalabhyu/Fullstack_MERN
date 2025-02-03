import React, { useEffect, useState } from 'react'
import '../asset/css/Register.css'
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    useEffect(()=>{
        console.log("Hi")

    },[])


const [name, setName] = useState();
    return (
        <div className='mainContainer'>
            <div className='formcard'>
                <div>
                    <h2 style={{ alignSelf: 'center' }}>Register</h2>
                </div>
                <form>
                    <div>
                        <label>
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            placeholder='Enter your name'

                        />
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            placeholder='Enter your email'

                        />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            placeholder='Enter your password'

                        />
                    </div>
                    <div>
                        <label>
                            Confirm Password
                        </label>
                        <input
                            required
                            type="password"
                            placeholder='Confirm your password'

                        />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                    <div>
                        <span style={{ alignSelf: 'center' }}>Already a user ?<Link to="/">Login</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register