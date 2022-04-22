import type { ethers } from 'ethers';
import { get, writable, type Writable } from 'svelte/store';

export interface globalStateInterface {
	accounts: string[];
	provider: ethers.providers.Web3Provider;
	walletConnected: boolean;
	minted: boolean;
    chainId:string;
    neededChainId:string;
    neededChainName:string;
    neededChainRPC:string;
    balance: string;
    contractAddress: string;
    uri: string;
    image: string;
	totalSupply:number;
	winner: number;
	winnerOwned: number;
	ownedToken: number;
}
export const globalState: Writable<globalStateInterface> = writable({
	winnerOwned: -1,
	uri: '',
	neededChainId: '137',
    neededChainRPC: 'https://rpc-mainnet.matic.network/',
	neededChainName: 'פוליגון',
	image: '',
	ownedToken: 0,
	totalSupply: 0,
	winner: 0,
    chainId:undefined,
    balance: '?',
    contractAddress: '0xd67fcf350B9F5C87B83d8c5d60C340D9A0ee7452',
	minted: false,
	walletConnected: false,
	accounts: [],
	provider: undefined
});
