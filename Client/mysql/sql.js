const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt'); // 引入 bcrypt
require('dotenv').config(); // 加载环境变量
const { v1: uuidv1 } = require('uuid'); // 使用解构赋值简化UUID调用


class DataBase {
    constructor() {
        this.pool = null;
    }

    // 初始化连接池
    async initialize() {
        try {
            this.pool = mysql.createPool({
                host: process.env.DB_HOST || 'localhost',
                user: process.env.DB_USER || 'root',
                password: process.env.DB_PASSWORD || '123456',
                database: process.env.DB_NAME || 'footballgame',
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });
            console.log('数据库连接池已初始化');
        } catch (error) {
            console.error('初始化数据库连接池失败:', error);
            process.exit(1); // 初始化失败时退出程序
        }
    }


    // 验证用户密码（登录）
    async bijiaomima(userName, password, socket) {
        try {
            if (!userName || !password) {
                console.error('请输入用户名或密码');
                socket.emit('loginFailure', { reason: '请输入用户名或密码' });
                return false;
            }

            const query = 'SELECT pass_word, name FROM user_info WHERE user_name = ?';
            const [rows] = await this.pool.execute(query, [userName]);
            console.log('rows =========',rows.length);
            
            if (rows.length === 0) {
                console.log('用户不存在，开始注册');
                // 假设name与userName相同，或者你有其他逻辑获取name
                const registrationSuccess = await this.registerUser(userName, password, userName);
                if (registrationSuccess) {
                    // 自动登录用户
                    socket.emit('loginSuccess', { playerID: socket.id, message: '注册并登录成功' });
                    console.log('玩家注册并登录成功:', socket.id);
                    return true;
                } else {
                    socket.emit('loginFailure', { reason: '注册失败，请稍后重试' });
                    return false;
                }
            }
            await this.mimayanzheng(rows,password,socket);
            return true;
        } catch (error) {
            console.error('数据库查询出错:', error);
            socket.emit('loginFailure', { reason: '数据库查询出错' });
            throw error;
        }
    }

    // 注册新用户，存储哈希后的密码
    async registerUser(userName, password, name) {
        try {
            // 对密码进行哈希处理
            const hashedPassword = await bcrypt.hash(password, 10); // 10 是盐的轮数
            const ID = uuidv1(); // 生成UUID
            console.log('openid=', ID);

            // 将用户信息存入数据库
            const query = 'INSERT INTO user_info (user_name, pass_word, openid, name) VALUES (?, ?, ?, ?)';

            // 执行插入操作
            this.pool.execute(query, [userName, hashedPassword, ID, name]);

            console.log('用户注册成功:', userName, ID);
            return true;
        } catch (error) {
            // 处理插入错误，例如重复的user_name或openid
            console.error('用户注册失败:', error);
            return false;
        }
    }
    
    async mimayanzheng(rows,password,socket) {

        //rows[0].pass_word数据库中的密码
        const storedHashedPassword = rows[0].pass_word;

        // 调试输出
        console.log('输入的密码:', password);
        console.log('存储的哈希密码:', storedHashedPassword);

        // 使用 bcrypt.compare 进行密码验证
        const isMatch = await bcrypt.compare(password, storedHashedPassword);

        if (isMatch) {
            console.log('密码正确');
            socket.emit('loginSuccess', { playerID: socket.id });
            console.log('玩家登录成功:', socket.id);
            return true;
        } else {
            console.log('密码错误');
            socket.emit('loginFailure', { reason: '密码错误' });
            return false;
        }
    }

    

}

module.exports = new DataBase();
