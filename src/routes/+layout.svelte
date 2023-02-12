<script>
  import "../app.css";
  import Header from "./Header.svelte";
</script>

<Header />
<slot />
<footer class="footer mt-8 p-10 bg-neutral text-neutral-content">
  <div>
    <span class="footer-title">Services</span>
    <a class="link link-hover">Distribution</a>
    <a class="link link-hover">SuperStockist</a>
    <a class="link link-hover">FMCG Products</a>
  </div>
</footer>
