/**
 * DotRot — Minimal ABI (Polkadot Asset Hub Edition)
 *
 * Only the functions and events required by the frontend are included.
 * Native token payments — no ERC-20 interactions needed.
 */
const GAG_ABI = [
  // ---- Views ----
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function queueSize() view returns (uint8)",
  "function totalMinted() view returns (uint256)",
  "function mintPrice() view returns (uint256)",
  "function burnFee() view returns (uint256)",
  "function burnFeeOriginShare() view returns (uint256)",
  "function MAX_BPTS() view returns (uint256)",
  "function claimable() view returns (uint256)",
  "function getProjectFees() view returns (uint256)",
  "function getTokenMessage(uint256 tokenId) view returns (string)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function paused() view returns (bool)",
  "function mintingQueue(uint8 index) view returns (address recipient, address origin, string text)",

  // ---- Mutations ----
  "function submitMintIntent(bool anonymize, address recipient, string message) payable",
  "function burnToken(uint256 tokenId) payable",
  "function claimFees()",

  // ---- ERC-721 standard ----
  "function balanceOf(address owner) view returns (uint256)",

  // ---- Events ----
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event PricesUpdated(uint256 mintPrice, uint256 burnFee)",
  "event TokenCIDSet(uint256 indexed tokenId, string cid)",
];
