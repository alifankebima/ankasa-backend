const flightModel = require("../model/flights")

const commonHelper = require("../helper/common");
const { v4: uuidv4 } = require("uuid");

const flightsController = {
  getAllFlights: async (req, res) => {
    try {
      let cityDept = req.query.cityDept || "";
      let cityDest = req.query.cityDest || "";
      let transit = req.query.transit || "";
      let flightTrip = req.query.flightTrip || "";
      let flightClass = req.query.flightClass || "";
      let luggage = req.query.luggage || "";
      let inflight_meal = req.query.inflight_meal || "";
      let wifi = req.query.wifi || "";
      let deptDate = req.query.deptDate || "";
      let deptTimeStart = req.query.deptTimeStart || "";
      let deptTimeEnd = req.query.deptTimeEnd || "";
      let arrivalTimeStart = req.query.arrivalTimeStart || "";
      let arrivalTimeEnd = req.query.arrivalTimeEnd || "";
      let airline = req.query.airline || "";
      let person = req.query.person || "";
      let ticketPriceStart = req.query.ticketPriceStart || "";
      let ticketPriceEnd = req.query.ticketPriceEnd || "";
      let sortBY = req.query.sortBy || "updated_at";
      let sort = req.query.sort || "desc";
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const data = {
        cityDept, cityDest, transit, flightTrip, flightClass, luggage, inflight_meal, wifi,
        deptDate, deptTimeStart, deptTimeEnd, arrivalTimeStart, arrivalTimeEnd,
        person, airline, ticketPriceStart, ticketPriceEnd, sortBY, sort, limit, offset
      }
      const result = await flightModel.selectAllFlights(data);

      if (!result.rowCount) return commonHelper.response(res, null, 404, "flight not found");

      const totalData = parseInt(result.rowCount);
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
      commonHelper.response(res, null, 500, "Failed getting all flights");
    }
  },
  getDetailFlights: async (req, res) => {
    try {
      const id = req.params.id;
      const { rowCount } = await flightModel.findId(id);
      if (!rowCount) {
        return res.json({
          Message: "data not found",
        });
      }
      const result = await flightModel.selectDetailFlights(id)
      commonHelper.response(res, result.rows, 200, "get data by id success");
    } catch (error) {
      console.log(error);
      commonHelper.response(res, null, 500, "Failed getting detail flight")
    }
  },
  createFlights: async (req, res) => {
    try {
      const data = req.body;
      data.id = uuidv4();
      data.created_at = Date.now();
      data.updated_at = Date.now();
      flightModel.insertFlights(data)
        .then((result) => {
          commonHelper.response(res, result.rows, 201, "Flights created");
        })
        .catch((err) => res.status(500).json(err));
    } catch (error) {
      console.log(error)
      commonHelper.response(res, null, 500, "Failed creating flight");
    }
  },
  updateFlights: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const { rowCount } = await flightModel.findId(id);
    if (!rowCount) {
      return res.json({
        Message: "data not found",
      });
    }
    data.id = id;
    data.updated_at = Date.now();
    flightModel.updateFlights(data)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, "Flight updated");
      })
      .catch((err) => res.status(500).json(err));
  },
  deleteFlights: async (req, res) => {
    const id = req.params.id;
    const { rowCount } = await flightModel.findId(id);
    if (!rowCount) {
      res.json({ message: "ID is Not Found" });
    }
    flightModel.deleteFlights(id)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, "Flights deleted")
      })
      .catch((err) => res.send(err));
  }
};

module.exports = flightsController;