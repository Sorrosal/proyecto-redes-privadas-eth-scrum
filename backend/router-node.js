const express = require("express")
const router = express.Router()
const fs = require("fs")
const URL_INFURA = "https://mainnet.infura.io/v3/c78dd74edfd64efa822c3a0f5c82272e"
const Web3 = require("Web3")
const web3 = new Web3("http://localhost:9566")

module.exports =  router


router.delete("/:network/:node", (req, res) => {
    const NUMERO_NETWORK = parseInt(req.params.network)
    const NUMERO_NODO = parseInt(req.params.node)
    const NODO = `nodo${NUMERO_NODO}`
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const DIR_NODE = `${NETWORK_DIR}/${NODO}`

    const pid = JSON.parse(fs.readFileSync(`${DIR_NODE}/paramsNodo.json`)).pid
    try {
        process.kill(pid)    
    } catch (error) {
        
    }
    if (fs.existsSync(`${DIR_NODE}`))
        fs.rmSync(`${DIR_NODE}`, { recursive: true, })

    res.send({pid})
})


router.get("/bloque/:bloque", async (req, res)=> {
    try{
        const bloque = await web3.eth.getBlock(req.params.bloque)
        res.send(bloque)
    }catch (error) {
        res.status(500).send({mensaje: error.message})
    }
})

router.get("/bloque", async (req, res)=> {
    try{
        const bloque = await web3.eth.getBlockNumber();
        res.send({bloque})
    }catch (error) {
        res.status(500).send({mensaje: error.message})
    }
})

router.get("/tx/:tx", async (req, res)=> {
    try{
        const tx = await web3.eth.getTransaction(req.params.tx)
        res.send(tx)
    } catch (error) {
        res.status(500).send({mensaje: error.message})
    }
    
})
