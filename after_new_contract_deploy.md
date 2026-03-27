cast send 0x8EDB339f6227cF648AAFd79963f16803Edef2598 'setMetadataUpdater(address)' 0x587504Ab2FaD4D0A26431688c1200e1416f7B396 --private-key $DEPLOYER_PRIVATE_KEY --rpc-url https://eth-rpc-testnet.polkadot.io/

cast send 0x8EDB339f6227cF648AAFd79963f16803Edef2598 'configurePaymentToken(address,bool,uint256,uint256)' 0x000007c000000000000000000000000001200000 true 1000000 2000000 --private-key $DEPLOYER_PRIVATE_KEY --rpc-url https://eth-rpc-testnet.polkadot.io/
                                                                                                                                                               cast send 0x8EDB339f6227cF648AAFd79963f16803Edef2598 'configurePaymentToken(address,bool,uint256,uint256)' 0x0000053900000000000000000000000001200000 true 1000000 2000000 --private-key $DEPLOYER_PRIVATE_KEY --rpc-url https://eth-rpc-testnet.polkadot.io/

cast send 0x8EDB339f6227cF648AAFd79963f16803Edef2598 'configurePaymentToken(address,bool,uint256,uint256)' 0x02faf21d00000000000000000000000001200000 true 1000000000000000000 2000000000000000000 --private-key $DEPLOYER_PRIVATE_KEY --rpc-url https://eth-rpc-testnet.polkadot.io/

