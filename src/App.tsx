import React from "react";
import classNames from "classnames";
import "./App.scss";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { SelectConverter } from "./components/SelectConverter";
import { ExchangeRates } from "./components/ExchangeRates";

const App: React.FC = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames("navbar-item", { isActive });
  };


  
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light " data-cy="nav">
        <div className="navbar-menu is-justify-content-center">
            <NavLink to="/task1" className={activeClass}>
              Конвертер валют
            </NavLink>
            <NavLink to="/task2" className={activeClass}>
              Курси валют
            </NavLink>

        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<h1 className="title">Оберіть сторінку</h1>} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="/task1" element={<SelectConverter />} />
          <Route path="/task2" element={<ExchangeRates />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
