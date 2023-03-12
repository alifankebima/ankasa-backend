const {
    selectAllCity,
    selectDetailCity,
    insertCity,
    updateCity,
    deleteCity,
    countData,
    findId,
} = require("../model/city");

const commonHelper = require("../helper/common");
const { v4: uuidv4 } = require("uuid");

const cityController = {
    getAllCity: async (req, res) => {
        try {
            let sortBY = req.query.sortBY || "id";
            let search = req.query.search || "";
            let sort = req.query.sort || "ASC";
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const offset = (page - 1) * limit;
            const result = await selectAllCity(search, sortBY, sort, limit, offset);
            const { rows: [count], } = await countData();
            const totalData = parseInt(count.count);
            const totalPage = Math.ceil(totalData / limit);
            const pagination = {
                currentPage: page,
                limit: limit,
                totalData: totalData,
                totalPage: totalPage,
            };
            commonHelper.response(res, result.rows, 200, "get data succes", pagination);
        } catch (error) {
            console.log(error);
        }
    },
    getDetailCity: async (req, res) => {
        try {
            const id = req.params.id;
            const { rowCount } = await findId(id);
            if (!rowCount) {
                return res.json({
                    Message: "data not found",
                });
            }
            selectDetailCity(id)
                .then((result) => {
                    commonHelper.response(res, result.rows, 200, "get data by id success");
                })
                .catch((err) => res.send(err));
        } catch (error) {
            console.log(error);
        }
    },
    createCity: async (req, res) => {
        const { name, email, country, image } = req.body;
        const id = uuidv4();
        const data = { id, name, email, country, image };
        insertCity(data)
            .then((result) => {
                commonHelper.response(res, result.rows, 201, "City created");
            })
            .catch((err) => res.status(500).json(err));
    },
    updateCity: async (req, res) => {
        const id = req.params.id;
        const { name, email, country, image } = req.body;
        const { rowCount } = await findId(id);
        if (!rowCount) {
            return res.json({
                Message: "data not found",
            });
        }
        const data = { id, name, email, country, image };
        updateCity(data)
            .then((result) => {
                console.log(result);
                commonHelper.response(res, result.rows, 200, "City updated");
            })
            .catch((err) => res.status(500).json(err));
    },
    deleteCity: async (req, res) => {
        const id = req.params.id;
        const { rowCount } = await findId(id);
        if (!rowCount) {
            res.json({ message: "ID is Not Found" });
        }
        deleteCity(id)
            .then((result) => {
                commonHelper.response(res, result.rows, 200, "City deleted")
            })
            .catch((err) => res.send(err));
    },
};

module.exports = cityController;