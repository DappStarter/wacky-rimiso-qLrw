require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strong cruise remember common hundred light army genre'; 
let testAccounts = [
"0x07b7bc6c91be222f027c0b44238a59140b6bbd6002cf076ec79b5bda904eca82",
"0x7de0e8cea6355bd90a4b34d03f550db0da033b50902b29397c448561bfc98a55",
"0x0b290573055d48810f84b5c92bacbee92e9e61cca77eca21492cb948f9034ddc",
"0xaa3307976e2a0d123f29a330e20aa8a6633c3e6ab9c3c80c97fe6062bd733a34",
"0x931043bd22ea2cf26c23986d0df168e4096c8c4349a3e44595077727c0012bb5",
"0x7d4237742bcb3f1f531bdb115089cb849afc60e467dc2d77087e22eacb2ce162",
"0xdebd402578705c7ad2246ec12708ab2fa006b44fdfa6e5badd040f3af16bcd20",
"0x80d5661ffc99110ebd1beefba220cf0e282833bdbbd5e43c38bd14a67a71ffec",
"0xded4e096b9d21716620b0a25abf5d0d69d7263150db3685127d17fa2e5d0299d",
"0x2e6376b11877e03ac190a6fe0e546854cda5e63b59f771e8f8f264f817321630"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

