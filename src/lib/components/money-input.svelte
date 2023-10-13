<style>
    button {
        border-top: 1px solid #e5e7eb;
        border-radius: 0;
    }

    button:not(:last-child) {
        border-right: 1px solid #e5e7eb;
    }

    input:active {
        outline: 0;
    }

    input {
        @apply text-4xl text-center;
    }
</style>

<script>
    let input = "$0.00 USD";

</script>

<div class="border rounded-lg">
    <div class="flex justify-center my-6">
        <input
            class="input w-full text-full font-light"
            placeholder="$0.00 USD"
            type="text"
            bind:value={input}>
    </div>
    <div class="flex">
        <button
            class="grow btn border-0 btn-outline text-lg font-light"
            on:click={() => (input = "$1.00 USD")}>$1</button>
        <button
            class="grow btn border-0 btn-outline text-lg font-light"
            on:click={() => (input = "$2.00 USD")}>$2</button>
        <button
            class="grow btn border-0 btn-outline text-lg font-light"
            on:click={() => (input = "$3.00 USD")}>$3</button>
    </div>
</div>
