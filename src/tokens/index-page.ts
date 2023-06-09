import type { InjectionKey } from 'vue'

export type IndexSubPageContext = {
  name: string
  uid: number
  onShow: () => void
  onLoad: () => void
}

export type IndexPageContext = {
  items: IndexSubPageContext[]
  addItem: (item: IndexSubPageContext) => void
  removeItem: (uid: number) => void
}

export const indexPageContextKey: InjectionKey<IndexPageContext> =
  Symbol('indexPageContext')
