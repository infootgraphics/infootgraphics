<script>
	import { scaleLinear, area, line } from 'd3';
	import { fade } from 'svelte/transition';

	export let data;
	export let x;
	export let y;
	export let variable;
	export let domainY;
	export let domainX;
	export let id;

	let showTooltip = false;
	let chartWidth = 125;

	$: range = [chartWidth, chartWidth];

	$: margin = {
		top: chartWidth * 0.1,
		right: chartWidth * 0.1,
		bottom: chartWidth * 0.1,
		left: chartWidth * 0.1
	};

	$: w = range[0] - margin.left - margin.right;
	$: h = range[1] - margin.top - margin.bottom;

	$: translate = `translate(${margin.left}, ${margin.top})`;
	$: translateYAxis = `translate(${margin.left}, ${margin.top})`;
	$: translateXAxis = `translate(${margin.left}, ${margin.top + h})`;

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

	$: dataXG = data.filter((rec) => rec[variable] === 'npxG');
	$: dataXGA = data.filter((rec) => rec[variable] === 'npxGA')

	$: lineXG = lineGen(dataXG);
	$: lineXGA = lineGen(dataXGA);

	$: xTicks = [
		{ label: 'prev', x: scaleX(2022) },
		{ label: 'current', x: scaleX(2023) }
	];

	$: yTicks = scaleY.ticks(4).map((tick) => {
		return { label: `${tick}`, y: scaleY(tick) };
	});
</script>

<div class="chart-container" bind:offsetWidth={chartWidth}>
	<svg
		viewBox={`0 0 ${range[0]} ${range[1]}`}
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => (showTooltip = false)}
	>
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
				<line x1={w} x2={w} y1={0} y2={h} />
			</g>
		</g>

		<g class="y-axis" transform={translateYAxis}>
			<line y1={yTicks[0].y} y2={yTicks.slice(-1).y} />

			{#each yTicks as { y, label }}
				<line class="tick" x1={0} x2={-5} y1={y} y2={y} />
				<text {y} class="tick-label" alignment-baseline="middle">{label}</text>
			{/each}
		</g>

		<g class="x-axis" transform={translateXAxis}>
			{#each xTicks as { x, label }}
				<text
					{x}
					class="tick-label"
					alignment-baseline="hanging"
					class:current={label === 'current'}>{label}</text
				>
			{/each}
		</g>
	</svg>
	{#if showTooltip}
		<div class="tooltip" transition:fade={{ duration: 75 }}>
			<div>npxG: {dataXG[0][y]} &#8594; {dataXG[1][y]}</div>
			<div>npxGA: {dataXGA[0][y]} &#8594; {dataXGA[1][y]}</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.chart-container {
		line-height: 0;
		position: relative;

		& svg {
			overflow: visible;
		}
	}

	.border {
		fill: none;
		stroke: #737373;
		stroke-width: 1;
		stroke-dasharray: 2;
	}

	.lines {
		& path {
			stroke-width: 0.15rem;
		}
	}

	.tick-label {
		font-size: 0.65rem;
		line-height: 1;
		fill: #737373;
		stroke: none;
	}

	.x-axis {
		& .tick-label {
			transform: translateY(0.5rem);

			&.current {
				text-anchor: end;
			}
		}
	}

	.y-axis {
		& .tick-label {
			transform: translateX(-0.5rem);
			text-anchor: end;
			font-size: 0.65rem;
		}

		& line {
			stroke: #737373;
			stroke-width: 1px;
			stroke-dasharray: 2;
		}
	}

	.tooltip {
		background-color: rgba(22, 22, 22, 0.9);
		color: #fafafa;
		position: absolute;
		top: 80%;
		left: 50%;
		width: 75%;
		transform: translate(-50%, -80%);

		font-size: 0.75rem;
		padding: 0.35rem;
		line-height: 1;

		border-radius: 1px;

		pointer-events: none;

		& div + div {
			margin-top: 0.35rem;
		}
	}
</style>
