import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const List = () => {
//   return (
//     <div>
//       <h2>List Page</h2>
//     </div>
//   );
// };

const About = () => {
  // const navigate = useNavigate();

  const handleClick = () => {
  alert(123)
  };

  return (
    <div>
      About Page
      <button onClick={handleClick}>Go to List</button>
    </div>
  );
};

export default About;
