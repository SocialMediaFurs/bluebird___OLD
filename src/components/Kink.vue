<template>
  <div id="wrapper">
    <div>
      <h3 style="text-align: left">{{ title }}</h3>
    </div>
    <div style="padding: 0 20px">
      <div>
        <Slider
          v-model="orientation"
          :step="1"
          :min="0"
          :max="10"
          :disabled="orientationDis"
          class="slider"
          id="orientation"
        />
      </div>
      <div style="display: flex">
        <div style="width: 33%; text-align: left">Dominant</div>
        <div style="width: 33%;"></div>
        <div style="width: 33%; text-align: right">Devot</div>
      </div>
      <div style="margin-top: 20px">
        <Slider
          v-model="fetish"
          :step="1"
          :min="0"
          :max="6"
          :disabled="fetishDis"
          class="slider"
          id="fetish"
        />
      </div>
      <div style="display: flex">
        <div style="width: 33%; text-align: left">Tabu</div>
        <div style="width: 33%;"></div>
        <div style="width: 33%; text-align: right">Liebe ich</div>
      </div>
      <div style="display: flex">
        <div style="width: 10%; text-align: left"></div>
        <div style="width: 80%;"><p style="margin: 0; text-align: center">{{ fetishText }}</p></div>
        <div style="width: 10%; text-align: right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kink',
  props: {
    title: String,
  },
  data: function () {
    return {
      fetish: 3,
      orientation: 2,
      fetishDis: false,
      orientationDis: false
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
          text = 'ganz ok';
          break;
        case 3:
          text = 'unentschlossen';
          break;
        case 4:
          text = 'mag ich';
          break;
        case 5:
          text = 'liebe ich';
          break;
        case 6:
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
