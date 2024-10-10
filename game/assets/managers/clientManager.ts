export class clientManager {
    private static instance: clientManager;
    private socket: any; // 使用 any 类型以避免类型错误

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