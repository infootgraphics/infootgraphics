<script>
	import twitterLogo from '$lib/svg/twitter.svg';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div>Infootgraphics / {year}</div>
		<div class="get-in-touch"><a href="/about">Get in touch</a></div>
		<div class="contacts-icon">
			<a href="https://twitter.com/infootgraphics">{@html twitterLogo}</a>
		</div>
	</div>
</footer>

<style lang="postcss">
	footer {
		background-color: var(--background-header-color);
		color: var(--text-secondary-color);
		font-size: 0.8rem;
		line-height: 1;
	}

	.contacts-icon {
		width: 1rem;
		height: auto;
		display: inline-block;
		fill: var(--text-secondary-color);
		float: right;
		line-height: 0;
		cursor: pointer;

		&:hover {
			fill: var(--link-hover-color);
		}
	}

	.get-in-touch {
		& a:hover {
			color: var(--link-hover-color);
		}
	}
</style>
