<script lang="ts">
    let { text, rotate = "0deg", color = "#ffffff" } = $props();
</script>

<span
    class={`glow-text relative text-lg ml-3 flex ${rotate}`}
    style="--rotation: {rotate};"
>
    {text}
</span>

<style>
    .glow-text {
        display: inline-block;
        color: #fff;
        text-shadow: 0 0 10px var(--color);
        padding: 0.5rem;
        background-color: var(--color);
        border-radius: 4px;
        transform: rotate(var(--rotation, 0deg));
    }
</style>
