<br />
<p align="center">
  <div align="center">
    <img height="150" src="./docs/readme/logo.png" alt="ankasa" border="0"/>
  </div>
  <h3 align="center">Ankasa App</h3>
  <p align="center">
    <a href="https://github.com/alifankebima/ankasa-backend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://insancitaticket.vercel.app/">View Demo</a>
    ·
    <a href="https://clear-newt-getup.cyclic.app/">Api Demo</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Installation](#installation)
  - [Documentation](#documentation)
  - [Related Project](#related-project)
- [Contributors](#contributors)
  - [Meet The Team Members](#meet-the-team-members)

# About The Project

Tired with your daily life and need a quick vacation to another city and / or country? Worry not, Ankasa will help you find a flight ticket to any popular destination in the world. Start creating an account to buy you and your family a ticket to Bali, you can use a filter to get the cheapest and most comfortable flight there is to maximize your holiday plan. This project was done in a team.

## Built With

These are the libraries and service used for building this backend API

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)
- [Json Web Token](https://jwt.io)
- [Multer](https://github.com/expressjs/multer)
- [Google Cloud Platform](https://cloud.google.com)

# Installation

Follow this steps to run the server locally :

1. Clone this repository

```sh
git clone https://github.com/alifankebima/ankasa-backend.git
```

2. Change directory to ankasa-backend

```sh
cd ankasa-backend
```

3. Install all of the required modules

```sh
npm install
```

4. Create PostgreSQL database, query are provided in [ankasa-database-query.sql](./docs/ankasa-database-query.sql)

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env.example](./.env.example)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

```sh
npm run server
```

- Or run this command for running in development environment

```sh
npm run dev
```

- Run this command for debugging and finding errors

```sh
npm run lint
```

## Documentation

Documentation files are provided in the [docs](./docs) folder

- [Postman API colletion](./docs/Ankasa.postman_collection.json)
- [PostgreSQL database query](./docs/ankasa-database-query.sql)
- [Database diagram](./docs/ankasa-database-diagram.drawio.png)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/26309865/2s93RTQXQB)

## Related Project

:rocket: [`Frontend Ankasa`](https://github.com/alifankebima/ankasa-frontend)

:rocket: [`Backend Ankasa`](https://github.com/alifankebima/ankasa-backend)

:rocket: [`Demo Ankasa`](https://insancitaticket.vercel.app/)

# Contributors

This backend API is created by 3 backend team members and 1 support member, where each member have different tasks

[@alifankebima (Alif Anke Bima Putra)](https://github.com/alifankebima) :

- Relational database design
- Flights CRUD
- Booking CRUD
- Passengers CRUD
- Notification CRUD
- Postman API documentation

[@rrizalyuniar (R. Rizal Yuniar Sutono)](https://github.com/rrizalyuniar) :

- Airline CRUD
- City CRUD
- Credit Card CRUD
- Email verification implementation

[@andkvnt (Andiko Oktavianto)](https://github.com/andkvnt) :

- Reviews CRUD
- Flights, airlines, and city dummy data

[@preedok (Muhamad Iqbal Aprido)](https://github.com/preedok) (Support member) :

- Team leader
- Authentication with JWT
- Users CRUD
- Admin CRUD
- Chat CRUD

## Meet The Team Members

<center>
  <table align="center">
    <tr >
      <th >Fullstack Developer / Product Manager</th>
      <th >Backend Developer</th>
      <th >Backend Developer</th>
      <th >Backend Developer</th>
      <th >Frontend Developer</th>
      <th >Frontend Developer</th>
    </tr>
    <tr >
      <td align="center">
        <a href="https://github.com/preedok">
          <img width="200" src="./docs/readme/iqbal.jpg" alt="Muhamad Iqbal Aprido"><br/>
          <b style="font-size:12px">Muhamad Iqbal Aprido</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/alifankebima">
          <img width="200" src="./docs/readme/alif.jpg" alt="Alif Anke Bima Putra"><br/>
          <b style="font-size:12px">Alif Anke Bima Putra</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/andkvnt">
          <img width="200" src="./docs/readme/andhiko.jpg" alt="Andiko Oktavianto"><br/>
          <b style="font-size:12px">Andiko Oktavianto</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/rrizalyuniar">
          <img width="200" src="./docs/readme/rizal.jpg" alt="R. Rizal Yuniar S."><br/>
          <b style="font-size:12px">R. Rizal Yuniar S.</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/hosealeonardo18">
          <img width="200" src="./docs/readme/hose.jpg" alt="Hosea Leonardo"><br/>
          <b style="font-size:12px">Hosea Leonardo</b>
        </a>
      </td>
     <td align="center">
        <a href="https://github.com/RezaldhoArmadhani">
          <img width="200" src="./docs/readme/aldho.jpg" alt="Rezaldho Armadhani"><br/>
          <b style="font-size:12px">Rezaldho Armadhani</b>
        </a>
      </td>
    </tr>
  </table>
</center>

Project link : [https://github.com/alifankebima/ankasa-backend](https://github.com/alifankebima/ankasa-backend)
