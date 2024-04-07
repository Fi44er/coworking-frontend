import axios from "axios"
import { IRoomResponse } from "./interfaces/room.interface"

class RoomService {
    private URL = 'http://localhost:3000/room'

    async getRoomById(id: string) {
        return await axios.get<IRoomResponse>(`${this.URL}/get-room/${id}`)
    }

    async getAllRooms() {
        return await axios.get<IRoomResponse[]>(`${this.URL}/get-all-rooms`)
    }
}

export default new RoomService()