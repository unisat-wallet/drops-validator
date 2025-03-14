# Drops Validator

The **Drops Validator** tool is designed to verify the fairness of a drops system used in giveaways and raffles. It ensures that the selection of winners from a list of participants is random and based on a consistent, reproducible process, using a provided hash to seed the randomness.

## Features

- **Fairness Verification**: The tool checks that the drops winners are selected randomly and in a fair manner.
- **Reproducible Randomness**: The drops process is based on a deterministic pseudo-random number generator (PRNG), seeded by a hash, ensuring the process is transparent and verifiable.
- **Participant List Shuffling**: The tool shuffles the participant list using a seeded random generator, selecting a specific number of winners.

## Core Logic

The core of the tool uses a seeded random function to shuffle the list of participants and select winners. The seed is derived from the last 6 characters of the provided hash, ensuring that the randomization process can be verified by anyone with access to the same hash.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/unisat-wallet/drops-validator.git
   cd drops-validator
   ```

2. Install the required dependencies:

   ```bash
   yarn
   ```

3. Run the tool:

   ```bash
   yarn gen bis_artifacts 000000000000000000025aafce2ab7c67af6b71e53f7a5aa496f3622cfe07abc > out.log
   ```

## Usage

You can use this tool to validate your lottery system by providing the list of participants (addresses), the hash, and the number of winners:

```ts
const participants = ["address1", "address2", "address3", "address4", ...];
const hash = "block-hash-here";
const winnerCount = 3;  // Number of winners you want to select

const winners = getWinnerAddresses(participants, hash, winnerCount);

console.log("Winners:");
winners.forEach((winner, index) => {
  console.log(`Winner ${index + 1}: ${winner}`);
});
```
