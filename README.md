# Hacktiv8 X IBM Assignment: Currency Exchange Rates App

A simple React application that displays exchange rates for several currencies (CAD, IDR, JPY, CHF, EUR, GBP) with USD as the base currency. The app also includes "We Buy" and "We Sell" rates for each currency.

## Features

- Fetch exchange rates using the [**CurrencyFreaks API**](https://currencyfreaks.com).
- Display rates for CAD, IDR, JPY, CHF, EUR, and GBP.
- Calculate "We Buy" and "We Sell" rates.
- Styled with **React Bootstrap**.
- Uses **Axios** for API requests.
- Environment variables managed with **.env**.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Arriziqrzyx/Assigment-Rate-Currency-app.git
   cd Assigment-Rate-Currency-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory by copying the `.env.example` file and add your API key:

   ```bash
   cp .env.example .env

   ```

4. Run the app:

   ```bash
   npm run dev
   ```

5. Open your browser at:
   ```
   http://localhost:5173/
   ```
