# Quantum Metrics Exercise

![Project Screenshot](https://raw.githubusercontent.com/themeblvd/qm-challenge/master/screenshot.png)

## Quick Start

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Run `npm run start` to start the development server and watch for changes.
4. View development server in your web browser at `http://localhost:8080`.

## Project Structure

* `public/` - **Compiled client-side React app from Webpack.**
    * `assets/` - Compiled assets for React app.
    * `index.html` - Root client-side HTML file.
* `server/` - **Server files, utilizing Express.**
    * `routes/` -  API routes, organized by the endpoint.
    * `index.js` - Entry point for running development server, Uses port `8080`.
* `src/` - **Source files to build client-side React app.**
    * `assets/` - Any images, SCSS files, etc.
    * `components/` - React components.
    * `store/` - Redux store files.

*Note: For simplification of the exercise, there's no production build for this project.*

## Terminal Commands

* `npm run start` - Start the development server and watch for file changes.
* `npm run build` - Build the client-side assets.
* `npm run server` - Run the development server.
