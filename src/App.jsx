import React from 'react';

const App = () => {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Evan',
    'Fiona',
    'George',
    'Hannah',
    'Ian',
    'Julia',
  ];
  let randomName = names[Math.floor(Math.random() * names.length)];
  return (
    <div>
      <span>random name is {randomName}</span>
    </div>
  );
};
export default App;
