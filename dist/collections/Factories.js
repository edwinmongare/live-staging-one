"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factories = void 0;
exports.Factories = {
    slug: "factories",
    admin: {
        useAsTitle: "factory_name",
        description: "Factories in BAT",
    },
    access: {
        read: function (_a) {
            var user = _a.req.user;
            return user.role === "superadmin";
        },
        update: function (_a) {
            var user = _a.req.user;
            return user.role === "superadmin";
        }, // Restrict create access to superadmin
        delete: function (_a) {
            var user = _a.req.user;
            return user.role === "superadmin";
        }, // Restrict create access to superadmin
        create: function (_a) {
            var user = _a.req.user;
            return user.role === "superadmin";
        }, // Restrict create access to superadmin
    },
    fields: [
        {
            label: "Factory",
            name: "factory_name",
            type: "text",
            required: true,
        },
        {
            label: "Country",
            name: "country",
            type: "text",
            required: true,
        },
    ],
};
