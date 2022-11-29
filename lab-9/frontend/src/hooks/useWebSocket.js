import { useState, useEffect, useRef } from 'react'
import { WS_DOMAIN } from './constants';

const connectionUri = `ws://${WS_DOMAIN}/websocket`;
export function useWebSocket(uri) { //allows to inject the connection uri, ideal for unit testing
    const [isConnected, setIsConnected] = useState(false);
    const ws = useRef(null);

    useEffect(() => {
        let connUri = uri? uri :connectionUri;
        ws.current = new WebSocket(connUri);
        ws.current.onopen = () => setIsConnected(true);
        ws.current.onclose = () => setIsConnected(false)
        const wsCurrent = ws.current;

        return () => {
            wsCurrent.close();
        };
    }, []);

    const sendMessage = msg => {
        if (isConnected === true) { //only try if ws is connected
            ws.current.send(msg);
        }
    }

    return [msg, isConnected, sendMessage]
}