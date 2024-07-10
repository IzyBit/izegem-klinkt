<template>
  <div>
    <PageHeader />
    <HamburgerMenu />
    <MainHero />
    <MainPractical />
    <MainSectionDivider :border="true" />
    <MainInfo />
    <MainSectionDivider :border="true" />
    <MainAboutUs />
    <MainSectionDivider :border="false" />
    <PageFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Home",
});
</script>
