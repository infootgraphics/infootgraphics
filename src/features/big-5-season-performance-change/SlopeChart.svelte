<script>
	import { scaleLinear, area, line } from 'd3';

	export let data;
	export let x;
	export let y;
	export let variable;
	export let domainY;
	export let domainX;
	export let range = [125, 125];
	export let id;

	const margin = {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	};

	const w = range[0] - margin.left - margin.right;
	const h = range[1] - margin.top - margin.bottom;

	const translate = `translate(${margin.left}, ${margin.top})`;

	$: scaleY = scaleLinear().domain(domainY).range([h, 0]);
	$: scaleX = scaleLinear().domain(domainX).range([0, w]);

	$: areaGen = area()
		.x((rec) => scaleX(rec[x]))
		.y0(scaleY(0))
		.y1((rec) => scaleY(rec[y]));

	$: areaPathXG = areaGen(data.filter((rec) => rec[variable] === 'npxG'));
	$: areaPathXGA = areaGen(data.filter((rec) => rec[variable] === 'npxGA'));

	$: lineGen = line()
		.x((rec) => scaleX(rec[x]))
		.y((rec) => scaleY(rec[y]));

	$: lineXG = lineGen(data.filter((rec) => rec[variable] === 'npxG'));
	$: lineXGA = lineGen(data.filter((rec) => rec[variable] === 'npxGA'));
</script>

<svg viewBox={`0 0 ${range[0]} ${range[1]}`} class="nofill">
	<defs>
		<mask id="areaMask{id}">
			<path d="{areaPathXG} {areaPathXGA}" fill-rule="evenodd" fill="white" />
		</mask>
	</defs>
	<g class="chart" transform={translate}>
		<g class="area" mask="url(#areaMask{id})">
			<path d={areaPathXG} fill="#0D948880" />
			<path d={areaPathXGA} fill="#9333EA80" />
		</g>
		<g class="lines">
			<path d={lineXG} stroke="#0D9488" />
			<path d={lineXGA} stroke="#9333EA" />
		</g>
		<g class="border">
			<rect x="0" y="0" width={w} height={h} fill="none"/>
		</g>
	</g>
</svg>

<style lang="postcss">
	svg {
		border: 0px solid #000;
	}

	.lines {
		& path {
			stroke-width: 0.075rem;
		}
	}

	.border {
		& rect {
			stroke: #737373;
			stroke-width: 0.02rem;
		}
	}
</style>
