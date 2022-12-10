<script>
	export let data;

	const [year, month, day] = data.date.split('-');
	const date = `${day}/${month}/${year}`;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta
		name="description"
		content={data.description}
	/>
</svelte:head>

<article class="feature">
	<div class="feature-header">
		<h1 class="feature-title">{data.title}</h1>
		<div class="feature-date">{date}</div>
	</div>

	<svelte:component this={data.content} />
</article>

<style lang="postcss">
	.feature-title {
		font-size: 2rem;
		line-height: 1.1;
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.feature-date {
		font-size: 0.9rem;
		line-height: 1;
		color: var(--text-secondary-color);
	}

	.feature-header {
		padding-bottom: 1rem;
		/* margin-bottom: 2rem; */
		border-bottom: 1px solid var(--border-primary-color);
	}
</style>
