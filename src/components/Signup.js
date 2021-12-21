import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getNewUser } from "../redux/ducks/userData"

function Signup() {

	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const signupHandler = e => {
		e.preventDefault()
		dispatch(getNewUser({
			userName,
			email,
			password: repeatPassword,
		}))
		navigate('/')
	}
	
	
	return (
		<section className="vh-100 bg-image gradient-custom">
			<div className="mask d-flex align-items-center h-100 gradient-custom-3">
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-9 col-lg-7 col-xl-6">
							<div className="card" style={{borderRadius: '15px'}}>
								<div className="card-body py-4 px-5">
									<h2 className="text-uppercase text-center mb-4">Create an account</h2>

									<form onSubmit={signupHandler}>

										<div className="form-outline mb-2">
											<input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder="Your userName" value={userName} onChange={e => setUserName(e.target.value)} required/>
										</div>

										<div className="form-outline mb-2">
											<input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Your Email"required value={email} onChange={e => setEmail(e.target.value)}/>
										</div>

										<div className="form-outline mb-2">
											<input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>
										</div>

										<div className="form-outline mb-2">
											<input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Repeat your password" required value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
										</div>

										<div className="form-check d-flex justify-content-center mb-3">
											<input
												className="form-check-input me-2"
												type="checkbox"
												value=""
												id="form2Example3cg"
												required
											/>
											<label className="form-check-label" htmlFor="form2Example3g">
												I agree all statements in <Link to="#!" className="text-body"><u>Terms of service</u></Link>
											</label>
										</div>

										<div className="d-flex justify-content-center">
											<button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
										</div>

										<p className="text-center text-muted mt-3 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>

									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signup
