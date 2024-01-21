import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === "production" ? "http://prod.bfs2of.local" : "http://localhost:3000";

export const socket = io(URL);