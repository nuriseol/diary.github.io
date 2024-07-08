import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext,DiaryStateContext } from "../App";

const useDiary= (id) => {
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
      const currentDiaryItem = data.find((item) => String(item.id)===String(id))

      if(!currentDiaryItem) {window.alert("존재하지 않는 일기입니다."); nav("/", {replace: true})}

      setCurrentDiaryItem(currentDiaryItem);
  }, [id, data]);

  return currentDiaryItem
}

export default useDiary;