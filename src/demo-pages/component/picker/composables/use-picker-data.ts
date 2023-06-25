// 单列picker选择器数据
export const singlePickerData = [
  '图鸟模板1',
  '图鸟模板2',
  '图鸟模板3',
  '图鸟模板4',
  '图鸟模板5',
]
export const singlePickerObjectData = [
  { label: '图鸟模板1', value: 1 },
  { label: '图鸟模板2', value: 2 },
  { label: '图鸟模板3', value: 3 },
  { label: '图鸟模板4', value: 4 },
  { label: '图鸟模板5', value: 5 },
]

// 多列picker选择器数据
export const multiPickerData = [
  ['早班', '中班', '晚班'],
  ['1小时', '2小时', '3小时'],
  ['1人', '2人', '3人'],
  ['日结', '月结'],
]
export const multiPickerObjectData = [
  [
    { label: '早班', value: 1 },
    { label: '中班', value: 2 },
    { label: '晚班', value: 3 },
  ],
  [
    { label: '1小时', value: 11 },
    { label: '2小时', value: 12 },
    { label: '3小时', value: 13 },
  ],
  [
    { label: '1人', value: 21 },
    { label: '2人', value: 22 },
    { label: '3人', value: 23 },
  ],
  [
    { label: '日结', value: 41 },
    { label: '月结', value: 42 },
  ],
]

// 多列联动选择器数据
export const linkageData = [
  {
    label: '小学部',
    value: 1,
    children: [
      {
        label: '一年级',
        value: 11,
        children: [
          {
            label: '学前班',
            value: 101,
            children: [
              {
                label: '学前班1班',
                value: 1011,
              },
              {
                label: '学前班2班',
                value: 1012,
              },
              {
                label: '学前班3班',
                value: 1013,
              },
            ],
          },
          {
            label: '一年级1班',
            value: 111,
          },
          {
            label: '一年级2班',
            value: 112,
          },
          {
            label: '一年级3班',
            value: 113,
          },
        ],
      },
      {
        label: '二年级',
        value: 12,
        children: [
          {
            label: '二年级1班',
            value: 121,
          },
          {
            label: '二年级2班',
            value: 122,
          },
          {
            label: '二年级3班',
            value: 123,
          },
        ],
      },
      {
        label: '三年级',
        value: 13,
        children: [
          {
            label: '三年级1班',
            value: 131,
          },
          {
            label: '三年级2班',
            value: 132,
          },
          {
            label: '三年级3班',
            value: 133,
          },
        ],
      },
    ],
  },
  {
    label: '初中部',
    value: 2,
    children: [
      {
        label: '初一',
        value: 21,
        children: [
          {
            label: '初一1班',
            value: 211,
          },
          {
            label: '初一2班',
            value: 212,
          },
          {
            label: '初一3班',
            value: 213,
          },
        ],
      },
      {
        label: '初二',
        value: 22,
        children: [
          {
            label: '初二1班',
            value: 221,
          },
          {
            label: '初二2班',
            value: 222,
          },
          {
            label: '初二3班',
            value: 223,
          },
        ],
      },
      {
        label: '初三',
        value: 23,
        children: [
          {
            label: '初三1班',
            value: 231,
          },
          {
            label: '初三2班',
            value: 232,
          },
          {
            label: '初三3班',
            value: 233,
          },
        ],
      },
    ],
  },
  {
    label: '高中部',
    value: 3,
    children: [
      {
        label: '高一',
        value: 31,
        children: [
          {
            label: '高一1班',
            value: 311,
          },
          {
            label: '高一2班',
            value: 312,
          },
          {
            label: '高一3班',
            value: 313,
          },
        ],
      },
      {
        label: '高二',
        value: 32,
        children: [
          {
            label: '高二1班',
            value: 321,
          },
          {
            label: '高二2班',
            value: 322,
          },
          {
            label: '高二3班',
            value: 323,
          },
        ],
      },
      {
        label: '高三',
        value: 33,
        children: [
          {
            label: '高三1班',
            value: 331,
          },
          {
            label: '高三2班',
            value: 332,
          },
          {
            label: '高三3班',
            value: 333,
          },
        ],
      },
    ],
  },
]
