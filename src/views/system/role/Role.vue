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
        <main class="tw-flex-none   ">
            <div class="!tw-rounded  tw-overflow-hidden tw-bg-cbg-1 tw-p-4 tw-h-[300px]">
                <!-- 表格 -->
                <div class="na-table tw-w-full tw-h-full tw-flex tw-flex-col ">
                    <!-- 表格标题工具栏 -->
                    <div
                        class="na-table-toolkit tw-flex-none tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-mb-4">
                        <div class="na-table-toolkit__left tw-flex tw-items-center tw-mr-2 tw-text-title-1">
                            <span v-if="props.title">{{ props.title }}</span>
                            <!-- 表格标题插槽 -->
                            <slot name="toolkitLeft" />
                        </div>
                        <a-space>
                            <slot name="toolkitRight" />
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
                    <div class="na-table__table">
                        <a-table :columns="cols" :data="tableData" :scroll="{ x:'100%', minWidth:1000, y: '100%' }" :scrollbar="false" :loading="loading">
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
                </div>

            </div>
        </main>
    </div>
</template>
<script setup lang="ts">
import NaPageHeader from '@/components/NaPageHeader.vue';
import { getSystemDemoTable } from '@/api/system'
import { useRequest } from '@/hooks/useRequest'
let props = withDefaults(
    defineProps<{
        title?: string;
    }>(),
    {
        title: '表格标题'
    }
);
let { loading, run } = useRequest(getSystemDemoTable);
let tableData = ref<any>([]);
run().then(res => {
    console.log(res);
    tableData.value = res.data;
})
let cols = [
    {
        title: 'id',
        dataIndex: 'id',
        width: 600,

    },
    {
        title: '姓名',
        width: 600,
        dataIndex: 'name'
    }, {
        title: '编号',
        dataIndex: 'no'
    }, {
        title: '状态',
        dataIndex: 'status'
    }, {
        title: '地址',
        dataIndex: 'address'
    }, {
        title: '头像',
        dataIndex: 'avatar'
    }, {
        title: '开始时间',
        dataIndex: 'beginTime'
    }, {
        title: '结束时间',
        dataIndex: 'endTime'
    }, {
        title: '结束时间',
        dataIndex: 'endTime'
    }]
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

.na-table__table {
    flex: auto;
    min-height: 0;
}

main {
    min-height: 0;
}
</style>