import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Table from './table';
import About from './about';
// Home 组件
// const Home = () => {
//   const navigate = useNavigate(); // 获取导航函数

//   const handleClick = () => {
//     navigate('/about'); // 点击按钮时导航到 '/about' 路径
//   };

//   return (
//     <div>
//       <h2>Home</h2>
//       <button onClick={handleClick}>Go to About</button>
//     </div>
//   );
// };

// // About 组件
// const About = () => {
//   return <h2>About</h2>;
// };

// App 组件
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/table">table</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
