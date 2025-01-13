<script lang="ts">
    import TextCapsule from "../components/textCapsule.svelte";
    import Coffee from "../components/coffee.svelte";
    import ContentWrapper from "../components/contentWrapper.svelte";
    import Book from "../components/book.svelte";

    const textCapsules = [
        {
            text: "JS",
            rotate: "12deg",
            color: "#e06c7580",
        },
        {
            text: "TS",
            rotate: "-12deg",
            color: "#61afef80",
        },
        {
            text: "Svelte",
            rotate: "12deg",
            color: "#d19a6680",
        },
        {
            text: "React",
            rotate: "-20deg",
            color: "#98c37980",
        },
        {
            text: "NextJS",
            rotate: "-5deg",
            color: "#4b526380",
        },
        {
            text: "Node",
            rotate: "5deg",
            color: "#e5c07b80",
        },
        {
            text: "Tailwind",
            rotate: "-10deg",
            color: "#c678dd80",
        },
        {
            text: "Rspack",
            rotate: "15deg",
            color: "#d19a6680",
        },
    ];
</script>

<!-- Main container that allows scrolling -->
<div class="min-h-screen w-full pt-24 pl-64 pr-64">
    <section class="relative h-screen w-full flex flex-col">
        <div class="flex flex-row w-full justify-center">
            <div class="flex flex-col mr-32">
                <h1 class="text-7xl font-bold text-atom-white">
                    Hi, I'm <span class="gradient-text">Austin Baune</span>
                </h1>
                <h2 class="text-atom-fg text-5xl font-bold mt-4">
                    Software and Web Developer
                </h2>
                <h3 class="text-atom-gray-light text-4xl font-bold">
                    Current focus on technologies such as
                </h3>
                <div class="flex flex-row mt-6 ml-8">
                    {#each textCapsules as { text, rotate, color } (text)}
                        <TextCapsule --color={color} {text} {rotate} />
                    {/each}
                </div>
            </div>
            <div class="relative bottom-16">
                <Coffee />
            </div>
        </div>
        <div class="flex flex-row w-full justify-center">
            <ContentWrapper>
                <Book />
            </ContentWrapper>
            <ContentWrapper>
                <Book />
            </ContentWrapper>
            <ContentWrapper>
                <Book />
            </ContentWrapper>
        </div>
    </section>

    <!-- Additional content can go here -->
    <section class="min-h-screen bg-gray-100">
        <h2>More content below</h2>
        <!-- Your additional content -->
    </section>
</div>

<style>
    .gradient-text {
        background: linear-gradient(
            45deg,
            #61afef 0%,
            #c678dd 50%,
            #e06c75 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: inline-block;
    }
</style>
