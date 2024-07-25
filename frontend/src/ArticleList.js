import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState({
    reference: '',
    categorie: '',
    rayon: '',
    prix: ''
  });

  useEffect(() => {
    fetchArticles();
  }, [filter]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/articles', { params: filter });
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchArticles();
  };

  return (
    <div>
      <div className="bold-options-wrapper">
        <p>Rechercher un article</p>
        <form onSubmit={handleFilterSubmit}>
          <input
            type="text"
            name="reference"
            placeholder="Référence"
            onChange={handleFilterChange}
            value={filter.reference}
            className="filter-option"
          />
          <input
            type="text"
            name="categorie"
            placeholder="Catégorie"
            onChange={handleFilterChange}
            value={filter.categorie}
            className="filter-option"
          />
          <input
            type="text"
            name="rayon"
            placeholder="Rayon"
            onChange={handleFilterChange}
            value={filter.rayon}
            className="filter-option"
          />
          <input
            type="number"
            name="prix"
            placeholder="Prix max"
            onChange={handleFilterChange}
            value={filter.prix}
            className="filter-option"
          />
          <button type="submit" className="formbold-btn" style={{ marginBottom: '3rem' }}>
            Filtrer
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1675_1807)">
                <path
                  d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1675_1807">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </form>

        <div className="formbold-form-step-1 active ">
          {articles.map((article) => (
            <div key={article._id} className="formbold-input-flex formbold-form-input">
              <div>
                <label className="formbold-form-label"> Référence </label>
                <input
                  type="text"
                  value={article.reference}
                  readOnly
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label className="formbold-form-label"> Nom </label>
                <input
                  type="text"
                  value={article.nom}
                  readOnly
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label className="formbold-form-label"> Marque </label>
                <input
                  type="text"
                  value={article.marque}
                  readOnly
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label className="formbold-form-label"> Prix </label>
                <input
                  type="text"
                  value={article.prix}
                  readOnly
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label className="formbold-form-label"> Catégorie </label>
                <input
                  type="text"
                  value={article.categorie}
                  readOnly
                  className="formbold-form-input"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
