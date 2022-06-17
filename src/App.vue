<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app"
onLaunch(() => {
  console.log("App Launch")
})
onShow(() => {
  console.log("App Show")
})
onHide(() => {
  console.log("App Hide")
})
</script>

<style>
/*每个页面公共css */
uni-page-body,
#app {
  width: 100vw;
  height: 100vh;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

page {
  background: #F0F0F0;
  /* padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom); */
}
</style>
