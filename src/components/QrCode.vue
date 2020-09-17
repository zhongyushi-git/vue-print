<template>
    <div>
        <div id="qrcode"></div> <!-- 创建一个div，并设置id为qrcode -->
    </div>
</template>

<script>
    // 二维码
    import QRCode from 'qrcodejs2'  // 引入qrcode
    export default {
        name: 'test',
        mounted() {
            this.qrcode();
        },
        props:{
            width:{
                type:Number,
                default(){
                    return 132
                }
            },
            height:{
                type:Number,
                default(){
                    return 132
                }
            },
            // 二维码地址
            url:{
                type:String,
                default(){
                    return 'https://www.baidu.com'
                }
            }
        },
        methods: {
            qrcode() {
                let qrcode = new QRCode('qrcode', {
                    width: this.width,
                    height: this.height,
                    text: this.url, 
                    colorDark: "#000",
                    colorLight: "#fff",
                })
            },
        }
    }
</script>
<style scoped>
    #qrcode {
        display: inline-block;
    }

    #qrcode img {
        width: 132px;
        height: 132px;
        background-color: #fff;
        padding: 6px;
    }
</style>