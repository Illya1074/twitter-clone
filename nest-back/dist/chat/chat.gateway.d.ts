import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    private logger;
    afterInit(): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket): void;
    server: Server;
    handleMessage(client: Socket, data: {
        sender: string;
        room: string;
        text: string;
    }): void;
    handleRoomJoin(client: Socket, room: string): void;
    handleRoomLeave(client: Socket, room: string): void;
}
