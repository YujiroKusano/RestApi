# RestApi

環境：CentOS9
アプリケーション：Nginx, nodejs, npm

# Nginxの設定
1. 以下のファイルを設定
```conf /etc/nginx/conf.d/default.conf
// RESTサーバー用設定
server {
        client_max_body_size 50M;
        listen          <<サーバ解放ポート>>;
        server_name     <<サーバドメイン>>;
        location / {
                proxy_pass http://localhost:3000;
        }
}
```

# REST APIサーバ
## nodejsの設定
1. package.jsonと同階層に以下のファイルを設定
```env .env
PORT=<<RESTサーバー用ポート番号>>
```
## REST APIサーバの起動方法
- package.jsonと同階層にて以下のコマンドを実行
1. nodejsサーバを起動
```bash
$ npm run node-start
```
2. Eginxを起動
```bash
$ npm run eginx-start
```
## REST APIサーバの停止方法
1. Eginxを停止
```bash
$ npm run eginx-stop
```
2. nodejsサーバを停止
```bash
$ ps
PID     TTY     TIME        CMD
99999   pts/0   00:00:00    node
$ kill 99999
```