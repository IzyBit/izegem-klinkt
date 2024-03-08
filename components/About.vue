<template>
  <section id="about-us" class="lg:w-7/12 xl:w-7/12 sm:w-full md:w-full sm:p-10 lg:p-0 m-auto flex justify-between">
    <div class="sm:w-full 
                md:w-full 
                lg:w-1/2 
                xl:w-1/2 

                ">
      <h2 class="text-6xl font-bold mb-2 text-white">Ons Verhaal</h2>
      <p>
        Welkom bij Izegem Klinkt, een betoverende muzikale tournée in de
        Pekkersstad. Al meer dan 30 edities lang vieren we muziek, gezelligheid
        en samenzijn, en dat allemaal dankzij het toegewijde werk van
        gepassioneerde vrijwilligers. In de bruisende maand mei nodigen we jong
        en oud uit om deel te nemen aan ons unieke evenement, dat gratis
        toegankelijk is voor iedereen. Izegem Klinkt biedt voor elk wat wils:
        van nostalgische klanken tot eigentijdse beats. Ons evenement voegt niet
        alleen muzikale variatie toe aan de Stad Izegem, maar creëert ook een
        warme en levendige sfeer die de gemeenschap verbindt. We hopen dat u
        erbij bent!
      </p>
    </div>
    <div
      class="w-1/3 object-cover rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out sm:hidden md:hidden lg:block"
    >
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        :circular="true"
        containerStyle="max-width: 640px"
        autoPlay=true
        :showThumbnails="false"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            :style="{ objectFit: 'cover', width: '400px', height: '400px' }"
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
    itemImageSrc: "/gallery/1.jpg",
    thumbnailImageSrc: "/gallery/1.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/2.jpg",
    thumbnailImageSrc: "/gallery/2.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/3.jpg",
    thumbnailImageSrc: "/gallery/3.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/4.jpg",
    thumbnailImageSrc: "/gallery/4.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/5.jpg",
    thumbnailImageSrc: "/gallery/5.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/6.jpg",
    thumbnailImageSrc: "/gallery/6.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/7.jpg",
    thumbnailImageSrc: "/gallery/7.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/8.jpg",
    thumbnailImageSrc: "/gallery/8.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/9.jpg",
    thumbnailImageSrc: "/gallery/9.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/10.jpg",
    thumbnailImageSrc: "/gallery/10.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/11.jpg",
    thumbnailImageSrc: "/gallery/11.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/12.jpg",
    thumbnailImageSrc: "/gallery/12.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/13.jpg",
    thumbnailImageSrc: "/gallery/13.jpg",
    alt: "Gallery Image",
    title: "Gallery Image",
  },
  {
    itemImageSrc: "/gallery/14.jpg",
    thumbnailImageSrc: "/gallery/14.jpg",
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
