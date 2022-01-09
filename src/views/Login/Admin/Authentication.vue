<template>
  <div class="admin text-left px-12">
    <h1>Admin Bereich - Authentifiziert</h1>
    <div class="flex">
      <div class="w-1/3 flex flex-col p-2">
        <Dropdown v-model="selectgroup" :options="allGroups" optionLabel="name" placeholder="Wähle einen Token" class="mt-10" />
        <span class="p-field-checkbox mt-5">
          <Checkbox :binary="true" v-model="selectgroup.showNSFW" />
          <label class="m-2">Zeige den NSFW Bereich</label>
        </span>
        <span class="p-float-label mt-5">
          <Textarea v-model="newAdminComment" :autoResize="true" rows="5" cols="35" />
          <label>Neuer Admin Kommentar</label>
        </span>
      </div>
      <div class="w-2/3">
        <DataTable :value="allGroups" responsiveLayout="scroll" class="mt-10">
          <Column field="name" header="Token"></Column>
          <Column field="UserComment" header="User Kommentar"></Column>
          <Column field="AdminComment" header="Admin Kommentar"></Column>
        </DataTable>
      </div>
    </div>
    <div class="mt-10 text-center">
      <Button label="Live Token Spiechern" icon="pi pi-check" iconPos="right" class="p-button-lg p-button-success" @click="saveToken()" />
    </div>
    <div class="mt-10 text-center">
      <Button label="Live Token Löschen" icon="pi pi-trash" iconPos="right" class="p-button-lg p-button-danger" @click="deleteToken()" />
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Checkbox from 'primevue/checkbox';

import {db} from "../../../firebase/firebase";

export default {
  components: {
    Button,
    Dropdown,
    Textarea,
    DataTable,
    Column,
    Checkbox
  },
  data: function () {
    return {
      newAdminComment: "",
      selectgroup: {}
    };
  },
  computed: {
    allGroups() {
      return this.$store.getters.getAllToken;
    },
    settings() {
      return this.$store.getters.getSettings;
    },
  },
  methods: {
    saveToken() {
      if (this.newAdminComment !== null) {
        this.selectgroup.AdminComment = this.newAdminComment;
      }
      db.collection('User').doc(this.$route.params.user).collection('Access').doc(this.selectgroup.name).set( this.selectgroup );
      this.$store.dispatch("setTokenList");
    },
    deleteToken() {
      db.collection('User').doc(this.$route.params.user).collection('Access').doc(this.selectgroup.name).delete();
      this.$store.dispatch("setTokenList");
    }
  },
  created() {
    this.$store.dispatch("setTokenList");
  }
};
</script>w

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
