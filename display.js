var request = require('request')
var fs = require('fs')
var rootPath = __dirname + "/";
eval(fs.readFileSync(rootPath+'sha3.js')+'');

var urlSignin = "https://lighterpack.com/signin"
var urlUpdateLib = "https://lighterpack.com/saveLibrary"
var hash  = CryptoJS.SHA3("ginger0923jpnatale")
hash = hash.toString(CryptoJS.enc.Base64);
console.log(hash)
var dataSignin = {json: {username: "jpnatale", password: hash}}
var dataUpdateLib = dataSignin



function callback (error, response, body) {
		if (!error && response.statusCode == 200) {
            console.log("Incoming Data...")

            var jsonLibrary = JSON.parse(body.library)
            
            //console.log(Object.keys(body))
            jsonLibrary.categories[0].name = "Bags & Storage2"

            dataUpdateLib.json.data = JSON.stringify(jsonLibrary)
            //console.log(Object.keys(dataUpdateLib.json))

            request.post(urlUpdateLib,dataUpdateLib, function(error, response, body){
                console.log("Success?? LOL")
                //console.log(body)

                if (error){
                    console.log("There was an error: \(error)")
                }
            })

            //Finds keys in object jsonLibrary
            //console.log(Object.keys(jsonLibrary.categories[0]))

            //console.log(jsonLibrary.categories[0])

            // jsonLibrary.lists[0].categoryIds.forEach(function(catId){
            //     jsonLibrary.categories.forEach(function(category){
            //         if (catId == category.id) {
            //             //console.log(category.name)
            //             category.itemIds.forEach(function(itemId){
            //                 //console.log(itemId.itemId)
            //                 if (itemId.itemId == 96) {
            //                     console.log(category.name)
            //                 };
            //             })

            //         };
            //     }) 
            // })

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

request.post(urlSignin,dataSignin,callback)


