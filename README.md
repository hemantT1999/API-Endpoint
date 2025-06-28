# API Services Suite

## Project Overview
This repository contains three microservices:
1. **Fraud & Compliance Layer (Wallet Admin UI)** - Port 3000
2. **Wallet Service & Ledger Transaction Processor** - Port 3001
3. **Event Bus & Auto-Enrollment Hooks + Credit Config Service** - Port 3002

## Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation
1. Clone the repository
2. Install dependencies for each service:
```bash
cd fraud_compliance && npm install
cd ../wallet_service && npm install
cd ../event_bus && npm install
