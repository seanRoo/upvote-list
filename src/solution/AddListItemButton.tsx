import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./UpvoteListContainer.css";

interface AddListItemButtonProps {
  handleAddListItem: () => void;
}

function AddListItemButton({ handleAddListItem }: AddListItemButtonProps) {
  return (
    <div
      aria-label="Add upvote button"
      role="button"
      className="addListItemButton"
      onClick={handleAddListItem}
    >
      <AiOutlinePlus size="5em" />
    </div>
  );
}

export default AddListItemButton;
