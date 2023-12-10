# Toll Calculator

Toll Calculator is a React web application that helps users calculate toll costs between two locations, taking into account factors such as the type of vehicle, departure time, and route information.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

The Toll Calculator project allows users to easily determine the toll costs for a specified route based on their vehicle type, departure time, and starting and ending locations.

## Features

- Calculate toll costs for a specified route.
- Visualize the route on an interactive map.
- Customizable input for vehicle type and departure time.

## Getting Started

To use the Toll Calculator locally, follow the instructions below.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/toll-calculator.git
2. Navigate to the project directory:
   ```bash
   cd toll-calculator
3. Install dependencies:
   ```bash 
   npm install
   
### Configuration

Obtain API keys for the following services:

OpenCage Geocoding API
TollGuru API
# Configure Environment Variables:

REACT_APP_OPENCAGE_API_KEY=your-opencage-api-key
REACT_APP_TOLLGURU_API_KEY=your-tollguru-api-key

## Folder Structure

- **`src/`:** Contains the source code of the application.
  - **`components/`:** Houses React components used in the application.
    - **`MapComponent/`:**
      - `MapComponent.js`: Manages the rendering of the map using the React Leaflet library.
      - `MapComponent.css`: Styles for the MapComponent.
    - **`UserGuide/`:**
      - `UserGuide.js`: Contains the user guide with step-by-step instructions.
      - `UserGuide.css`: Styles for the UserGuide.
    - **`TollCalculator/`:**
      - `TollCalculator.js`: Manages the state of the application, including start and end addresses, coordinates, departure time, vehicle type, and toll details.
      - `TollCalculator.css`: Styles for the TollCalculator.
- **`public/`:** Contains static assets and the main HTML file.
  - `index.html`: The main HTML file for the React application.
  - `favicon.ico`: Favicon for the application.
- **`.env`:** Configuration file for environment variables.
- **`README.md`:** Documentation for the project.
- **`package.json`:** Metadata about the project and its dependencies.

This structure reflects the organization of your components into separate folders, each containing its corresponding JavaScript file and CSS file. Adjust the folder names and structure based on your specific project organization.


## TollCalculator.js
Manages the state of the application, including start and end addresses, coordinates, departure time, vehicle type, and toll details.
Uses the TollGuru API to calculate toll information based on user input.
Displays a user interface with input fields for addresses, departure time, and vehicle type.
Renders a map using the MapComponent component.
Displays toll details such as cash cost, fuel cost, distance, and additional information.

## MapComponent.js
Uses the React Leaflet library to render a map with a tile layer from OpenStreetMap.
Places markers on the map for the start and end points.
Draws a polyline on the map to represent the route between the start and end points.

## UserGuide.js
Displays a user guide with information on how to use the toll calculator application.
Provides step-by-step instructions for entering starting and destination points, departure time, selecting a vehicle type, and calculating tolls.
Includes a "Close" button to hide the user guide.

 ## Additional Notes:
The code includes commented-out sections related to decoding polylines and displaying toll details, which you may uncomment and use based on your requirements.
The application uses the OpenCage Geocoding API to obtain coordinates for addresses.
The TollGuru API key is included in the code. Be sure to keep sensitive information like API keys secure and consider using environment variables for added security.

## Usage
Enter the starting and destination points in the input fields.
Select the departure time and vehicle type from the dropdowns.
Click the "Calculate Toll" button to get the toll details and visualize the route on the map.

## Contributing
If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/new-feature.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature/new-feature.
5. Submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
Thanks to the creators of OpenCage Geocoding API and TollGuru API for providing essential services.
Special thanks to the React and Leaflet communities for their powerful libraries.
