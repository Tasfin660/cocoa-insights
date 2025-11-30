# Cocoa Insights

A fully custom MERN project, built for fun, learning, and experimentation. Explore chocolates from global brands, browse luxury collections, and manage items using a simple login system — all served through a unique single-server architecture.

## Preview

![Preview](https://cdn.dribbble.com/userupload/45859249/file/46951562f8261130257159a11c82f8b5.png?resize=1905x977&vertical=center)

**Live Site:** [Cocoa Insights](https://cocoa-insights.vercel.app/)\
**Design on Dribbble:** [Cocoa Insights](https://dribbble.com/shots/26822234-Cocoa-Insights)

## Features

- View chocolates from popular brands
- Filter chocolates by brands
- Explore chocolates from luxuy brands
- Simple login system
- Add or delete chocolates

## Tech Stack

**Frontend:** React, TypeScript, React Hook Form, React Router v6, TailwindCSS  
**Backend:** Express.js, MongoDB

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

## Frontend + Backend Integration

Thanks to a custom setup by my friend [RifatMahmudno-1](https://github.com/RifatMahmudno-1), this project uses **one Node server for everything**, instead of running Vite and Express separately.

- **Production:**  
  The client is built using `npm run build`, and the Express server serves those static files.

- **Development:**  
  Vite runs as a **middleware inside Express**, so development also happens through a single server.

This makes the project feel cleaner, simpler, and easier to run.

## Project Background

This is my first **MERN stack project**. I built it primarily to **learn and get familiar with the stack**. I used **React Router** and **React Reducer with Context API** on the frontend, and created a **custom backend with Express**.

The project is a **simple CRUD app with basic authentication**, but building it gave me **hands-on experience with full-stack development**, helped me understand client-server integration, and taught me a lot about structuring a project and managing state effectively.
