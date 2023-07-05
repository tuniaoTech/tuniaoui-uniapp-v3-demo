import { ref } from 'vue'
import { onReachBottom } from '@dcloudio/uni-app'

export const useGenerateImageData = () => {
  const images = [
    'https://resource.tuniaokj.com/images/shop/bag1.jpg',
    'https://resource.tuniaokj.com/images/bless/bless-bottom.jpg',
    'https://resource.tuniaokj.com/images/bless/bless-top.jpg',
    'https://resource.tuniaokj.com/images/shop/computer1.jpg',
    'https://resource.tuniaokj.com/images/login/2/login-top2.png',
    'https://resource.tuniaokj.com/images/shop/cup1.jpg',
    'https://resource.tuniaokj.com/images/shop/cup2.jpg',
    'https://resource.tuniaokj.com/images/advertise/3.jpg',
    'https://resource.tuniaokj.com/images/shop/watch2.jpg',
    'https://resource.tuniaokj.com/images/advertise/9.jpg',
  ]

  const imageData = ref<{ id: number; url: string }[]>([])

  // 生成随机数据
  const generateRandomData = () => {
    const length = imageData.value.length
    const imageLength = images.length
    const data: any[] = []
    for (let i = 0; i < 20; i++) {
      data.push({
        id: length + i + 1,
        url: images[Math.floor(Math.random() * imageLength)],
      })
    }
    imageData.value = imageData.value.concat(data)
  }
  generateRandomData()

  onReachBottom(() => {
    generateRandomData()
  })

  return {
    imageData,
  }
}
