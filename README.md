<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img width="1428" alt="image" src="https://user-images.githubusercontent.com/89473016/233640022-b2933d1a-610f-433c-a26b-016639883ed8.png">

  <h3 align="center">Face Recognition API</h3>

  <p align="center">
    An AI Face Recognition App <a href="https://merry-marigold-e75c7c.netlify.app/">Live Demo</a>
    </p>
   
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#start">Start</a></li>
        <li><a href="#test">Test</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-roadmap">Future roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is an AI Face Recognition App built with Clarifai AI API.

Users can sign up with email and login to their account.

They can update an image url to detect faces from the image. And entry count will be updated.

All data will be stored in the database.

This repo containes the backend code. For frontend source code, please visit [here](https://github.com/SimpleLuke/Face-Recognition-App/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Express
- Clarifai API
- bcrypt-nodejs
- PostgreSQL
- knex


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
  
- PostgreSQL database
1. Install PostgreSQL

   ```
   brew install postgresql@15
   ```

2. Start PostgreSQL server
   ```
   brew services start postgresql
   ```
3. Create database
   ```
   psql -h 127.0.0.1
   CREATE DATABASE database_name;
   ```
4. Create tables
   ```
   psql -h 127.0.0.1 database_name
   
   CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
   );

   CREATE TABLE login (
     id serial PRIMARY KEY,
     hash VARCHAR(100) NOT NULL,
     email text UNIQUE NOT NULL
   );
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SimpleLuke/smart-brain-api/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Start

1. Start the local server

   ```
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

| Endpoint      | Method | Request | Response |
| ----------- | ----------- | ------ | ----- |
| /signin      | POST       | email, password | id, name, email, entries, joined |
| /register   | POST        | name, email, password | id, name, email, entries, joined |
| /profile/:id | GET        | N/A | id, name, email, entries, joined |
| /image     | PUT        | id | (count of entries string) |
| /imageUrl | POST        | input | outputs |



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Future roadmap

- [ ] Add unit and integration test

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions make the open-source community a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion to improve this, please fork the repo and create a pull request. You can also open an issue with the tag "enhancement".
Remember to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Website - [Luke Lai](https://lukelai.tech/)
- LinkedIn - [Luke Lai](https://www.linkedin.com/in/luke-lai-309a3522b/)
- Twitter - [@LukeLaiDev](https://www.twitter.com/LukeLaiDev)

Project Link: [**[Face Recognition App](https://github.com/SimpleLuke/Face-Recognition-App/)**]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Render](https://render.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Unsplash](https://unsplash.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
