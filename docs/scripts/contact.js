let isClickedButton = false

const button = document.getElementById('button')
const buttonImg = document.getElementById('closeImg')

// ボタン押下時にmenuを右から表示
function sidebarAction() {
  // ボタンを非活性に
  button.disabled = true
  if (!isClickedButton) {
    // サイドバーを開く動作
    anime.timeline({duration: 200})
      // サイドバー本体を開く
      .add({
        targets: 'div.menu',
        translateX: {value: -350},
      })
      // トップリンク表示
      .add({
        targets: 'div.top',
        translateX: {value: -340},
      })
      // アバウトリンク表示
      .add({
        targets: 'div.about',
        translateX: {value: -340},
      },)
      // コンタクトリンク表示
      .add({
        targets: 'div.contact',
        translateX: {value: -340},
      },)
    // ボタン画像表示
    buttonImg.classList.remove('hidden')
    isClickedButton = !isClickedButton
  } else {
    // サイドバーを閉じる動作
    anime.timeline({duration: 200})
      // トップリンク非表示
      .add({
        targets: 'div.top',
        translateX: {value: 340},
        easing: 'easeInOutBack',
      })
      // アバウトリンク非表示
      .add({
        targets: 'div.about',
        translateX: {value: 340},
        easing: 'easeInOutBack',
      },)
      // コンタクトリンク非表示
      .add({
        targets: 'div.contact',
        translateX: {value: 340},
        easing: 'easeInOutBack',
      },)
      // サイドバー本体を閉じる
      .add({
        targets: 'div.menu',
        translateX: {value: 350},
        easing: 'easeInOutBack',
      })
    // ボタン画像非表示
    buttonImg.classList.add('hidden')
    isClickedButton = !isClickedButton
  } 
  // setTimeoutでボタンを再度活性化させるのを待たせる
  window.setTimeout( () => {
    button.disabled = false
  }, 1000)
}

// 基本的にtimelineとdelay,timelineの速度を変えて同時っぽく見せたりする
window.onload = () => {
  // ボタンを非活性に
  button.disabled = true
  // 1000は適当
  anime.timeline()
    // ヘッダーを下ろしてくる
    .add({
      targets: 'div.header',
      translateY: {value: 150, duration: 750},
      delay: 100,
    })
    // 画像を表示
    .add({
      targets: 'div.infoImgWrapper',
      translateY: {value: 5, duration: 450},
      opacity: 1,
    }, '-=400')
    // コンテンツテキストを表示
    .add({
      targets: 'h2.contentTitle',
      translateY: {value: 5, duration: 450},
      opacity: 1,
    }, '-=550')
    // コンテンツを表示
    .add({
      targets: 'div.content',
      translateY: {value: 5, duration: 450},
      opacity: 1,
    }, '-=650')
    // サイドバーボタンを表示
    .add({
      targets: 'img.buttonImg',
      translateY: {value: 5, duration: 450},
      opacity: 1,
    }, '-=650')
  // setTimeoutでボタンを再度活性化させるのを待たせる
  window.setTimeout( () => {
    button.disabled = false
  }, 2500)
}
