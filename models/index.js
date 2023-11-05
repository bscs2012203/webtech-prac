const mongoose = require("mongoose");
const { Student } = require("./Student");
const { Course } = require("./Course");
const { Registration } = require("./Registration");
const { Grade } = require("./Grade");

(async () => {
    await mongoose.connect(`mongodb://localhost:27017/WebDB`);
})();

module.exports = {
    Student,
    Course,
    Grade,
    Registration,
};
