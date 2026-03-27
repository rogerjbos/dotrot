/**
 * GaG — App Entry Point
 *
 * Bundles the wallet + contract module and exposes it as window.GaGWallet
 * for the vanilla app.js to consume.
 */

import {
  connectWallet,
  readContract,
  writeContract,
  writeContractWithToken,
  onAccountStatusChange,
  getBalance,
  resolveAddress,
  resolveDotNS,
  resolveUsername,
} from "./wallet.js";

window.GaGWallet = {
  connectWallet,
  readContract,
  writeContract,
  writeContractWithToken,
  onAccountStatusChange,
  getBalance,
  resolveAddress,
  resolveDotNS,
  resolveUsername,
};

window.dispatchEvent(new Event("gag-wallet-ready"));
