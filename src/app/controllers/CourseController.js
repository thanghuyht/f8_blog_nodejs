const Course = require("../models/Course")
const { mongooseToObject } = require("../../util/mongoose")

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            }

            )
            .catch(error => next(error))
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST] /courses/store
    async store(req, res, next) {
        // res.json(req.body)

        const fromData = req.body
        fromData.imageThumb = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`
        fromData.slug = `${req.body.title}`
        const course = new Course(fromData)
        course.save()

        res.send("ok")
    }
}

module.exports = new CourseController;
