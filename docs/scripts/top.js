let isClickedButton = false;

const button = document.getElementById("button");
const buttonImg = document.getElementById("closeImg");

// ボタン押下時にmenuを右から表示
function sidebarAction() {
  // ボタンを非活性に
  button.disabled = true;

  if (!isClickedButton) {
    // サイドバーを開く動作
    anime
      .timeline({ duration: 200 })
      // サイドバー本体を開く
      .add({
        targets: "div.menu",
        translateX: { value: -350 },
      })
      // トップリンク表示
      .add({
        targets: "div.top",
        translateX: { value: -340 },
      })
      // アバウトリンク表示
      .add({
        targets: "div.about",
        translateX: { value: -340 },
      })
      // コンタクトリンク表示
      .add({
        targets: "div.contact",
        translateX: { value: -340 },
      });
    // ボタン画像表示
    buttonImg.classList.remove("hidden");
    isClickedButton = !isClickedButton;
  } else {
    // サイドバーを閉じる動作
    anime
      .timeline({ duration: 200 })
      // トップリンク非表示
      .add({
        targets: "div.top",
        translateX: { value: 340 },
        easing: "easeInOutBack",
      })
      // アバウトリンク非表示
      .add({
        targets: "div.about",
        translateX: { value: 340 },
        easing: "easeInOutBack",
      })
      // コンタクトリンク非表示
      .add({
        targets: "div.contact",
        translateX: { value: 340 },
        easing: "easeInOutBack",
      })
      // サイドバー本体を閉じる
      .add({
        targets: "div.menu",
        translateX: { value: 350 },
        easing: "easeInOutBack",
      });
    // ボタン画像非表示
    buttonImg.classList.add("hidden");
    isClickedButton = !isClickedButton;
  }
  // setTimeoutでボタンを再度活性化させるのを待たせる
  window.setTimeout(() => {
    button.disabled = false;
  }, 1000);
}

// 基本的にtimelineとdelay,timelineの速度を変えて同時っぽく見せたりする
window.onload = () => {
  // 1000は適当
  anime
    .timeline()
    // 外側の円の表示
    .add({
      targets: "div.circle",
      opacity: 1,
      duration: 40,
      delay: 300,
    })
    // 内側の円の表示
    .add(
      {
        targets: "div.circle2",
        opacity: 1,
        duration: 40,
      },
      "-=40"
    )
    // 外の円を拡大
    .add(
      {
        targets: "div.circle",
        easing: "easeInOutSine",
        opacity: 0,
        duration: 800,
        scale: 10,
      },
      "-=30"
    )
    // 内の円を拡大
    .add(
      {
        targets: "div.circle2",
        easing: "easeInOutSine",
        opacity: 0,
        duration: 750,
        scale: 10,
      },
      "-=750"
    )
    .add({
      targets: "div.topText",
      opacity: 1,
      duration: 1400,
    })
    // サイドバーボタンを表示
    .add(
      {
        targets: "img.buttonImg",
        translateY: { value: 5, duration: 450 },
        opacity: 1,
      },
      "-=700"
    );
};
