<script lang="ts" context="module">
  import { BigNumber, ethers } from "ethers";
  import { globalState } from "../stores";
  import { get } from "svelte/store";

  export async function getNftDetails(
    forAccount: string,
    contractAddress: string,
    provider: ethers.providers.Web3Provider
  ): Promise<object> {
    try {
      if (!ethers.utils.isAddress(forAccount)) {
        console.log(forAccount, " account is not an address");
        return;
      }
      console.log("checking...");
      const contract = new ethers.Contract(
        contractAddress,
        [
          "function tokenOfOwnerByIndex(address,uint256) public view returns (uint256)",
          "function tokenURI(uint256) public view returns (string)",
          "function totalSupply() public view returns (uint256)",
          "function _winner() public view returns (address)",
        ],
        provider
      );
      // const nftId = await contract.getIdForAccount(forAccount);
      const promises = [contract.totalSupply(), contract._winner()];
      let winnerOwned = -1;
      const [supply, winner] = await Promise.all(promises);
      try {
        winnerOwned = await contract.tokenOfOwnerByIndex(winner, 0);
      } catch (error) {}
      let image = "",
        ownedToken = 0,
        uri = "";
      try {
        ownedToken = await contract.tokenOfOwnerByIndex(forAccount, 0);
        uri = await contract.tokenURI(ownedToken);
        const data = await fetch(uri);
        const jsonData = await data.json();
        image = jsonData.image;
      } catch (error) {
        console.error(error);

        image = uri.includes("unrevealed.json")
          ? "https://web3il-afikoman.s3.eu-central-1.amazonaws.com/unrevealed.gif"
          : "https://web3il-afikoman.s3.eu-central-1.amazonaws.com/unrevealed.gif";
      }
      console.log(supply, winner);
      return {
        totalSupply: supply,
        winner,
        image,
        ownedToken,
        uri,
        winnerOwned,
      };
    } catch (error) {
      console.error(error);
      return {};
    }
  }
  export async function checkNftExists(
    forAccount: string,
    contractAddress: string,
    provider: ethers.providers.Web3Provider
  ): Promise<boolean> {
    try {
      if (!ethers.utils.isAddress(forAccount)) {
        // console.log(address, ' is not an address')
        return;
      }
      console.log("checking nft for ...", contractAddress);
      const contract = new ethers.Contract(
        contractAddress,
        ["function balanceOf(address who) public view returns (uint256)"],
        provider
      );
      const result = await contract.balanceOf(forAccount);
      const numResult = BigNumber.from(result).toNumber();
      console.log("balanceof:", forAccount, " -> ", numResult);
      return numResult > 0;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  export async function mintNft(
    prov: ethers.providers.Web3Provider,
    contractAddress: string,
    transmittedCb: any,
    successCb: any,
    failCb: any
  ): Promise<boolean> {
    try {
      const contract = new ethers.Contract(
        contractAddress,
        ["function searchForAfikoman() public"],
        prov.getSigner()
      );

      // debugger;

      const feeData = await prov.getFeeData();
      const tx: ethers.providers.TransactionResponse =
        await contract.searchForAfikoman({ gasPrice: feeData.gasFee });
      // debugger;
      transmittedCb();
      await contract.provider.waitForTransaction(tx.hash, 1);
      successCb();
      return true;
    } catch (error) {
      console.error(error);
      failCb();
      return false;
    }
  }
</script>
