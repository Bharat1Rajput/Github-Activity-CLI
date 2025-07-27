# GitHub Activity CLI 🔧

A simple Command Line Interface (CLI) tool to fetch and display the recent public activity of any GitHub user directly from your terminal.

## ✨ Features

- Fetches recent GitHub activity of any user.
- Displays up to 10 most recent events (commits, issues, stars, forks, PRs).
- Handles invalid usernames and network/API errors gracefully.
- No external libraries used — built with native Node.js modules.

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) installed on your system (version 12 or higher).

## 🚀 Installation

**Clone the repository (or copy the code):**

   ```bash
   git clone https://github.com/Bharat1Rajput/Github-Activity-CLI.git
   cd Github-Activity-CLI
   ```
   *** You can also add the package.json file - npm init -y ***
   ```
   {
  "name": "github-activity",
  "version": "1.0.0",
  "main": "github-activity.js",
  "scripts": {
    "start": "node github-activity.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

***Run the command in terminal***
```
npm start <username>
```

###Example
```
 D:\Github-Activity> npm start Bharat1Rajput

> github-activity@1.0.0 start
> node github-activity.js Bharat1Rajput

- 🍴 Forked freeCodeCamp/boilerplate-project-filemetadata
- 🟢 Pushed 1 commit(s) to Bharat1Rajput/boilerplate-project-exercisetracker
- 🍴 Forked freeCodeCamp/boilerplate-project-exercisetracker
- 🟢 Pushed 1 commit(s) to Bharat1Rajput/boilerplate-project-urlshortener
- 🍴 Forked freeCodeCamp/boilerplate-project-urlshortener
- 🟢 Pushed 1 commit(s) to Bharat1Rajput/boilerplate-project-headerparser
- 🍴 Forked freeCodeCamp/boilerplate-project-headerparser
```

##📄 Code Structure
https module is used to send a GET request to the GitHub API.

process.argv is used to read command-line arguments.

JSON response is parsed and displayed.

Graceful error handling is done for API failures or incorrect usernames.

##🧪 Testing
Try with different usernames, including:

Valid: torvalds, octocat

Invalid: someRandomNameThatDoesNotExist

## Improvements You Can Add
Filter by event type (only show commits or stars).

Colorize output using chalk (if you decide to use libraries).

Cache response to reduce GitHub API rate limits.

Export activity to a .txt or .json file.

##❗ Notes
GitHub API requires a User-Agent header; we’ve set a custom one in the request.

No GitHub authentication used — this uses public endpoints.

##📜 License
MIT License © 2025 Bharat Singh Rajput
