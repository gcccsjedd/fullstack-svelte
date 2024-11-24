<script lang="ts">
	import { fly } from 'svelte/transition';

	let visible = $state(false);
</script>

<button
	onclick={() => {
		visible = !visible;
	}}>Click Me</button
>

{#if visible}
	<div class="h-44 w-full bg-blue-500 p-8" transition:fly={{ y: 100 }}>Element</div>
{/if}
