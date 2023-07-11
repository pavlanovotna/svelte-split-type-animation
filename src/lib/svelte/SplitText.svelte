<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import SplitType from 'split-type';
	import { wrapLine, removeOverflow } from './utils';
	let linesContainer: HTMLElement;

  //gsap params
  export let animationY: string = '100%';
  export let animationDuration: number = 1;
  export let animationStagger: number = 0.3;
  export let animationType : string = 'lines';
  let animationClass: string;
  
	onMount(async () => {
		const splitTarget: any = linesContainer?.childNodes[0];
		const splitResult = new SplitType(splitTarget);
		wrapLine(splitResult.lines);
    
    if(animationType === 'chars'){
      animationClass ='.char';
    }else if(animationType === 'words'){
      animationClass ='.word';
    }else{
      animationClass ='.lineInner';
    }
    const animation =  splitResult.lines;

		if (typeof window !== 'undefined') {
			gsap.registerPlugin(ScrollTrigger);
		}

		const ctx = gsap.context((self: HTMLElement | any) => {
			animation?.forEach((line: HTMLElement) => {
        console.log(line)
				gsap.from(line.querySelectorAll(animationClass), {
					y: animationY,
          duration: animationDuration,
          stagger: animationStagger,
          opacity:0,
					scrollTrigger: {
						trigger: linesContainer,
						scrub: false,
						markers: false
					},
          onComplete: () => {
            removeOverflow(line);
            splitResult.revert();
          }
				});
        
			});
		}, linesContainer); 
		return () => ctx.revert();
	});
</script>

<div bind:this={linesContainer}>
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
