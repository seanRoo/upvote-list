import React from "react";
import "./UpvoteListContainer.css";
import AddListItemButton from "./AddListItemButton";
import UpvoteList from "./UpvoteList";
import useHandleUpvoteContainer from "./useHandleUpvoteState.hook";

function UpvoteContainer() {
  const { upvotes, handleAddListItem, handleUpvote } =
    useHandleUpvoteContainer();

  return (
    <div className="upvoteListContainer">
      <UpvoteList upvotes={upvotes} handleUpvote={handleUpvote} />
      <AddListItemButton handleAddListItem={handleAddListItem} />
    </div>
  );
}

export default UpvoteContainer;
