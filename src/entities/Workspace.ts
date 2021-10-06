import { Column, Entity, Index } from 'typeorm';

@Index('name_UNIQUE', ['name'], { unique: true })
@Index('url_UNIQUE', ['url'], { unique: true })
@Entity('workspace', { schema: 'nestDB' })
export class Workspace {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 30 })
  name: string;

  @Column('varchar', { name: 'url', unique: true, length: 30 })
  url: string;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('int', { name: 'owner_id' })
  ownerId: number;

  @Column('varchar', { name: 'workspacecol', nullable: true, length: 45 })
  workspacecol: string | null;
}
