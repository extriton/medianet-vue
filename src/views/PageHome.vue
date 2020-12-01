<template>
  <div class="page-home">
    <ProductsTable />
  </div>
</template>

<script>
import ProductsTable from '@/components/ProductsTable.vue'

export default {
  name: 'PageHome',
  components: {
    ProductsTable
  }
}
</script>
