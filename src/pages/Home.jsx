import { useNavigate } from 'react-router-dom';
import brew_bkgd from "../img/home.jpg";
import styled from "styled-components";
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { useQuery } from '@tanstack/react-query';
import beerIconUrl from '../img/beer-2.png'; 

// Create a custom beer icon
const beerIcon = L.icon({
  iconUrl: beerIconUrl,
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon that corresponds to the marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${brew_bkgd});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  h2{
    margin: 1rem;
  }
  h3{
    color: white;
  }
  .wholeContent {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
  }
  .wholeContent::-webkit-scrollbar {
    display: none;
  }
  .wholeContent {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .contentSection {
    margin: 20px auto;
    height: 80vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    .dataContainer {
      overflow-y: scroll;
    }
    .dataContainer::-webkit-scrollbar {
      display: none;
    }
    .dataContainer {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
`;


// function fetches info for breweries 
const fetchBreweries = async (zip) => {
  const response = await axios.get(
    `https://api.openbrewerydb.org/v1/breweries?by_postal=${zip}`
  );
  console.log('Data:', response.data)
  return response.data;
};

const Home = () => {
  // # Gives us access to the history object, which can be used to redirect from one component to another
  const navigate = useNavigate();

  const [zip, setZip] = useState('95380'); // Default zip code
  const [mapCenter, setMapCenter] = useState([37.4947, -120.8466]); // Default center to Turlock CA

  // Use React Query to fetch breweries
  const {
    data: breweries,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['breweries', zip], // Unique key for the query
    queryFn: () => fetchBreweries(zip), // Function to fetch data
    enabled: false, // Disable automatic fetching on mount
  });

  const handleSearch = () => {
    refetch(); // Trigger the query manually
    if (breweries && breweries.length > 0) {
      const { latitude, longitude } = breweries[0];
      if (latitude && longitude) {
        setMapCenter([parseFloat(latitude), parseFloat(longitude)]);
      }
    }
  };

  return (
    <MainWrapper>
      <article className="wholeContent">

        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>Find Breweries Near You</h3>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Enter city or zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              style={{ padding: '10px', width: '300px', marginRight: '10px' }}
            />
            <button onClick={handleSearch} style={{ padding: '10px 20px' }}>
              Search
            </button>
          </div>

          {isLoading && <p>Loading breweries...</p>}
          {isError && <p>Error fetching breweries. Please try again.</p>}

          <div style={{ height: '70vh', width: '100%' }}>
            <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {breweries &&
                breweries.map((brewery) => {
                  if (brewery.latitude && brewery.longitude) {
                    return (
                      <Marker
                        key={brewery.id}
                        position={[parseFloat(brewery.latitude), parseFloat(brewery.longitude)]}
                      >
                        <Popup>
                          <strong>{brewery.name}</strong>
                          <br />
                          {brewery.street}
                          <br />
                          {brewery.city}, {brewery.state} {brewery.postal_code}
                        </Popup>
                      </Marker>
                    );
                  }
                  return null;
                })}
            </MapContainer>
          </div>
        </div>
      
      </article>
    </MainWrapper>
  );
};

export default Home;