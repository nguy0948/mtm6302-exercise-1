const $emojis = document.getElementById('emojis');

for (let i = 127793; i < 127893; i++) {

    $emojis.innerHTML += 
 `<div class= "emoji" style="text-align: center;">
<span style = "font-size:3rem;">&#${i}</span>
<code>${i}</code>
</div>`
}
