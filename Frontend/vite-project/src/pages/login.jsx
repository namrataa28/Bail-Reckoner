import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import './login.css'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm();

  const delay = (d) => new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(d);
    },d);
  })

  const onSubmit = async (data)=>{
    await delay(2000);
    console.log(data);
  }
  return(
    <>
    {isSubmitting && <div>Loading...</div>}
    <div className="container">
      <div className='icon'>
      <FontAwesomeIcon icon={faScaleBalanced} className="text-4xl text-blue-600 mb-4 icon" />
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <h1>Bail Reckoner</h1>
        </div>
        <div className='username'>
        <label>
          Username:
          <input type="text" placeholder='Enter your username' {...register("username", { required: {value: true, message: "Username is required"}, minLength:{value:3, message: "Username must be at least 3 characters long"}, maxLength: {value: 20, message: "Username must be at most 15 characters long"} })} />
        </label>
        </div>
        <div>
        {errors.username && <div>{errors.username.message}</div>}
        </div>
        <div className='username'>
        <label>
          Email:
          <input type="text" placeholder='Enter your email' {...register("email", { required: {value: true, message: "Email is required"}, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email is not valid"} })} />
        </label>
        </div>
        <div>
        {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div className='username'>
        <label>
          Password:
          <input type="password" placeholder='Enter your password' {...register("password", { required: {value: true, message: "Password is required"}, minLength:{value:6, message: "Password must be at least 6 characters long"} })} />
        </label>
        </div>
        <div>
        {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className='username'>
        <label htmlFor="options">Select your role:</label>
        <select id="options" {...register("role", { required: {value: true, message: "Role is required"} })}>
        <option value="">-- Select --</option>
        <option value="Undertrial Prisoners">Undertrial Prisoners</option>
        <option value="Legal Aid Providers">Legal Aid Providers</option>
        <option value="Judicial Authorities">Judicial Authorities</option>
        </select>
        </div>
        <div>
      {errors.role && <div>{errors.role.message}</div>}
        </div>
        <div>
        <button type="submit" disabled = {isSubmitting} className='bg-blue-500 text-red-500'>Login</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login
