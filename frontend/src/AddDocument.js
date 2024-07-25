import React, { useState } from 'react';
import axios from 'axios';
import BoutonValidation from './Bouton';
import './AddDocument.css';

const AddDocument = () => {
  const [collection, setCollection] = useState('');
  const [formData, setFormData] = useState({});
  
  const handleCollectionChange = (e) => {
    setCollection(e.target.value);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/${collection}`, formData)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  const renderFormFields = () => {
    switch (collection) {
      case 'articles':
        return (
          <>
            <div class="formbold-form-step-1 active">
              <div class="formbold-input-flex">
                <div>
                    <label class="formbold-form-label"> Référence du produit </label>
                    <input type="number" name="reference" placeholder="0684523" onChange={handleChange} required class="formbold-form-input"/>
                </div>
                <div>
                    <label class="formbold-form-label"> Nom </label>
                    <input type="text" name="nom" placeholder="Chaussures enfant" onChange={handleChange} required class="formbold-form-input"/>
                </div>
              </div>

              <div class="formbold-input-flex">
                <div>
                    <label class="formbold-form-label"> Marque </label>
                    <input type="text" name="marque" placeholder="Nike" onChange={handleChange} required class="formbold-form-input"/>
                </div>
                <div>
                    <label class="formbold-form-label"> Prix </label>
                    <input type="number" name="prix" placeholder="85" onChange={handleChange} required class="formbold-form-input"/>
                </div>
                <div>
                <label class="formbold-form-label"> Catégorie </label>
                  <select name="categorie" onChange={handleChange} required class="formbold-form-input">
                    <option value="">Catégorie</option>
                    <option value="enfant">Enfant</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
              </div>
              <div>
                  <label class="formbold-form-label"> Tailles</label>
                  <input type="text" name="tailles" placeholder="38,39,41,43 (séparation par des virgules)" onChange={e => setFormData({ ...formData, tailles: e.target.value.split(',').map(Number) })} required class="formbold-form-input"/>
              </div>
              <p>Informations sur le fournisseur</p>
              <div class="formbold-input-flex">
                <div>
                    <label class="formbold-form-label"> Nom </label>
                    <input type="text" name="fournisseur.nom" placeholder="SportTracker" onChange={handleChange} required class="formbold-form-input"/>
                </div>
                <div>
                    <label class="formbold-form-label"> Ville </label>
                    <input type="text" name="fournisseur.ville" placeholder="75000, Paris" onChange={handleChange} required class="formbold-form-input"/>
                </div>
              </div>
              <p>Informations sur le rayon</p>
              <div class="two-row">
                <div class="formbold-input-flex">
                  <div>
                    <label class="formbold-form-label"> Numéro </label>
                    <input type="number" name="rayon.numero" placeholder="12" onChange={handleChange} required class="formbold-form-input" />
                  </div>
                  <div>
                      <label class="formbold-form-label"> Employé responsable </label>
                      <input type="text" name="rayon.employe" placeholder="661cd06de7314c6791c61d54" onChange={handleChange} required class="formbold-form-input"/>
                  </div>
                </div>
                <div class="formbold-input-flex two-row">
                  <label class="formbold-form-label"> Description </label>
                  <input type="text" name="rayon.description" placeholder="Athlétisme" onChange={handleChange} required class="formbold-form-input"/>
                </div>
              </div>
            </div>

            <BoutonValidation />
          </>
        );
      case 'employe':
        return (
          <>
            <label class="formbold-form-label">Nom</label>
            <input type="text" name="nom" placeholder="Mathieu Durant" onChange={handleChange} required class="formbold-form-input"/>
          
            <BoutonValidation />
          </>
        );
      case 'client':
        return (
          <>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Nom</label>
                <input type="text" name="nom" placeholder="Mme.Le Lilac" onChange={handleChange} required class="formbold-form-input"/>
              </div>
              <div>
                <label class="formbold-form-label">Adresse</label>
                <input type="text" name="nom" placeholder="3 rue du Moulin, 56000 Vannes" onChange={handleChange} required class="formbold-form-input"/>
              </div>
            </div>

            <BoutonValidation />
          </>
        );
      case 'facture':
        return (
          <>
            <div class="two-row">
              <div class="formbold-input-flex">
                <div>
                  <label class="formbold-form-label"> Client </label>
                  <input type="text" name="client" placeholder="661cd06de7314c6791c61d54" onChange={handleChange} required class="formbold-form-input"/>
                </div>
                <div>
                    <label class="formbold-form-label"> Montant </label>
                    <input type="number" name="montant" placeholder="95" onChange={handleChange} required class="formbold-form-input"/>
                </div>
              </div>
              <div class="formbold-input-flex two-row">
                <label class="formbold-form-label"> Articles </label>
                <input type="text" name="articles" placeholder="661cd06de791c61d54, 871ad76rui90cp4q10 (séparation par des virgules)" onChange={e => setFormData({ ...formData, articles: e.target.value.split(',').map(item => item.trim()) })} required class="formbold-form-input"/>
              </div>
            </div>

            <BoutonValidation />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div class="header bold-options-wrapper">
        <p>Ajoutez des documents</p>
        <select onChange={handleCollectionChange} class="formbold-form-input">
          <option value="">Collection</option>
          <option value="articles">Articles</option>
          <option value="employe">Employés</option>
          <option value="client">Clients</option>
          <option value="facture">Factures</option>
        </select>
      </div>
      <div class="formbold-form-step-1 active">
        <div class="formbold-form-wrapper">
          <form onSubmit={handleSubmit}>
          {renderFormFields()}
          </form>
        </div>
      </div>
    </div>
  );
};


export default AddDocument;
