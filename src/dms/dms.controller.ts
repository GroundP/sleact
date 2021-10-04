import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:workspace/dms')
export class DmsController {
  @ApiParam({
    name: 'workspace',
    required: true,
    description: '워크스페이스 url',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':id/chats')
  getDMChatWithOther(
    @Query('perPage') perPage,
    @Query('page') page,
    @Param('id') id,
    @Param('url') url,
  ) {
    console.log(perPage, page);
    console.log(id, url);
  }

  @Get(':id/unreads')
  getUnreadDMChats() {}

  @Post(':id/chats')
  saveDMChatWithOther(@Body() body) {}

  @Post(':id/images')
  saveImagesWithOther(@Body() body) {}
}
