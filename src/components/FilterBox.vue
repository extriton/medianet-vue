<template>
<div class="filter-box">
  <div
    class="filter-box__button"
    :class="{ disabled: disabled, opened: filter.isOpened }"
    @click="switchOpen"
  />
  <div v-show="filter.isOpened" class="filter-box__form">
    <p class="caption">Колонка должна:</p>
    <div class="filter-item" v-for="(item, index) in this.filter.data" :key="index">
      <div v-show="index > 0" class="logic-buttons">
        <span
          class="and-button"
          :class="{ selected: item.operator == 'and' }"
          @click="item.operator = 'and'"
        >
          &laquo;И&raquo;
        </span>
        <span
          class="or-button"
          :class="{ selected: item.operator == 'or' }"
          @click="item.operator = 'or'"
        >
          &laquo;ИЛИ&raquo;
        </span>
      </div>
      <select class="select-block" v-model="item.include">
        <option value="1">содержать</option>
        <option value="2">не содержать</option>
      </select>
      <input
        class="input-block"
        type="text"
        v-model="item.text"
        placeholder="значение"
        @input="onInputText(index)"
      />
    </div>
    <div class="filter-footer">
      <div class="accept-button" @click="acceptFilter">Фильтровать</div>
      <div v-show="this.filter.data.length > 1" class="clear-button" @click="clearFilter">&#10006; Сбросить</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilterBox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Object,
      required: true
    }
  },
  methods: {
    switchOpen () {
      if (this.disabled) return

      if (!this.filter.isOpened) this.$emit('close-all')

      this.filter.isOpened = !this.filter.isOpened

      if (this.filter.isOpened && this.filter.data.length === 0) {
        this.filter.data.push({
          operator: 'and',
          include: '1',
          text: ''
        })
      }
    },
    onInputText (index) {
      if (this.filter.data[index].text === '' && this.filter.data.length > 1) {
        this.filter.data.splice(index, 1)
      }
      if (this.filter.data[index].text !== '' && index === this.filter.data.length - 1) {
        this.filter.data.push({
          operator: 'and',
          include: '1',
          text: ''
        })
      }
    },
    acceptFilter () {
      if (this.filter.data.length === 1) return
      this.$emit('close-all')
      this.$emit('change')
    },
    clearFilter () {
      this.filter.data = []
      this.filter.data.push({
        operator: 'and',
        include: '1',
        text: ''
      })
    }
  }
}
</script>

<style lang="scss">
.filter-box {
  position: absolute;
  &__button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: block;
    width: 20px;
    height: 25px;
    background-image: url('~@/assets/img/filter.svg');
    background-size: 10px 10px;
    background-position: 5px 7px;
    background-repeat: no-repeat;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    &:hover {
      cursor: pointer;
      background-image: url('~@/assets/img/filter-active.svg');
    }
    &.disabled {
      background-image: url('~@/assets/img/filter-disabled.svg');
      &:hover {
        cursor: default;
      }
    }
    &.opened {
      background-image: url('~@/assets/img/filter-active.svg');
      background-color: #FFF;
      border-color: rgba(0, 0, 0, 0.04);
      border-bottom: 1px solid #FFF;
    }
  }
  &__form {
    position: absolute;
    top: 24px;
    left: 0;
    z-index: 1;
    width: 202px;
    height: auto;
    background-color: #FFF;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 0 4px 4px 4px;
    box-sizing: border-box;
    padding: 10px 7px 10px 10px;
    .caption {
      margin: 0 0 7px 0;
      font-size: 12px;
      line-height: 120%;
      color: #8394A6;
    }
    .filter-item {
      margin-bottom: 10px;
      .logic-buttons {
        text-align: center;
        font-size: 10px;
        line-height: 24px;
        margin-bottom: 10px;
        color: #98B7D7;
        .and-button {
          display: inline-block;
          width: 50%;
          height: 24px;
          border-radius: 4px 0 0 4px;
          background-color: #D9EDFF;
          &.selected {
            background-color: #2D67D6;
            color: #FFF;
          }
        }
        .or-button {
          display: inline-block;
          width: 50%;
          height: 24px;
          border-radius: 0 4px 4px 0;
          background-color: #D9EDFF;
          &.selected {
            background-color: #2D67D6;;
          }
        }
        .and-button, .or-button {
          &:hover {
            cursor: pointer;
          }
        }
      }
      .select-block, .input-block {
        width: 100%;
        height: 24px;
        background-color: #F0F4F9;
        border-radius: 4px;
        font-size: 10px;
        line-height: 120%;
        color: #29333E;
        border: none;
        padding: 5px 7px 7px 7px;
        margin-bottom: 4px;
        &:focus {
          outline: none;
        }
      }
      .input-block {
        &::placeholder {
          color: #98B7D7;
        }
      }
    }
    .filter-footer {
      .accept-button {
        display: inline-block;
        width: 88px;
        height: 26px;
        line-height: 26px;
        background: #2D67D6;
        border-radius: 4px;
        color: #FFF;
        margin-right: 3px;
        text-align: center;
      }
      .clear-button {
        display: inline-block;
        width: 84px;
        height: 26px;
        line-height: 26px;
        background: #FFECEC;;
        border-radius: 4px;
        color: #C13636;
        text-align: center;
      }
      .accept-button, .clear-button {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
