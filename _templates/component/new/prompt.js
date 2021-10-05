const inputValidator = (input) => {
  if (input !== '') {
    return true
  }
}

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネントの名前を入力してください. ex) Header',
    validate: inputValidator,
  },
  {
    type: 'input',
    name: 'path',
    message: 'src/components/ 以下のパスを入力してください. ex) common',
    validate: inputValidator,
  },
  {
    type: 'toggle',
    name: 'withStory',
    message: '*.stories.tsx を作成しますか？',
    disabled: 'いいえ',
    enabled: 'はい',
    initial: true,
  },
]
