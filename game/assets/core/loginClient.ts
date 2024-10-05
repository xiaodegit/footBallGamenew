import { _decorator, Button, Component, EditBox } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('socketClient')
export class socketClient extends Component {

    @property(EditBox)
    usernameInput: EditBox | null = null;

    @property(EditBox)
    passwordInput: EditBox | null = null;

    private socket: any; // 使用 any 类型以避免类型错误

    start() {
        // 使用全局变量 io 进行连接
        this.socket = (window as any).io('http://localhost:3000');
        // 监听连接成功事件
        this.socket.on('connect', () => {
            console.log('连接到服务器成功');
            // 可以在这里发送加入游戏的事件或其他初始化操作
            this.socket.emit('joinGame', { playerName: 'Player1' });
        });

        // 监听登录成功事件
        this.socket.on('loginSuccess', (data: any) => {
            console.log('登录成功:', data);
        });

        // 监听登录失败事件
        this.socket.on('loginFailure', (data: any) => {
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
            this.socket.emit('login', { username, password });
        }
    }
}
