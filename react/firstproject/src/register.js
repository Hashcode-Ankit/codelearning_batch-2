import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  });
  const token = Cookies.token
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/register', {
        formData
      },{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // adjust the content type if needed
        }
      })
      .then(function (response) {
        if (response.status){
          console.log("response received: ",response.data)
          navigate('/login');
        }
          console.log("response received: ",response.data)
          navigate('/login');
        
      })
      .catch(function (error) {
        console.log(error);
      })
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="username"
          name="username"
          placeholder="username"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2'
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px'
  },
  button: {
    width: '120px',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Register;
