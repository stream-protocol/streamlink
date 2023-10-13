<script>
    import MoneyInput from "src/lib/components/money-input.svelte";
</script>

<section>
    <div class="grid grid-col-1 md:grid-cols-6">
        <div class="col-span-1 md:col-span-2 md:col-start-3">
            <h1 class="text-center text-5xl font-bold">Links that are money</h1>
            <p class="text-center my-5">Send crypto to anyone, even if they don't have a wallet. No app needed!</p>
            <div class="card bg-white shadow-lg prose">
                <div class="pt-6 px-10">
                    <h4 class="text-center font-bold mb-5 mt-3 text-slate-600">Create your TipLink</h4>
                    <button class="btn btn-info btn-block">
                        Connect Wallet
                    </button>
                    <div class="text-center text-xs text-slate-400 flex items-center my-3">
                        <p class="m-0">Supported tokens:</p>
                        <img
                            class="h-4 rounded-full mx-1  m-0"
                            alt=""
                            src="/solana.png">
                        <p class="m-0">Solana,</p>
                        <img
                            class="h-4 rounded-full mx-1 m-0"
                            alt=""
                            src="/usdc.png">
                        <p class="m-0">USD Coin, and all SPL tokens </p>
                    </div>
                    
                    <MoneyInput />
    
                    <button class="btn btn-ghost btn-active btn-block mt-4 text-white">
                        Create StreamLink
                    </button>
                    
                    <div class="flex justify-center items-center opacity-50 mt-5">
                        <hr class="grow m-0">
                        <p class="m-0 mx-3 text-sm">OR</p>
                        <hr class="grow m-0">
                    </div>
    
                    <p class="text-center">Want to deposit value later? <a
                        class="link link-info"
                        href="/">Create an empty StreamLink</a></p>
                </div>
    
                <div class="bg-slate-100 p-4 flex items-center">
                    <img
                        class="h-7 mx-3"
                        alt=""
                        src="/shield.svg">
                    <p class="grow text-xs text-center">All StreamLinks are non-custodial wallets. StreamLink does not and cannot access your digital assets.</p>
                </div>
            </div>
        </div>
    </div>
</section>
