<template>
  <div class="note" :style ="note">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.account" placeholder="账号">
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
              account: '',
              password: ''
            },
            ruleInline: {
              account: [
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
              // alert(",,,");
              let param = new URLSearchParams();
              param.append("account", this.formInline.account);
              param.append("password", this.formInline.password);

              this.axios({
                url: "api/login",
                method: "post",
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: "include",
                params: param
              }).then((res) => {
                alert("...");
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
