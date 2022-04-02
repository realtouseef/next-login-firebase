# NextJS Basic Login with Firebase

This is a basic [Next.js](https://nextjs.org) template that uses [Next-Auth](https://next-auth.js.org) and [Firebase](https://firebase.google.com) to authenticate users and shows my GitHub repos.

## Live Version

Check out the Live Version here: `not deployed yet`.

## Table of Contents

- [About](#nextjs-basic-login-with-firebase)
- [Live-version](#live-version)
- [Things Required](#things-required)
- [Make it yours](#make-it-yours)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Support](#-support)

## Things required

Follow these steps

- You need to create a project inside `firebase.google.com` and after that, visit `https://console.developers.google.com/apis/credentials` but make sure to select the project that you have created in `firebase` before.

- And then click the `web client` under `OAuth 2.0 Client IDs` and you will find your `client and secrets` there.

- Next you will have to add the deployed or local frontend link in the field under the `Authorized JavaScript origins`. for instance, `http://localhost:3000`.

- And add `http://localhost:3000/api/auth/callback/google` under the `Authorized redirect URIs`

Save it.

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
git clone https://github.com/realtouseef/next-login-firebase.git

# Go into the repository
cd devFolio

# Install dependencies
npm install
yarn

# Start a local dev server
npm start
yarn dev
```

## Technologies Used

- [NextJS](https://nextjs.org/)
- [TaiwlindCSS](https://tailwindcss.com/)
- [Next-auth](https://www.next-auth.js.org)
- [Firebase](https://www.firebase.google.com)

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
