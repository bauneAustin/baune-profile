<script lang="ts">
    import AnimatedText from "../components/animatedText.svelte";

    const animatedTexts = [
        {
            text: "JS",
            rotate: "12deg",
            bottom: "bottom-72",
            right: "right-48",
            color: "#e06c7580",
        },
        {
            text: "TS",
            rotate: "-12deg",
            bottom: "bottom-[30%]",
            right: "right-[35%]",
            color: "#61afef80",
        },
        {
            text: "Svelte",
            rotate: "12deg",
            top: "bottom-[10em]",
            right: "right-[21em]",
            color: "#d19a6680",
        },
        {
            text: "React",
            rotate: "-20deg",
            top: "bottom-[1em]",
            right: "right-[10%]",
            color: "#98c37980",
        },
        {
            text: "NextJS",
            rotate: "-5deg",
            top: "bottom-[3em]",
            right: "right-[32em]",
            color: "#4b526380",
        },
        {
            text: "Node",
            rotate: "5deg",
            top: "top-[3em]",
            right: "left-[32em]",
            color: "#e5c07b80",
        },
    ];
</script>

<!-- Main container that allows scrolling -->
<div class="min-h-screen w-full">
    <section class="relative h-screen w-full flex items-center justify-center">
        <div
            class="relative bottom-[55px] -z-10 flex flex-col w-full h-[90%] items-center justify-center bg-atom-bg shadow-[0_35px_50px_-5px_rgba(59,130,246,0.5)]"
        >
            {#each animatedTexts as { text, rotate, left, top, color } (text)}
                <AnimatedText
                    --color={color}
                    {text}
                    {rotate}
                    --left={left}
                    --top={top}
                />
            {/each}
        </div>
        <!-- <div class="relative w-full overflow-hidden">
            <div
                class="absolute inset-0 rotate-45 rounded-3xl bg-blue-500 shadow-[0_15px_50px_-5px_rgba(59,130,246,0.5)] bg-atom-bg"
            >
                <div class="relative w-full h-full">
                    
                </div>
            </div>
        </div> -->
    </section>

    <!-- Additional content can go here -->
    <section class="min-h-screen bg-gray-100">
        <h2>More content below</h2>
        <!-- Your additional content -->
    </section>
</div>
