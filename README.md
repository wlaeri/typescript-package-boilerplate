# Typescript Package Boilerplate

This repo contains boilerplate for setting up an npm package.

## Tools

- TypeScript
- VSCode
- ESLint
- Prettier
- Jest
- JSDoc

## Usage

```sh
# Clone this repo to start your project
git clone git@github.com:wlaeri/typescript-package-boilerplate.git

# Change your working directory to the project root
cd ./typescript-package-boilerplate

# Reset the project's git history
rm -rf .git && git init

# Add your project's remote origin
git remote add origin YOUR_PROJECT_GIT_URL
```

## Installation

```sh
# Install package dependencies
npm i
```

## Testing

```sh
# Run linting, unit, and integration tests
npm t

# Run linter
npm run lint

# Run unit tests in `src`
npm run test:unit

# Run integration tests in `__tests__`
npm run test:integration
```
