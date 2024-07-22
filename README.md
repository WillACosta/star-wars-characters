### @star-wars-characters

This project is built with Next.js that displays information about characters from the Star Wars universe. You can browse through a list of characters, view detailed information about each of them, and filter characters home world/planets. The application fetches data from [Star Wars API](https://swapi.dev/) and presents it in an easy-to-navigate interface.

Production URL: https://star-wars-characters-five.vercel.app/

#

- **[Features and Architecture](#features-and-architecture)**
- **[Technical Resources](#technical-resources)**
- **[Possible Improvements](#possible-improvements)**
- **[Getting Started](#getting-started)**
  - **[Running unit tests](#running-unit-tests)**

<br>

![Screenshot showing the app](docs/images/screenshot.jpeg 'Screenshot showing the app')

<br>
<br>

# Features and Architecture

This project is built on top of concepts like [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) and [Separation of Concerns](https://www.geeksforgeeks.org/separation-of-concerns-soc/). We have a main feature of showing the characters from Star Wars universe provided by **Star Wars API**, also, we provide an option to filter the results by planet/home-world of the characters.

This project uses a modularization approach, to organize and follow the best architecture guidelines, as you can see in the representation of the main layers below:

<br/>
  <img align="center" src="docs/images/layers.png">
<br/>

Take a look into how the app's folder structure looks like:

```
.
├── app                   # app level (framework)
│
├── components            # common ui components
│   ├── atoms
│   ├── layout
│   └── molecules
│
├── modules
│   ├── characters
│   │    ├── data
│   │    ├── di             # dependency injection container
│   │    ├── domain         # business rules and models
│   │    ├── infra          # class adapters for external services
│   │    └── presentation   # ui code for this module
│   │
│   └─── core
│        └── ...
.
```

# Possible Improvements

### Better API Results & Contracts

As the application grown, we could implement a better approach for the API response to be consistent with the data the frontend needs. In this case, the name of the planet could already be included in the request of each character. By using a BFF (Backend for Frontend), for example, the idea is always to reduce the workload and keep business logic centralized in the backend.

### About Tailwind CSS Styles

The usage of Tailwind CSS First Class strategy is very interesting because it uses the concept of Declarative UI. I first encountered this concept in Flutter and Jetpack Compose, which made me think about the tools we have for the web. With Tailwind, we can quickly "dictate" how the UI will look, and we have very robust control to achieve a "pixel-perfect" state and replicate UI prototypes.

One of the downsides, which is widely discussed in the community, is the excessive use of classes "polluting" the HTML. However, this can be addressed nowadays by using a feature in Tailwind called `@apply`, which allows us to define a set of classes and use as a single name.

### E2E Testing

UI test is a very important quality aspect of a good application, to prevent possible issues and improve the user experience, to achieve this we could implement a set of E2E (End-to-End) tests using tools like [Cypress](https://www.cypress.io/) and implementing automated tests. Also, we could integrate it with CI/CD workflows.

<br>

# Technical Resources

- Clean architecture, SOLID and atomic design concepts
- Usage of a simple state management with native hooks
- Unit tests with Jest
- Responsive version using Media Query rules
- CI workflow with GitHub Actions
- Usage of Tailwind CSS and CSS Motion Animations
- Usage of Next.js, React and TypeScript
- Accessibility implementations for UI components
- Context API from React to distribute state across components
- Next Api Route Handler

# Getting Started

1. First you need to setup your environment with Node.js, you can find more information in the [official docs](https://nodejs.org/en).

- After setting up your Node env, you'll need to install `pnpm`, as this project uses it to manage dependencies.

```shell
brew install pnpm # for macOS
npm i -g pnpm # using node
```

- For more options, head to the [documentation](https://pnpm.io/installation).

2. After that, clone this repository in your local machine.

```shell
git clone https://github.com/WillACosta/star-wars-characters.git
```

3. Go to the place you cloned the repository and runs the following command in the root path, to get a copy for `.env` file, and fill it with the proper values.

```shell
cp .env.example .env
# open the file and add the SW API URL (Get on https://swapi.dev/)
```

4. Finally, run the following command in a terminal (still in the root path):

```shell
pnpm dev
```

5. Now you should be able to visit `localhost:3000` and see the application in action.

## Running unit tests

Just run the following command in a terminal:

```shell
pnpm test
```
