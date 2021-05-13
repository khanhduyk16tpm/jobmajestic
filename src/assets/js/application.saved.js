
const bookmark = new Toggle('.bookmark-off', {
    onOff: (btn) => {
        btn.closest('.job-card').remove();
    },
    onWait: (btn) => {
        btn.innerHTML = '<i class="bi bi-arrow-clockwise"></i>'
    },
    callback: function(btn) {
        // $.ajax({
        //     type: 'get',
        //     url: btn.dataset.url,
        //     contentType: 'application/json',
        //     dataType: 'json',
        //     success: function (res) {
        //         if (res.status == 'success') {
        //             if (res.action == 'add') {
        //                 //bookmark.triggerOn(btn);
        //             } else if (res.action == 'delete') {
        //                 bookmark.triggerOff(btn);
        //             }
        //         }
        //     }
        // });
        bookmark.triggerOff(btn);
    }
});