---
title: How the Big 5 teams performances changed in 2022/2023 season?
description: Visualizing the difference in teams statistics from 2021/2022 to 2022/2023 seasons
date: '2023-01-21'
---

<script>
    import Visualization from './Visualization.svelte';
</script>

<h3> Non-penalty <span class="header-xg">xG</span> and non-penalty <span class="header-xga">xG against</span> - current season and the previous one. </h3>
<Visualization />


<style>
    h3 span {
        padding: 0.1rem 0.35rem;
        border-radius: 1px;
        /* border: 1px solid var(--border-primary-color); */
    }

    span.header-xg {
        color: #0D9488;
    }

    span.header-xga {
        color: #9333EA;
    }
</style>