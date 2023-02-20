<script lang="ts">
  import { onMount } from "svelte";

  let blob: HTMLElement;

  onMount(() => {
    window.onpointermove = (e) => {
      const { clientX, clientY } = e;

      blob.animate(
        {
          left: clientX + "px",
          top: clientY + "px",
        },
        {
          duration: 5000,
          fill: "forwards",
        }
      );
    };
  });
</script>

<div
  bind:this={blob}
  style="translate: -50% -50%;"
  class="absolute top-1/2 left-1/2 aspect-square h-[34vmax] animate-spin-slow rounded-full bg-gradient-to-r from-teal-600 to-purple-600 opacity-80 duration-[10000ms]"
/>
<div class="fixed z-[2] h-full w-full backdrop-blur-3xl" />
