import React from 'react';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import WeatherForecast from './components/WeatherForecast';
import WeatherMap from './components/WeatherMap';
import Footer from './components/Footer';
import "./Main.css";

function App() {

  const weatherData = {
    temperature: 17, 
    condition: '비', 
  };

  return (
    <div className="Main">
      <Header />
      <div>
        <WeatherInfo data={weatherData} location="부산" />
        <WeatherForecast />
        <WeatherMap />
      </div>
      <Footer />
    </div>
  );
}

export default App;
