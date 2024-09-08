"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMDQualityQuestions = void 0;
var calculateTotalScore = function (data) {
    var totalScore = 0;
    var questionScores = {
        Q1: 3,
        Q2: 3,
        Q3: 3,
        Q4: 3,
        Q5: 2,
        Q6: 2,
        Q7: 1,
        Q8: 1,
    };
    Object.keys(data).forEach(function (questionKey) {
        var question = questionKey; // Asserting as keyof QuestionScores
        if (data[questionKey] === "yes" && questionScores[question]) {
            totalScore += questionScores[question];
        }
    });
    return totalScore;
};
var isAdminOrHasAccessToImages = function () {
    return function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var user;
        var req = _b.req;
        return __generator(this, function (_c) {
            user = req.user;
            if (!user)
                return [2 /*return*/, false];
            if (user.role === "admin")
                return [2 /*return*/, true];
            return [2 /*return*/, {
                    country: {
                        equals: req.user.country,
                    },
                }];
        });
    }); };
};
var addUser = function (_a) {
    var req = _a.req, data = _a.data;
    var user = req.user;
    return __assign(__assign({}, data), { user: user === null || user === void 0 ? void 0 : user.id });
};
var addFactory = function (_a) {
    var req = _a.req, data = _a.data;
    var user = req.user;
    return __assign(__assign({}, data), { user: user === null || user === void 0 ? void 0 : user.factory_name });
};
var addTriggerAndUser = function (_a) {
    var data = _a.data;
    var totalScore = calculateTotalScore(data);
    console.log("Total Score:", totalScore);
    var trigger = "";
    var reasonForScore = "";
    if (totalScore > 3) {
        trigger = "high";
        reasonForScore =
            "The total score is high because many questions were answered with 'yes'.";
    }
    else {
        trigger = "low";
        reasonForScore =
            "The total score is low because few or no questions were answered with 'yes'.";
    }
    console.log("Trigger:", trigger);
    console.log("Reason for Score:", reasonForScore);
    var newData = __assign(__assign({}, data), { Trigger: trigger, reasonForScore: reasonForScore });
    console.log("New Data:", newData);
    return newData;
};
var addUserToData = function (_a) {
    var req = _a.req, data = _a.data;
    var user = req.user;
    if (user) {
        // Add user ID to the data being changed
        return __assign(__assign({}, data), { user: user.id });
    }
    // If no user is authenticated, return the data unchanged
    return data;
};
exports.SMDQualityQuestions = {
    slug: "SMD_Quality_Inspection",
    labels: {
        singular: "SMD Quality Inspection",
        plural: "SMD Quality Inspections",
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "operator";
        },
        useAsTitle: "SMD Inspection",
        description: "SMD Quality Inspection",
    },
    hooks: {
        beforeChange: [addUser, addFactory, addTriggerAndUser, addUserToData],
    },
    access: {
        read: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
            var referer;
            var req = _b.req;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        referer = req.headers.referer;
                        if (!req.user || !(referer === null || referer === void 0 ? void 0 : referer.includes("sell"))) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, isAdminOrHasAccessToImages()({ req: req })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        }); },
        //read: ({ req: { user } }) => user.role === "clerk", // Restrict create access to superadmin
        update: function (_a) {
            var user = _a.req.user;
            return user.role === "operator";
        }, // Restrict create access to superadmin
        delete: function (_a) {
            var user = _a.req.user;
            return user.role === "operator";
        }, // Restrict create access to superadmin
        create: function (_a) {
            var user = _a.req.user;
            return user.role === "operator";
        }, // ict create access to superadmin
    },
    fields: [
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
            required: true,
            hasMany: true,
            admin: {
                condition: function () { return false; },
            },
        },
        {
            name: "Line",
            type: "relationship",
            relationTo: "smd_line_name",
            required: true,
            hasMany: true,
        },
        {
            name: "Q1",
            label: "Will we have NPI, trials or new materials?",
            required: true,
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q2",
            required: true,
            label: "Do we have a machine ramp up?",
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q3",
            required: true,
            label: "Did we have Change Over?", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q4",
            required: true,
            label: "Did we have quality incidents on the previous shift?", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q5",
            required: true,
            label: "Did any raw material have a confirmed quality issue or is critical to quality?", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q6",
            required: true,
            label: "Did we have preventive maintenance on the previous shift?", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q7",
            required: true,
            label: "Do we have new employee?", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q8",
            required: true,
            label: "Do we have any test-station problem?", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "Yes",
                    value: "yes",
                },
                {
                    label: "No",
                    value: "no",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Trigger",
            type: "text",
            label: "Trigger",
            admin: {
                condition: function (data) {
                    var trigger = data.Trigger;
                    return trigger;
                },
            },
        },
        {
            name: "reasonForScore",
            type: "text",
            label: "Enter reason for this score",
            admin: {
                condition: function (data) {
                    var trigger = data.Trigger || "low";
                    return trigger === "medium" || trigger === "high";
                },
            },
        },
    ],
};
