import {createLogger, transports, format} from "winston";

export const logger = createLogger({
    transports: [
        new transports.File({
            filename: process.env.LOG_FILENAME,
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})