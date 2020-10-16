const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const results = await User.findAll()
        return res.json(results)
    },
    async show(req, res) {
        const { id } = req.params
        const results = await User.findByPk(id)
        return res.json(results)
    },
    async create(req, res) {
        const { fullname, email, password } = req.body
        const results = await User.create({ fullname, email, password })
        return res.status(201).json(results)
    },
    async delete(req, res) {
        const { id } = req.params
        const results = await User.destroy({ where: { id } })
        return res.json({ sucess: `user ${id} deleted` })
    },
    async update(req, res) {
        const { id } = req.params
        const { fullname, email, password } = req.body
        const previousData = (await User.findByPk(id)).toJSON()
        const results = await User.update({
            fullname: fullname || previousData.fullname,
            email: email || previousData.email,
            password: password || previousData.password
        }, {
            where: { id }
        })
        return res.json({ sucess: `user ${id} updated` })
    }
}