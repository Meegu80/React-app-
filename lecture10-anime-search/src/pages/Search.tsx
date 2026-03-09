import { useState } from "react";
import { useSearchParams } from "react-router";
import AnimeCard from "../components/AnimeCard.tsx";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

export type Anime = {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
};

type ApiResponse = {
  data: Anime[];
};

const fetchFn = (keyword: string) => {
  return fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
    .then((response) => response.json())
    .then((data: ApiResponse) => data.data);
};

function Search() {
  // API 주소
  // https://api.jikan.moe/v4/anime?q=${keyword}

  // queryString 에서 keyword 가져오기
  // useSearchParams는 배열을 반환하는데, useState와 똑같은 기능을 하는 녀석 2개 반환
  const [params, setParams] = useSearchParams();
  const keyword = params.get("keyword") || "";

  // state 설정
  const [query, setQuery] = useState(keyword);

  // useEffect()의 의존성  -> 2번째 매개변수인 배열에 넣는 것
  // 의존성에 들어있는 변수(state)의 값이 바뀌면
  // 함수가 재실행됨
  // 최초 랜더링 (loading) -> useEffect실행 (fetch)
  // 사용자가 인풋에 검색값을 변경하고 submit -> useEffect 재실행 (fetch)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => fetchFn(keyword),
  });

  return (
    <div className={"p-7.5"}>
      <h2 className={twMerge("text-4xl", "text-center", "mb-6")}>
        Search Anime
      </h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}

      <form
        className={twMerge("mb-7", ["flex", "justify-center", "gap-2.5"])}
        onSubmit={(event) => {
          event.preventDefault();
          // 변경된 input 내용을 가지고 fetch를 재실행하거나, 화면을 다시 불러오거나
          setParams({ keyword: query });
        }}
      >
        <input
          className={twMerge(
            ["w-[260px]", "px-4.5", "py-3"],
            ["border", "border-gray-600", "rounded-lg"],
            ["text-white", "bg-[#1a1a1a]"]
          )}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={"Search Title..."}
        />
        <button
          className={twMerge(
            ["px-5", "py-3"],
            ["border", "border-gray-600", "rounded-lg"],
            ["text-white", "bg-[#1a1a1a]", "cursor-pointer"]
          )}
        >
          Search
        </button>
      </form>

      {!isError && data && (
        <div
          className={twMerge(
            ["mt-5"],
            ["flex", "flex-wrap", "gap-5", "justify-center"]
          )}
        >
          {data.map((item, index) => {
            return (
              <AnimeCard
                key={index}
                id={item.mal_id}
                title={item.title}
                image={item.images.jpg.image_url}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
