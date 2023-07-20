<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnImageUpload from '@tuniao/tnui-vue3-uniapp/components/image-upload/src/image-upload.vue'

import { isJsonString } from '@tuniao/tnui-vue3-uniapp/utils/validator'
import type {
  ImageUploadCustomCallbackFunction,
  ImageUploadCustomFunction,
  ImageUploadFile,
  TnImageUploadInstance,
} from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { UPLOAD_URL, uploadHeaders } from '@/config'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/image-upload/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 图片上传地址
const uploadActionUrl = UPLOAD_URL

// 上传时携带的请求头
const uploadActionHeaders = uploadHeaders

// 基础图片上传
const baseImageUploadValue = ref<string[]>([])

// 带已上传图片列表
const defaultValueImageUploadValue = ref<string[]>([
  'https://resource.tuniaokj.com/images/advertise/10.jpg',
])

// 自定义上传框列表
const customUploadContainerImageUploadRef = ref<TnImageUploadInstance>()
const customUploadContainerImageUploadValue = ref<string[]>([])
const customUploadBtnClick = () => {
  customUploadContainerImageUploadRef.value?.chooseFile()
}
const customUploadClearImage = () => {
  uni.showModal({
    title: '提示',
    content: '是否清空已上传图片',
    success: (res) => {
      if (res.confirm) {
        customUploadContainerImageUploadRef.value?.clear()
      }
    },
  })
}

// 自定义处理接口返回内容
const customUploadCallbackImageUploadValue = ref<string[]>([])
const customUploadCallbackHandle: ImageUploadCustomCallbackFunction = (
  res: UniApp.UploadFileSuccessCallbackResult
) => {
  const { statusCode, data: resData } = res
  if (![200, 201, 204].includes(statusCode)) {
    console.error(res?.errMsg || '上传文件发生错误')
  } else {
    const data = isJsonString(resData) ? JSON.parse(resData) : resData
    if (data.code === 200 && data.data.errCode === 0) {
      return data.data.url
    } else {
      console.error(
        data?.message === undefined
          ? data?.msg || '上传文件发生错误'
          : data.message
      )
    }
  }
  return ''
}

// 自定义上传函数
const customUploadImageUploadValue = ref<string[]>([])
const customUploadHandle: ImageUploadCustomFunction = (
  file: ImageUploadFile
) => {
  return new Promise((resolve, reject) => {
    const url = (file as UniApp.ChooseImageSuccessCallbackResultFile).path
    uni.uploadFile({
      url: uploadActionUrl,
      header: uploadActionHeaders,
      filePath: url,
      name: 'file',
      success: (res) => {
        const { statusCode, data: resData } = res
        if (![200, 201, 204].includes(statusCode)) {
          console.error(res?.errMsg || '上传文件发生错误')
          reject(res?.errMsg || '上传文件发生错误')
        } else {
          const data = isJsonString(resData) ? JSON.parse(resData) : resData
          if (data.code === 200 && data.data.errCode === 0) {
            resolve(data.data.url)
          } else {
            console.error(
              data?.message === undefined
                ? data?.msg || '上传文件发生错误'
                : data.message
            )
            reject(
              data?.message === undefined
                ? data?.msg || '上传文件发生错误'
                : data.message
            )
          }
        }
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
</script>

<template>
  <CustomPage title="图片上传" :is-h5-demo-page="isDemoH5Page">
    <view class="tn-pt tn-mb tn-type-danger_text">
      <view class="tn-text-xl">警告:</view>
      <view class="tn-mt-sm">
        请勿将演示接口用于自己的项目中，演示接口会每天清理数据，如果您的项目中需要使用图片上传，请使用自己的图片上传接口。
      </view>
    </view>
    <DemoContainer title="基础使用">
      <view class="image-upload-container">
        <view class="image-upload-item">
          图片列表:
          <text class="tn-gray_text upload-value">
            [{{ baseImageUploadValue.join(',') }}]
          </text>
        </view>
        <view class="image-upload-item">
          <TnImageUpload
            v-model="baseImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置已上传图片列表">
      <view class="image-upload-container">
        <view class="image-upload-item">
          <TnImageUpload
            v-model="defaultValueImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义处理接口返回的内容">
      <view class="image-upload-container">
        <view class="image-upload-item">
          <TnImageUpload
            v-model="customUploadCallbackImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
            :custom-upload-callback="customUploadCallbackHandle"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义处理上传函数">
      <view class="image-upload-container">
        <view class="image-upload-item">
          <TnImageUpload
            v-model="customUploadImageUploadValue"
            :custom-upload-handler="customUploadHandle"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义上传框">
      <view class="image-upload-container">
        <view class="image-upload-item">
          <TnImageUpload
            ref="customUploadContainerImageUploadRef"
            v-model="customUploadContainerImageUploadValue"
            :action="uploadActionUrl"
            :header="uploadActionHeaders"
            :limit="1"
          >
            <template #uploadBtn>
              <view
                class="custom-upload-item btn"
                @tap.stop="customUploadBtnClick"
              >
                请上传身份证正面
              </view>
            </template>
            <template #uploadImage="{ data }">
              <image
                class="custom-upload-item image"
                :src="data.url"
                mode="aspectFill"
                @tap.stop="customUploadClearImage"
              />
            </template>
          </TnImageUpload>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
