<script lang="ts">
    let { text, rotate = "0deg", color = "#ffffff" } = $props();

    let isAnimating = $state(false);
    function toggleAnimation() {
        let randomNum = Math.random() * (30000 - 10000) + 10000;
        let t = setTimeout(() => {
            isAnimating = !isAnimating;
            let t2 = setTimeout(() => {
                isAnimating = !isAnimating;
                clearTimeout(t2);
            }, 2000);
            toggleAnimation();
            clearTimeout(t);
        }, randomNum);
    }

    // Start the random animation cycle
    toggleAnimation();
</script>

<span
    class={`glow-text relative text-lg ml-3 flex ${rotate} ${isAnimating ? "animate" : ""}`}
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

    .glow-text.animate {
        animation: jiggle 0.25s ease-in-out infinite;
    }

    @keyframes jiggle {
        0%,
        100% {
            transform: rotate(var(--rotation, 0deg)) translateX(0);
        }
        25% {
            transform: rotate(var(--rotation, 0deg)) translateX(-2px)
                rotate(-2deg);
        }
        75% {
            transform: rotate(var(--rotation, 0deg)) translateX(2px)
                rotate(2deg);
        }
    }

    /* Optional hover effect */
    .glow-text:hover {
        text-shadow: 0 0 20px var(--color);
        background-color: var(--color);
    }
</style>
