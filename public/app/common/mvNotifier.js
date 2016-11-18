// Angular Resource for status notifications.
// Seen when a user or hike is created or fails creation.

angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function (mvToastr) {
    return {
        notify: function (msg) {
            mvToastr.success(msg);
            console.log(msg);
        },
        error: function (msg) {
            mvToastr.error(msg);
            console.log(msg);
        }
    }
});