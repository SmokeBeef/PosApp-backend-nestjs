import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class Config {
  public env: ConfigProps;
  constructor(configService: ConfigService) {
    const config: ConfigProps = {
      JWT_ACCESS_SECRET_KEY: configService.get('JWT_ACCESS_SECRET_KEY'),
      JWT_REFRESH_SECRET_KEY: configService.get('JWT_REFRESH_SECRET_KEY'),
    };
    this.env = config;
  }
  private static getConfig = new ConfigService();
  public static envs: ConfigProps = {
    JWT_ACCESS_SECRET_KEY: Config.getConfig.get('JWT_ACCESS_SECRET_KEY'),
    JWT_REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,
  };
}

interface ConfigProps {
  JWT_ACCESS_SECRET_KEY: string;
  JWT_REFRESH_SECRET_KEY: string;
}
