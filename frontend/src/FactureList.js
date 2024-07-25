import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FactureList.css'
import BoutonValidation from './Bouton';

const FactureList = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState({
    reference: '',
    categorie: '',
    rayon: '',
    prix: ''
  });

  useEffect(() => {
    fetchFactures();
  }, [filter]);

  const fetchFactures = async () => {
    try {
      const response = await axios.get('http://localhost:5000/factures', { params: filter });
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <div>
      <div className="bold-options-wrapper">
        <p>Factures réalisées</p>
        <BoutonValidation />
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>Articles</th>
                    <th>Client</th>
                    <th>Montant total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>Jogging - 35€</li>
                            <li>Ballon de football - 35€</li>
                        </ul>
                    </td>
                    <td>Hélène Dubois</td>
                    <td>70€</td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>T-Shirt - 49€</li>
                            <li>Gants de boxe - 50€</li>
                        </ul>
                    </td>
                    <td>Harry Longchamps</td>
                    <td>99€</td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>Veste de ski - 200€</li>
                        </ul>
                    </td>
                    <td>Pierre Lacourt</td>
                    <td>200€</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default FactureList;
