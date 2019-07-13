<template>
  <q-layout @keydown='docKeydown'>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
          @click="drawerLeft = !drawerLeft"
        ></q-btn>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>

        <q-toolbar-title>停车场</q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="whatshot"
          @click='exit'
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      content-class="bg-grey-3"
      v-model="drawerLeft"
      :width="200"
      :breakpoint="500"
      elevated
    >
      <q-scroll-area class="fit">
        <q-list
          padding
          class="menu-list"
        >
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="inbox"></q-icon>
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item
            active
            clickable
          >
            <q-item-section avatar>
              <q-icon name="star"></q-icon>
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="send"></q-icon>
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="drafts"></q-icon>
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      drawerLeft: false
    };
  },
  methods: {
    exit() {
      this.$router.push("/");
    },
    docKeydown(e){
      if(e.keyCode==13){
        alert('我被点击')
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}
</style>

