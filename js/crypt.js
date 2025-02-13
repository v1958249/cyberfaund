//ボタンクリック後のボックスイベント
document.getElementById("download-btn").addEventListener("click",function(){
    alert("`renameVirus`のダウンロードが完了しました。");
    document.getElementById("modal").style.display = "block";
    setTimeout((function() {
        return function () {
        document.getElementById("answer").style.display = "block";
        }
    })(),3000)
    document.getElementById("initialize-btn").addEventListener("click",function(){
        document.getElementById("modal").style.display = "none";
        document.getElementById("answer").style.display = "none";
    })
})

document.getElementById("open-btn1").addEventListener("click",async()=> {
    const dh = await window.showOpenFilePicker();
 
    // 開いたディレクトリ内のファイルとディレクトリをコンソールに出力
    for await (const handle of root.values()) {
      if (handle.kind === 'file') {
        console.log(handle.name);
      } else if (handle.kind === 'directory') {
        console.log(handle.name + '/');
      } else{
        console.log("stop");
      }
    }
});

document.getElementById("open-btn2").addEventListener("click",async()=> {
    const dh = await window.showOpenFilePicker();
 
    // 開いたディレクトリ内のファイルとディレクトリをコンソールに出力
    for await (const handle of root.values()) {
      if (handle.kind === 'file') {
        console.log(handle.name);
      } else if (handle.kind === 'directory') {
        console.log(handle.name + '/');
      } else{
        console.log("stop");
      }
    }
});

//ローカルサーバーへのリクエスト
function encryptFiles() {
    fetch('http://localhost:3000/encrypt')
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
}

function decryptFiles() {
    fetch('http://localhost:3000/decrypt')
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
}