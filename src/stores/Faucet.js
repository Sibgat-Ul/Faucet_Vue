import { stringifyStyle } from "@vue/shared";
import { ethers } from "ethers";
import { defineStore } from "pinia";
import { ref, reactive } from 'vue';
import { faucetAbi, faucetAddress } from "../utils/faucet";

export const Faucet = defineStore("Faucet", () => {
  //state
  let user = reactive({
    address: " ",
    provider: " ",
    signer : " ",
    contract : " ",
  })
  //functions
  async function connect() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const faucetContract = new ethers.Contract(
          faucetAddress,
          faucetAbi,
          provider
        );

        user.address = signer.getAddress();
        let balance = await signer.getBalance();
        console.log(ethers.utils.formatEther(balance));
        balance = ethers.BigNumber.from(balance).toString()
        console.log(balance)
        

        faucetContract.connect(signer);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Print Metamask");
    }
  }

  async function requestToken() {
    if (window.ethereum && contract.value && resolvedSigner) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      console.log(signer.getAddress())

      let faucetContract = new ethers.Contract(
        faucetAddress,
        faucetAbi,
        provider
      );

      faucetContract = (await faucetContract.connect(signer));
      console.log(faucetContract)

      try {
        const txRes = await faucetContract.requestTokens();
        listenForTransactionMine(txRes, provider);
        console.log();
    
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Print Metamask");
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`);
    
    return new Promise((resolve, reject) => {
      try {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
          console.log(
            `Completed with ${transactionReceipt.confirmations} confirmations. `
          );
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  //getters
  async function getBalance() {
   
  }

  async function getHashes() {}

  async function getUser() {
    await connect();
    console.log(user.address);
    return user.address;
  }

  return {
    user,
    getUser,
    getBalance,
    requestToken
  }

});
