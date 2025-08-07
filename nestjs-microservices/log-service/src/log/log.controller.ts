import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class LogController {
    @EventPattern('log')
    handleLogEvent(data: any) {
        console.log('Log event received:', data);
    }

    @EventPattern('log-error')
    handleLogErrorEvent(data: any) {
        console.error('Log error event received:', data);
    }
}
