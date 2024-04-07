import { BlockSpace } from "./block-space/BlockSpace"
import { ChangeSpaceList } from "./change-space-list/ChangeSpaceList"
import style from './Spaces.module.scss'
import { useRooms } from "../../hooks/useRooms"

function Spaces() {
    const { isLoading, data } = useRooms()



    return (
        <>
        <div className={style.spaces}>
            <BlockSpace />
            <ChangeSpaceList />
        </div>

        

        {isLoading ? (
            <div>Loading ...</div>
        ) : data?.length ? data.map((room) => (
            <div><b>{room.picture[1]?.name}</b></div>
        )) : (
            <div>No rooms</div>
        )
        
        }

        </>
    )
}

export { Spaces }