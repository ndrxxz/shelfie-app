import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject("6a44b16000113a588dbd")
    .setPlatform("dev.ndrxxz.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);