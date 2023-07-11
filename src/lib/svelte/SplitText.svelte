<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import SplitType from 'split-type';
	import { wrapLine, removeOverflow } from './utils';
	let linesContainer: HTMLElement;

	onMount(async () => {
		const splitTarget: any = linesContainer?.childNodes[0];
		const splitResult = new SplitType(splitTarget);
		wrapLine(splitResult.lines);
    console.log(splitTarget);
		if (typeof window !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger);
		}

		const ctx = gsap.context((self: HTMLElement | any) => {
			const lines = self.selector('.lineInner');
			lines.forEach((line: HTMLElement) => {
				gsap.from(line, {
					y: '100%',
					stagger: 0.3,
					opacity: 0,
					duration: 1,
					scrollTrigger: {
						trigger: linesContainer,
						scrub: false,
						markers: false
					}
				});
			});
		}, linesContainer); 
		return () => ctx.revert();
	});
</script>

<div class="split-target" bind:this={linesContainer}>
	<slot />
</div>

<style>
	:global(.line) {
		overflow: hidden;
		line-height: 1.2em;
		vertical-align: baseline;
	}
	:global(.line.overflowNormal) {
		overflow: visible;
	}
</style>
