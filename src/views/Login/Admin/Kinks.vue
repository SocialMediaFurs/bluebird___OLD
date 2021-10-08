<template>
  <div class="admin text-left px-12">
    <h1>Admin Bereich - Fetisch Liste</h1>
    <div class="flex">
      <div class="w-1/3">
        <p class="text-xl font-bold underline text-white mt-4 text-left">Kategorie Hinzufügen</p>
        <span class="p-float-label w-fit mt-10">
        <InputText id="kinkname" type="text" v-model="newGroup.name" />
        <label>Gruppenname</label>
      </span>
        <span class="p-float-label w-fit mt-10">
        <Textarea v-model="newGroup.description" :autoResize="true" rows="5" cols="30" />
        <label>Gruppenbeschreibung</label>
      </span>
        <span class="w-fit mt-10">
      <Button label="Lokal hinzufügen" icon="pi pi-bookmark" iconPos="right" @click="saveGroup()"/>
      </span>
      </div>
      <div class="w-2/3">
        <DataTable :value="allGroups" responsiveLayout="scroll" class="mt-10">
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Beschreibung"></Column>
        </DataTable>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/3">
        <p class="text-xl font-bold underline text-white mt-4 text-left">Kink Hinzufügen</p>
        <Dropdown v-model="selectgroup" :options="allGroups" optionLabel="name" placeholder="Select a City" class="mt-10" />
        <span class="p-float-label w-fit mt-10">
        <InputText id="kinkname" type="text" v-model="newKink.name" />
        <label>Gruppenname</label>
      </span>
        <span class="p-float-label w-fit mt-10">
        <Textarea v-model="newKink.description" :autoResize="true" rows="5" cols="30" />
        <label>Gruppenbeschreibung</label>
      </span>
        <Button label="Lokal hinzufügen" icon="pi pi-bookmark" iconPos="right" class="mt-10" @click="saveKink()" />
      </div>
      <div class="w-2/3">
        <DataTable :value="selectgroup.kinks" responsiveLayout="scroll" class="mt-10">
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Beschreibung"></Column>
        </DataTable>
      </div>
    </div>
    <div class="mt-10 text-center">
      <Button label="Live Spiechern" icon="pi pi-check" iconPos="right" class="p-button-lg p-button-success" @click="saveData()" />
    </div>
  </div>
</template>
<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import {db} from "../../../firebase/firebase";

export default {
  components: {
    InputText,
    Button,
    Dropdown,
    Textarea,
    DataTable,
    Column
  },
  data: function () {
    return {
      newGroup: {
        name: "",
        description: "",
        kinks: []
      },
      newKink: {
        name: "",
        description: "",
      },
      selectgroup: {
        name: "",
        description: "",
        kinks: []
      }
    };
  },
  computed: {
    allGroups() {
      return this.$store.getters.getAllKinks;
    },
  },
  methods: {
    saveGroup() {
      this.allGroups.push(this.newGroup);
      this.newGroup = {
        name: "",
        description: "",
        kinks: []
      }
    },
    saveKink() {
      this.selectgroup.kinks.push(this.newKink);
      this.newKink = {
        name: "",
        description: "",
      }

      this.allGroups.forEach(function (group, index) {
        if (group.name === this.selectgroup.name) {
          this.allGroups[index] = this.selectgroup;
        }
      })
    },
    saveData() {
      db.collection('List').doc('kinks').set( { allKinks: this.allGroups } );
    }
  },
  created() {
    this.$store.dispatch("setKinkList");
  }
};
</script>

<style scoped lang="scss">
.allKinks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  span {
    margin: 10px;
  }
}
</style>
