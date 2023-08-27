function make_album (album:string , artist : string,tracks?: number){ 
 let album$ = {
 name : album,
 artistname : artist,
 tracksnumber : tracks
 }
 return album$;
}
let album1 = make_album("javascript" , "hammad")
let album2 = make_album("typescript" , "ubaid" , 3)
let album3 = make_album ("programer" , "fazin", 5)
console.log(album1)
console.log(album2)
console.log(album3)