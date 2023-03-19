<template>
    <div class="page tw-flex tw-flex-col">
        <NaPageHeader :show-back="false" full class="tw-mb-4 tw-flex-none">
            <template v-slot:title>
                角色权限管理
            </template>
            <template v-slot:subtitle>
                页面数据为 Mock 示例数据，非真实数据。
            </template>
        </NaPageHeader>
        <main class="tw-flex-auto">
            <div class="!tw-rounded  tw-overflow-hidden tw-bg-cbg-1 tw-p-4">
                <div class="na-table-toolkit tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-mb-4">
                    <div class="na-table-toolkit__left tw-mr-2 tw-text-title-1">
                        角色列表
                        <slot name="toolkitLeft">

                        </slot>
                    </div>
                    <a-space>
                        <slot name="toolkitRight">

                        </slot>
                        <div>
                            <a-space>
                                <a-tooltip content="斑马纹" position="top" mini>
                                    <a-switch size="small" type="line"></a-switch>
                                </a-tooltip>
                                <a-tooltip content="刷新" position="top" mini> <a-button type="text">
                                        <template v-slot:icon>
                                            <icon-refresh class="tw-text-[16px]" />
                                        </template>
                                    </a-button></a-tooltip>
                                <a-tooltip content="全屏" position="top" mini><a-button type="text">
                                        <template v-slot:icon>
                                            <icon-expand class="tw-text-[16px]" />
                                        </template>
                                    </a-button></a-tooltip>

                                <a-button type="text">
                                    <template v-slot:icon>
                                        <icon-list class="tw-text-[16px]" />
                                    </template>
                                </a-button>
                                <a-tooltip content="更多设置" position="top" mini>

                                    <a-button type="text">
                                        <template v-slot:icon>
                                            <icon-settings class="tw-text-[16px]" />
                                        </template>
                                    </a-button>

                                </a-tooltip>
                            </a-space>
                        </div>

                    </a-space>
                </div>
                <a-table class="!tw-rounded" :columns="columns" :data="data" :bordered="false">
                    <template #optional="{ record }">
                        <a-space>
                            <a-button type="primary" size="small">编辑</a-button>
                            <a-button type="primary" size="small" status="danger">删除</a-button>
                            <a-button type="primary" size="small" status="warning">禁用</a-button>
                        </a-space>
                    </template>
                    <template #ruleStatus="{ record }">
                        <a-tag v-if="record.ruleStatus === 1" color="green" type="text">{{ '启用' }}</a-tag>
                        <a-tag v-if="record.ruleStatus === 2" color="red" type="text">{{ '停用' }}</a-tag>
                        <a-tag v-if="record.ruleStatus === 3" color="yellow" type="text">{{ '未知' }}</a-tag>
                    </template>
                </a-table>
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">
import NaPageHeader from '@/components/NaPageHeader.vue';
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: '角色名称',
        dataIndex: 'roleTitle',
    },
    {
        title: '角色标识',
        dataIndex: 'roleName',
    },
    {
        title: '权限范围',
        dataIndex: 'permissions',
    },
    {
        title: '状态',
        slotName: 'ruleStatus',
    },
    {
        title: '备注',
        dataIndex: 'comment',
    },
    {
        title: '操作',
        slotName: 'optional',
        width: 200,
    }
];
const data = reactive([{
    id: '1',
    roleTitle: '管理员',
    roleName: 'admin',
    permissions: ['*', 'system'],
    ruleStatus: 1,
    comment: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
}]);
</script>
<style scoped lang="scss">
.page {
    min-height: 100%;
}
</style>