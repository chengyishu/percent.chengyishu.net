$(function () {
    // 正确+1
    $('#addRight').on('click', function () {
        var rightCount = parseInt(localStorage.getItem('rightCount'));
        localStorage.setItem('rightCount', rightCount + 1);
        $('#rightAudio')[0].currentTime = 0;
        $('#rightAudio')[0].play();
        render();
        // location.reload();
    });
    // 错误+1
    $('#addWrong').on('click', function () {
        var wrongCount = parseInt(localStorage.getItem('wrongCount'));
        localStorage.setItem('wrongCount', wrongCount + 1);
        $('#wrongAudio')[0].currentTime = 0;
        $('#wrongAudio')[0].play();
        render();
        // location.reload();
    });
    // 重置
    $('#resetArea').on('click', function () {
        if (confirm("重置将清空当前分数，确定要重置吗？")) {
            localStorage.setItem('rightCount', 0);
            localStorage.setItem('wrongCount', 0);
            // render();
            location.reload();
        }
    });

    render();
});

// 计算结果并渲染
function render() {
    var rightCount = parseInt(localStorage.getItem('rightCount'));
    if (!rightCount) {
        rightCount = 0;
        localStorage.setItem('rightCount', rightCount);
    }
    var wrongCount = parseInt(localStorage.getItem('wrongCount'));
    if (!wrongCount) {
        wrongCount = 0;
        localStorage.setItem('wrongCount', wrongCount);
    }
    var totalCount = rightCount + wrongCount;
    var percentage = 0;
    if (rightCount > 0) {
        percentage = Math.round(rightCount / totalCount * 1000) / 10;
    }
    $('#rightCount').text(rightCount);
    $('#wrongCount').text(wrongCount);
    $('#totalCount').text(totalCount);
    $('#percentage').text(percentage);
}