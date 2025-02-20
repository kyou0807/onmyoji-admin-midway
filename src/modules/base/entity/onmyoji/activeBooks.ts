import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Generated } from 'typeorm';

/**
 * 描述
 */
@Entity('base_onmyoji_active_books')
export class BaseOnmyojiActiveBooksEntity extends BaseEntity {
  @Column({
    comment: '活动记录ID',
    unique: true,
    nullable: true,
  })
  @Generated('uuid')
  activeBooksId: string;

  // 关联活动表的id
  @Column({ comment: '活动ID', nullable: true })
  activeId: string;

  @Column({ comment: '参与活动的账号id' })
  userId: string;

  @Column({ comment: '当前活动的参与项ID', nullable: true })
  activeItemId: string;

  @Column({ comment: '排序', default: 0 })
  sort: number;
}
