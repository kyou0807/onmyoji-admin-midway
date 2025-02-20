import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 阴阳师用户
 */
@Entity('base_onmyoji_user')
export class BaseOnmyojiUserEntity extends BaseEntity {
  @Column({ comment: '账号' })
  userId: string;

  @Column({ comment: '用户名' })
  username: string;

  @Column({ comment: '排序', default: 0 })
  sort: number;
}
