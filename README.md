# Football App ⚽

A football team management application for managing teams, players, games, and statistics. Built with React, TypeScript, and Vite.

## 🚀 Features

### 1. **Players**

-   Add, edit, and delete players
-   Assign players to teams
-   Display list of all players with their numbers

### 2. **Teams**

-   Manage teams (name, founding year, location)
-   Add players to teams
-   Display team roster

### 3. **Games**

-   Create new matches
-   Edit and delete games
-   Match information:
    -   Teams (home vs away)
    -   Date and location
    -   Result
    -   Match duration
    -   Competition type

### 4. **Statistics**

-   **Last played game**: detailed information about the most recent match
-   **Games chart**: visualization of the number of games in selected time period (day/week/month)
-   **Top 3 teams**: ranking of teams by goals scored

## 🛠️ Technologies

-   **React 19** - UI library
-   **TypeScript** - static typing
-   **Vite** - build tool
-   **TanStack Query (React Query)** - data management and caching
-   **Styled Components** - component styling
-   **JSON Server** - mock API backend
-   **ESLint** - code linting

## 📐 Project Requirements

This project was built with the following requirements and constraints:

-   **No routing library** - Navigation is handled through conditional rendering based on state
-   **Styled Components** - Required for all component styling (no CSS modules or plain CSS)
-   **React Query (TanStack Query)** - Required for all data fetching and state management

## 📋 System Requirements

-   Node.js (version 18 or higher)
-   Yarn (or npm)

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd football-app
```

2. Install dependencies:

```bash
yarn install
```

## 🚀 Running the Application

The application requires running two servers:

### 1. API Server (JSON Server)

In one terminal, run:

```bash
yarn node ./src/server.js
```

The API server will be available at: `http://localhost:3000`

### 2. Development Server (Vite)

In a second terminal, run:

```bash
yarn dev
```

The application will be available at: `http://localhost:5173`

## 📁 Project Structure

```
football-app/
├── src/
│   ├── components/          # React components
│   │   ├── Games/           # Game-related components
│   │   ├── Players/         # Player-related components
│   │   ├── Teams/           # Team-related components
│   │   ├── Statistics/      # Statistics components
│   │   └── Header.tsx       # Application header
│   ├── hooks/               # Custom hooks
│   │   ├── useMenu.ts       # Navigation hook
│   │   └── useApi.ts        # API communication hook
│   ├── quieries/            # React Query hooks
│   │   ├── useGetInfoQuery.ts
│   │   ├── useCreateQuery.ts
│   │   ├── useEditQuery.ts
│   │   └── useDeleteQuery.ts
│   ├── types/               # TypeScript type definitions
│   ├── helpers/             # Styled components and utility functions
│   ├── db.json              # JSON Server database
│   └── App.tsx              # Main application component
├── package.json
└── README.md
```

## 🎨 UI Features

-   **Light/Dark mode**: theme toggle in the header
-   **Responsive design**: application adapts to different screen sizes
-   **Intuitive navigation**: easy switching between sections
-   **Data visualization**: bar charts for game statistics

## 📝 Scripts

-   `yarn dev` - start development server
-   `yarn build` - build production application
-   `yarn preview` - preview built application
-   `yarn lint` - run code linter
-   `yarn serve:api` - start JSON Server API

## 🔄 API Endpoints

JSON Server provides the following endpoints:

-   `GET /players` - list players
-   `POST /players` - add player
-   `PUT /players/:id` - edit player
-   `DELETE /players/:id` - delete player

-   `GET /teams` - list teams
-   `POST /teams` - add team
-   `PUT /teams/:id` - edit team
-   `DELETE /teams/:id` - delete team

-   `GET /games` - list games
-   `POST /games` - add game
-   `PUT /games/:id` - edit game
-   `DELETE /games/:id` - delete game

## 🎯 Optimizations

The application utilizes:

-   **React Query** for data caching and automatic refetching
-   **useMemo** for optimizing expensive calculations (sorting, grouping, statistics)
-   **Code splitting** through modular component structure

## 📄 License

This project is part of a React course.

## 👨‍💻 Author

Project created as part of learning React and TypeScript.
