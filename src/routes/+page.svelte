<script lang="ts">
  import { onMount } from "svelte";
  import BlockBusterItem from "./BlockbusterItem.svelte";
  import directus from "$lib/directus";
  import BlockbusterItem from "./BlockbusterItem.svelte";

  let blockbusters = { data: [] };

  onMount(async () => {
    const res = await directus
      .items("blockbuster")
      .readByQuery({ limit: -1, sort: ["name"] });
    console.log({ res });
    blockbusters = res;
  });

  $: console.log({ blockbusters });
</script>

<svelte:head>
  <title>Welcome to J.P. Enterprises and Tushar Trading Company</title>
  <meta name="description" content="JP ENTERPRISES HOME" />
</svelte:head>

<section class="bg-white dark:bg-gray-900 hero min-h-screen" id="big-fat-hero">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="/about"
      class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      role="alert"
    >
      <span class="text-sm font-medium"
        >Want us to distribute your products? learn more</span
      >
      <svg
        class="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        /></svg
      >
    </a>
    <h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Great range of products for your store, at unbeatable prices.
    </h1>
    <p
      class="mb-8  text-lg font-normal text-neutral lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      Buy products of companies like cadbury, godrej, colgate, redbull from the
      us, the official distributors in Dadri and Greater Noida.
    </p>
    <div
      class=" flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
    >
      <a
        href="tel:+917982255302"
        class="btn bg-white text-black hover:bg-blue-500 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
          ><path
            d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"
          /></svg
        >
        Contact now
      </a>
    </div>
  </div>
</section>
<section class="px-4 py-8 mx-auto max-w-screen-xl  lg:py16 lg:px-12">
  <h4 class="text-4xl font-bold">Our Locations</h4>
  <div class="flex sm:flex-row items-center flex-col justify-around my-4">
    <div class="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.519672964424!2d77.55217351409401!3d28.55415379437693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb51a46eb155%3A0x20d43959eb5226a0!2sTushar%20Trading%20Co!5e0!3m2!1sen!2sin!4v1675532214664!5m2!1sen!2sin"
        class="w-full h-[300px] sm:w-[400px]"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <p>Tushar Trading Co. in Dadri</p>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.724840657444!2d77.50296881977519!3d28.466001249380547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc162d682ef29%3A0x4df31841b2b84db4!2sJ%20P%20Enterprises!5e0!3m2!1sen!2sin!4v1675767741348!5m2!1sen!2sin"
        class="w-full h-[300px] sm:w-[400px]"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <p>J.P. Enterprises in Greater Noida</p>
    </div>
  </div>
</section>
<section class="px-4 py-8 mx-auto max-w-screen-xl  lg:py16 lg:px-12">
  <h4 class="text-4xl font-bold">Blockbuster Brands</h4>
  <ul class="carousel mt-4">
    {#each blockbusters.data as bb}
      <BlockbusterItem name={bb.name} />
    {/each}
  </ul>
</section>

<style>
  .big-fat-hero {
  }

  .big-fat-hero {
    background: -moz-linear-gradient(
      45deg,
      #02e1ba 0%,
      #26c9f2 29%,
      #d911f2 66%,
      #ffa079 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #02e1ba 0%,
      #26c9f2 29%,
      #d911f2 66%,
      #ffa079 100%
    );
    background: linear-gradient(
      45deg,
      #02e1ba 0%,
      #26c9f2 29%,
      #d911f2 66%,
      #ffa079 100%
    );
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
    /*min-height: calc(100vh - 2rem);*/
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-evenly;
    overflow: hidden;
    position: relative;
  }

  #big-fat-hero::before,
  #big-fat-hero::after {
    content: "";
    width: 70vmax;
    height: 70vmax;
    position: absolute;
    background: rgba(255, 255, 255, 0.07);
    left: -20vmin;
    top: -20vmin;
    animation: morph 15s linear infinite alternate, spin 20s linear infinite;
    z-index: 1;
    will-change: border-radius, transform;
    transform-origin: 55% 55%;
    pointer-events: none;
  }

  #big-fat-hero::after {
    width: 70vmin;
    height: 70vmin;
    left: auto;
    right: -10vmin;
    top: auto;
    bottom: 0;
    animation: morph 10s linear infinite alternate,
      spin 26s linear infinite reverse;
    transform-origin: 20% 20%;
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @keyframes morph {
    0% {
      border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    }
    100% {
      border-radius: 40% 60%;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
  .st0 {
    display: none;
  }
  .st1 {
    display: inline;
  }
  .st2 {
    opacity: 0.29;
  }
  .st3 {
    fill: #ffffff;
  }
  .st4 {
    clip-path: url(#SVGID_2_);
    fill: #ffffff;
  }
  .st5 {
    clip-path: url(#SVGID_4_);
  }
  .st6 {
    clip-path: url(#SVGID_6_);
  }
  .st7 {
    clip-path: url(#SVGID_8_);
  }
  .st8 {
    clip-path: url(#SVGID_10_);
  }
  .st9 {
    fill: none;
  }
  .st10 {
    clip-path: url(#SVGID_12_);
  }
  .st11 {
    opacity: 0.7;
  }
  .st12 {
    clip-path: url(#SVGID_14_);
  }
  .st13 {
    opacity: 0.2;
  }
  .st14 {
    clip-path: url(#SVGID_16_);
  }
  .st15 {
    opacity: 0.3;
    fill: #ffffff;
    enable-background: new;
  }
</style>
