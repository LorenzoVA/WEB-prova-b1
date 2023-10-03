"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SecretariaServices_1 = __importDefault(require("../services/SecretariaServices"));
class SecretariaController {
    constructor() { }
    async listarSecretaria(req, res) {
        const secretaria = await SecretariaServices_1.default.listarSecretaria();
        return res.status(200).json({
            status: 'ok',
            secretaria: secretaria,
        });
    }
    async atualizarSecretaria(req, res) {
        return res.send('Atualizar Secretaria');
    }
    async criarSecretaria(req, res) {
        return res.send('Criar Secretaria');
    }
    async deletarSecretaria(req, res) {
        return res.send('Deletar Secretaria');
    }
}
exports.default = new SecretariaController();
