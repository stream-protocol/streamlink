<script lang="ts">
    let tiles = Array(9);

    type Player = 0 | 1;

    let playerTurn:Player = 0;
    let winner:Player | undefined;

    const matches = (player:Player, idx) => tiles[idx] === player;

    const winConditions = [
        // Horizontal
        (player:Player, idx:number) =>
            matches(player, 3 * idx) &&
                matches(player, 3 * idx + 1) &&
                matches(player, 3 * idx + 2),

        // Vertical
        (player:Player, idx:number) =>
            matches(player, idx) &&
                matches(player, 3 + idx) &&
                matches(player, 6 + idx),

        // Diagonal
        (player:Player) =>
            matches(player, 0) &&
                matches(player, 4) &&
                matches(player, 8) ||
                matches(player, 2) &&
                matches(player, 4) &&
                matches(player, 6),
    ];

    const checkWin = (player:Player, idx:number) =>
        winConditions.some((condition) => condition(player, idx));

    const handler = (position:number) => {
        if(tiles[position] !== undefined || typeof winner !== "undefined") {
            return;
        }
        
        tiles[position] = playerTurn;
        
        for(let i = 0; i < 3; i++) {
            if(checkWin(playerTurn, i)) {
                winner = playerTurn;
            }
        }

        // Change turn
        playerTurn = playerTurn === 0 ? 1 : 0;
    };

    const reset = () => {
        tiles = Array(9);

        winner = undefined;
    };

</script>

<section>
    <div>
        <h1 class="text-4xl text-center font-bold">Tic-Tac-Toe</h1>
        <p class="text-center text-slate-500 my-2">Introducing TipLink Game Studios first release.</p>
    </div>
    <div class="flex justify-center">
        <div class="max-w-5xl">
            {#if typeof winner !== "undefined"}
                <div class="alert alert-success shadow-lg mb-4 mt-2 ">
                    {winner ? "O" : "X"} won!
                </div>
            {/if}
            <div class="grid grid-cols-3 grid-rows-3 gap-3 mb-5">
                {#each tiles as item, idx}
                    <button
                        class="btn p-10 btn-outline"
                        on:click={() => handler(idx)}>
                        {#if item === 0}
                            X
                        {:else if item === 1}
                            O
                        {:else}
                            -
                        {/if}
                    </button>
                {/each}
            </div>
            <button
                class="btn btn-block"
                on:click={reset}>
                Reset
            </button>
        </div>
    </div>
</section>
