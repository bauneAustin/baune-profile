<script>
    let { children } = $props();
</script>

<div class="flex flex-col h-80 w-96 mr-16 text-atom-white">
    <div class="relative bg-atom-blue h-40 w-60 rounded-xl">
        {@render children?.()}
    </div>
</div>
