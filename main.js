// let res = {}; 
let baseURL = "https://api.imgflip.com/get_memes"

    axios.get(baseURL)
    .then(function(result) {
        res = result.data
        res.data.memes.map(element => {
            
            document.getElementById("outputinfo").innerHTML +=` <h4>${element.name}</h4><img src="${element.url}" width="${element.width}" height="${element.height}"> <br><hr>`
            
        })
    })

    // $(document).ready(function(){
    //     $("a").click(function(){
    //       $("a").hide();
    //     });
    //   });