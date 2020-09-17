<template>
  <div>
    <div id="printMe">
      <div class="code">
        <p></p>
        <qrcode :url="url"></qrcode>
        <p>扫我去百度</p>
      </div>
    </div>
    <button v-print="'#printMe'">打印</button>
  </div>
</template>

<script>
  import qrcode from '@/components/QrCode'
  export default {
    data() {
      return {
        url: 'http://www.baidu.com'
      }
    },
    components: {
      qrcode
    },
  }
</script>

<style scoped>
  .code {
    margin: 10px;
    text-align: center;
    width: 200px;
    height: 220px;
    border: 1px solid #000;
  }
</style>