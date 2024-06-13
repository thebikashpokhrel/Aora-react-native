import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.thebikash.aora",
  projectId: "666adeb30015d2fa5652",
  databaseId: "666adfbe0037157bf72d",
  userCollectionId: "666adfe20014cedd7de9",
  videoCollectionId: "666ae002003a101c36b5",
  storageId: "666ae3c50033f6b81bf5",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
