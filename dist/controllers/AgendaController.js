"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AgendaServices_1 = __importDefault(require("../services/AgendaServices"));
class AgendaController {
    constructor() { }
    async listarAgenda(req, res) {
        const agenda = await AgendaServices_1.default.listarAgenda();
        return res.status(200).json({
            status: 'ok',
            agenda: agenda,
        });
    }
    async atualizarAgenda(req, res) {
        return res.send('Atualizar Agenda');
    }
    async criarAgenda(req, res) {
        return res.send('Criar Agenda');
    }
    async deletarAgenda(req, res) {
        return res.send('Deletar Agenda');
    }
}
exports.default = new AgendaController();
