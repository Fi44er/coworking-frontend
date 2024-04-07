import { BlockSpace } from "./block-space/BlockSpace"
import { ChangeSpaceList } from "./change-space-list/ChangeSpaceList"
import style from './Spaces.module.scss'

export const Spaces = () => {
    return (
        <div className={style.spaces}>
            <BlockSpace />
            <ChangeSpaceList />
        </div>
    )
}