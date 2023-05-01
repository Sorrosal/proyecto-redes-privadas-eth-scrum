const express = require("express")
const router = express.Router()
const fs = require("fs")
const URL_INFURA = "https://mainnet.infura.io/v3/c78dd74edfd64efa822c3a0f5c82272e"
const Web3 = require("Web3")
const web3 = new Web3("http://localhost:9566")
module.exports =  router
router.post("/requestFund", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/address/:address", async (req, res) =>{
    const parametros = generateParameter(1, 1);
    
    const { DIR_NODE } = parametros;
    const CUENTA = getAccount(DIR_NODE)
    
    const account = await web3.eth.accounts.decrypt(CUENTA, "123456")
    console.log(account);
    const tx = {
        chainId: 333445,
        to: req.params.address,
        from: account.address,
        gas: 30000,
        value: web3.utils.toWei("0.1", 'ether')
    }
    const txSigned = await account.signTransaction(tx,account.privatekey)
    console.log(txSigned);
    const respuesta = await web3.eth.sendSignedTransaction(txSigned.rawTransaction)
    res.send(respuesta)
})

function generateParameter(network, node) {
    const NUMERO_NETWORK = parseInt(network)
    const NUMERO_NODO = parseInt(node)
    const NODO = `nodo${NUMERO_NODO}`
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const NETWORK_CHAINID = 333444 + NUMERO_NETWORK

    const HTTP_PORT = 9545 + NUMERO_NODO + NUMERO_NETWORK * 20
    const DIR_NODE = `${NETWORK_DIR}/${NODO}`
    const IPCPATH = `\\\\.\\pipe\\${NETWORK_CHAINID}-${NODO}.ipc`
    const PORT = 30404 + NUMERO_NODO + NUMERO_NETWORK * 20
    const AUTHRPC_PORT = 9553 + NUMERO_NODO + NUMERO_NETWORK * 20

    return {
        NUMERO_NETWORK, NUMERO_NODO, NODO, NETWORK_DIR, NETWORK_CHAINID, HTTP_PORT,
        DIR_NODE, IPCPATH, PORT, AUTHRPC_PORT
    }
}
function getAccount(DIR_NODE) {
    // pillamos el address que hemos creado 
    const lista = fs.readdirSync(`${DIR_NODE}/keystore`)
    const CUENTA = JSON.parse(fs.readFileSync(`${DIR_NODE}/keystore/${lista[0]}`).toString())
    return CUENTA
}


