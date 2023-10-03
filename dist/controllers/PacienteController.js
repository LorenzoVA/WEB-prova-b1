"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PacienteServices_1 = __importDefault(require("../services/PacienteServices"));
class PacienteController {
    constructor() { }
    async listarPaciente(req, res) {
        const pacientes = await PacienteServices_1.default.listarPaciente();
        return res.status(200).json({
            status: 'ok',
            pacientes: pacientes,
        });
    }
    async atualizarPaciente(req, res) {
        return res.send('Atualizar Paciente');
    }
    async criarPaciente(req, res) {
        const newPaciente = req.body;
        const result = await PacienteServices_1.default.criarPaciente(newPaciente);
        if (result) {
            res.status(200).json({
                status: 'tudo ok',
                paciente: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async deletarPaciente(req, res) {
        return res.send('Deletar Paciente');
    }
}
exports.default = new PacienteController();
