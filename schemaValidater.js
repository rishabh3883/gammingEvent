const Joi = require('joi');

module.exports.EventSchema = Joi.object({
    event : Joi.object({
       EventName : Joi.string().required(),
       EventFees :Joi.number().required().min(25),
       FirstPrice :Joi.number().required().min(25),
       SecondPrice :Joi.number().required().min(25),
       ThirdPrice :Joi.number().required().min(25)
    }).required()
});



