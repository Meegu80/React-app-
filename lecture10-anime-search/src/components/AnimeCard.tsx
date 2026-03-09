import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type Props = {
  id: number;
  title: string;
  image: string;
};

function AnimeCard({ id, title, image }: Props) {
  return (
    <Link
      to={`/anime/${id}`}
      className={twMerge(
        ["w-[180px]", "p-3.5", "box-border"],
        ["flex", "flex-col"],
        [
          "text-white",
          "border",
          "border-gray-800",
          "bg-gray-900",
          "rounded-lg",
        ],
        ["transition-all", "duration-200"],
        [
          "hover:scale-[1.05]",
          "hover:shadow-[0_6px_24px_rgba(255,255,255,0.1)]",
        ]
      )}
    >
      <img
        className={twMerge("w-full", "rounded-md", "mb-2.5")}
        src={image}
        alt={title}
      />
      <div className={twMerge("text-center", "text-lg")}>{title}</div>
    </Link>
  );
}

export default AnimeCard;
