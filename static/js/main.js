var root = 'https://fw1.p.fy.loc/api/';

(function () {
    var old = console.log;
    var logger = $('#log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.html('<pre>' + (JSON && JSON.stringify ? JSON.stringify(message, undefined, 2) : message) + '</pre><br />');
        } else {
            logger.html(message);
        }
    }
})();

// Make a GET request
//=report&async=no&reporttype=dynamic&reportname=top-attacks-acc
axios.get(root, {
        params: {
            type: 'report',
            reporttype: 'dynamic',
            async: 'no',
            reportname: 'top-attacks-acc',
            key: 'LUFRPT1qd3dpQmpEbjM1WEhBamZ1MlNkYTRLRXJDeGM9dVMxa1Z2Tkt1bnlnQmhPb2Qrb2RKQndxNmVRN3dLOVlRM29LT1hEOHZJVEd6aEhLWDhOWWI5V2VxUmhyUUVIZg=='
        }
    }).then((response) => {
        console.log(`Status code: ${response.status}`);
        console.log(`Status text: ${response.statusText}`);
        console.log(`Request method: ${response.request.method}`);
        console.log(`Path: ${response.request.path}`);
        console.log(`Date: ${response.headers.date}`);
        console.log($.xml2json(response.data));
    })
    .catch((e) => {
        console.log('error' + e)
    })