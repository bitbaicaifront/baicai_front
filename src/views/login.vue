<template>
  <div class="note" :style ="note">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="账号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <br>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <br>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
      <br>
      <FormItem>
        <Button type="primary" @click="register()">注册账号</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="findPass()">忘记密码</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
    export default {
        name: "login.vue",
        data () {
          return {
            formInline: {
              user: '',
              password: ''
            },
            ruleInline: {
              user: [
                {required: true, message: '请输入账号', trigger: 'blur'}
              ],
              password: [
                {required: true, message: '请输入密码', trigger: 'blur'},
              ]
            }
          }
        },
      methods: {
        handleSubmit(name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              let param = new URLSearchParams();
              param.append("plan_code", value);
              param.append("plan_name", '');

              this.axios({
                url: "api/plan/apply/validate",
                method: "post",
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: "include",
                params: param
              }).then((res) => {
                let data = res.data;
                if (data.state == 1) {
                  //callback(new Error('机构编码已存在'));
                  return callback(new Error('方案编码已存在'));
                } else {
                  callback();
                }
              }).catch(function (err) {
                console.log("异常原因：" + err);
              });
            } else {
              this.$Message.error('Fail!');
            }
          })
        },
        register() {
          this.$router.push('/register');
          // alert("register");
        },
        findPass() {
          this.$router.push('/findPass');
          // alert("findPass");
        }
      },
    }
</script>

<style scoped>

</style>
