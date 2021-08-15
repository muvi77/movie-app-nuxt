<template>
  <div>
    <Header />
    <!-- <router-view /> -->
    <Nuxt />
    <Footer />
  </div>
</template> 

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        // Hello,
        Header,
        Footer
    },
}
</script>


