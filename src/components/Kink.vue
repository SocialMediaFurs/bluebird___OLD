<template>
  <div id="wrapper">
    <span v-if="!displayExplain && !displayDetails">
      <div>
      <h3 style="text-align: left" @click="displayExplain=!displayExplain">{{ val.field }}</h3>
    </div>
      <div style="padding: 0 20px">
      <div>
        <Slider
          v-model="orientation"
          :step="1"
          :min="0"
          :max="10"
          :disabled="val.disable"
          class="slider orientation"
        />
      </div>
      <div style="display: flex">
        <div style="width: 33%; text-align: left">Dominant</div>
        <div style="width: 33%;"></div>
        <div style="width: 33%; text-align: right">Devot</div>
      </div>
      <div style="margin-top: 10px">
        <Slider
          v-model="like"
          :step="1"
          :min="0"
          :max="4"
          :disabled="val.disable"
          class="slider fetish"
        />
      </div>
      <div style="display: flex">
        <div style="width: 33%; text-align: left">Tabu</div>
        <div style="width: 33%;"></div>
        <div style="width: 33%; text-align: right">Liebe ich</div>
      </div>
    </div>
    </span>
    <span v-if="!displayExplain && displayDetails">
      <div>
        <h3 style="text-align: left" @click="displayExplain=!displayExplain">{{ val.field }}</h3>
      </div>
      <div class="flex">
        <div class="w-16 -my-2" >
          <Slider
            v-model="orientation"
            :step="1"
            :min="0"
            :max="10"
            :disabled="val.disable"
            class="slider orientation my-2"
          />
          <Slider
            v-model="like"
            :step="1"
            :min="0"
            :max="4"
            :disabled="val.disable"
            class="slider fetish my-2"
          />
        </div>
        <div class="">
          <div class="box box-green">
            <p>Grün</p>
          </div>
          <div class="box box-red">
            <p>Rot</p>
          </div>
          <div class="box box-yellow">
            <p>Gelb</p>
          </div>
        </div>
      </div>
    </span>
    <span v-if="displayExplain && !displayDetails">
      <div>
        <h3 style="text-align: left" @click="displayExplain=!displayExplain">{{ val.field }}</h3>
      </div>
      <div class="flex">
        <div class="w-16 -my-2" >
          <Slider
            v-model="orientation"
            :step="1"
            :min="0"
            :max="10"
            :disabled="val.disable"
            class="slider orientation my-2"
          />
          <Slider
            v-model="like"
            :step="1"
            :min="0"
            :max="4"
            :disabled="val.disable"
            class="slider fetish my-2"
          />
        </div>
        <div class="">
          <div class="box box-green">
            <p>Grün</p>
          </div>
          <div class="box box-red">
            <p>Rot</p>
          </div>
          <div class="box box-yellow">
            <p>Gelb</p>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Kink',
  props: {
    val: Object,
  },
  data: function () {
    return {
      orientation: this.val.orientation,
      like: this.val.like,
      displayExplain: false,
      displayDetails: true,
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
.box {
  width: 150px;
  height: 35px;
  margin: 0 0 0 10px;

  &-green {
    background-color: #4caf5080;
    margin: 0 0 10px 10px;
  }

  &-red {
    background-color: #EF535080;
    margin: 10px 0 10px 10px;
  }

  &-yellow {
    background-color: #BFA41880;
  }
}
::v-deep(.orientation) {
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
::v-deep(.fetish) {
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
  padding: 10px;
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
