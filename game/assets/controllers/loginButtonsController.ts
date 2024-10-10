import { _decorator, Component, EditBox, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button')
export class button extends Component {

    @property(Node)
    loginPage: Node | null = null;

    @property(Node)
    registerPage: Node | null = null;

    start() {
    }

    update(deltaTime: number) {

    }

    openRegister() {

    }

    openLoginPage() {
        if (this.loginPage) {

            this.loginPage.active = true;
            console.log(this.loginPage);

            this.loginPage.children[0].getComponent(EditBox)!.string = 'admin';
            this.loginPage.children[1].getComponent(EditBox)!.string = '123456';
        }
    }
}


