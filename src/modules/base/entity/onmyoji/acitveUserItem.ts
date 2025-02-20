import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Generated } from 'typeorm';
/**
 * 当前活动的参与项参与人关联表
 */
@Entity('base_onmyoji_active_User_Item')
export class BaseOnmyojiActiveUserItemEntity extends BaseEntity {
  @Column({ comment: '主键id' })
  @Generated('uuid')
  activeUserItemId: string;

  @Column({ comment: '活动ID' })
  activeId: string;

  @Column({ comment: '参与项ID' })
  activeItemId: string;

  @Column({ comment: '参与项人ID' })
  userId: string;

  @Column({ comment: '当前项的值' })
  value: string;
}
