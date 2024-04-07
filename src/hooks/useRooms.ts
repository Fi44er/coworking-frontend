import { useQuery } from "@tanstack/react-query"
import roomService from "../services/room.service"

export const useRooms = () => {
    return useQuery({
        queryKey: ['rooms'],
        queryFn: () => roomService.getAllRooms(),
        select: ({data}) => data,
    })
}