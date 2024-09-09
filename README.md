# Smart User Management App 🕵️

## Overview

This is a React application that manages and displays user information. It leverages Redux for state management and Axios for fetching user data from an API. The app features a search functionality that allows users to filter the displayed user list based on various criteria.

## Features

- **User List**: Displays a list of users fetched from a remote API. 📋
- **Search Functionality**: Allows users to filter the list by name, username, email, and phone number. 🔍
- **Loading and Error States**: Displays loading indicators and error messages as needed. ⏳🚫
- **Reset Filters**: Provides an option to reset the search filters. 🔄

## Technologies Used

- **React**: Frontend library for building user interfaces. ⚛️
- **Redux**: State management for handling user data and search filters. 🔄
- **Redux Toolkit**: Simplifies Redux logic with slices and thunks. 🛠️
- **Axios**: HTTP client for fetching data from the API. 📦
- **TypeScript**: Adds type safety to the application. 🔤
- **CSS Modules**: Scoped CSS for component styling. 🎨
- **Font Awesome**: Icons for the search inputs. 📐

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

   git clone `git@github.com:olga-kacala/Smart.git`

2. **Navigate to the Project Directory**

    cd your-repo-name

3. **Install Dependencies**

    npm install

4. **Start the Development Server**

    npm start

    The app will be running on `http://localhost:3000`. 🌐

## Usage

    Search by Name: Enter a name in the search input to filter users by their name. 🕵️
    Search by Username: Enter a username to filter users by their username. 🆔
    Search by Email: Enter an email to filter users by their email. 📧
    Search by Phone: Enter a phone number to filter users by their phone number. 📞
    Reset Filters: Click on the header to reset all search filters and display the complete user list. 🔄

## Project Structure

    src/index.tsx: Entry point of the application. 🚀
    src/App.tsx: Main application component that includes the header, user table, and footer. 🏠
    src/redux/store.ts: Configures the Redux store. 🏗️
    src/redux/usersSlice.ts: Manages user data and search filters using Redux Toolkit. 📊
    src/components/header/Header.tsx: Header component with a reset functionality. 🧩
    src/components/home/UserTable.tsx: Displays the list of users with search functionality. 📈
    src/components/footer/Footer.tsx: Footer component with links to GitHub and LinkedIn profiles. 🔗
