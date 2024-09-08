import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import UserTable from './components/home/UserTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <UserTable />
      <Footer/>
    </div>
  );
};

export default App;
