export class clientManager {
    private static instance: clientManager;
    private socket: any;

    public static getInstance(): clientManager {
        if (!clientManager.instance) {
            clientManager.instance = new clientManager();
        }
        return clientManager.instance;
    }

    public set Socket(e: any) {
        this.socket = e;
    }

    public get Socket() {
        return this.socket;
    }

}