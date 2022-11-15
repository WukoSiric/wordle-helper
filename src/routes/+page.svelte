<script type="ts">
    import Footer from "./Footer.svelte";
    import Slot from "./Slot.svelte";

    let word: String[] = []
    import * as inputs from './utils/inputs'

    function handle_input(event: KeyboardEvent) {
        let input = event.key
        if (inputs.is_backspace(input)) {
            word = inputs.handle_backspace(word)
            return
        }
        if (inputs.check_is_letter(input)) {
            if (!inputs.word_full(word)) {
                word = inputs.add_letter(word, input)
            }
        }
    }
</script>

<!-- HTML START -->
<svelte:head>
    <meta charset="utf-8">
    <title>Wordle Helper</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=VT323">
</svelte:head>
<svelte:window on:keydown={handle_input}/>

<div class="page">
    <div class="header">
        <h1>WORDLE HELPER</h1>
        <p>Type in your guess and try clicking each box!</p>
    </div>

    <div class="inputs">
        {#each Array(5) as _, i}
            {#if word.length > i}
                <Slot bind:char={word[i]} />
            {:else}
                <Slot />
            {/if}
        {/each}
    </div>

    <Footer --color="white" />
</div>

<style>
    .page {
        margin: auto;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .header, .header p {
        text-align: center;
        font-family: Helvetica, Arial, sans-serif;
        color: white;
        font-weight: 500;
    }

    h1 {
        margin-bottom: 10px;
        font-weight: lighter;
        font-size: 3.5em;
    }

    .inputs {
        display: flex;
        gap: 13px;
        margin-top: 50px;
    }
</style>
