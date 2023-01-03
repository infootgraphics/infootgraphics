<script>
	import { page } from '$app/stores';

	$: {
		if (typeof gtag != 'undefined') {
			gtag('config', 'G-24SD3BQSEY', {
				page_title: document.title,
				page_path: $page.url.href
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-24SD3BQSEY"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-24SD3BQSEY');
	</script>
</svelte:head>
