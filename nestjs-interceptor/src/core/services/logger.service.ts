// logger.service.ts
import { Injectable } from '@nestjs/common';

interface Log {
  admin_id: number;
  name: string;
  url: string;
  title: string;
  data: string;
  ip: string;
  ua: string;
  method: string;
}
@Injectable()
export class LoggerService {
  constructor() {
  }

  createLog(log: Log) {
    console.log(`[${log.method}] [${log.ip}] [${log.admin_id}] [LOG] ${new Date().toISOString()} - ${log.title} - ${JSON.stringify(log.data)}`);
  }
}