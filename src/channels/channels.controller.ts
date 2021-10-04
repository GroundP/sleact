import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post } from '@nestjs/common';

@ApiTags('Channel')
@Controller('api/workspaces/:workspaces/channels')
export class ChannelsController {
  @Get()
  getAllChannles() {}

  @Post()
  createChannels() {}

  @Get(':channel')
  getSpecificChannel() {}

  @Get(':channel/chats')
  getAllChattingsFromChannel() {}

  @Get(':channel/unreads')
  getUnreadsFromChannel() {}

  @Post(':channel/chats')
  saveChats() {}

  @Post(':channel/images')
  saveImages() {}

  @Get(':channel/members')
  getMembersFromChannel() {}

  @Post(':channel/members')
  inviteMembers() {}
}
