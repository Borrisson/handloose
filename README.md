# HandLoose

!["Main Title"](screenshots/Logon_leaderboard.gif)

## Description

This application will help individuals increase their keyboard typing skill whilst playing a game. [Below are screenshots of the project](#DEMO)

## Stack

1. ReactJS
2. Ruby on Rails
3. Bootstrap
4. Phaser

## Getting Started

In order to get your development environment set up.
Make sure to npm install all dependencies inside CLIENT and all bundle install all inside BACKEND.

> **_NOTE:_** Make sure to npm install inside client and bundle install inside backend

### Client

- start development

```
yarn start
```

or

```
npm start
```

- start storybook

```
yarn storybook
```

or

```
npm run storybook
```

- run jest

```
yarn test
```

or

```
npm test
```

### Backend

- development server

```
rails s -p 3001 -b 0.0.0.0
```

The -p flag changes port to 3001 and -b stands for IP binding, it will bind the server to localhost. This is only needed if using a VM.

> **_NOTE:_** You can use "rails s -p 3001" simply if not using VM.

- test server

This has not been setup yet!

## DEMO

!["Initial Game"](screenshots/game.gif)
!["End Game"](screenshots/game2.gif)
!["About"](screenshots/about.gif)
