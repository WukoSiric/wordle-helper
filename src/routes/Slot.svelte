<script lang="ts">
    export let char: String = "_"
    enum State {
        Hidden = "#2c2c2e",
        Revealed = "#a5902d",
        Correct = "#447d3d"
    }
    export let state: State = State.Hidden

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

<div class="slot" on:click={update_state} style="background-color: {state}">
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