import { _decorator, Button, Component, EditBox } from 'cc';
const { ccclass, property } = _decorator;

import { io, Socket } from 'socket.io-client';

@ccclass('socketClient')
export class socketClient extends Component {

    @property(EditBox)
    usernameInput: EditBox | null = null;

    @property(EditBox)
    passwordInput: EditBox | null = null;

    @property(Button)
    loginButton: Button | null = null;
    private socket:Socket;
    start() {
        this.socket = io('http://localhost:3000');
        this.socket.emit('joinGame', { playerName: 'Player1' });
    }



    update(deltaTime: number) {

    }
    onLoginButtonClicked() {
        if (this.usernameInput && this.passwordInput) {
            const username = this.usernameInput.string;
            const password = this.passwordInput.string;
            console.log('username', username);
            console.log('password', password);

            // 通过 Socket.io 发送登录请求
            this.socket.emit('login', { username, password });
        }
    }

}


