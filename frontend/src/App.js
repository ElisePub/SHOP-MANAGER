import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './ArticleList';
import AddDocument from './AddDocument';
import FactureList from './FactureList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Gestion de Magasin</h1>
          <nav>
              <a href="/">Articles</a>
              <a href="/gestion">Gestion</a>
              <a href="/commandes">Commandes</a>
          </nav>
          <div style={{width: 140 + 'px'}}></div>
        </header>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/gestion" element={<AddDocument />} />  
            <Route path="/commandes" element={<FactureList />} />  
          </Routes>
      </div>
    </Router>
  );
};

export default App;
