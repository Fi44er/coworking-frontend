import { useRooms } from "../../../hooks/useRooms";
import { ChangeSpaceItem } from "../change-space-item/ChangeSpaceItem";
import style from "./ChangeSpaceList.module.scss";

export const ChangeSpaceList = () => {
  const { isLoading, data } = useRooms();

  return (
    <div className={style.spaceList}>
      {isLoading ? (
        <div>Loading ...</div>
      ) : data?.length ? (
        data.map((room) => (
          <ChangeSpaceItem
            id={room.id}
            name={room.name}
            email="test@mail.ru"
            time={room.timeStart + " - " + room.timeEnd}
          />
        ))
      ) : (
        <div>No rooms</div>
      )}
    </div>
  );
};
