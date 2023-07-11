<script>
	import SplitText from "$lib/svelte/SplitText.svelte";
</script>
<SplitText >
  <p>Lorem ipsum dolor sit amet</p>
</SplitText>

<SplitText animationY={'50%'} animationDuration={1} animationStagger={0.3} animationType={'words'} >
<p>foooooo!  ipsum ipsum</p>
</SplitText>