<script lang="ts">
    export let char: String = "_"
</script>

<div class="slot">
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
        outline: none;
        color: white;
        border: 2px solid #3a3a3c;
    }
</style>