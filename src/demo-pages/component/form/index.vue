<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnForm from '@tuniao/tnui-vue3-uniapp/components/form/src/form.vue'
import TnFormItem from '@tuniao/tnui-vue3-uniapp/components/form/src/form-item.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnInput from '@tuniao/tnui-vue3-uniapp/components/input/src/input.vue'
import TnRadio from '@tuniao/tnui-vue3-uniapp/components/radio/src/radio.vue'
import TnRadioGroup from '@tuniao/tnui-vue3-uniapp/components/radio/src/radio-group.vue'
import TnCheckbox from '@tuniao/tnui-vue3-uniapp/components/checkbox/src/checkbox.vue'
import TnCheckboxGroup from '@tuniao/tnui-vue3-uniapp/components/checkbox/src/checkbox-group.vue'
import TnRate from '@tuniao/tnui-vue3-uniapp/components/rate/src/rate.vue'
import TnSwitch from '@tuniao/tnui-vue3-uniapp/components/switch/src/switch.vue'
import TnNumberBox from '@tuniao/tnui-vue3-uniapp/components/number-box/src/number-box.vue'
import TnSlider from '@tuniao/tnui-vue3-uniapp/components/slider/src/slider.vue'
import TnImageUpload from '@tuniao/tnui-vue3-uniapp/components/image-upload/src/image-upload.vue'
import TnPicker from '@tuniao/tnui-vue3-uniapp/components/picker/src/picker.vue'

import type {
  FormRules,
  TnFormInstance,
  TnFormItemInstance,
} from '@tuniao/tnui-vue3-uniapp'
import type { RuleItem } from '@tuniao/tnui-vue3-uniapp/libs/async-validator'

import { UPLOAD_URL } from '@/config'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/form/index',
})
const { isDemoH5Page } = useDemoH5Page()

const formRef = ref<TnFormInstance>()

// 表单数据
const formData = reactive({
  username: '',
  password: '',
  rePassword: '',
  mobile: '',
  verifyCode: '',
  sex: '',
  joinReason: [],
  score: 5,
  pay: false,
  payCount: 1,
  suggestionImages: [],
  suggestion: '',
  vueVersion: '',
})

// 规则
// 二次验证密码
const validateRePassword: RuleItem['validator'] = (rule, value, callback) => {
  if (value !== formData.password) {
    return callback(new Error('两次输入密码不一致'))
  }
  return callback()
}
// 验证验证码
const asyncValidateVerifyCode: RuleItem['asyncValidator'] = (rule, value) => {
  return new Promise((resolve, reject) => {
    if (value !== '123456') {
      return reject(new Error('验证码错误'))
    }
    return resolve()
  })
}
// 验证加入理由
const validateJoinReason: RuleItem['validator'] = (rule, value, callback) => {
  if (!value?.length) {
    return callback(new Error('请选择加入理由'))
  }
  if (!value.includes('凶姐太漂亮')) {
    return callback(new Error('请选择正确的加入理由'))
  }
  return callback()
}
//验证payCount
const validatePayCount: RuleItem['validator'] = (rule, value, callback) => {
  if (formData.pay && (value < 10 || value > 50)) {
    return callback(new Error('请输入10-50之间的数字'))
  }
  return callback()
}
const formRules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: ['change', 'blur'] },
    {
      pattern: /^[\u4E00-\u9FA5\w-_]{3,16}$/,
      message: '请输入3-16位汉字、英文、数字、下划线、横线',
      trigger: ['change', 'blur'],
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['change', 'blur'] },
    {
      pattern:
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
      message: '密码必须包含大小写字母、数字和特殊符号，且不少于6位',
      trigger: ['change', 'blur'],
    },
  ],
  rePassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['change', 'blur'],
    },
    { validator: validateRePassword, trigger: ['change', 'blur'] },
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: ['change', 'blur'] },
    {
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'change',
    },
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { asyncValidator: asyncValidateVerifyCode, trigger: 'blur' },
  ],
  sex: [
    { required: true, message: '请选择性别', trigger: 'change' },
    {
      type: 'enum',
      enum: [0, 1],
      message: '请选择正确的性别',
      trigger: 'change',
    },
  ],
  joinReason: [
    {
      required: true,
      type: 'array',
      message: '请选择加入理由',
      trigger: 'change',
    },
    { validator: validateJoinReason, trigger: 'change' },
  ],
  score: [
    {
      type: 'number',
      min: 1,
      max: 5,
      message: '请为图鸟打分',
      trigger: 'change',
    },
  ],
  payCount: [{ validator: validatePayCount, trigger: ['change', 'input'] }],
}

// 激活获取验证码输入
const mobileFormItemRef = ref<TnFormItemInstance>()
const mobileInputBlur = ref(false)
const mobileInputBlurEvent = () => {
  mobileInputBlur.value = true
}
const isActiveGetVerifyCode = computed(() => {
  return (
    (mobileInputBlur.value &&
      mobileFormItemRef.value?.validateState === 'success') ||
    formData.verifyCode
  )
})
// 获取验证码
const getMobileVerifyCode = () => {
  uni.showLoading({
    title: '发送中...',
  })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({
      title: '请输入123456',
    })
  }, 2000)
}

// vue版本选择
const vueVersionPickerData: string[] = ['Vue 2.x', 'Vue 3.x']
const showVueVersionPicker = ref(false)
const openVueVersionPicker = () => {
  showVueVersionPicker.value = true
}

/* 提交表单 */
const submitForm = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      uni.showToast({
        title: '提交成功',
      })
    } else {
      uni.showToast({
        title: '表单校验失败',
        icon: 'none',
      })
    }
  })
}
</script>

<template>
  <CustomPage title="表单" :is-h5-demo-page="isDemoH5Page">
    <TnForm
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="140"
      label-position="top"
    >
      <TnFormItem label="用户名" prop="username">
        <TnInput v-model="formData.username" clearable />
      </TnFormItem>
      <TnFormItem label="密码" prop="password">
        <TnInput v-model="formData.password" type="password" />
      </TnFormItem>
      <TnFormItem label="再次输入密码" prop="rePassword">
        <TnInput v-model="formData.rePassword" type="password" />
      </TnFormItem>
      <TnFormItem ref="mobileFormItemRef" label="手机号" prop="mobile">
        <TnInput
          v-model="formData.mobile"
          type="number"
          clearable
          @blur="mobileInputBlurEvent"
        />
      </TnFormItem>
      <TnFormItem v-if="isActiveGetVerifyCode" label="验证码" prop="verifyCode">
        <TnInput v-model="formData.verifyCode" clearable>
          <template #suffix>
            <TnButton @click="getMobileVerifyCode">获取验证码</TnButton>
          </template>
        </TnInput>
      </TnFormItem>
      <TnFormItem label="性别" prop="sex">
        <TnRadioGroup v-model="formData.sex" border>
          <TnRadio :label="0">男</TnRadio>
          <TnRadio :label="1">女</TnRadio>
        </TnRadioGroup>
      </TnFormItem>
      <TnFormItem label="加入图鸟大家庭的理由" prop="joinReason">
        <TnCheckboxGroup v-model="formData.joinReason" wrap>
          <TnCheckbox label="凶姐太漂亮" active-color="tn-type-success">
            <text class="tn-type-success_text">凶姐太漂亮</text>
          </TnCheckbox>
          <TnCheckbox label="图鸟好用"> 图鸟好用 </TnCheckbox>
          <TnCheckbox label="图鸟UI太酷炫了"> 图鸟UI太酷炫了 </TnCheckbox>
        </TnCheckboxGroup>
      </TnFormItem>
      <TnFormItem label="请选择使用的版本" props="vueVersion">
        <TnInput
          v-model="formData.vueVersion"
          type="select"
          placeholder="请选择当前使用的Vue版本"
          @click="openVueVersionPicker"
        />
      </TnFormItem>
      <TnFormItem
        label="请为图鸟打分"
        prop="score"
        label-position="left"
        label-width="180"
      >
        <TnRate
          v-model="formData.score"
          active-color="tn-orangeyellow"
          inactive-icon="logo-tuniao"
          active-icon="logo-tuniao"
        />
      </TnFormItem>
      <TnFormItem label="给图鸟留建议" prop="suggestion">
        <TnInput v-model="formData.suggestion" type="textarea" />
      </TnFormItem>
      <TnFormItem label="给图鸟留建议 - 图片" prop="suggestionImages">
        <TnImageUpload
          v-model="formData.suggestionImages"
          :action="UPLOAD_URL"
        />
      </TnFormItem>
      <view class="tn-border tn-p tn-gray-light_border tn-radius">
        <TnFormItem
          label="为图鸟生小图鸟"
          prop="pay"
          label-position="left"
          label-width="220"
        >
          <TnSwitch v-model="formData.pay" shape="square" />
        </TnFormItem>
        <block v-if="formData.pay">
          <TnFormItem label="数量" prop="payCount">
            <view class="tn-flex tn-w-full items-center">
              <view style="flex: 1">
                <TnSlider v-model="formData.payCount" :min="1" :max="100" />
              </view>
              <view class="tn-ml">
                <TnNumberBox v-model="formData.payCount" :min="1" :max="100" />
              </view>
            </view>
          </TnFormItem>
        </block>
      </view>
    </TnForm>
    <view class="tn-mt tn-flex-center">
      <TnButton size="lg" @click="submitForm"> 提交 </TnButton>
    </view>
  </CustomPage>

  <TnPicker
    v-model="formData.vueVersion"
    v-model:open="showVueVersionPicker"
    :data="vueVersionPickerData"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
