<template>
  <div class="login">
    <q-layout>
      <q-page-container>
        <q-page>
          <div class='center'>
            <h5>登 录</h5>
            <q-field
              :label-width="12"
              helper="Helper"
              :error="nameerror"
              error-label="请输入用户名"
            >
              <q-input
                v-model="name"
                autofocus
                float-label="请输入用户名"
                placeholder="请输入用户名"
                clearable
              />
            </q-field>
            <q-field
              :error="passerror"
              error-label="请输入密码"
            >
              <q-input
                type='password'
                v-model="password"
                float-label="请输入密码"
                placeholder="请输入密码"
                clearable
                color="amber"
              />
            </q-field>
            <q-btn
              size='lg'
              class="full-width"
              :loading='loading'
              color="primary"
              @click="clickMethod"
              label="登 录"
            />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
const ipcRenderer = require("electron").ipcRenderer;
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
      nameerror: false,
      passerror: false,
      loading: false
    };
  },
  mounted() {
    console.log(ipcRenderer);
    ipcRenderer.on("main-process-messages", (event, arg) => {
      console.log(event,arg);
    });
  },
  created() {
    window.addEventListener("keyup", e => {
      if (e.keyCode == "13") {
        this.clickMethod();
      } else if (e.keyCode == "116") {
        window.location.reload();
      }
    });
  },
  methods: {
    clickMethod() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/home");
      }, 2000);
    }
  }
};
</script>
<style scoped lang="stylus">
.login {
  width: 100vw;
  height: 100vh;

  .center {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-40%, -40%);
    min-width: 400px;
    min-height: 300px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 20px 30px;
    box-shadow: 1px 1px 10px 3px #eee;

    h5 {
      line-height: 50px;
      margin: 0;
    }

    .q-field {
      width: 100%;
    }
  }
}
</style>

