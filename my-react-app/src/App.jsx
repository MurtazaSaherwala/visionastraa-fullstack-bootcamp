import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {
  
  return (
    <>
      
      <div className='cards'>
        <Posts />
        <Home />
      </div>
    </>
  );
}

export default App


// let count = 0;
// const countEl = document.getElementById("count");
// const incBtn = document.getElementById("inc-btn");

// incBtn.addEventListener("click", function() {
//   count++;
//   countEl.textContent = count;
// });

// const [count, setCount] = useState(0);

// <button onClick={() => setCount(count + 1)}>+</button>
// <p>Count : {count}</p>