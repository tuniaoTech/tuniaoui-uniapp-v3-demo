import { ref } from 'vue'

import type {
  TnCommentListData,
  TnCommentListInstance,
  TnCommentListItem,
  TnReplyCommentParams,
  TnShowMoreCommentParams,
} from 'tnuiv3p-tn-comment-list'

type CommentReplyData = {
  [key: string]: {
    currentCommentIndex: number
    data: TnCommentListItem[]
  }
}

export const useCommentList = () => {
  const commentListRef = ref<TnCommentListInstance>()
  // 主评论对应的子评论数据
  const commentReplyData: CommentReplyData = {}
  // 评论列表数据
  const commentData = ref<TnCommentListData>([])

  const avatarList = Array.from({ length: 20 }).map(
    (_, i) => `https://resource.tuniaokj.com/images/avatar/default/${i + 1}.png`
  )
  // 获取随机头像
  const getRandomAvatar = () => {
    const index = Math.floor(Math.random() * avatarList.length)
    return avatarList[index]
  }
  // 生成true或false
  const generateTrueOrFalse = () => {
    return Math.random() > 0.5
  }
  // 随机生成0 - 1000的数字
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000)
  }

  // 生成对应子评论数据
  const generateReplyData = (idPrefix: string, start: number) => {
    const replyComment: TnCommentListItem[] = []
    for (let i = start; i < 5; i++) {
      const id = `${idPrefix}${i + 1}`
      replyComment.push({
        id,
        avatar: getRandomAvatar(),
        nickname: `图鸟用户${getRandomNumber()}`,
        date: '07-25',
        position: '广东',
        content: `这是一条回复${idPrefix}的回复-${id}-${getRandomNumber()}`,
        likeActive: false,
        likeCount: getRandomNumber(),
        dislikeActive: false,
        disabledReply: false,
        allowDelete: false,
        comment: generateReplyData(id, i + 1),
      })
    }
    return replyComment
  }

  // 生成评论数据
  const generateCommentData = () => {
    for (let i = 0; i < 10; i++) {
      const id = String(i)
      commentData.value.push({
        id,
        avatar:
          'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new.jpg',
        nickname: `图鸟-凶姐${i}`,
        date: '07-24',
        position: '广东',
        content: `这是一条来自凶姐${i}的评论`,
        likeActive: generateTrueOrFalse(),
        likeCount: getRandomNumber(),
        dislikeActive: false,
        disabledReply: false,
        allowDelete: false,
        commentCount: 31,
      })

      commentReplyData[id] = {
        currentCommentIndex: 0,
        data: generateReplyData(id, 0),
      }
    }
  }
  generateCommentData()

  // 获取查看更多数据
  const showMoreClickHandle = ({ id }: TnShowMoreCommentParams) => {
    commentListRef.value?.addCommentData(id, [
      commentReplyData[id].data[commentReplyData[id].currentCommentIndex++],
    ])
  }

  // 生成回复数据
  const openReplyPopup = ref(false)
  const replyCommentNickname = ref('')
  const replyContent = ref('')
  let replyCommentId: string | number = ''
  const replyClickHandle = ({ id, nickname }: TnReplyCommentParams) => {
    replyContent.value = ''
    openReplyPopup.value = true
    replyCommentNickname.value = nickname
    replyCommentId = id
  }
  const replyCommentClickHandle = () => {
    if (!replyContent.value || !replyCommentId) {
      uni.showToast({
        icon: 'none',
        title: '请输入回复内容',
      })
      return
    }
    const id = `${replyCommentId}${getRandomNumber()}`
    commentListRef.value?.addCommentReply(replyCommentId, {
      id,
      avatar: getRandomAvatar(),
      nickname: `图鸟用户${id}`,
      date: '07-25',
      position: '广东',
      content: replyContent.value,
      allowDelete: true,
      disabledReply: false,
    })
    openReplyPopup.value = false
    replyContent.value = ''
  }

  // 删除评论操作
  const replyDeleteHandle = (id: string | number) => {
    uni.showModal({
      title: '提示',
      content: '确定删除该评论吗？',
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          commentListRef.value?.deleteCommentReply(id)
        }
      },
    })
  }

  return {
    commentListRef,
    commentData,
    openReplyPopup,
    replyContent,
    replyCommentNickname,
    showMoreClickHandle,
    replyClickHandle,
    replyCommentClickHandle,
    replyDeleteHandle,
  }
}
