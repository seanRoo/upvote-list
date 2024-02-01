import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./UpvoteList.css";
import { UpvoteItem } from "./UpvoteList.types";

interface UpvoteListProps {
  upvotes: UpvoteItem[];
  handleUpvote: (id: string) => void;
}

function UpvoteList({ upvotes, handleUpvote }: UpvoteListProps) {
  return (
    <div className="upvoteList">
      {upvotes.map(({ id, selected }) => (
        <div
          key={id}
          aria-label="Upvote button"
          role="button"
          className={`upvoteButton ${selected ? "selected" : ""}`}
          onClick={() => handleUpvote(id)}
        >
          <FaArrowUp
            color={selected ? "#253CF2" : "#343A40"}
            role="button"
            size="3.5em"
          />
        </div>
      ))}
    </div>
  );
}

export default UpvoteList;
