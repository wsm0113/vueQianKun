<template>
    <div class="layout-content">
        <!-- 左侧栏 -->
        <div class="u-left-menu">
            <router-link class="u-link" :to="'/subapp/app-react'">app-react</router-link>
            <router-link class="u-link" :to="'/subapp/app-vue2'">app-vue2</router-link>
            <router-link class="u-link" :to="'/subapp/app-vue3'">app-vue3</router-link>
            <router-link class="u-link" :to="'/subapp/app-vue3-ts'">app-vue3-ts</router-link>
        </div>
        <div class="main-content">
            <!-- 头部 -->
            <div class="u-header">
                头部内容
            </div>
            
            <!-- 中间部分内容 -->
            <div class="u-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "layoutHomeVue",
  components: {

  },
};
</script>

<style lang="stylus" scoped>
.layout-content{
    height: 100%
    display: flex;
    justify-content: flex-start;
    align-items: center
    .u-left-menu{
        width: 250px;
        height: 100%;
        background: #bab5b5;
        .u-link{
            display: block
            width 100%
            height: 60px;
            line-height: 60px;
            text-align: center
            background: #748aae
            &:hover{
                color: #fff
                background: #0d1b34
            }
        }
    }   
    .main-content{
        height: 100%;
        flex: 1;
        overflow hidden
        display: flex
        flex-direction: column
        justify-content: flex-start
        .u-header{
            height: 100px;
            line-height: 100px;
            font-size: 25px;
            padding: 0 28px;
        }
        
        .u-content{
            flex: 1
            overflow hidden
            
        }
    }
    
}
</style>>