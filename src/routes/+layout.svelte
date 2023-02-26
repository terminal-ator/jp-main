<script>
  import "../app.css";
  import Header from "./Header.svelte";
</script>

<Header />
<slot />
<footer
  class="footer rounded-3xl mt-8 mb-4 sm:w-11/12 mx-auto  p-10 bg-black text-neutral-content"
>
  <div>
    <span class="footer-title">Services</span>
    <a class="link link-hover">Distribution</a>
    <a class="link link-hover">SuperStockist</a>
    <a class="link link-hover">FMCG Products</a>
  </div>
</footer>
