<script lang="ts">
  export let title: string;
  export let d: string;
  export let color: string;
  export let bg: string;
  export let desc: string;
  export let viewBox = "0 0 24 24";
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class=" group w-full transition-all duration-700 lg:h-80 lg:w-1/5 lg:hover:w-1/2"
>
  <article
    class="flex h-full flex-row items-center gap-2 overflow-hidden rounded-md border-2 border-white/20 bg-white/30 py-4 px-1 backdrop-blur-xl transition-colors duration-700 hover:bg-white/60 lg:flex-col lg:py-0 lg:px-0"
  >
    <div
      class="hidden h-1/4 -translate-y-20 overflow-hidden transition-transform delay-500 group-hover:translate-y-0 lg:block"
    >
      <h1 class="font-prompt text-3xl">
        {title}
      </h1>
    </div>
    <div class={`h-1/4 text-white`}>
      <svg
        role="img"
        class={`h-20 w-20 ${color} lg:text-white lg:group-hover:${color} ${bg} lg:bg-transparent lg:group-hover:${bg} rounded-full fill-current p-2 transition-colors delay-500`}
        {viewBox}
        xmlns="http://www.w3.org/2000/svg"
        ><title>{title}</title><path {d} /></svg
      >
    </div>
    <div class="flex h-full items-center overflow-hidden px-4">
      <p
        class="text-justify text-xs transition-transform delay-700 ease-out lg:translate-y-80 lg:group-hover:translate-y-0"
      >
        {desc}
      </p>
    </div>
  </article>
</div>
