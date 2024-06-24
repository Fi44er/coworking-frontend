import { useEffect, useState } from "react";
import style from "./InfoItem.module.scss";

type InfoItemProps = {
  topVal?: number;
  topStr?: string;
  title: string;
};

const InfoItem = ({ title, topVal, topStr }: InfoItemProps) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (topVal && count < topVal) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 150);
      return () => clearInterval(interval);
    }
  }, [count, topVal]);
  return (
    <div className={style.infoItem}>
      <div className={style.itemTop}>
        {topVal ? <span>{count}</span> : ""}
        {topStr ? <span>{topStr}</span> : ""}
      </div>
      <hr />
      <div className={style.infoTitle}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default InfoItem;
