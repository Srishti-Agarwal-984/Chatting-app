const socket=io();




$('#chat-box').hide()

$('#send-btn').on('click', ()=>{
    const msgText = $('#inp').val().trim();
    console.log(msgText);
    if(!msgText){
        return;
    }
    socket.emit('send-msg', {
        msg:msgText
    })




     
    $('#inp').val("");
})


socket.on('recieve-msg',(data)=>{
    console.log(data);
    $('#chat').append(`<li class="border mb-2 p-2 roundedpill"><spam class="fw-bold">${data.username}:</spam> ->${data.msg}</li>`)

})


$('#login-btn').on('click', ()=>{
    console.log('clo');
    const user = $('#username').val()
    $('#chat-box').show()
    $('#login').hide()


    socket.emit('login', {
        username:user
    })
    $('#username').val("");
})