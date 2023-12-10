import React, { useState, useEffect } from "react";
import axios from "axios";
import * as polyline from "@googlemaps/polyline-codec";
import MapComponent from "../MapComponent/MapComponent";
import UserGuide from "../UserGuide/UserGuide";
import "./TollCalculator.css";

const TollCalculator = () => {
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [startLatLng, setStartLatLng] = useState({ lat: 0, lng: 0 });
  const [endLatLng, setEndLatLng] = useState({ lat: 0, lng: 0 });
  const [departureTime, setDepartureTime] = useState("");
  const [vehicleType, setVehicleType] = useState("2AxlesAuto");
  const [tollDetails, setTollDetails] = useState(null);
  const [showUserGuide, setShowUserGuide] = useState(false);

  const handleUserGuideClick = () => {
    setShowUserGuide(true);
  };

  const handleCloseUserGuide = () => {
    setShowUserGuide(false);
  };

  const handleWaypointChange = async (index, value) => {
    if (index === 0) {
      setStartAddress(value);
    } else if (index === 1) {
      setEndAddress(value);
    }
  };

  const handleDepartureTimeChange = (e) => {
    setDepartureTime(e.target.value);
  };

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleCalculateToll = async () => {
    try {
      const startingPoint = await getCoordinates(startAddress, 0);
      const destinationPoint = await getCoordinates(endAddress, 1);
  
      const encodedPolyline = polyline.encode([
        startingPoint,
        destinationPoint,
      ]);
  
      const response = await axios.post(
        "https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service",
        {
          mapProvider: "google",
          polyline: encodedPolyline,
          vehicle: {
            type: vehicleType,
          },
          departure_time: new Date(departureTime).getTime() / 1000,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Gf32tR9HNmBmr9D8rrjJnjTmBppDGq7T",
          },
        }
      );
  
      // const decodedPolyline = polyline.decode(response.data.trip?.polyline);
      // const tolls = response.data.trip.tolls;
      const summary = response.data.summary;
      const route = response.data.route;
  
      setTollDetails({
        // polyline: decodedPolyline,
        // tolls: tolls,
        summary: summary,
        route: route,
      });
      console.log(tollDetails)
    } catch (error) {
      console.error("Error calculating toll:", error);
    }
  };
  

  const getCoordinates = async (address, index) => {
    try {
      const apiKey = "0ebe45df04ad443bba639f6836c796f2";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const firstResult = data.results[0];
        const { lat, lng } = firstResult.geometry;

        if (index === 0) {
          setStartLatLng({ lat, lng });
        } else if (index === 1) {
          setEndLatLng({ lat, lng });
        }

        return { lat, lng };
      } else {
        throw new Error("Coordinates not found for the address");
      }
    } catch (error) {
      console.error("Error getting coordinates:", error);
      throw error;
    }
  };

  return (
    <>
      <div className="main-container">
        <header>
          <h1>Toll Calculator</h1>
          <button className="user-guide-btn" onClick={handleUserGuideClick}>
            User Guide
          </button>
        </header>
        {showUserGuide && <UserGuide onClose={handleCloseUserGuide} />}
        <div className="container">
          <div className="toll-calculator-container">
            <div className="input-container">
              <span>Starting:</span>
              <input
                type="text"
                placeholder="Enter starting point"
                value={startAddress}
                onChange={(e) => handleWaypointChange(0, e.target.value)}
              />
              <span>End:</span>
              <input
                type="text"
                placeholder="Enter destination"
                value={endAddress}
                onChange={(e) => handleWaypointChange(1, e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="departureTime">Departure Time:</label>
              <input
                type="datetime-local"
                id="departureTime"
                value={departureTime}
                onChange={handleDepartureTimeChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="vehicleType">Vehicle Type:</label>
              <select
                id="vehicleType"
                value={vehicleType}
                onChange={handleVehicleTypeChange}
                style={{ padding: "10px" }}
              >
                <option value="2AxlesAuto">Auto</option>
                <option value="2AxlesMotorcycle">Bike</option>
                <option value="2AxlesBus">Bus</option>
                <option value="4AxlesTruck">Truck</option>
              </select>
            </div>
            <button className="calculatebtn" onClick={handleCalculateToll}>
              Calculate Toll
            </button>
          </div>
          <div className="map-container">
            <MapComponent
              waypoints={[startLatLng, endLatLng]}
            />
          </div>
           
        </div>
        <div className="tollDetails">
          {tollDetails && (
              <div className="toll-details-container">
                <h2>Toll Details</h2>
                <p><b>Cash Cost</b>: {tollDetails.route.costs.cash}</p>
                <p><b>Fuel Cost</b>: {tollDetails.route.costs.fuel}</p>
                <p><b>Distance</b>: {tollDetails.route.distance.metric}</p>
                <p><b>Currency</b>: {tollDetails.summary.units.currencyUnit}</p>
                <h2>Additionl Information</h2>
                <p><b>Vehicle Type</b>: {tollDetails.summary.vehicleType}</p>
                <p><b>Departure Time</b>: {tollDetails.summary.departureTime}</p>
                <p><b>Vehicle Description</b>: {tollDetails.summary.vehicleDescription}</p>
                <ul>
                  {/* {tollDetails.tolls.map((toll, index) => (
                    <li key={index}>
                      Location: {toll.location.lat}, {toll.location.lng} | Cost:
                      ${toll.cost}
                    </li>
                  ))} */}
                </ul>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default TollCalculator;
