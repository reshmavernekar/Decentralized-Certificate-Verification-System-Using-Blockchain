# Blockchain-Based Certificate Issuance and Verification System

This project is a blockchain-based certificate issuance and verification system. It allows administrators to issue certificates to students and enables anyone to verify the authenticity of these certificates using a blockchain network.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [MetaMask Setup](#metamask-setup)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Frontend**: React
- **Blockchain Interaction**: Ethers.js
- **Wallet**: MetaMask

## Features

- Issue certificates on the blockchain
- Verify certificates on the blockchain
- Secure and tamper-proof certificate storage
- User-friendly interface for issuing and verifying certificates

## Installation

### Prerequisites

- Node.js and npm installed
- MetaMask browser extension installed
- Ethereum development environment (e.g., Ganache)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/blockchain-certificate-system.git
    cd blockchain-certificate-system
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Compile and deploy the smart contract**:
    - Open a terminal and start your Ethereum development environment (e.g., Ganache).
    - Compile and deploy the smart contract using Truffle or Hardhat.

    Example using Truffle:
    ```bash
    truffle compile
    truffle migrate
    ```

    Example using Hardhat:
    ```bash
    npx hardhat compile
    npx hardhat run scripts/deploy.js --network localhost
    ```

4. **Update the contract address and ABI**:
    - After deploying the contract, update the `CONTRACT_ADDRESS` and `CONTRACT_ABI` in [CertificateContract.js](http://_vscodecontentref_/0) with the deployed contract's address and ABI.

## Running the Project

1. **Start the React development server**:
    ```bash
    npm start
    ```

2. **Open the application**:
    - Open your browser and navigate to `http://localhost:3000`.

## Usage

### Issuing a Certificate

1. Open the application in your browser.
2. Navigate to the "Issue Certificate" page.
3. Enter the certificate details (ID, student name, course, issuer).
4. Click the "Issue Certificate" button.
5. Confirm the transaction in MetaMask.

### Verifying a Certificate

1. Open the application in your browser.
2. Navigate to the "Retrieve Certificate" page.
3. Enter the certificate ID.
4. Click the "Get Certificate" button.
5. View the certificate details.

## MetaMask Setup

1. **Install MetaMask**:
    - Install the MetaMask browser extension from [https://metamask.io/](https://metamask.io/).

2. **Create or Import an Account**:
    - Create a new account or import an existing account using a private key or seed phrase.

3. **Connect to Local Blockchain**:
    - Open MetaMask and click on the network dropdown.
    - Select "Custom RPC" and enter the details of your local blockchain (e.g., Ganache).

4. **Add Funds**:
    - If using a local blockchain, add funds to your MetaMask account from the local blockchain's faucet.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
