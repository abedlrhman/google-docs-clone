import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../styles/login.scss'
import { getUser } from '../redux/ducks/userData'
function Login() {

	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogin = event => {
		event.preventDefault()
		console.log(userName, password)
		dispatch(getUser({
			userName,
			password
		}))
		navigate('/')
	}
	
	
	return (
		<section className="vh-100 gradient-custom">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card bg-dark" style={{borderRadius: '1rem'}}>
							<div className="card-body px-4 py-1 text-center">

								<form onSubmit={handleLogin} className="mb-md-1 mt-md-4 pb-4">

									<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
									<p className="mb-4">Please enter your email and password!</p>

									<div className="form-outline form-white mb-3">
										<input type='text' id="typeEmailX" className="form-control form-control-lg" required placeholder="Enter You username" value={userName} onChange={e => setUserName(e.target.value) } />
										<label className="form-label mt-2" htmlFor="typeEmailX">Username</label>
									</div>

									<div className="form-outline form-white mb-3">
										<input type="password" id="typePasswordX" className="form-control form-control-lg" required placeholder='Enter Your Password'value={password} onChange={e => setPassword(e.target.value) }/>
										<label className="form-label mt-2" htmlFor="typePasswordX">Password</label>
									</div>

									<button className="btn btn-outline-dark btn-md px-5" type="submit">Login</button>

								</form>

								<div className="text-center">
									<p className="mb-2 ">Don't have an account? <Link to="/signup" className="fw-bold text-black">Sign Up</Link></p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
