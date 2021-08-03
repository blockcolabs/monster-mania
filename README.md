<img src="./banner.png" width="1200">

<br/>

👋 Welcome! This demo app is created for [BlockCo Labs](https://www.blockcolabs.com/) NFT SaaS Platform. 
- **Monster Mania** is a collection game that uses BlockCo APIs for following use cases -
  - Account Creation ([see example](https://github.com/blockcolabs/monster-mania/blob/bd7c9f18c0cb8036e6ef8782d0d623eb6d8906b5/backend/blockco/api-calls.js#L13))
  - NFT Creation ([see example](https://github.com/blockcolabs/monster-mania/blob/bd7c9f18c0cb8036e6ef8782d0d623eb6d8906b5/backend/blockco/api-calls.js#L46))
  - NFT Retrieval ([see example](https://github.com/blockcolabs/monster-mania/blob/bd7c9f18c0cb8036e6ef8782d0d623eb6d8906b5/backend/blockco/api-calls.js#L118))
  - NFT Transfer ([see example](https://github.com/blockcolabs/monster-mania/blob/bd7c9f18c0cb8036e6ef8782d0d623eb6d8906b5/backend/blockco/api-calls.js#L86))
  - NFT Deletion ([see example](https://github.com/blockcolabs/monster-mania/blob/bd7c9f18c0cb8036e6ef8782d0d623eb6d8906b5/backend/blockco/api-calls.js#L149))
  - Token Refresh ([see example](https://github.com/blockcolabs/monster-mania/blob/bd7c9f18c0cb8036e6ef8782d0d623eb6d8906b5/backend/blockco/api-calls.js#L180))
- It's a full-stack app based on MERN stack.

<br/>

## 👾 Game Description

  Monster Mania is a collection game in which one can win a <b>random</b> Monster NFT daily! There are a total of 10 <b>unique</b> monsters.
  Your goal is to collect all the 10 unique monster NFTs. Once you have completed the collection, you'll win a <b>King Monster NFT</b> to rule the monster world.
  
  🎬 Checkout the **[live demo](https://monster-mania.blockcolabs.com/)** to see Monster Mania in action .

<br/>

## ✨ Getting Started

Follow the steps given below to run this game app in you local -

### 1. Clone the project
```
git clone https://github.com/blockcolabs/monster-mania.git
```

### 2. Update .env files
Complete the steps given in [Prerequisites](https://github.com/blockcolabs/monster-mania#-prerequisites) to update `env` files in frontend and backend of project.

### 3. Start Backend
  Use the following steps to start backend -
  1. Change into backend folder
      ```
      cd backend
      ```
  2.  Install all the required dependencies
      ```
      yarn
      ```
  3.  Start the project 
      ```
      nodemon server
      ```
  4.  Go to `localhost:5000`

### 4. Start Frontend
  Open a new terminal and enter following steps to start frontend -
  1. Install all the dependencies
      ```
      yarn
      ```
  2. Start the project 
      ```
      yarn start
      ```
  3. Go to `localhost:3000`

### 5. Mint Monsters
Follow the steps given in [Minting monsters](https://github.com/blockcolabs/monster-mania#-minting-monster-nfts) section to mint the monsters to play the game.

### 6. Enjoy playing Monster Mania! 
Sign up using a new username and start playing.

<br/>

## 📝 Prerequisites 
Complete the prerequisites for each of the following parts before trying this app in local.

### 1. BlockCo APIs

  In order to run this demo app in your local, you need to obtain developer credentials. Please contact BlockCo Labs team to obtain test developer credentials.

### 2. Backend
Inside backend directory, copy the content of `.env.default` file to a new `.env` and update the required environment variable(s). Note the following points before updating env variables :
  - We are hosting our database using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). You can create a new test account in MongoDB Atlas and update the `ATLAS_URI` obtained in backend's .env file.
  - `ENCRYPTION_SECRET` is required by mongoose-encryption to encrypt passcode.
  - `DEVELOPER_PRIVATE_KEY`, `DEVELOPER_ID` and `EXTERNAL_ID` will be provided by BlockCo team as part of your developer credentials.
  - `DEVELOPER_ACCOUNT` is basically the developer username. You can choose any username. Same can be used in .env file of frontend.

### 3. Frontend
Copy the content of `.env.default` file to a new `.env` file and update the required environment variable(s).
  - `REACT_APP_DEVELOPER_ACCOUNT` is same as `DEVELOPER_ACCOUNT` used in `backend/.env`.


<br/>

## 🧟 Minting Monster NFTs

In order to mint monsters, you'll need to sign up as admin. Use same username as `DEVELOPER_ACCOUNT` and enter a suitable password. It'll open a page for you where you can select the monster and number of editions to be minted for that monster. All the monsters will be minted to blockchain account corresponding to `DEVELOPER_ACCOUNT`. After you've minted enough NFTs you can logout and then login back as a new user.
```
⚠️ Make sure you've minted enough number of monsters before trying out the actual game otherwise game will not work properly 
```

<br/>

## 🌟 Acknowledgement

### Monster Images
We are using Blush Design's [Street Life](https://blush.design/collections/2q77tcQgOR3gUha4oprc/street-life) Collection by [YONG](https://blush.design/artists/YONG).
