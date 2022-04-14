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
}
export const globalState: Writable<globalStateInterface> = writable({
    chainId:undefined,
    balance: '?',
    contractAddress: '',
	minted: false,
	walletConnected: false,
	accounts: [],
	provider: undefined
});
