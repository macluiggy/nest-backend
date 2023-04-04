import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

export class AllExeptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExeptionsFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg = exception.getResponse
      ? exception.getResponse()
      : exception.message || exception;
    this.logger.error(
      `Status: ${status}, Error: ${
        typeof msg === 'string' ? msg : JSON.stringify(msg)
      }`,
    );
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}
