"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllers = void 0;
const admin_service_1 = require("./admin.service");
const pick = (object, keys) => {
    const finalObj = {};
    for (const key of keys) {
        if (object && Object.hasOwnProperty.call(object, key)) {
            finalObj[key] = object[key];
        }
    }
    console.log(finalObj);
    return finalObj;
};
const getAllAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = pick(req.query, [
            "name",
            "email",
            "searchTerm",
            "contactNumber",
        ]);
        const result = yield admin_service_1.AdminServices.getAllAdminService(filters);
        res.status(200).json({
            success: true,
            message: "Admin retrieved successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: error,
        });
    }
});
exports.AdminControllers = {
    getAllAdminController,
};
