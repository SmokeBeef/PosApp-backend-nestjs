import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { validation } from 'src/utils/zod-validation';
import { loginSchema } from './dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: any, @Res() res: Response) {
    const data = await validation(body, loginSchema);
    res.status(200).json(data);
  }
}
