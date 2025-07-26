#  My Hardhat Token (MHT)

This is a basic ERC-20 style token written in Solidity for demonstration and experimentation purposes. The contract includes a simple token transfer system built with Hardhat for local development and testing.

## Overview

- **Token Name**: My Hardhat Token  
- **Symbol**: MHT  
- **Total Supply**: 1,000,000 MHT  
- **Owner**: Automatically set to the deploying account  
- **Features**:
  - Transfer tokens between accounts
  - Check token balances
  - Emits `Transfer` events for off-chain tracking

## Tech Stack

- **Solidity 0.8.0**
- **Hardhat** for smart contract development and testing
- **Hardhat Console** for debugging output

## Contract Structure

- `Token.sol`: Contains the smart contract logic
- `console.sol`: Imported for local testing and logging (only used in development)

## Deployment

The contract is deployed to an Ethereum-compatible network and can be tested locally using Hardhat.  

Contract Address (example):  
`0xbE74A265fFB296EF1Ea4b95bFedAE602f8b8B18c`

## Getting Started

To run and test locally:

```bash
npm install
npx hardhat compile
npx hardhat test