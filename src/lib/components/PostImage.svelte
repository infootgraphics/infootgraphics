<script>
    export let src;
    export let title = '';
    export let alt = '';
</script>

<img {src} {title} {alt} />

<style lang="postcss">
    img {
        max-width: 100%;
        height: auto;
    }
</style>