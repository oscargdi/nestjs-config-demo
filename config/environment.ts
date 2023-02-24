import * as Joi from 'joi';

const environment = () => ({
  NODE_ENV: process.env.NODE_ENV,
  API_AUTH_KEY: process.env.API_AUTH_KEY,
});

const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'stg', 'prod', 'local'),
  API_AUTH_KEY: Joi.string().required(),
});

export { environment, validationSchema };
