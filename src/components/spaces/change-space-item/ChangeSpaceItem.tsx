import style from "./ChangeSpaceItem.module.scss";

interface ISpaceItemProp {
  id: number;
  name: string;
  email: string;
  time: string;
}
export const ChangeSpaceItem = ({ id, name, email, time }: ISpaceItemProp) => {
  return (
    <div key={id} className={style.changeSpaceItem}>
      <h2>{name}</h2>
      <div className={style.info}>
        <p>{email}</p>
        <p>{time}</p>
      </div>
      <button>Просмотреть</button>
    </div>
  );
};
