<script>
	import HeaderLogo from '$lib/svg/Header.svg';
</script>

<header>
	<div class="container">
		<h1>
			<a href="/">{@html HeaderLogo}</a>
		</h1>
	</div>
</header>

<style lang="postcss">
	header {
		background-color: var(--background-header-color);
		color: var(--text-header-color);

		& .container {
			padding: 2rem 1rem;
			margin: 0 auto;
			max-width: var(--main-width);
		}

		& h1 {
			width: 28rem;
			height: auto;
			line-height: 1;
		}
	}
</style>
