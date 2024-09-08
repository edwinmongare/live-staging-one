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
exports.PMDQuestions = void 0;
var calculateTotalScore = function (data) {
    var totalScore = 0;
    var questionScores = {
        Q1: 2,
        Q2: 2,
        Q3: 7,
        Q4: 2,
        Q5: 4,
        Q6: 4,
        Q7: 7,
        Q8: 2,
        Q9: 7,
        Q10: 7,
        Q11: 4,
        Q12: 7,
        Q13: 7,
        Q14: 7,
        Q15: 7,
        Q16: 7,
        Q17: 4,
        Q18: 4,
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
    var trigger = "";
    var reasonForScore = "";
    if (totalScore > 7) {
        trigger = "high";
        reasonForScore =
            "The total score is high because many questions were answered with 'yes'.";
    }
    else if (totalScore >= 4 && totalScore <= 6) {
        trigger = "medium";
        reasonForScore =
            "The total score is medium because some questions were answered with 'yes'.";
    }
    else {
        trigger = "low";
        reasonForScore =
            "The total score is low because few or no questions were answered with 'yes'.";
    }
    var newData = __assign(__assign({}, data), { Trigger: trigger, reasonForScore: reasonForScore });
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
exports.PMDQuestions = {
    slug: "PMDQuestions",
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "operator";
        },
        useAsTitle: "PMDQuestions",
        description: "PMD Inspection",
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
        }, // Restrict create access to superadmin
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
            relationTo: "pmd_lines",
            required: true,
            hasMany: true,
        },
        {
            name: "Q1",
            label: "Team Staffing < Standard (Get staff to fill the crew)",
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
            label: "Personnel less than 6 weeks of machine operation after formal induction training. (Remove personnel from the machine until ensure that it is accompanied by a tutor)", // required
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
            label: "Preventive Maintenance (CO, NPI, CPT and High level leadership tour)", // required
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
            label: "Preventive Maintenance (Cordon the area, Apply LOTO only experienced personnel on the line)", // required
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
            label: "Start up from down day. (Complete a Written Risk Prediction on start- up activities)", // required
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
            label: "Corrective Maintenance (Apply plant standards and procedures Don’t attempt to run the machine, escalate to Team leader or Line lead and complete QRP on tasks)", // required
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
            label: "Obstruction on shop-floor gang-way (excess pallets or machinery on gangway) (Supervisor should complete a Quick Risk Prediction on the potential risk inherent in the blockage and communicate to his or her team.)", // required
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
            label: "Machine running with broken/missing guard or mal functioning interlock (Apply plant standards and procedures Stop machine, escalate to Line lead and complete the risk elimination guide)", // required
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
            name: "Q9",
            required: true,
            label: "Open electric cabinets (Apply plant standards and procedures Close electrical cabinets and escalate to Line lead or team leader.)", // required
            type: "radio", // required
            options: [
                // required
                {
                    label: "No",
                    value: "no",
                },
                {
                    label: "Yes",
                    value: "yes",
                },
            ],
            defaultValue: "yes", // The first value in options.
            admin: {
                layout: "horizontal",
            },
        },
        {
            name: "Q10",
            required: true,
            label: "Serious Injury on the site (Immediately escalate to LM or EHS, Evacuate personnel to clinic, carry out RCA before resuming work)", // required
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
            name: "Q11",
            required: true,
            label: "1 First aid or more in the last 7 days (Ensure effective communication to all modules, implement containment and correction actions)", // required
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
            name: "Q12",
            required: true,
            label: "Confined space, Work at height (Apply plant standards and procedures, also apply permit to work.)", // required
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
            name: "Q13",
            required: true,
            label: "Steam leakages, Water leakage and Hot surface work (Are there steam leakages? Are there water leakages? Is there hot work going on in the area? Apply plant standards and procedures, cordon off the area, apply permit to work.)", // required
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
            name: "Q14",
            required: true,
            label: "High Temperature / Humidity (Ensure temperature and  and conduct QRP.)", // required
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
            name: "Q15",
            required: true,
            label: "Construction Activity (Cordon off the area, apply for permit to work.)", // required
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
            name: "Q16",
            required: true,
            label: "High level cleaning (Cordon off the area, apply for permit to work.)", // required
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
            name: "Q17",
            required: true,
            label: "FLT (Proper use of horn, apply plant standards and procedures.)", // required
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
            name: "Q18",
            required: true,
            label: "CO, NPI, CPT and High level leadership tour (CO, NPI, CPT and High level leadership tour Cordon the area and complete QRP on tasks)", // required
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
