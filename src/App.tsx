import React from "react";
import Header from "./components/header/Header";
import UserTable from "./components/home/UserTable";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <UserTable />
      <Footer />
    </div>
  );
};

export default App;
