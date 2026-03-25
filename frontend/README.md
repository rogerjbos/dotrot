# GaG — Frontend

Static frontend for the GaG on-chain prank NFT collection on Polkadot Asset Hub.

## Stack

Vanilla HTML/CSS/JS + ethers.js. No framework, no build dependencies (except Node.js for the static site generator).

## Files

- `index.html` — single-page layout with all sections
- `style.css` — dark terminal-style theme
- `config.js` — contract address, chain ID, RPC URL, native token config
- `abi.js` — minimal contract ABI (native PAS payments)
- `app.js` — wallet connection, form logic, minting, burning, claiming
- `build.js` — generates multi-page static site with per-route meta tags

## Local Development

```bash
python3 -m http.server 8080
```

For local testing against Anvil:

```bash
anvil --chain-id 420420417
```

Then update `config.js` to point `rpcUrl` to `http://127.0.0.1:8545` and deploy the contract to the fork.

## Production Build

```bash
node build.js
```

Output goes to `../dist/`.

Before uploading, place the ethers.js vendor bundle in `dist/vendor/`:

```bash
cd ../dist/vendor
curl -O https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.4/ethers.umd.min.js
```

## Deployment

Upload `dist/` to Bulletin TransactionStorage via `dotns bulletin upload` and set the contenthash on `gag.dot.li`.

## Wallet Support

Any injected Ethereum wallet (MetaMask, Rabby, etc.). Must be connected to Paseo Asset Hub (chain ID 420420417). Network switching is prompted automatically.
