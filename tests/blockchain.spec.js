import { createBlockchain } from "../src/services/blockchain.service.js"

describe('Block Test Suite' , () => {
    it('Creates a Blockchain' , async () => {
        await createBlockchain({
            name: 'Solana',
            language: 'Rust',
            marketCap: 1,
            supportsSmartContract: true,
        })
    })
})