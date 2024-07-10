<template>
   <section
      id="about-us"
      class="m-auto flex justify-between sm:w-full sm:p-10 md:w-full lg:w-7/12 lg:p-0 xl:w-7/12"
   >
      <div class="sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
         <h2 class="mb-2 text-6xl font-bold text-white">Ons Verhaal</h2>
         <p>
            Welkom bij Izegem Klinkt, een betoverende muzikale tournée in de
            Pekkersstad. Al meer dan 30 edities lang vieren we muziek,
            gezelligheid en samenzijn, en dat allemaal dankzij het toegewijde
            werk van gepassioneerde vrijwilligers. In de bruisende maand mei
            nodigen we jong en oud uit om deel te nemen aan ons unieke
            evenement, dat gratis toegankelijk is voor iedereen. Izegem Klinkt
            biedt voor elk wat wils: van nostalgische klanken tot eigentijdse
            beats. Ons evenement voegt niet alleen muzikale variatie toe aan de
            Stad Izegem, maar creëert ook een warme en levendige sfeer die de
            gemeenschap verbindt. We hopen dat u erbij bent!
         </p>
      </div>
      <div
         class="w-1/3 rotate-2 object-cover transition-transform duration-500 ease-in-out hover:rotate-0 sm:hidden md:hidden lg:block"
      >
         <Galleria
            :value="images"
            :responsive-options="responsiveOptions"
            :num-visible="5"
            :circular="true"
            container-style="max-width: 640px"
            :auto-play="true"
            :show-thumbnails="false"
         >
            <template #item="slotProps">
               <img
                  :src="slotProps.item.itemImageSrc"
                  :alt="slotProps.item.alt"
                  :style="{
                     objectFit: 'cover',
                     width: '400px',
                     height: '400px',
                  }"
               />
            </template>
            <template #thumbnail="slotProps">
               <img
                  :src="slotProps.item.thumbnailImageSrc"
                  :alt="slotProps.item.alt"
                  style="display: block"
               />
            </template>
         </Galleria>
      </div>
   </section>
</template>

<script setup>
const images = ref([
   {
      itemImageSrc: "/gallery/1.webp",
      thumbnailImageSrc: "/gallery/1.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/2.webp",
      thumbnailImageSrc: "/gallery/2.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/3.webp",
      thumbnailImageSrc: "/gallery/3.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/4.webp",
      thumbnailImageSrc: "/gallery/4.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/5.webp",
      thumbnailImageSrc: "/gallery/5.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/6.webp",
      thumbnailImageSrc: "/gallery/6.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/7.webp",
      thumbnailImageSrc: "/gallery/7.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/8.webp",
      thumbnailImageSrc: "/gallery/8.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/9.webp",
      thumbnailImageSrc: "/gallery/9.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/10.webp",
      thumbnailImageSrc: "/gallery/10.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/11.webp",
      thumbnailImageSrc: "/gallery/11.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/12.webp",
      thumbnailImageSrc: "/gallery/12.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/13.webp",
      thumbnailImageSrc: "/gallery/13.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
   {
      itemImageSrc: "/gallery/14.webp",
      thumbnailImageSrc: "/gallery/14.webp",
      alt: "Gallery Image",
      title: "Gallery Image",
   },
]);
const activeIndex = ref(0);
const responsiveOptions = ref([
   {
      breakpoint: "1024px",
      numVisible: 5,
   },
   {
      breakpoint: "768px",
      numVisible: 3,
   },
   {
      breakpoint: "560px",
      numVisible: 1,
   },
]);
</script>
