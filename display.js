var request = require('request')

var url = "https://lighterpack.com/signin"
var data = {json: {username: "jpnatale", password: "d154f04ff209e6be596bc9f32ec87cf430612f23a8924fe0af4b8dc54fdf1999d8bc59a97851509134092df523df5a929138478be35d5396918a16490760dde7"}}
var lpBody = {}
function callback (error, response, body) {
		if (!error && response.statusCode == 200) {
            lpBody = body
            console.log("Incoming Data...")
            var jsonLibrary = JSON.parse(lpBody.library)
            //console.log(jsonLibrary.items[0])

            for (var i = 0; i < jsonLibrary.items.length - 1; i++) {
            	if(!jsonLibrary.items[i].name){
            		console.log(jsonLibrary.items[i])
            	}
            };

        }
        if (error){
        	console.log("There was an error: \(error)")

        }

}

request.post(url,data,callback)


