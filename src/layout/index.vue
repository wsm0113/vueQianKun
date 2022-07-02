<!--
 * @Author: GeekQiaQia
 * @Date: 2022-02-21 13:45:30
 * @LastEditTime: 2022-02-21 15:24:34
 * @LastEditors: GeekQiaQia
 * @Description: 
 * @FilePath: /test-vue3/src/layout/index.vue
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && opened" class="drawer-bg" @click="handleClickOutside" />

    <!--backtop-->
    <!-- <el-backtop target=".app-wrapper" :visibility-height="100">
      <div
      style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
      </div>
    </el-backtop> -->

    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <!--Navbar-->
      <div :class="{ 'fixed-header': fixedHeader, 'hide-header': hideHeader }">
        <navbar :primary="primary" />
      </div>
      <!--AppMain-->
      <AppMain />
      <!--RightDrawer-->
      <RightDrawer v-if="showSetting">
        <div class="setting-item">
          <div class="setting-draw-title">主题风格</div>

          <theme-pick @submit="submitForm"></theme-pick>
          <div class="divider"></div>
        </div>
        <div class="setting-item">
          <div class="setting-draw-title">内容区域</div>
          <content-area @change="handleHeaderChange" @fixedHeader="handleFixedHeaderChange" @sidebarLogo="handleSidebarLogoChange"></content-area>
          <div class="divider"></div>
        </div>
      </RightDrawer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref, watchEffect } from 'vue'
// import { useStore } from '@/store/index'

// import { generateColors, writeNewStyle, getStyleTemplate } from '@/utils'
// import { useFiles } from '@/hooks/useFiles'
// import useResize from '@/hooks/useResize'
// import Navbar from './components/Navbar.vue'
// import Sidebar from './components/Sidebar/index.vue'
// import AppMain from './components/AppMain.vue'
// import RightDrawer from './components/RightSetting/RightDrawer.vue'
// import ThemePick from './components/RightSetting/themePick/index.vue'
// import ContentArea from './components/RightSetting/contentArea/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    // Navbar,
    // Sidebar,
    // AppMain,
    // RightDrawer,
    // ThemePick,
    // ContentArea
  },
  setup() {
    
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: scroll;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.setting-item {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .setting-draw-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }
  .divider {
    width: 100%;
    display: flex;
    clear: both;
    min-width: 100%;
    margin: 10px 0;

    box-sizing: border-box;
    padding: 0px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    list-style: none;
    line-height: 1.5715;
  }
}
.hide-header {
  display: none;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 63px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
