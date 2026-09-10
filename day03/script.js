const getMovieMessage = (title, voteAverage) => {
  return `${title}의 평점은 ${voteAverage}점입니다.`;
};

const message = getMovieMessage("인셉션", 8.4);
console.log(message);

const title = document.querySelector(".title");
title.textContent = "오늘의 추천 영화";

const description = document.querySelector(".description");
description.classList.add("text-primary", "fw-bold");

// 상자를 넣을 장소 찾기
const movieList = document.querySelector("#movie-list");

// 새로운 상자 만들기
const movieItem = document.createElement("div");

// 상자에 영화 소개 글 넣기
movieItem.textContent = message;
getMovieMessage("인터스텔라",8.7);
// 상자 꾸미기
movieItem.classList.add("border", "rounded", "p-3", "mb-2",
  "d-inline-block"
);

// 화면에 붙이기
movieList.append(movieItem);

  console.log(getMovieMessage("인터스텔라",8.7));
  const message2 = getMovieMessage("인터스텔라", 8.7);

const movieItem2 = document.createElement("div");

movieItem2.textContent = message2;

movieItem2.classList.add("border");
movieItem2.classList.add("rounded");
movieItem2.classList.add("p-3");
movieItem2.classList.add("mb-2");

const lineBreak = document.createElement("br");
movieList.append(lineBreak);
movieList.append(movieItem2);
movieItem2.classList.add("d-inline-block");

//movieItem2.remove();