# NextJS Basic Login with Firebase

This is a basic [Next.js](https://nextjs.org) template that uses [Next-Auth](https://next-auth.js.org) and [Firebase](https://firebase.google.com) to authenticate users and shows my GitHub repos.

## Make it yours

You can make it yours by creating a `.env` file and getting the `Client ID and Secret` by following the steps mentioned in the [next-auth docs](https://next-auth.js.org/providers/) because they are descriptive and well-documented.

```bash

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_GITHUB_REPO_URL="api.github.com/users/<username>/repos"

```

## How To Use

From your command line, clone and run devFolio:

```bash
# Clone this repository
git clone https://github.com/realtouseef/devfolio.git

# Go into the repository
cd devFolio

# Install dependencies
npm install
yarn install

# Start a local dev server
npm start
yarn dev
```

## Technologies Used

- [NextJS](https://nextjs.org/)
- [TaiwlindCSS](https://tailwindcss.com/)
- [Next-auth](https://www.next-auth.js.org)
- [Firebase](https://www.firebase.google.com)
