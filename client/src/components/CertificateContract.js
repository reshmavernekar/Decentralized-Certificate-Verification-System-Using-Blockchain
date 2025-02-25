import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "certId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "studentName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "course",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "issuer",
        "type": "string"
      }
    ],
    "name": "CertificateIssued",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "certificates",
    "outputs": [
      {
        "internalType": "string",
        "name": "studentName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "course",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "issuer",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "issueDate",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isValid",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_certId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_studentName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_course",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_issuer",
        "type": "string"
      }
    ],
    "name": "issueCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_certId",
        "type": "string"
      }
    ],
    "name": "verifyCertificate",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
export const getBlockchain = async () => {
    if (!window.ethereum) {
        alert("Please install MetaMask to use this feature!");
        return null;
    }

    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    } catch (error) {
        console.error("Blockchain connection error:", error);
        return null;
    }
};


