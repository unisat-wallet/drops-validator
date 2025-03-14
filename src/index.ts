import { MetaData } from "./types";
import { getWinnerAddresses } from "./utils";
import fs from "fs";

const projectName = process.argv[2];
if (!projectName) {
  throw new Error("projectName is required");
}

const metadataFilePath = `./data/${projectName}/metadata.json`;
if (!fs.existsSync(metadataFilePath)) {
  throw new Error("metadata.json is required");
}

const metaFile = fs.readFileSync(metadataFilePath, "utf-8");
if (!metaFile) {
  throw new Error("metadata.json is required");
}

const metadata: MetaData = JSON.parse(
  fs.readFileSync(metadataFilePath, "utf-8")
);

const hash = process.argv[3];
if (!hash) {
  throw new Error("hash is required");
}

const participants = JSON.parse(
  fs.readFileSync(`./data/${projectName}/participants.json`, "utf-8")
);

console.log(`Project: ${projectName}
Hash: ${hash}
Participants: ${participants.length}
Winner: ${metadata.winner}`);
const winners = getWinnerAddresses(participants, hash, metadata.winner);
for (let i = 0; i < winners.length; i++) {
  console.log(` - ${winners[i]}`);
}
