import { ExceptionFilter, Catch, ArgumentsHost, HttpException, NotAcceptableException } from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();


        return response
            .status(status)
            .json({
                status: status,
                data: [],
                errors: [
                    {
                        message: typeof exception.getResponse() == 'object' ? exception.getResponse()['message'] : exception.message,
                        path: request.url,
                        method: request.method,
                        timestamp: new Date().toISOString(),
                    }
                ],




            });
    }
}
