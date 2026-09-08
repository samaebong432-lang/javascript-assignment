 const movie=[
 {id:1,title:"인셉션",voteAverage:8.5,voteCount:35000,releaseDate:"2010-07-15",isFavorite:false},
 {id: 2,title: "인터스텔라",voteAverage: 8.7,releaseDate:"2014-11-05"},
 {id:3,title:"테넷",voteAverage: 7.3,releaseDate:
  "2020-08-26"}]
  movie.push({id:4,title: "다크 나이트",voteAverage:9.0,releaseDate:"2008-07-16"});

console.log(movie[0].title);
console.log(movie[0].voteAverage);
console.log(movie[0].isFavorite)
console.log(movie[1].voteAverage);
console.log(movie[2].releaseDate);
console.log(movie.length);

if(movie[0].voteAverage>=8){console.log("추천 영화")}
else{console.log("일반 영화")};
if(movie[0].voteAverage>=8&&movie[0].voteCount>=30000){
console.log("인기 추천 영화");}else{console.log("일반 영화");};
 console.log(movie[0].isFavorite?"찜 해제":"찜하기");


