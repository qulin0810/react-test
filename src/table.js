import React from 'react';
// import { useNavigate } from 'react-router-dom';

const List = () => {
  return (
    <div>
      <h2>List Page</h2>
    </div>
  );
};

const Table = () => {
  // const navigate = useNavigate(); // 在函数组件内部调用 useNavigate

  // // 将导航函数作为参数传递给 handleClick
  // const handleClick = (navigate) => {
  //   navigate('/List');
  // };

  return (
    <div>
      About Page
      {/* 使用内联函数来调用 handleClick
      <button onClick={() => handleClick(navigate)}>Go to List</button> */}
      <List></List>
    </div>
  );
};

export default Table;
