// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {IDotRotEvents} from "./IDotRotEvents.sol";

/**
 * @title DotRotStructs
 * @notice Shared data structures for the DotRot collection.
 * @dev Also inherits `IDotRotEvents` (and transitively `IDotRotErrors`)
 *      so that the main contract gets all custom errors and events through a single inheritance path.
 */
contract DotRotStructs is IDotRotEvents {
    /**
     * @notice Represents a pending mint intent stored in one of the queue slots.
     * @param recipient The address that will receive the minted NFT.
     * @param origin    The attributable minter address, or `address(0)` if the minter chose anonymity.
     * @param text      The validated gag message (1–64 ASCII characters).
     */
    struct MintIntent {
        address recipient;
        address origin;
        string text;
    }
}
