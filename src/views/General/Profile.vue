<template>
  <div class="w-full">
    <h2>Profile</h2>
    <div class="w-11/12">
      <div class="profilBox">
        <ProfilCard :val="devs.akuma" @click="setUser(devs.akuma)"></ProfilCard>
        <ProfilCard :val="devs.urastor" @click="setUser(devs.urastor)"></ProfilCard>
      </div>
      <div class="flex justify-between">
        <TeaserBlock :teaser="teaser.t1"></TeaserBlock>
        <TeaserBlock :teaser="teaser.t2"></TeaserBlock>
      </div>
    </div>
  </div>
</template>
<script>
import ProfilCard from './../../components/ProfilCard';
import TeaserBlock from './../../components/TeaserBlock';

export default {
  name: 'Home',
  components: {
    ProfilCard,
    TeaserBlock
  },
  data: function () {
    return {
      devs: {
        akuma: {
          name: 'Akuma',
          id: 'akuma',
          img: 'akuma.jpg',
          link: '/profil/akuma/aboutme'
        },
        urastor: {
          name: 'Urastor',
          id: 'akuma',
          img: 'urastor.png',
          link: '/profil/akuma/aboutme'
        }
      },
      teaser: {
        t1: {
          headline: 'Wie erstelle ich mein eigenes Profil?',
          text: 'Um ein Profil zu erstellen, musst du uns über das Kontaktformular anschreiben. Alternativ kannst du einen der Developer anschreiben, schaue dafür einfach auf "About" wähle einen Developer und klicke auf sein Profil, geh dann auf den Reiter "Links" und such dir ein Portal deiner Wahl aus.'
        },
        t2: {
          headline: 'Was passiert mit meinen Daten?',
          text: 'Deine Daten werden auf Firebase gespeichert. Firebase ist ein Dienst von Google. Solltest du diese Seite irgendwann nicht mehr nutzen wollen, kontaktieren einen Developer und er wird dein Datensatz aus der Datenbank entfernen. Zur Authentifizierung nutzen wir Telegram, dort speichern wir deine TelegramID, deinen Usernamen, sowie die URL für dein Profilbild. Solltest du die Anweisung geben deine Telegramdaten zu löschen, sehen wir uns nach aktuellem Stand gezwungen deinen kompletten Datensatz zu löschen, da wir dich sonst nicht identifizieren können.'
        }
      }
    };
  },
  methods: {
    setUser(user) {
      this.$store.commit("setCurrentUser", user.id)
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/variables/variables";

h2 {
  font-size: 48px;
  line-height: 56px;
  color: #333333;
}
.profilBox {
  @apply flex mt-8 p-4 rounded-2xl;
  background: $brand;
}
</style>

