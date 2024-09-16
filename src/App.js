import React from 'react';
import LeadForm from './LeadForm';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="caring-logo.png" alt="Company Logo" />
        <h1>Bienvenus à la FFER</h1>
        <p>Apprenez-en plus sur nos produits et inscrivez-vous pour recevoir des mises à jour !</p>
      </header>
      <main>
        <LeadForm />
      </main>
      <footer className="App-footer">
        <p>Powered by OpenIVF</p>
      </footer>
    </div>
  );
}

export default App;
