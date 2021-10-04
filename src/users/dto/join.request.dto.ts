import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'bloom0819@naver.com',
    description: '메일주소',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '그라운드90',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'nodejsbook',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
