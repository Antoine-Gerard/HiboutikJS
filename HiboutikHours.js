$(() => {
    let params = new URLSearchParams(window.location.search);

    if (params.get('page') == 'checkout') {
        $(document).on('ajaxComplete', (event) => {
            console.log(event);
        })
    }
})