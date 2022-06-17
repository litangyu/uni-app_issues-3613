<template>
  <view style="padding: 16px">
    <view
      @click="printWxChooseImage"
      style="background: #04be02; color: #fff; margin-top: 16px"
      class="btn"
      >打印 wx.chooseImage</view
    >
  </view>
</template>

<script lang="ts">
import func from 'vue-editor-bridge';
import ResponseHandler from "../utils/ResponseHandler";

export default {
  data() {
    return {
      pathOrBase64: "",
      file: null,
    };
  },
  mounted() {
    this.loadWeChatJSSDK();
  },
  methods: {
    loadWeChatJSSDK: function () {
      console.log("Loading JSSDK");
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://res.wx.qq.com/open/js/jweixin-1.2.0.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    printWxChooseImage: function() {
      console.log("打印 wx.chooseImage", wx.chooseImage);
    }
  },
};
</script>

<style>
.btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  overflow: visible;
  height: 42px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: #ffffff;
  line-height: 42px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
