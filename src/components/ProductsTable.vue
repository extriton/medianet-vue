<template>
  <div>
    <table class="products-table">
      <!-- HEAD -->
      <thead class="products-table__head">
        <tr>
          <th></th>
          <!-- Фото -->
          <th>
            <div class="title">Фото</div>
          </th>
          <!-- SKU -->
          <th>
            <div class="title">SKU</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.sku"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.sku"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Название -->
          <th>
            <div class="title">Название</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.caption"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.caption"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Площадка -->
          <th>
            <div class="title">Площадка</div>
            <div class="input-form">
              <input type="text" disabled />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.platform"
                  disabled
                />
              </div>
            </div>
          </th>
          <!-- Категория -->
          <th>
            <div class="title">Категория</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.category"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.category"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Бренд -->
          <th>
            <div class="title">Бренд</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.brand"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.brand"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Продавец -->
          <th>
            <div class="title">Продавец</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.seller"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.seller"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Цвет -->
          <th>
            <div class="title">Цвет</div>
            <div class="input-form">
              <input type="text" disabled />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.color"
                  disabled
                />
              </div>
            </div>
          </th>
          <!-- Наличие -->
          <th>
            <div class="title">Наличие</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.availability"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.availability"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Коммент -->
          <th>
            <div class="title">Коммент</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.comment"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.comment"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Рейтинг -->
          <th>
            <div class="title">Рейтинг</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.rating"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.rating"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- СПП -->
          <th>
            <div class="title">СПП</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.spp"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.spp"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Среднее -->
          <th>
            <div class="title">Среднее</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.average"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.average"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Потенц -->
          <th>
            <div class="title">Потенц</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.potential"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.potential"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Цена -->
          <th>
            <div class="title">Цена</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.price"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.price"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Был в на -->
          <th>
            <div class="title">Был в на</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.stock"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.stock"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Продаж -->
          <th>
            <div class="title">Продаж</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.sales"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.sales"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
          <!-- Выручка -->
          <th>
            <div class="title">Выручка</div>
            <div class="input-form">
              <input
                type="text"
                v-model="searchParams.proceeds"
                @change="updateProductsList"
              />
              <div class="filter-box-wrap">
                <FilterBox
                  :filter="filterParams.proceeds"
                  @change="updateProductsList"
                  @close-all="closeAllFilters"
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <!-- BODY -->
      <tbody class="products-table__body">
        <tr v-for="(product, index) in products" :key="index">
          <td>
            <input
              :id="'cb' + index"
              class="custom-checkbox"
              type="checkbox"
              v-model="product.checked"
            />
            <label :for="'cb' + index"></label>
          </td>
          <!-- Фото -->
          <td>
            <div class="photo-wrap">
              <img :src="'/img/product-' + product.photo + '.svg'" />
            </div>
          </td>
          <!-- SKU -->
          <td>
            {{ product.sku }}
          </td>
          <!-- Название -->
          <td>
            {{ product.caption }}
          </td>
          <!-- Площадка -->
          <td>
            {{ product.platform }}
          </td>
          <!-- Категория -->
          <td>
            {{ product.category }}
          </td>
          <!-- Бренд -->
          <td>
            {{ product.brand }}
          </td>
          <!-- Продавец -->
          <td>
            {{ product.seller }}
          </td>
          <!-- Цвет -->
          <td>
            {{ product.color }}
          </td>
          <!-- Наличие -->
          <td>
            {{ product.availability }}
          </td>
          <!-- Коммент -->
          <td>
            {{ product.comment }}
          </td>
          <!-- Рейтинг -->
          <td>
            {{ product.rating }}
          </td>
          <!-- СПП -->
          <td>
            {{ product.spp }}
          </td>
          <!-- Среднее -->
          <td>
            {{ product.average }}
          </td>
          <!-- Потенц -->
          <td>
            {{ product.potential }}
          </td>
          <!-- Цена -->
          <td>
            {{ product.price }} &#8381;
          </td>
          <!-- Был в на -->
          <td>
            {{ product.stock }}
          </td>
          <!-- Продаж -->
          <td>
            {{ product.sales }}
          </td>
          <!-- Выручка -->
          <td>
            {{ product.proceeds }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterBox from '@/components/FilterBox.vue'

export default {
  name: 'ProductsTable',
  components: {
    FilterBox
  },
  data () {
    return {
      products: [],
      searchParams: {
        sku: '',
        caption: '',
        category: '',
        brand: '',
        seller: '',
        availability: '',
        comment: '',
        rating: '',
        spp: '',
        average: '',
        potential: '',
        price: '',
        stock: '',
        sales: '',
        proceeds: ''
      },
      filterParams: {
        sku: { isOpened: false, data: [] },
        caption: { isOpened: false, data: [] },
        platform: { isOpened: false, data: [] },
        category: { isOpened: false, data: [] },
        brand: { isOpened: false, data: [] },
        seller: { isOpened: false, data: [] },
        color: { isOpened: false, data: [] },
        availability: { isOpened: false, data: [] },
        comment: { isOpened: false, data: [] },
        rating: { isOpened: false, data: [] },
        spp: { isOpened: false, data: [] },
        average: { isOpened: false, data: [] },
        potential: { isOpened: false, data: [] },
        price: { isOpened: false, data: [] },
        stock: { isOpened: false, data: [] },
        sales: { isOpened: false, data: [] },
        proceeds: { isOpened: false, data: [] },
      }
    }
  },
  computed: {
    ...mapGetters('products', ['PRODUCTS'])
  },
  methods: {
    updateProductsList () {
      console.log(this.searchParams)
      this.$store.dispatch('products/GET_PRODUCTS_LIST', { searchParams: this.searchParams, filterParams: this.filterParams })
        .then(response => {
          this.products = response
        })  
    },
    closeAllFilters () {
      for (let key in this.filterParams) this.filterParams[key]['isOpened'] = false
    }
  },
  created () {
    this.$store.dispatch('products/GET_PRODUCTS_LIST', { searchParams: this.searchParams, filterParams: this.filterParams })
      .then(response => {
        console.log(response)
        this.products = response
      })
  }
}
</script>

<style lang="scss">
@import '~@/assets/fonts/PTRootUI/PT_Root_UI_Regular.css';

.products-table {
  font-family: 'PTRootUIWebRegular', sans-serif;
  font-size: 12px;
  &__head {
    tr {
      display: block;
      padding: 6px 0 6px 6px;
      background-color: #F5F7F9;
      border-radius: 4px;
      th {
        box-sizing: border-box;
        text-align: left;
        vertical-align: top;
        border-right: 1px solid #D1DFEC;
        padding: 0 12px;
        font-weight: normal;
        .title {
          font-weight: bold;
        }
        .input-form {
          width: 100%;
          position: relative;
          input {
            display: inline-block;
            margin-top: 2px;
            width: calc(100% - 11px);
            padding: 5px 7px 6px 7px;
            font-size: 10px;
            line-height: 12px;
            color: #98B7D7;
            border: 1px solid transparent;
            border-radius: 4px;
            box-sizing: border-box;

            &:focus {
              outline-color: rgba(45, 103, 214, 0.6);;
            }
            &:disabled {
              background-color: #EBEBEB;
            }
          }
          .filter-box-wrap {
            position: absolute;
            top: 1px;
            right: 9px;
          }
        }
        &:first-child {
          border: none;
          padding: 0;
        }
        &:last-child {
          border: none;
        }
        &:nth-child(1) {
          width: 22px;
          min-width: 22px;
        }
        &:nth-child(2) {
          width: 66px;
          min-width: 66px;
        }
        &:nth-child(3) {
          width: 123px;
          min-width: 123px;
        }
        &:nth-child(4) {
          width: 154px;
          min-width: 154px;
        }
        &:nth-child(5) {
          width: 112px;
          min-width: 112px;
        }
        &:nth-child(6) {
          width: 230px;
          min-width: 230px;
        }
        &:nth-child(7) {
          width: 116px;
          min-width: 116px;
        }
        &:nth-child(8) {
          width: 155px;
          min-width: 155px;
        }
        &:nth-child(9) {
          width: 92px;
          min-width: 92px;
        }
        &:nth-child(10) {
          width: 100px;
          min-width: 100px;
        }
        &:nth-child(11) {
          width: 100px;
          min-width: 100px;
        }
        &:nth-child(12) {
          width: 100px;
          min-width: 100px;
        }
        &:nth-child(13) {
          width: 79px;
          min-width: 79px;
        }
        &:nth-child(14) {
          width: 78px;
          min-width: 78px;
        }
        &:nth-child(15) {
          width: 78px;
          min-width: 78px;
        }
        &:nth-child(16) {
          width: 78px;
          min-width: 78px;
        }
        &:nth-child(17) {
          width: 78px;
          min-width: 78px;
        }
        &:nth-child(18) {
          width: 78px;
          min-width: 78px;
        }
        &:nth-child(19) {
          width: 100px;
          min-width: 100px;
        }
      }
    }
  }
  &__body {
    tr {
      display: block;
      padding: 0 0 0 6px;
      td {
        box-sizing: border-box;
        text-align: left;
        padding: 0 12px 0 12px;
        font-weight: normal;
        &:nth-child(1) {
          width: 22px;
          min-width: 22px;
          padding: 0;
          input[type="checkbox"] {
            margin-top: 0;
          }
        }
        &:nth-child(2) {
          width: 66px;
          min-width: 66px;
        }
        &:nth-child(3) {
          width: 123px;
          min-width: 123px;
        }
        &:nth-child(4) {
          width: 154px;
          min-width: 154px;
          color: #2D67D6;
        }
        &:nth-child(5) {
          width: 112px;
          min-width: 112px;
        }
        &:nth-child(6) {
          width: 230px;
          min-width: 230px;
          color: #2D67D6;
        }
        &:nth-child(7) {
          width: 116px;
          min-width: 116px;
          color: #2D67D6;
        }
        &:nth-child(8) {
          width: 155px;
          min-width: 155px;
        }
        &:nth-child(9) {
          width: 92px;
          min-width: 92px;
        }
        &:nth-child(10) {
          width: 100px;
          min-width: 100px;
          text-align: right;
        }
        &:nth-child(11) {
          width: 100px;
          min-width: 100px;
          text-align: right;
        }
        &:nth-child(12) {
          width: 100px;
          min-width: 100px;
          text-align: right;
        }
        &:nth-child(13) {
          width: 79px;
          min-width: 79px;
          text-align: right;
        }
        &:nth-child(14) {
          width: 78px;
          min-width: 78px;
          text-align: right;
        }
        &:nth-child(15) {
          width: 78px;
          min-width: 78px;
          text-align: right;
        }
        &:nth-child(16) {
          width: 78px;
          min-width: 78px;
          text-align: right;
        }
        &:nth-child(17) {
          width: 78px;
          min-width: 78px;
          text-align: right;
        }
        &:nth-child(18) {
          width: 78px;
          min-width: 78px;
          text-align: right;
        }
        &:nth-child(19) {
          width: 100px;
          min-width: 100px;
          text-align: right;
        }
      }
    }
  }
  /* Custom checkbox styles */
  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: #F0F4F9;
    background-repeat: no-repeat;
    background-size: 80% 80%;
    background-position: center center;
    border-radius: 4px;
    cursor: pointer;
  }
  .custom-checkbox:checked+label::before {
    background-image: url('~@/assets/img/checkbox-checked.svg');
  }
  .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
    background: #FFFFFF;
    border: 1px solid rgba(45, 103, 214, 0.6);
    box-shadow: 0px 0px 4px rgba(156, 190, 255, 0.25);
  }
  .custom-checkbox:disabled+label::before {
    background-color: #ECF6FF;
    cursor: default;
  }
}
</style>
