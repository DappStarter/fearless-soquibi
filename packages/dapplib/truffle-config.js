require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind hospital imitate prize flat spirit'; 
let testAccounts = [
"0x5b1f7d446a136c324226e60acca094842d8ba85548c19088931808f8dfabc55d",
"0xa0087050598b2587e718dcc103e76c25fc6ff70a155c8d66a41cf27d8eea7b70",
"0xcb54877e45883f6804540a83cdfd9d0514d7101608a4f5fe8bdd88f0d36fc6b9",
"0x5c989244c1a3b39da3e59942ea18132885c66036c33c0acf20477eab0df1c9a1",
"0x4987019dc014e82c5b22554a193a8c264c053ddf07c4f4be6b0715967afe14b2",
"0x8d74bbec6380a1bd15ad788b4a50faae38d38ff4f060c4eebda356030848d850",
"0x8c5ea3e06a5c7ac03acb6e630b544ddebff51e6a2f08e5ebafe497581b4ddd61",
"0xd2467157f4fbedc9d9cd5403b095ec6320e11d8e8ada537acea2ed4f0e6d8532",
"0xcada2992dd757cb6a56e5fec9c30a66371840d534f7a56e9c9d73ed1e9fb95aa",
"0x96c5013a7253909f4e5801ca03bf99741f3b3dbf23b635d7f2e58593f458f3a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
