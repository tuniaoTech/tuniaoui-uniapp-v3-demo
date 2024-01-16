<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnInput from '@tuniao/tnui-vue3-uniapp/components/input/src/input.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnPicker from '@tuniao/tnui-vue3-uniapp/components/picker/src/picker.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import SubDemoContainer from '@/components/demo-container/src/sub-demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/input/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 输入框输入的值
const inputValue = ref('')

// 配合picker进行使用
const pickerData = ['图鸟UI vue2', '图鸟UI vue3']
const pickerValue = ref('')
const showPicker = ref(false)
const openPicker = () => {
  showPicker.value = true
}
</script>

<template>
  <CustomPage title="输入框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="input-container">
        <view class="input-item">
          您输入的值:
          <text class="tn-gray_text">{{ inputValue }}</text>
        </view>
        <view class="input-item">
          <TnInput
            v-model="inputValue"
            placeholder="输入关于图鸟的一切"
            focus
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="输入框尺寸">
      <view class="input-container">
        <view class="input-item">
          <TnInput placeholder="请输入需要搜索的内容" size="sm" />
        </view>
        <view class="input-item">
          <TnInput placeholder="请输入需要搜索的内容" size="lg" />
        </view>
        <view class="input-item">
          <TnInput
            placeholder="请输入需要搜索的内容"
            height="100"
            :custom-style="{ fontSize: '40rpx' }"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置边框样式">
      <view class="input-container">
        <view class="input-item tn-gray-light_bg tn-radius">
          <TnInput placeholder="请输入需要搜索的内容" :border="false" />
        </view>
        <view class="input-item">
          <TnInput
            placeholder="请输入需要搜索的内容"
            border-color="tn-grey-light"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示下划线输入框">
      <view class="input-container">
        <view class="input-item">
          <TnInput placeholder="请输入需要搜索的内容" underline />
        </view>
        <view class="input-item">
          <TnInput
            placeholder="请输入需要搜索的内容"
            underline
            border-color="tn-grey"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="对齐方式">
      <view class="input-container">
        <view class="input-item">
          <TnInput placeholder="请输入需要搜索的内容" text-align="center" />
        </view>
        <view class="input-item">
          <TnInput placeholder="请输入需要搜索的内容" text-align="right" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示清除按钮">
      <view class="input-container">
        <view class="input-item">
          <TnInput placeholder="请输入需要搜索的内容" clearable />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置输入框右边显示的图标">
      <view class="input-container">
        <view class="input-item">
          <TnInput
            placeholder="请输入需要搜索的内容"
            clearable
            right-icon="fire-fill"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="普通输入框类型">
      <SubDemoContainer title="整数输入框">
        <TnInput type="number" />
      </SubDemoContainer>
      <SubDemoContainer title="小数输入框">
        <TnInput type="digit" />
      </SubDemoContainer>
      <SubDemoContainer title="身份证输入框">
        <TnInput type="idcard" />
      </SubDemoContainer>
    </DemoContainer>
    <DemoContainer title="文本域">
      <SubDemoContainer title="基本使用">
        <TnInput type="textarea" placeholder="请输入评论内容" />
      </SubDemoContainer>
      <SubDemoContainer title="设置文本框高度">
        <TnInput
          type="textarea"
          placeholder="请输入评论内容"
          height="250"
          clearable
        />
      </SubDemoContainer>
      <SubDemoContainer title="设置为换行按钮">
        <TnInput
          type="textarea"
          placeholder="请输入评论内容"
          height="250"
          clearable
          confirm-type=""
        />
      </SubDemoContainer>
      <SubDemoContainer title="设置尺寸">
        <TnInput type="textarea" placeholder="请输入评论内容" size="lg" />
      </SubDemoContainer>
      <SubDemoContainer title="设置对齐方式">
        <TnInput
          type="textarea"
          placeholder="请输入评论内容"
          text-align="center"
        />
      </SubDemoContainer>
      <SubDemoContainer title="显示字数统计">
        <TnInput
          type="textarea"
          placeholder="请输入评论内容"
          height="250"
          :maxlength="200"
          clearable
          show-word-limit
        />
      </SubDemoContainer>
    </DemoContainer>
    <DemoContainer title="密码输入框">
      <SubDemoContainer title="基本使用">
        <TnInput type="password" placeholder="请输入密码" />
      </SubDemoContainer>
      <SubDemoContainer title="隐藏显示密码按钮">
        <TnInput
          type="password"
          placeholder="请输入密码"
          :show-password="false"
        />
      </SubDemoContainer>
    </DemoContainer>
    <DemoContainer title="自定义输入框前后插槽内容">
      <view class="input-container">
        <view class="input-item">
          <TnInput placeholder="请输入手机号码" clearable>
            <template #prefix>
              <view class="custom-input-prefix"> +86 </view>
            </template>
            <template #suffix>
              <view class="custom-input-suffix">
                <TnButton> 获取验证码 </TnButton>
              </view>
            </template>
          </TnInput>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="配合picker进行使用">
      <view class="input-container">
        <view class="input-item">
          <TnInput
            v-model="pickerValue"
            type="select"
            placeholder="请选择需要使用tuniaoUI版本"
            @click="openPicker"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnPicker
    v-model="pickerValue"
    v-model:open="showPicker"
    :data="pickerData"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
