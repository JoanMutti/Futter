'use strict'

// const iframeCreate = (videoId)=>{
// let Zonavideo =
// $('<iframe>', {
//     "width":"100%" ,
//     "height":"100%",
//     "src":`https://www.youtube.com/embed/${videoId}`,
//     "allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",
//     "allowfullscreen":true,
// })
// $('.iframe').append(Zonavideo)
// } 
// const videoId = '7TKY-jksHRQ'

// iframeCreate(videoId)


    var player = new YT.Player('iframe', {
      height: '360',
      width: '640',
      videoId: 'M7lc1UVf-VE'
    });
    
    console.log(player)





 