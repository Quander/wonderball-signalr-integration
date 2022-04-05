import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import 'dotenv/config';

const tableUUID = process.env.TABLE_UUID || "TABLE_1";
const hubHost = process.env.HUB_HOST || 'http://localhost:7071'
const hubKey = process.env.HUB_KEY || '';

interface PlayerAddedEvent {
    player: string;
    table: string;
    session: string;
}

console.log(`Connecting to Hub:
    Host: ${hubHost}
    TableUUID: ${tableUUID}`)

const connection = new HubConnectionBuilder()
                        .withUrl(`${hubHost}/api/?hubs=TableHub`, {
                            headers: {
                                "x-ms-signalr-userid": tableUUID,
                                "x-functions-key":  hubKey
                            }
                        })
                        .configureLogging(LogLevel.Information)
                        .withAutomaticReconnect()
                        .build();


connection.on("PlayerAdded", (event: PlayerAddedEvent) => {
    console.log(`Player added:
    Table: ${event.table}
    Session: ${event.session}
    UUID: ${event.player}`);
});

connection.onclose(() => {
    console.log("Connection Closed");
});

connection.onreconnecting(() => {
    console.log("Reconnecting");
});

connection.onreconnected(() => {
    console.log("Reconnected");
})

connection.start();