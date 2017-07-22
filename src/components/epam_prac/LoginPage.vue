<template>
    <div id="login">
        <table>
            <tr>
                <td>
                    <label for="login_input">+ Login:</label>
                </td>
                <td>
                    <input type="text" id="login_input" v-model="login">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="password_input">+ Password:</label>
                </td>
                <td>
                    <input type="password" id="password_input" v-model="password">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="Sing in" class="submit_button" @click="loginFunction">
                </td>
            </tr>
        </table>
    </div> 
</template>

<script>
module.exports = {
  data: function () {
    return {
      login: '',
      password: '',
      postResults: []
    }
  },
  methods: {
    loginFunction: function () {
      this.$http.post('http://localhost:9000/epam/login', {login: this.login, password: this.password},
        function (data, status, request) {
          this.postResults = data
          console.log(request)
          this.$route.router.go('/allitems')
        })
    }
  }
}
</script>

<style>
    #login {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    #login table {
        margin: auto;
    }
    
    #login .submit_button {
        width: 550px;
        margin-left: 5px;
    }
</style>