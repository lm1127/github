/**
 * Created by Monkey on 2017/9/6.
 */
$.ajax({
    url:"json/health.json",
    success: function (data) {
        var str = "";
        for(var i=0;i<data.length;i++){
            str += `<dl class="first">
                <dt><img src=${data[i].src}></dt>
                <dd>
                <p>${data[i].tit}</p>
                <p>${data[i].text}</p>
            <p><span>${data[i].nowPrice}</span><span>${data[i].pastPrice}</span></p>
            </dd>
            </dl>`
        }
        $(".list").append(str);
    }
})
