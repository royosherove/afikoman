import type { ethers } from 'ethers';
import { get, writable, type Writable } from 'svelte/store';

export interface globalStateInterface {
	accounts: string[];
	provider: ethers.providers.Web3Provider;
	walletConnected: boolean;
	minted: boolean;
    chainId:string;
    balance: string;
    contractAddress: string;
    uri: string;
    image: string;
	totalSupply:number;
	winner: number;
	ownedToken: number;
}
export const globalState: Writable<globalStateInterface> = writable({
	uri: '',
	image: '',
	ownedToken: 0,
	totalSupply: 0,
	winner: 0,
    chainId:undefined,
    balance: '?',
    contractAddress: '',
	minted: false,
	walletConnected: false,
	accounts: [],
	provider: undefined
});
