<template>
  <div>
    <PageHeader />
    <HamburgerMenu />
    <MainHero />
    <!-- Lazy load components below the fold -->
    <LazyMainPractical />
    <LazyMainSectionDivider :border="true" />
    <LazyMainInfo />
    <LazyMainSectionDivider :border="true" />
    <LazyMainAboutUs />
    <LazyMainSectionDivider :border="false" />
    <LazyPageFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Home",
});
</script>
