"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
    // verify: {
    //   generateEmailHTML: ({ token }) => {
    //     return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'></a>`;
    //   },
    // },
    },
    access: {
        read: function () { return true; }, // Restrict create access to superadmin
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
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "admin" && user.role !== "superadmin";
        },
        useAsTitle: "Create new users",
        description: "Create user as and admin,data clerk, operator and link the user to a factory",
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "role",
            defaultValue: "user",
            required: true,
            admin: {
                condition: function () { return true; },
            },
            type: "select",
            options: [
                { label: "Super Admin", value: "superadmin" },
                { label: "Operator", value: "operator" },
                { label: "Clerk", value: "clerk" },
            ],
        },
        // {
        //   name: "factory_name",
        //   type: "relationship",
        //   relationTo: "factories",
        //   required: true,
        //   hasMany: false,
        // },
    ],
};
