<template>
    <div>
      <div align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Select v-model="project_encoding" placeholder="项目编码" clearable style="width:100px">
          <Option v-for="item in encodingList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Select v-model="way_name" placeholder="方案名称" clearable style="width:100px">
          <Option v-for="item in wayNameList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Select v-model="type" placeholder="业务大类" clearable style="width:100px">
          <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Select v-model="sub_type" placeholder="业务子类" clearable style="width:100px">
          <Option v-for="item in subTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="info">查询</Button>
      </div>
      <br/><br/>
      <div align="left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="info">创建</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="info">修改</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="info">删除</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="info">复制</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="info">日志</Button>
      </div>
      <br/><br/>
      <div align="left">
        <Table size="small" stripe border :columns="columns1" :data="data1"></Table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wayList.vue",
        data () {
          return {
            columns1: [
              {
                title: '项目id',
                key: 'id',
                align: 'center',
                width: 80
              },
              {
                title: '项目名称',
                key: 'name',
                align: 'center',
                width: 150
              },
              {
                title: '项目描述',
                key: 'description',
                align: 'center',
                width: 200
              },
              {
                title: '业务大类',
                key: 'type',
                align: 'center'
              },
              {
                title: '业务子类',
                key: 'sub_type',
                align: 'center'
              },
              {
                title: '预测指标',
                key: 'predict_factor',
                align: 'center'
              },
              {
                title: '预测主体',
                key: 'predict_main',
                align: 'center'
              },
              {
                title: '预测维度',
                key: 'predict_dimension',
                align: 'center'
              },
              {
              // <Icon type="md-analytics" />
                title: '结果分析',
                key: 'res_analysis',
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'md-analytics',
                        size: 24
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          // this.show(params.index)
                          alert(params.index)
                        }
                      }
                    }, 'View')
                  ]);
                }
              },
              {
                // <Icon type="md-stats" />
                title: '准确度分析',
                key: 'accuracy_analysis',
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'md-stats',
                        size: 24
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          // this.show(params.index)
                          alert(params.index)
                        }
                      }
                    }, 'View')
                  ]);
                }
              }
            ],
            data1: [
              {
                id: '001',
                name: 'sfs_small_rdc',
                description: '中小件RDC销量预测',
                type: '销量预测',
                sub_type:'中小件',
                predict_factor:'销量',
                predict_main:'SKU',
                predict_dimension:'RDC',
                res_analysis:'',
                accuracy_analysis:''
              },
              {
                id: '002',
                name: 'sfs_medicine_dc',
                description: '医药仓DC销量预测',
                type: '销量预测',
                sub_type:'医药仓',
                predict_factor:'销量',
                predict_main:'SKU',
                predict_dimension:'DC',
                res_analysis:'',
                accuracy_analysis:''
              },
              {
                id: '003',
                name: 'sfs_bulky_center',
                description: '大件中心仓销量预测',
                type: '销量预测',
                sub_type:'大件',
                predict_factor:'销量',
                predict_main:'SKU',
                predict_dimension:'大件中心仓',
                res_analysis:'',
                accuracy_analysis:''
              },
              {
                id: '004',
                name: 'ofs_site',
                description: '站点单量预测',
                type: '单量预测',
                sub_type:'站点',
                predict_factor:'单量',
                predict_main:'',
                predict_dimension:'站点',
                res_analysis:'',
                accuracy_analysis:''
              }
            ],
            project_encoding: '',
            encodingList: [
              {
                value: 'New York',
                label: 'New York'
              },
              {
                value: 'London',
                label: 'London'
              }
            ],
            way_name: '',
            wayNameList: [
              {
                value: 'New York',
                label: 'New York'
              },
              {
                value: 'London',
                label: 'London'
              }
            ],
            type: '',
            typeList: [
              {
                value: 'New York',
                label: 'New York'
              },
              {
                value: 'London',
                label: 'London'
              }
            ],
            sub_type: '',
            subTypeList: [
              {
                value: 'New York',
                label: 'New York'
              },
              {
                value: 'London',
                label: 'London'
              }
            ],
          }
        }
    }
</script>

<style scoped>

</style>
