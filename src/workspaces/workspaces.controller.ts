import { ApiTags } from '@nestjs/swagger';
import { Controller, Delete, Get, Post } from '@nestjs/common';

@ApiTags('Workspace')
@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkSpace() {}

  @Get(':workspace/members')
  getAllMembersFromWorkspace() {}

  @Post(':workspace/members')
  inviteMembersFromWorkspace() {}

  @Get(':workspace/members/:id')
  getMemberInfoFromWorkspace() {}

  @Delete(':workspace/members/:id')
  deleteMemberFromWorkspace() {}
}
