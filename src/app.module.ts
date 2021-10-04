import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsModule } from './dms/dms.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [UsersModule, WorkspacesModule, DmsModule, ChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
