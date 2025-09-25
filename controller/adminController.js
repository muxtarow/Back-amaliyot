const bcrypt = require("bcrypt");
const { Admin } = require("../models");
const { validateAdmin } =require ("../validation/adminValidation")

exports.createAdmin = async (req, res) => {
    const errors = validateAdmin(req);
    if (!errors) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, login, password, is_active, is_creator } = req.body;
        const hashed_password = await bcrypt.hash(password, 10);
        const hashed_refresh_token = await bcrypt.hash("refresh_token_placeholder", 10);
        const admin = await Admin.create({ name, login, hashed_password, is_active, is_creator, hashed_refresh_token });
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ error: "Admin not found" });
        res.json(admin);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateAdmin = async (req, res) => {
    const errors = validateAdmin(req);
    if (!errors) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const { name, login, password, is_active, is_creator } = req.body;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ error: "Admin not found" });
        const hashed_password = password ? await bcrypt.hash(password, 10) : admin.hashed_password;
        await admin.update({ name, login, hashed_password, is_active, is_creator });
        res.json(admin);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ error: "Admin not found" });
        await admin.destroy();
        res.json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
