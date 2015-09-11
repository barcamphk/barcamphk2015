$('.navbar').affix({
    offset: {
      top: $('.navbar').offset().top - 50
    }
});
// $('.navbar-toggle').click(function(){
//
//   console.log("clicked");
//
// })

$(".share-btn").each(function() {
  var el = $(this);
  var url = el.attr("href")
  if(!url || url === "" || url==="#") {
    return true;
  }
  el.click(function() {
    var params = "scrollbars=no,resizable=yes,toolbar=no,location=yes";
    var width = 550;
    var height = 420;
    //centering
    var left = Math.round((window.screen.width - width) / 2);
    var top =  Math.round((window.screen.height - height) / 2);
    if (top > 0) { // skip the popup and back to link if window.screen.height <= height
      window.open(url, null , params + ",width=" + width + ",height=" + height + ",left=" + left + ",top=" + top)
      return false; //break the event as we opened the link
    }
    return true; //continue to open the link for mobile or small screen device, no popup
  })
})
