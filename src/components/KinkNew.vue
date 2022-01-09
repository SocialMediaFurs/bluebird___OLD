<template>
  <div id="wrapper">
    <div>
      <h3 class="text-left click-head" @click="display=!display">{{ val.field }}</h3>
    </div>
    <div class="px-4 py-4" v-if="singleDiagram">
      <div>
        <div>
          <Slider
            v-model="orientation"
            :step="1"
            :min="0"
            :max="10"
            :disabled="val.disable"
            class="slider"
            id="orientation"
          />
        </div>
        <div class="flex">
          <div class="w-1/3 text-left">Dominant</div>
          <div class="w-1/3"></div>
          <div class="w-1/3 text-right">Devot</div>
        </div>
        <div class="mt-3">
          <Slider
            v-model="like"
            :step="1"
            :min="0"
            :max="4"
            :disabled="val.disable"
            class="slider"
            id="fetish"
          />
        </div>
        <div class="flex">
          <div class="w-1/3 text-left">Tabu</div>
          <div class="w-1/3"></div>
          <div class="w-1/3 text-right">Liebe ich</div>
        </div>
      </div>
    </div>
    <Button label="Erfahre mehr" class="btn btn-kink" />
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'Kink',
  components: {
    Button
  },
  props: {
    val: Object,
    singleDiagram: Boolean,
    showBtn: Boolean,
  },
  data: function () {
    return {
      orientation: this.val.orientation,
      like: this.val.like,
      display: false,
    };
  },
  computed: {
    fetishText: function () {
      let text = 'unentschlossen';
      switch (this.fetish) {
        case 0:
          text = 'gar nicht meins';
          break;
        case 1:
          text = 'nur als Strafe';
          break;
        case 2:
          text = 'unentschlossen';
          break;
        case 3:
          text = 'mag ich';
          break;
        case 4:
          text = 'sollte dabei sein';
          break;
      }
      return text;
    }
  }
};
</script>

<style scoped lang="scss">
::v-deep(#orientation) {
  .p-slider-range {
    background-color: transparent;
  }

  .p-slider-handle {
    border: 1px solid #f6f6f6;
    background: #f6f6f6;
    transition: transform 0.2s ease-in;
    height: 0.7rem;
    border-radius: 100px;
    width: 0.3rem;
    margin-left: -3px;
    top: 71%;
    cursor: unset;

    &:hover {
      transform: scaleY(2);
      background-color: rgba(246, 246, 246, 0.6);
      cursor: unset;
    }
  }

  &.slider {
    background: linear-gradient(90deg, #493BA8 0%, #3362A9 100%);
    height: 1rem;
    width: 100%;
  }
}
::v-deep(#fetish) {
  .p-slider-range {
    background-color: transparent;
  }

  .p-slider-handle {
    border: 1px solid #f6f6f6;
    background: #f6f6f6;
    transition: transform 0.2s ease-in;
    height: 0.7rem;
    border-radius: 100px;
    width: 0.3rem;
    margin-left: -3px;
    top: 71%;
    cursor: unset;

    &:hover {
      transform: scaleY(2);
      background-color: rgba(246, 246, 246, 0.6);
      cursor: unset;
    }
  }


  &.slider {
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,255,0,1) 100%);
    height: 1rem;
    width: 100%;
  }
}
#wrapper {
  width: 240px;
  margin: 15px auto;
  background-color: #547EBD;
  border-radius: 15px;
  padding: 20px;
}
* {
  font-size: 10px;
  font-family: Roboto;
}
.click-head:hover {
  cursor: pointer;
}
.btn {
  background-color: #ffaa1d;
  border: 1px solid #ffffff;
  color: #3362a9;
  font-size: 13px;
  padding: 2px 15px;

  &:hover {
    background-color: #ee9e1b;
    border: 1px solid #ffffff;
    color: #3362a9;
  }

  &-kink {
    margin: auto;
    display: block;
  }
}
h3 {
  margin-top: 0;
  font-size: 1.9em !important;
}
table {
  margin: 10px;
}
.slider {
  width: 200px;
}
</style>
