/**
 * GaG — Frontend Configuration (Multi-Network + Multi-Asset)
 */

// ---- Network Configurations ----
const NETWORKS = {
  paseo: {
    id: "paseo",
    name: "Paseo Asset Hub (Testnet)",
    contractAddress: "0x8EDB339f6227cF648AAFd79963f16803Edef2598",
    chainId: 420420417,
    rpcUrl: "https://eth-rpc-testnet.polkadot.io/",
    wsRpcUrl: "wss://asset-hub-paseo.dotters.network",
    blockExplorer: "https://blockscout-testnet.polkadot.io",
    ipfsGateway: "https://paseo-ipfs.polkadot.io/ipfs/",
    nativeCurrency: { name: "PAS", symbol: "PAS", decimals: 18, substrateDecimals: 10 },
    isTestnet: true,
    wsRpcEndpoints: [
      "wss://asset-hub-paseo-rpc.n.dwellir.com",
      "wss://asset-hub-paseo-rpc.polkadot.io",
    ],
    // Payment tokens: address(0) = native, others are ERC-20 precompile addresses
    // Precompile formula: assetId_hex_8chars + 00000000000000000000000001200000
    paymentTokens: [
      { symbol: "PAS",  address: "0x0000000000000000000000000000000000000000", decimals: 18, assetId: null,     mintPrice: null, burnFee: null }, // native: price from AMM quote
      { symbol: "USDt", address: "0x000007c000000000000000000000000001200000", decimals: 6,  assetId: 1984,     mintPrice: 1_000_000n,   burnFee: 2_000_000n },   // $1 / $2
      { symbol: "USDC", address: "0x0000053900000000000000000000000001200000", decimals: 6,  assetId: 1337,     mintPrice: 1_000_000n,   burnFee: 2_000_000n },   // $1 / $2
      { symbol: "pUSD", address: "0x02faf21d00000000000000000000000001200000", decimals: 18, assetId: 50000413, mintPrice: 1_000_000_000_000_000_000n, burnFee: 2_000_000_000_000_000_000n }, // $1 / $2
    ],
  },
  polkadot: {
    id: "polkadot",
    name: "Polkadot Asset Hub",
    contractAddress: "", // TODO: deploy on mainnet
    chainId: 420420420,
    rpcUrl: "https://polkadot-asset-hub-eth-rpc.polkadot.io/",
    wsRpcUrl: "wss://polkadot-asset-hub-rpc.polkadot.io",
    blockExplorer: "https://assethub-polkadot.subscan.io",
    ipfsGateway: "https://ipfs.io/ipfs/",
    nativeCurrency: { name: "DOT", symbol: "DOT", decimals: 18, substrateDecimals: 10 },
    isTestnet: false,
    wsRpcEndpoints: [
      "wss://polkadot-asset-hub-rpc.polkadot.io",
    ],
    paymentTokens: [
      { symbol: "DOT",  address: "0x0000000000000000000000000000000000000000", decimals: 18, assetId: null, mintPrice: null, burnFee: null }, // native: price from AMM quote
      { symbol: "USDt", address: "0x000007c000000000000000000000000001200000", decimals: 6,  assetId: 1984, mintPrice: 1_000_000n,   burnFee: 2_000_000n },
      { symbol: "USDC", address: "0x0000053900000000000000000000000001200000", decimals: 6,  assetId: 1337, mintPrice: 1_000_000n,   burnFee: 2_000_000n },
      // pUSD not yet launched on mainnet
    ],
  },
};

// ---- Active network (default: Paseo testnet) ----
let activeNetworkId = "paseo";

function getActiveNetwork() {
  return NETWORKS[activeNetworkId];
}

function switchNetwork(networkId) {
  if (!NETWORKS[networkId]) return;
  activeNetworkId = networkId;
  return NETWORKS[networkId];
}

// ---- Legacy GAG_CONFIG for backward compat ----
const GAG_CONFIG = {
  get contractAddress() { return getActiveNetwork().contractAddress; },
  get chainId() { return getActiveNetwork().chainId; },
  get chainName() { return getActiveNetwork().name; },
  get rpcUrl() { return getActiveNetwork().rpcUrl; },
  get blockExplorer() { return getActiveNetwork().blockExplorer; },
  get nativeCurrency() { return getActiveNetwork().nativeCurrency; },
  get ipfsGateway() { return getActiveNetwork().ipfsGateway; },
  siteUrl: "https://gagged.dot.li",
  xProfile: "https://x.com/GaG",
  githubRepo: "https://github.com/rogerjbos/gag",
  deployBlock: 0,
  maxMessageLength: 64,
};

/**
 * Get the $1 / $2 price for a payment token.
 * For stablecoins: returns fixed price.
 * For native tokens (PAS/DOT): returns null — caller must get AMM quote.
 */
function getTokenPrice(tokenSymbol, action = "mint") {
  const network = getActiveNetwork();
  const token = network.paymentTokens.find(t => t.symbol === tokenSymbol);
  if (!token) return null;
  if (action === "mint") return token.mintPrice;
  if (action === "burn") return token.burnFee;
  return null;
}

/**
 * Get the ERC-20 precompile address for a token symbol.
 * Returns null for native token (use msg.value instead).
 */
function getTokenAddress(tokenSymbol) {
  const network = getActiveNetwork();
  const token = network.paymentTokens.find(t => t.symbol === tokenSymbol);
  if (!token) return null;
  if (token.address === "0x0000000000000000000000000000000000000000") return null; // native
  return token.address;
}

/**
 * Get all payment tokens for the active network.
 */
function getPaymentTokens() {
  return getActiveNetwork().paymentTokens;
}
