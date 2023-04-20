const express = require("express")
const router = express.Router()
const URL_INFURA = "https://mainnet.infura.io/v3/c78dd74edfd64efa822c3a0f5c82272e"
const Web3 = require("Web3")
const web3 = new Web3("http://localhost:9566")
module.exports =  router

router.get("/address/:address", async (req, res)=> {
    try{
        const balance = await web3.eth.getBalance(req.params.address)
        res.send({address: req.params.address,ethers: web3.utils.fromWei(balance, 'ether')})
       
    } catch (error) {
        //res.status(500).send({mensaje: error.message})
    }
    
})
router.get("/", async (req, res)=> {
    try{
        
        res.send("Hola")
    } catch (error) {
        res.status(500).send({mensaje: error.message})
    }
    
})


