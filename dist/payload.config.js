"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
// import { Icon } from "../src/components/Logo"; // Update import here
// import { Logo } from "../src/components/Logo"; // Update import here
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var Users_1 = require("./collections/Users");
var Factories_1 = require("./collections/Factories");
var SmdMachines_1 = require("./collections/Smd/SmdMachines");
var SmdQuestions_1 = require("./collections/Smd/SmdQuestions");
var PmdMachines_1 = require("./collections/PMD/PmdMachines");
var PMDQuestions_1 = require("./collections/PMD/PMDQuestions");
var ENGQuestions_1 = require("./collections/ENG/ENGQuestions");
var ENGMachines_1 = require("./collections/ENG/ENGMachines");
var FMDMachines_1 = require("./collections/FMD/FMDMachines");
var FMDQuestions_1 = require("./collections/FMD/FMDQuestions");
var Eng_Quality_1 = require("./collections/ENG/Eng_Quality");
var FMD_Quality_1 = require("./collections/FMD/FMD_Quality");
var PMD_Quality_1 = require("./collections/PMD/PMD_Quality");
var SMD_Quality_1 = require("./collections/Smd/SMD_Quality");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env"),
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [
        Users_1.Users,
        Factories_1.Factories,
        SmdMachines_1.SmdMachines,
        SmdQuestions_1.SmdQuestions,
        PmdMachines_1.PMDlINES,
        PMDQuestions_1.PMDQuestions,
        ENGMachines_1.ENGlINES,
        ENGQuestions_1.ENGQuestions,
        FMDMachines_1.FMDlINES,
        FMDQuestions_1.FMDQuestions,
        Eng_Quality_1.ENGQualityQuestions,
        FMD_Quality_1.FMDQualityQuestions,
        PMD_Quality_1.PMDQualityQuestions,
        SMD_Quality_1.SMDQualityQuestions,
    ],
    routes: {
        admin: "/admin",
    },
    admin: {
        user: "users",
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "- SSA Digital Factory Screens",
            favicon: "/favicons.ico",
            ogImage: "/thumbnail.jpg",
        },
        // css: path.resolve(__dirname, "src/app/globals.css"),
        // components: {
        //   graphics: {
        //     Icon,
        //     Logo,
        //   },
        // },
    },
    rateLimit: {
        max: 20000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
});
