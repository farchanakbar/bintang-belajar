import React, {useState, useEffect} from 'react'
import apple from '../assets/apple.png'
import playstore from '../assets/playstore.png'
import microsoft from '../assets/microsoft2.png'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [token, setToken] = useState(null);
  
  const getToken = (email, password) => {
    const url = 'https://api-lmsreplika.bintangpelajar.net/v1/orang-tua/login';
    axios.post(url, {
      username: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      setToken(response.data.data.accessToken);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const authToken = (token) => {
    const url = 'https://api-lmsreplika.bintangpelajar.net/v1/orang-tua/log-ortu';
    axios.post(url, {}, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token,
      }
    })
    .then((response) => {
      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const handleLogin = (event) => {
    event.preventDefault();
    getToken(email, passwordLogin);
  }

  useEffect(() => {
    if(token){
      console.log('object');
      authToken(token)
    }
  }, [token])

  return (
    <div className='flex justify-around items-center'>
      <div className='py-3 w-[500px]'>
        <h1 className='text-4xl'>Sign In</h1>
        <p className='text-xl mt-3'>Selamat Datang di LMS Bintang Pelajar</p>
        <p className='text-xl mt-3'>Silahkan login dengan akun Ayah-Bunda atau Ananda. <span className='underline'><a href="#">Klik Disini</a></span> jika ingin login sebagai guru</p>
        <form onSubmit={handleLogin} className='mt-5' action="">
          <input value={email} required onChange={(e) => setEmail(e.target.value)} className='outline-none text-lg border px-2 py-8 w-full mt-5 rounded-t-md' type="email" placeholder='Username' />
          <input value={passwordLogin} required onChange={(e) => setPasswordLogin(e.target.value)} className='outline-none text-lg border border-t-0 px-2 py-8 w-full rounded-b-md' type="password" placeholder='Password' />
          <button type='submit' className='w-full py-5 mt-5 rounded-md bg-slate-300 hover:text-white hover:bg-slate-600 transition duration-300 text-xl border border-blue-800'>Log In</button>
        </form>
        <p className='text-xl mt-5'>Jika Ayah-Bunda belum bisa login karena username belum terdaftar sebagai akun, silahkan menghubungi staf cabang atau call center</p>
        <div className='flex justify-between mt-5'>
          <button className='flex items-center p-2 bg-slate-700 text-white rounded-md'>
            <img color='white' width={40} src={apple} alt="" />
            Download untuk IOS
          </button>
          <button className='flex items-center p-2 bg-slate-700 text-white rounded-md'>
            <img color='white' width={40} src={playstore} alt="" />
            Download untuk Playstore
          </button>
        </div>
        <button className='w-full flex transition duration-300 items-center justify-center py-3 rounded-md mt-5 border border-blue-400 text-blue-400 gap-2 hover:bg-blue-500 hover:text-white'>
          <img width={40} src={microsoft} alt="" />
          <p className='text-lg'>Login with Microsoft</p>
        </button>
      </div>
      <img className='border-2 border-blue-800 rounded-md' width={700} src="https://weblms.bintangpelajar.net/assets/form_login_4/images/3950.jpg" alt="" />
    </div>
  )
}

export default Login