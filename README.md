# YourWallet

<div align="center">

<a href="your-wallet.vercel.app"><img height="600px" src="https://i.imgur.com/hAqxdCx.png" title="source: imgur.com" /> </a>

</div>

## About

YourWallet is an full-stack app developed to make your financial day-to-day life a little bit easier to track.
You can find its online deployment [here](https://your-wallet.vercel.app/). With this aplication, you can:

- Sign Up
- Login
- View all transactions for a user
- Add expense
- Add income

## Technologies [front-end]

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### Installation

1. Clone and install the [back-end repo](https://github.com/fernandollisboa/your-wallet-backend).

2. Clone this repo **in a different folder**

   ```sh
   git clone https://github.com/fernandollisboa/your-wallet-frontend.git
   ```

3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` inside the project's root folder and fill it with your-wallet-backend local execution information (see `.env.example`).
   ```
   REACT_APP_API_BASE_URL=http://localhost:4000/
   ```
5. Start the backend local server
   ```
   ./your-wallet-backend/
   npm start
   ```
6. Start the frontend local server
   ```
   npm start
   ```
