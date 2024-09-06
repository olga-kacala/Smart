import React from 'react';
import Header from './components/header/Header';
import UserTable from './components/UserTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <UserTable />
    </div>
  );
};

export default App;
