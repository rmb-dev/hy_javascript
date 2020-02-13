const app = {};
app.key = "138a28e172666d5b25ff05bf896947a3"



// UV Index forecast for Toronto
// openuv.uv({ lat: 43.65, lng: 79.38 }, (err, data) => {
//     console.log(JSON.stringify(data, null, 2));
// });


app.getUv = function () {
    $.ajax({
        beforeSend: function (request) {
            request.setRequestHeader('x-access-token', '138a28e172666d5b25ff05bf896947a3');
        },
        url: `https://api.openuv.io/api/v1/uv?`,
        type: 'GET',
        dataType: 'json',
        data: {
            api_key: app.key,
            // q: result,
            format: 'json',
            lat: 43.65,
            lng: 79.38,
            alt: 76
        }
    }).then(function (result) {
        console.log(result);
        // const { data } = result;
        // app.displayUv(data);
    })
}
app.displayUv = function () { }

app.getUv();