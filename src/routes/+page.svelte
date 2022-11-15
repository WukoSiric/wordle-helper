<script type="ts">
    let word: String[] = ["A", "B", "C", "D", "E"]

    function check_is_letter(char: string): boolean {
        if (char.length > 1) {
            return false
        }
        return /[a-zA-Z]/.test(char)
    }

    function handle_backspace() {

    }

    function handle_typing(event: KeyboardEvent) {
        //If string is full, reset
        let input: string = event.key
        if (!check_is_letter(input)) return
        if(word.length == 5) {
            word.length = 0
        }

        word[word.length] = input.toUpperCase()
    } 
</script>

<!-- HTML START -->
<svelte:head>
    <meta charset="utf-8">
    <title>Wordle Helper</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>
<svelte:window on:keydown={handle_typing}/>

<div class="page">
    <div class="header">
        <h1>🟩🟨Wordle Helper</h1>
        <p>Type in your guess and try clicking each box!</p>
    </div>

    <div class="inputs">
        {#each word as char, i}
            <div class="slot">
                {word[i]}
            </div>
        {/each}
    </div>

</div>

<style>
    *, :global(body) {
        background-color: #121213;
        font-family: Helvetica, Arial, sans-serif;
    }

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
        font-size: 3em;
    }

    .inputs {
        display: flex;
        gap: 13px;
        margin-top: 50px;
    }

    .slot {
        cursor: pointer;
        padding: 20px;
        font-size: 5em;
        outline: none;
        color: white;
        border: 2px solid #3a3a3c;
    }

    

</style>
