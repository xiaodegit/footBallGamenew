import { _decorator, Button, Component, director, EditBox } from 'cc';
import { clientManager } from '../managers/clientManager';
const { ccclass, property } = _decorator;

@ccclass('socketClient')
export class socketClient extends Component {

    @property(EditBox)
    usernameInput: EditBox | null = null;

    @property(EditBox)
    passwordInput: EditBox | null = null;

    clientmanager!: clientManager;
protected onLoad(): void {
    
    this.clientmanager = clientManager.getInstance();
}
    constructor() {
        super();
        
    }

    start() {
        console.log(this.clientmanager);
        
        // 使用全局变量 io 进行连接
        this.clientmanager.Socket = (window as any).io('http://localhost:3000');

        // 监听连接成功事件
        this.clientmanager.Socket.on('connect', () => {
            console.log('连接到服务器成功');
        });

        // 监听登录成功事件
        this.clientmanager.Socket.on('loginSuccess', (data: any) => {
            console.log('登录成功:', data);
            director.loadScene('menu')
        });

        // 监听登录失败事件
        this.clientmanager.Socket.on('loginFailure', (data: any) => {
            console.log('登录失败:', data);
        });
    }

    onLoginButtonClicked() {
        if (this.usernameInput && this.passwordInput) {
            const username = this.usernameInput.string;
            const password = this.passwordInput.string;
            console.log('用户名', username);
            console.log('密码', password);

            // 通过 Socket.io 发送登录请求
            this.clientmanager.Socket.emit('login', { username, password });
        }
    }

}
