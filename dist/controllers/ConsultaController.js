"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConsultaServices_1 = __importDefault(require("../services/ConsultaServices"));
class ConsultaController {
    constructor() { }
    async listarConsulta(req, res) {
        const consulta = await ConsultaServices_1.default.listarConsulta();
        return res.status(200).json({
            status: 'ok',
            consulta: consulta,
        });
    }
    async atualizarConsulta(req, res) {
        return res.send('Atualizar Consulta');
    }
    async criarConsulta(req, res) {
        return res.send('Criar Consulta');
    }
    async deletarConsulta(req, res) {
        return res.send('Deletar Consulta');
    }
}
exports.default = new ConsultaController();
