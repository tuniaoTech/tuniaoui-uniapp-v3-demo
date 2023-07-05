import { ref } from 'vue'
import type {
  IndexListData,
  IndexListDataItemData,
  IndexListKeys,
} from '@tuniao/tnui-vue3-uniapp'

export const useGenerateListData = () => {
  // 头像基础地址
  const avatarBaseUrl = 'https://resource.tuniaokj.com/images/avatar/default/'

  // 列表数据
  const listData = ref<IndexListData>({})

  // 随机生成列表数据
  const generateListItemData = (key: string) => {
    const data: IndexListDataItemData[] = []

    for (let i = 0; i < 10; i++) {
      const starCount = data.filter((item) => item.star).length
      const star = Math.random() > 0.5 && starCount < 1
      // 生成头像序号从1-20的随机头像序号
      const avatarIndex = Math.floor(Math.random() * 20) + 1
      data.push({
        id: i,
        avatar: `${avatarBaseUrl}${avatarIndex}.png`,
        nickname: `图鸟-员工${key}-${i}`,
        department: `${star ? '凶姐下属' : `${key}部门`}`,
        star,
      })
    }
    return data
  }

  // 生成列表数据
  const generateListData = () => {
    // 生成A-Z的为key的对象
    for (let i = 0; i < 26; i++) {
      const key = String.fromCharCode(65 + i)
      listData.value[key as IndexListKeys] = {
        title: key.toUpperCase(),
        data: generateListItemData(key),
      }
    }

    // 添加#为key的对象
    listData.value['#'] = {
      title: '#',
      data: [
        {
          id: 0,
          avatar: 'https://resource.tuniaokj.com/images/avatar/default/1.png',
          nickname: '图鸟-打杂部-打杂1号',
          department: '打杂',
        },
        {
          id: 1,
          avatar: 'https://resource.tuniaokj.com/images/avatar/default/2.png',
          nickname: '图鸟UI-打杂部-打杂2号',
          department: '打杂',
        },
        {
          id: 2,
          avatar: 'https://resource.tuniaokj.com/images/avatar/default/3.png',
          nickname: '图鸟UI-打杂部-打杂3号',
          department: '打杂',
        },
      ],
    }
  }
  generateListData()

  return {
    listData,
  }
}
