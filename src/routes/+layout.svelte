<script lang="ts">
    import "../app.postcss";

    import { clusterApiUrl } from "@solana/web3.js";

    import { walletStore } from "@svelte-on-solana/wallet-adapter-core";

    import {
        workSpace,
        WalletProvider,
        ConnectionProvider,
        WalletModal,
    } from "@svelte-on-solana/wallet-adapter-ui";

    import {
        PhantomWalletAdapter,
        BackpackWalletAdapter,
        GlowWalletAdapter,
    } from "@solana/wallet-adapter-wallets";

    const wallets = [
        new PhantomWalletAdapter(),
        new BackpackWalletAdapter(),
        new GlowWalletAdapter(),
    ];

    const localStorageKey = "walletAdapter";
    const network = clusterApiUrl("mainnet-beta");

    let showConnectWallet = false;

    const connectWallet = async (event:CustomEvent) => {
        showConnectWallet = false;

        await $walletStore.select(event.detail);
        await $walletStore.connect();
    };

    const shortenAddress = (address:string) => `${address.slice(0, 4)}...${address.slice(-4)}`;

    const disconnect = () => {
        if(confirm("Disconnect wallet?")) {
            $walletStore.disconnect();
        }
    };

</script>

<nav class="flex justify-center items-center">
    <div class="max-w-7xl w-full flex justify-between items-center py-3 px-4">
        <img
            class="h-10"
            alt=""
            src="/logo.svg">
        <div class="flex items-center justify-end">
            {#if $walletStore.connected}
                <button
                    class="btn btn-primary px-2 mr-2"
                    on:click={disconnect}>
                    <img
                        class="h-5 mr-2"
                        alt=""
                        src="/phantom.svg">
                    {shortenAddress($walletStore.publicKey?.toBase58() || "")}
                </button>
            {:else}
                <button
                    class="btn btn-primary px-2 mr-2"
                    on:click={() => (showConnectWallet  = true)}>
                    <img
                        class="h-5 mr-2"
                        alt=""
                        src="/phantom.svg">
                    Connect Wallet
                </button>
                <button class="btn btn-info px-2">
                    <img
                        class="h-8 mr-2"
                        alt=""
                        src="/google.svg">
                    Login
                </button>
            {/if}
        </div>
    </div>
</nav>

<slot></slot>

<WalletProvider
    autoConnect={false}
    {localStorageKey}
    {wallets} />
<ConnectionProvider {network} />

{#if showConnectWallet}
    <WalletModal
        maxNumberOfWallets="6"
        on:connect={connectWallet}
        on:close={() => (showConnectWallet = false)}
    />
{/if}
