/*!
 * app
 */

$.ready(function(){
  console.log("Document is ready:");
  $('#walker').hide()
  $('#walker').show()

  $('#walker').on('click', function(){
    console.log("Yo, whassup?")
  })
  $('#walker').trigger('click')










}) //end document ready
