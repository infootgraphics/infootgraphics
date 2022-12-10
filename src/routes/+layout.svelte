<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/app.postcss';

	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});

</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- <title>Infootgraphics - Football Data-Driven Visualizations, Stories, Infographics</title> -->
	<!-- <meta
		name="description"
		content=""
	/> -->

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="author" content="infootgraphics.com" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

{#if !isLoaded}
	<div class="preloader" transition:fade="{{duration: 250}}"></div>
{/if}

<Header />
<main>
	<slot />
</main>
<Footer />


<style>
	main {
		min-height: 100vh;
	}

	.preloader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--background-primary-color);
		z-index: 1;
	}
</style>