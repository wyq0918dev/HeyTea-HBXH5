// 留言列表
let messages = [];

// 提交留言
function submitMessage() {
    const input = document.getElementById('message-input');
    const text = input.value.trim();
    if (text === '') {
        alert('留言内容不能为空哦!~');
        return;
    }
    const newMessage = {
        text: text,
        time: new Date().toLocaleDateString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit',
        })
    };
    messages.push(newMessage);
    renderMessage();
    input.value = '';
}

// 渲染留言
function renderMessage() {
    const container = document.getElementById('message-list');
    container.innerHTML = '';
    messages.slice().reverse().forEach(message => {
        const div = document.createElement('div');
        div.className = 'message-item';
        div.innerHTML = `
			${message.text}
			<div class="message-time">${message.time}</div>
		`;
        container.appendChild(div);
    });
}