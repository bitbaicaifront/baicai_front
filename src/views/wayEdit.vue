<template>
    <div>
      <div id="menubar" align="left">
        <ButtonGroup>
          <Button v-if="true" :size="12" v-bind:type="info_click" v-on:click="myinfo">基本信息</Button>
          <Button :size="12" v-bind:type="choose_click" v-on:click="mychoose">筛选</Button>
          <Button :size="12" v-bind:type="process_click" v-on:click="myprocess">流程</Button>
        </ButtonGroup>
      </div>
      <div style="border-style:solid">
        <div id="everydiv1" v-bind:style="display_div_1">
          <Row>
            <Col span="12">
              <br/>
              <Select v-model="relative_template" placeholder="关联的模板" clearable style="width:300px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <br/><br/>
              <Input v-model="name" placeholder="项目名称" style="width: 300px" />
              <br/><br/>
              <Input v-model="description" type="textarea" :rows="4" placeholder="描述信息" style="width: 300px" />
              <br/><br/>
            </Col>
            <Col span="12">
              <br/>
              <Input v-model="type" placeholder="业务大类" style="width: 300px" />
              <br/><br/>
              <Input v-model="sub_type" placeholder="业务子类" style="width: 300px" />
              <br/><br/>
              <Input v-model="predict_factor" placeholder="预测指标" style="width: 300px" />
              <br/><br/>
              <Input v-model="predict_main" placeholder="预测主体" style="width: 300px" />
              <br/><br/>
              <Input v-model="predict_dimension" placeholder="预测维度" style="width: 300px" />
              <br/><br/>
            </Col>
          </Row>
        </div>

        <!--分割线====================================================-->

        <div id="everydiv2" v-bind:style="display_div_2">
          <div>
            <Row align="center">
              <Col span="6">
                主体筛选
              </Col>
              <Col span="18">
                <Input v-model="main_choose" type="textarea" :rows="4" placeholder="biz: \[0,2\],
cat1: \[2321, 3726, 2122\]
id:\[1223232,3234343,32323323,4343443\]," style="width: 600px" />
              </Col>
            </Row>
          </div>
          <div>
            <Row align="center">
              <Col span="6">
                主体黑名单
              </Col>
              <Col span="18">
                <Input v-model="main_blacklist" type="textarea" :rows="4" placeholder="bid:\[3829,3443\]" style="width: 600px" />
              </Col>
            </Row>
          </div>
          <div>
            <Row align="center">
              <Col span="6">
                维度筛选
              </Col>
              <Col span="18">
                <Input v-model="dimension_choose" placeholder="id: \[3, 6\]" style="width: 600px" />
              </Col>
            </Row>
          </div>
        </div>

        <!--分割线====================================================-->

        <div id="everydiv3" v-bind:style="display_div_3">
          <fieldset>
            <legend align="left">流程列表</legend>
            <div align="left">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="info">创建</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="info">修改</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="info">删除</Button>
              </div>
              <br/>
              <div>
                <Table size="small" stripe border :columns="columns1" :data="data1"></Table>
              </div>
            </div>
          </fieldset>
          <br/>
          <fieldset>
            <legend align="left">流程整合</legend>
            <div>
              <Table size="small" stripe border :columns="columns2" :data="data2"></Table>
            </div>
          </fieldset>
        </div>
      </div>
      <div style="background:#000000;">
        dsfasdf
      </div>
    </div>
</template>

<script>
    export default {
      name: "wayEdit.vue",
      data(){
        return{
          name: '',
          description: '',
          info_click: "default",
          choose_click: "default",
          process_click: "default",
          display_div_1:"display:none",
          display_div_2:"display:none",
          display_div_3:"display:none",
          relative_template: '',
          type: '',
          sub_type:'',
          predict_factor:'',
          predict_main:'',
          predict_dimension:'',
          main_choose: '',
          main_blacklist: '',
          dimension_choose: '',
          cityList: [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
          columns1: [
            {
              title: '流程id',
              key: 'process_id',
              render: (h, params) => {
                return h('div', [
                  h('a', {
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
                  }, params.row.process_id)
                ]);
              }
            },
            {
              title: '流程名称',
              key: 'process_name'
            },
            {
              title: '类型',
              key: 'process_type'
            }
          ],
          data1: [
            {
              process_id: 'John Brown',
              process_name: 18,
              process_type: 'New York No. 1 Lake Park'
            },
            {
              process_id: 'John Brown',
              process_name: 18,
              process_type: 'New York No. 1 Lake Park'
            }
          ],
          columns2: [
            {
              title: '任务编码',
              key: 'task_encoding'
            },
            {
              title: '关联组件',
              key: 'relation_component'
            },
            {
              title: '任务描述',
              key: 'task_description'
            },
            {
              title: '参数',
              key: 'param',
              render: (h, params) => {
                return h('div', [
                  h('a', {
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
                  }, params.row.param)
                ]);
              }
            }
          ],
          data2: [
            {
              task_encoding: 'John Brown',
              relation_component: 18,
              task_description: 'New York No. 1 Lake Park',
              param: '2016-10-03'
            }
          ]
        }
      },
      methods:{
        myinfo(){
          this.info_click="primary";
          this.choose_click="default";
          this.process_click="default";
          this.display_div_1="display:block";
          this.display_div_2="display:none";
          this.display_div_3="display:none"
        },
        mychoose(){
          this.choose_click="primary";
          this.info_click="default";
          this.process_click="default";
          this.display_div_1="display:none";
          this.display_div_2="display:block";
          this.display_div_3="display:none"
        },
        myprocess(){
          this.process_click="primary";
          this.info_click="default";
          this.choose_click="default";
          this.display_div_1="display:none";
          this.display_div_2="display:none";
          this.display_div_3="display:block"
        }
      }
    }
</script>

<style scoped>

</style>
