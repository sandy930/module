function Geocode(){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=")
    .then(res=>
        res.json()
    )
     
    .then((data)=>{
        console.log(data)
    })
}
Geocode();