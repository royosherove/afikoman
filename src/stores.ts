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
	totalSupply:number;
	winner: number;
}
export const globalState: Writable<globalStateInterface> = writable({
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
