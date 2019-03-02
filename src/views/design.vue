<template>
    <div>
      <Modal v-model="modal_create" title="添加">
        <!--<div id="create-form" align="center">
          <Form ref="createForm" :model="createForm" :rules="ruleCreateForm" :label-width="80">
            <FormItem label="字典标识" prop="code">
              <Input v-model="createForm.code" placeholder="请输入字典标识"></Input>
            </FormItem>
            <FormItem label="字典名称" prop="name">
              <Input v-model="createForm.name" placeholder="请输入字典名称"></Input>
            </FormItem>
            <FormItem label="级别" prop="type">
              <Select v-model="createForm.type" placeholder="请选择级别">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            &lt;!&ndash;这个用来在添加的时候隐藏父级项目的id，用来作为添加的子项目的pid&ndash;&gt;
            <FormItem label="hidden" prop="hidden" v-show="false">
              <Input v-model="createForm.pid"></Input>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <Button type="primary" @click="handleSubmit('createForm')">Submit</Button>
          <Button @click="handleReset('createForm')" style="margin-left: 8px">Reset</Button>
        </div>-->
      </Modal>
      <Modal v-model="modal_show" title="展示">
        <!--<div id="edit-form" align="center">
          <Form ref="editForm" :model="editForm" :rules="ruleEditForm" :label-width="80">
            <FormItem label="字典标识" prop="code">
              <Input v-model="editForm.code" placeholder="请输入字典标识"></Input>
            </FormItem>
            <FormItem label="字典名称" prop="name">
              <Input v-model="editForm.name" placeholder="请输入字典名称"></Input>
            </FormItem>
            <FormItem label="级别" prop="type">
              <Select v-model="editForm.type" placeholder="请选择级别">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="优先级" prop="order_by">
              <Input v-model="editForm.order_by" placeholder="请输入优先级"></Input>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <Button type="primary" @click="handleSubmit('editForm')">Submit</Button>
          <Button @click="updateDic(editForm.index)" style="margin-left: 8px">Reset</Button>
        </div>-->
      </Modal>
      <div id="show-table" align="left" v-show="show_table">
        <Table size="small" :show-header="false" stripe border :columns="table_head" :data="components"></Table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "design.vue",
        data(){
          return{
            show_table: true,
            modal_create: false,
            modal_show: false,
            buttonList:[
              {label:'button1'},
              {label:'button2'},
              {label:'button3'},
            ],
            table_head: [
              {
                // <Icon type="md-stats" />
                title: 'button',
                key: 'button',
                align: 'center',
                render: (h, params) => {
                  if(params.index == 0){
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'primary',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px'
                        },
                        on: {
                          click: () => {
                            // this.show(params.index)
                            this.addRecord();
                          }
                        }
                      }, '+')
                    ]);
                  }
                  else{
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'primary',
                          size: 'small'
                        },
                        style: {
                          marginRight: '5px'
                        },
                        on: {
                          click: () => {
                            // this.show(params.index)
                            this.showRecord(params.index);
                          }
                        }
                      }, 'button')
                    ]);
                  }
                }
              },
              {
                // <Icon type="md-stats" />
                title: 'button',
                key: 'button',
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          // this.show(params.index)
                          this.updateDic(params.index);
                        }
                      }
                    }, 'button')
                  ]);
                }
              },
              {
                // <Icon type="md-stats" />
                title: 'button',
                key: 'button',
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          // this.show(params.index)
                          this.updateDic(params.index);
                        }
                      }
                    }, 'button')
                  ]);
                }
              }
            ],
            components: [
              {
                button: 2,
                button: 2,
                button: 2,

              },
              {
                button: 2,
                button: 2,
                button: 2,

              },
              {
                button: 2,
                button: 2,
                button: 2,

              },
              {
                button: 2,
                button: 2,
                button: 2,

              }
            ]
          }
        },
      methods: {
        addRecord(){
          this.modal_create = true;
        }
      }
    }
</script>

<style scoped>

</style>
