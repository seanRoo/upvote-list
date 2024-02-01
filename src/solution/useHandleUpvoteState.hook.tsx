import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { UpvoteItem } from "./UpvoteList.types";

const useHandleUpvoteContainer = () => {
  const [upvotes, setUpvotes] = useState<UpvoteItem[]>([]);

  const handleAddListItem = useCallback(() => {
    setUpvotes([...upvotes, { id: uuidv4(), selected: false }]);
  }, [upvotes]);

  const handleUpvote = useCallback(
    (id: string) => {
      const selectedItemIndex = upvotes.findIndex(
        ({ id: stateId }: UpvoteItem) => stateId === id
      );

      if (selectedItemIndex > -1) {
        const newUpvotes = JSON.parse(JSON.stringify(upvotes));
        newUpvotes[selectedItemIndex].selected =
          !newUpvotes[selectedItemIndex].selected;
        setUpvotes(newUpvotes);
        window.localStorage.setItem("upvotes", JSON.stringify(newUpvotes));
      }
    },
    [upvotes]
  );

  useEffect(() => {
    setUpvotes(JSON.parse(window.localStorage.getItem("upvotes") || "[]"));
  }, []);

  return { upvotes, setUpvotes, handleAddListItem, handleUpvote };
};

export default useHandleUpvoteContainer;
