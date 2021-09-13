# Autofi Social Network

## React app created to simulate a social network

## Goals

- Fetch posts from API and show it in the view.
- Show post related comments
- Create a new comment and save on the state using Redux. 

## Screens

### Feed
<div align="center">
	<img src="/.github/autofi-feed-mobile.png" alt="products-mobile" style="width:30%"/>
</div>

### Comment section expanded

<div align="center">
	<img src="/.github/autofi-comments.png" alt="products-mobile" style="width:30%"/>
</div>

## Technologies used and why

- [TypeScript](https://www.typescriptlang.org/) for features such as greater productivity and easier understanding of the code.
- [React](https://reactjs.org/) for being component based and easy to learn and use.
- [Eslint](https://eslint.org/) to find problems and automatically fix them.
- [Axios](https://axios-http.com/docs/intro) to make http requests from the browser and easily transform request and response data.
- [Redux](https://redux.js.org/) to create and manage a centralized state and logic.
- [Styled Components](https://styled-components.com/) to create less bulky components and with scoped styles.
- [Immer](https://immerjs.github.io/immer/) to help handling immutable data.
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/) to automatically test the components.

## What can be improved in future versions?

This app was developed to meet the basic requirements but there are several improvements that can be implemented in the future, such as:

- Pagination: The app is currently listing all API posts with no page limit.
- Persist the comment in the state: If the page is reloaded the comments are lost.

## How to run?

- Clone this repository:

```bash
$ git clone https://github.com/cp-yago/autofi-challenge.git
```

- Access the project folder

```bash
$ cd autofi-challenge
```

- Install the dependencies:

```bash
$ yarn 
```

- Execute:

```bash
$ yarn start
```

- Run the tests:

```bash
$ yarn test
```


## Contacts

Linkedin: [Yago Cunha](https://www.linkedin.com/in/yagocunha/).

Email: [yago.cunha123@gmail.com](yago.cunha123@gmail.com).
