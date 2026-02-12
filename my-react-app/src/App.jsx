import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'



function App() {
  // const [page, setPage] = useState('/');

  // return(
  //   <div>
  //     <button onClick={() => setPage('home')}>Home</button>
  //     <button onClick={() => setPage('posts')}>Posts</button>
  //     <button onClick={() => setPage('about')}>About</button>

  //     {page === '/' && <div></div>}
  //     {page === 'home' && <Home />}
  //     {page === 'posts' && <Posts />}
  //     {page === 'about' && <About />}

  //   </div>
  // )

  // -------------------------

  // const path = window.location.pathname;
  // if (path === '/about') return <About />
  // return <Home/>

 // -------------------------
  
  // return (
  //   <Routes>
  //     <Route path='/' element={<Home />} />
  //     <Route path='/posts' element={<Posts />} />
  //     <Route path='/about' element={<About />} />
  //   </Routes>
  // );

return (
    <div className='app'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App


