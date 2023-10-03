"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SecretariaController_1 = __importDefault(require("../controllers/SecretariaController"));
const SecretariaRouter = (0, express_1.Router)();
SecretariaRouter.get('/secretaria', SecretariaController_1.default.listarSecretaria);
SecretariaRouter.get('/secretaria/:id', SecretariaController_1.default.listarSecretaria);
SecretariaRouter.post('/secretaria', SecretariaController_1.default.criarSecretaria);
SecretariaRouter.patch('/secretaria/:id', SecretariaController_1.default.atualizarSecretaria);
SecretariaRouter.delete('/secretaria/:id', SecretariaController_1.default.deletarSecretaria);
exports.default = SecretariaRouter;
