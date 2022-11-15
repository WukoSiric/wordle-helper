<script lang="ts">
    import { State } from "./utils/types"
    export let char: String = "_"
    export let state: State = State.Hidden

    let colors: String[] = ["#2c2c2e", "#a5902d", "#447d3d"]
    $: current_color = colors[state] 

    function update_state() {
        if (state === State.Hidden) {
            state = State.Revealed
        } else if (state === State.Revealed) {
            state = State.Correct
        } else {
            state = State.Hidden
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="slot" on:click={update_state} style="background-color: {current_color}">
    {char}
</div>

<style>
    .slot {
        min-width: 100px; 
        width: 100%px; 
        display: block;
        cursor: pointer;
        padding: 20px 0px;
        text-align: center;
        max-width: 100px;
        font-size: 5em;
        font-weight: bold;
        font-family: Helvetica, sans-serif;
        background-color: var(--bg_color);
        outline: none;
        color: white;
        border: 2px solid #3a3a3c;
        /* Disable user select */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .slot:hover {
        background-color: var(--next_bg_color);
    }
</style>