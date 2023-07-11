# svelte split text animation 

Using GSAP and Split-type packages text is nimated when in viewport

```bash
npm install @bitworks/svelte-split-text-animation

```

## Usage

```
<script>
	import SplitText from "$lib/svelte/SplitText.svelte";
</script>

<SplitText animationY={'50%'} animationDuration={1} animationStagger={0.3} animationType={'words'} >
  <p>Lorem ipsum dolor sit amet</p>
</SplitText>
```
## Available Parameters

Parameters correspond to gsap and split-type values

| Params              | Value                     |
| -----------         | -----------               |
| animationY          | '100%'                    |
| animationDuration   | 1                         |
| animationType       | 'lines', 'words', 'chars' |
| animationStagger    | 0.3                       |


