// サブメニューをトグルする関数
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.series-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // デフォルトのリンク動作を防ぐ

            const submenuId = link.getAttribute('data-id');
            const submenu = document.getElementById(submenuId);

            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';  // 既に表示されていれば隠す
            } else {
                submenu.style.display = 'block';  // それ以外は表示する
            }
        });
    });
});

const runLinks = document.querySelectorAll(".runLink");

runLinks.forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("modal").style.display = "block";
        setTimeout(function() {
            document.getElementById("label").innerText = "　25MB・完了";
        }, 5000); // 5秒後に完了メッセージを表示
    });
});

document.getElementById('runLink2').addEventListener('click', () => {
    fetch('/runCode2', { method: 'POST' })
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
