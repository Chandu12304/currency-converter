# Currency Converter

Link :- https://chandu12304.github.io/currency-converter/

This is a simple web-based currency converter application. It allows users to convert one currency to another by selecting the currencies from dropdowns and entering the amount they wish to convert. The application fetches the latest currency exchange rates from an external API and displays the conversion result.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Limitations](#limitations)
- [Troubleshooting](#troubleshooting)
- [Acknowledgements](#acknowledgements)

## Features
- Dropdowns for selecting "From" and "To" currencies.
- Automatic selection of USD as the default "From" currency and INR as the default "To" currency.
- Display of country flags next to the selected currencies.
- User-friendly interface with input validation.
- Notification alert for the number of remaining requests to the currency API.
- Error handling for failed API requests.

## Technologies Used
- **HTML/CSS**: For building the front-end user interface.
- **JavaScript**: For handling the logic, event listeners, and API requests.
- **CurrencyAPI**: An external API to fetch real-time currency conversion rates.

## How It Works
1. **Dropdown Population**: 
   - The currency dropdowns are populated using a list of currency codes (stored in `countryList`).
   - When the page loads, the dropdowns are automatically filled with these codes.
   - The "From" dropdown defaults to "USD", and the "To" dropdown defaults to "INR".

2. **Flag Update**:
   - When the user selects a currency from the dropdown, the country flag associated with that currency is displayed next to it. This is done by fetching the flag image from `https://flagsapi.com/` using the country's code.

3. **Currency Conversion**:
   - The user inputs an amount and clicks the "Convert" button.
   - The application checks if the user still has remaining API requests (`remain` counter).
   - It then validates the input to ensure it's a valid number.
   - If valid, the application sends a request to the CurrencyAPI using an API key to fetch the latest conversion rates.
   - The conversion result is calculated based on the selected currencies and the input amount.
   - The result is displayed on the page, and the `remain` counter is decremented.

4. **Request Limitation**:
   - The application is designed to limit the number of API requests to 3 per session.
   - If the user exceeds this limit, an alert is shown notifying them that they are out of requests.

## Setup and Installation
1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd currency-converter
   ```
3. **Open the `index.html` File**:
   - You can open the `index.html` file directly in your web browser.

4. **Replace the API Key**:
   - Replace the placeholder API key in the script with your own API key from CurrencyAPI.

## Usage
1. **Select Currencies**:
   - Choose the "From" and "To" currencies from the dropdowns.

2. **Enter the Amount**:
   - Input the amount you wish to convert.

3. **Convert**:
   - Click the "Convert" button to get the conversion result.

4. **View Result**:
   - The converted amount will be displayed on the page.

5. **Check Remaining Requests**:
   - A notification will alert you of the remaining API requests after each conversion.

## Limitations
- The application limits API requests to 3 per session.
- The currency conversion rates are only as accurate as the data provided by the CurrencyAPI.

## Troubleshooting
- **API Errors**:
  - If the API request fails, check your internet connection.
  - Ensure that your API key is valid and has not expired.

- **Input Validation**:
  - Ensure that the amount entered is a valid number greater than zero.

## Acknowledgements
- **CurrencyAPI** for providing the currency conversion data.
- **FlagsAPI** for the country flag images used in the dropdowns.

This project is designed to be a basic introduction to working with APIs in a JavaScript-based web application. Feel free to enhance or modify the code to suit your needs.
