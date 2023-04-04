import winston from 'winston'
import options from '../config/process.js'

const environment = options.mode

const loggerOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'orange',
        warning: 'yellow',
        info: 'cyan',
        http: 'blue',
        debug: 'white'
    }
}

const devLogger = winston.createLogger({
    levels: loggerOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({ colors: loggerOptions.colors }),
                winston.format.simple()
            )
        })
    ]
})

const prodLogger = winston.createLogger({
    levels: loggerOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({ colors: loggerOptions.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './errors.log', 
            level: 'error',
            format: winston.format.simple()
        })
    ]
})

export const addLogger = (req, res, next) => {
    req.logger = environment === 'development' ? devLogger : prodLogger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
}