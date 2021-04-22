$(function() {
    let vez = '1'



    $('.casa').click(
        function() {
            let bg = $(this).css('background-image')

            if (bg == 'none' || bg == '') {
                let fig = `url(imgs/${vez.toString()}.png) no-repeat`

                $(this).css('background', fig)
                $(this).css('background-size', 'cover')
                vez = (vez == 1 ? 2 : 1)

            }
        }
    )
})