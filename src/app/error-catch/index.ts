import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(ErrorFilter)
export class ErrorFilter extends Error implements ExceptionFilter {
  constructor(
    message: string,
    private code: number,
  ) {
    super(message);
    this.name = 'ErrorCustom';
  }

  catch(exception: any, host: ArgumentsHost) {}
}
