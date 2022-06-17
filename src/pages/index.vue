<template>
  <view style="padding: 16px">
    <view
      @click="toChooseImage"
      style="background: #04be02; color: #fff; margin-top: 16px"
      class="btn"
      >引入 jweixin 后打印 wx.chooseImage</view
    >

    <view
      @click="printWxChooseImage"
      style="background: #04be02; color: #fff; margin-top: 16px"
      class="btn"
      >打印wx.chooseImage</view
    >
  </view>
</template>

<script lang="ts">
import ResponseHandler from "../utils/ResponseHandler";

export default {
  data() {
    return {
      pathOrBase64: "",
      file: null,
    };
  },
  methods: {
    toChooseImage() {
      uni.navigateTo({
        url: "./wx_choose_image_test",
      });
    },
    printWxChooseImage() {
      console.log("打印wx.chooseImage", wx.chooseImage);
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
