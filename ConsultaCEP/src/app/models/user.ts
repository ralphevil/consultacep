export class User {
    constructor(login: String, senha: String) {
        this.login = login;
        this.senha = senha;
    }

    login: String;
    senha: String;
}