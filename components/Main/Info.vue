<template>
  <section
    id="info"
    class="m-auto flex items-center justify-between sm:w-full sm:p-10 md:w-full lg:w-7/12 lg:p-0"
  >
    <div class="sm:w-full md:w-full lg:w-2/3 xl:w-2/3">
      <h2 class="mb-2 text-6xl font-bold text-white">Info</h2>
      <p class="text-lg leading-relaxed">
        Beste Pekker, dag muziekliefhebber, Jawel, we zijn er weer klaar voor!
        Met trots presenteren wij u onze
        <span class="font-bold">34ste 'Izegem klinkt'</span>, ook dit keer
        <span class="font-bold"> gratis en voor niets!</span>
        <br />
        <br />
        We openen met jong muzikaal talent van eigen bodem : 'Underground' .
        <br />
        Jonge gasten uit het verenigingsleven en Artiz nemen ons mee op hun
        allereerste optreden. Een warme oproep om deze artiesten massaal aan te
        moedigen. Afspraak om 19u op het Bierkasteelterras, ter hoogte van het
        Pekkersbeeldje op de Grote Markt. U kan er genieten van een frisse
        Filou, Rubus, Framboise, Rouge of Rouge 0,0%.
        <br /><br />
        Waarheen de muzikale avond u verder brengt, bepaalt u uiteraard volledig
        zelf. Het plannetje
        <a href="#info" class="underline" @click="showNotAvailableMessage"
          >binnenin dit boekje</a
        >
        brengt u probleemloos waar u wil. Een gouden tip : neem even de tijd om
        het Izegem Klinkt-programma anno 2025 door te nemen, dit kan ook via
        onze
        <a
          class="underline"
          href="https://www.facebook.com/izegemklinkt"
          target="_blank"
          >FB-pagina</a
        >. Zo mist u geen enkele favoriet en hoeft u de avond zelf alleen maar
        te genieten! <br /><br />
        Het enige wat u nu nog hoeft te doen is 16 mei 2025 met stip in uw
        agenda aanduiden. Kom erbij en wees welkom! Geniet met volle teugen van
        Izegem Klinkt!
        <br /><br />
        Wij wensen u veel leute en plezier, De Leutvrienden
      </p>
    </div>
    <div
      class="w-1/4 -rotate-2 object-cover transition-transform duration-500 ease-in-out hover:rotate-0 sm:hidden md:hidden lg:block"
    >
      <a href="#info" @click="showNotAvailableMessage"
        ><img src="/images/boekje.webp" alt="boekje"
      /></a>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showNotAvailableMessage() {
      alert("Het boekje voor 2025 is nog niet beschikbaar.");
    },
  },
};
</script>
