import './nav.css';

function NavBar(){
return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>CodesLearning</div>
        <div className='navbar__item'><a href='/index' style={{color: 'white'}}>Home</a></div>
        <div className='navbar__item'><a href='/login' style={{color: 'white'}}>Versions</a></div>
        <div className='navbar__item'><a href='/register' style={{color: 'white'}}>Register</a></div>

        <div className='navbar__item'>Help</div>        
    </header>
);
}
export default NavBar






// import React, { useState } from 'react';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     });
//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default LoginForm;