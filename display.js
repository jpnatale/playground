var request = require('request')

var url = "https://lighterpack.com/signin"
var data = {json: {username: "jpnatale", password: "d154f04ff209e6be596bc9f32ec87cf430612f23a8924fe0af4b8dc54fdf1999d8bc59a97851509134092df523df5a929138478be35d5396918a16490760dde7"}}
var lpBody = {}
function callback (error, response, body) {
		if (!error && response.statusCode == 200) {
            console.log("Incoming Data...")

            var jsonLibrary = JSON.parse(body.library)
            
            //Finds keys in object jsonLibrary
            //console.log(Object.keys(jsonLibrary.categories[0]))

            //console.log(jsonLibrary.categories[0])

            jsonLibrary.lists[0].categoryIds.forEach(function(catId){
                jsonLibrary.categories.forEach(function(category){
                    if (catId == category.id) {
                        //console.log(category.name)
                        category.itemIds.forEach(function(itemId){
                            //console.log(itemId.itemId)
                            if (itemId.itemId == 96) {
                                console.log(category.name)
                            };
                        })

                    };
                }) 
            })

            // for (var i = 0; i < jsonLibrary.lists[0].categoryIds.length; i++) {
            //     jsonLibrary.categories.forEach(function(category){
            //         if (jsonLibrary.lists[0].categoryIds[i] = category.id) {
            //         console.log(category.name)}

            //     })
            // };

            

         


        }
        if (error){
        	console.log("There was an error: \(error)")
        }
}

request.post(url,data,callback)


