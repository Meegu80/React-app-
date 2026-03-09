import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";

function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?keyword=${input}`);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div
      className={twMerge(
        ["w-screen", "h-dvh"],
        ["flex", "flex-col", "justify-center", "items-center"]
      )}
    >
      <h1 className={twMerge(["text-5xl", "font-bold", "mb-3"])}>
        Anime Explorer
      </h1>
      <p className={twMerge("mb-7")}>Search any anime from Jikan API</p>

      <form onSubmit={onSubmit} className={twMerge("w-full", "max-w-[380px]")}>
        <input
          onChange={onChange}
          placeholder={"Type a title and press Enter..."}
          className={twMerge(
            ["w-full", "p-4", "box-border"],
            ["text-lg", "border", "border-gray-500", "rounded-lg"],
            ["bg-gray-700", "text-white"],
            ["focus:outline-none", "focus:border-slate-200"]
          )}
        />
      </form>
    </div>
  );
}

export default Home;
