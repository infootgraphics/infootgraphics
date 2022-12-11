<script>
	export let feature;
	const coverPath = new URL(`/src/features/${feature.path}/cover.png`, import.meta.url).href;
</script>

<div class="feature-tile" style="background-image: url({coverPath});">
	<div class="feature-tile-content">
		<h2 class="feature-title">
			<a href={`feature/${feature.path}`}>
				{feature.meta.title}
			</a>
		</h2>
	</div>
</div>

<style lang="postcss">
	.feature-tile {
		background-color: var(--background-secondary-color);
		padding: 1rem 2rem 10rem 2rem;
		border-radius: 2px;
		/* border: 1px solid var(--accent-color); */
		background-size: cover;
		background-position: bottom;
		position: relative;
	}

	.feature-tile-content {
		padding: 1rem 2rem 9rem 2rem;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(250, 250, 250, 0.35);
	}

	.feature-title {
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1.25;
	}

	@media screen and (max-width: 768px) {
		.feature-title {
			font-weight: 700;
		}
	}

	.feature-tile a {
		text-decoration: none;
		color: var(--text-primary-color);
		background-color: var(--background-secondary-color);
		padding: 0.25rem 0.5rem;
		display: inline-block;

		&:hover {
			color: var(--text-secondary-color);
		}
	}
</style>
