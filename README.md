# Quran Search App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Setup Instructions](#setup-instructions)

## Introduction

The Quran Search App is a web application that allows users to search for Quran verses by entering a search term. The app fetches results from the Quran Cloud API and displays them in a user-friendly interface. The app also includes user login functionality, validated through firebase

## Features

- User Login **There is only one user credential in firebase to login, which is:**
    `[email: admin@gmail.com], [password: 123456]`
- Search Quran verses
- Display search results below the search bar in the same page

## Architecture

The application follows a simple architecture:

1. **Frontend**: Built with React, it consists of `Login` and `Search` components, and `styles.css` for theme.
2. **Backend**: There is no traditional backend server. Instead, it uses firebase for storing user credentials and the Quran Cloud API for fetching search results.

### Components
- `App.js`: Main component that handles routing and user authentication state.
- `Login.js`: Component for user login.
- `Search.js`: Component for searching and displaying Quran verses.

## Setup Instructions
download or git clone https://github.com/S2Ahmad/quran-search in VSC or other program, then run in terminal 'cd quran-search', then run 'npm install' then run 'npm start' and it will make a local server to use the website.

