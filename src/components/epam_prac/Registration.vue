<template>
    <div id="registration">
        <table>
            <tr>
                <td colspan="2">
                    <h2>Create your account</h3>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="login_input">+ Login:</label>
                </td>
                <td>
                    <input type="text" id="login_input" v-model="newLogin">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="password_input">+ Password:</label>
                </td>
                <td>
                    <input type="password" id="password_input" v-model="newPassword">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="Create your account" class="submit_button" @click="registrationFunction">
                </td>
            </tr>
        </table>            
    </div> 
</template>

<script>
module.exports = {
  data: function () {
    return {
      newLogin: '',
      newPassword: '',
      postResults: []
    }
  },
  methods: {
    registrationFunction: function () {
      this.$http.post('http://localhost:9000/epam/registration', {login: this.newLogin, password: this.newPassword},
        function (data, status, request) {
          this.postResults = data
          console.log(request)
          this.$route.router.go('/')
        })
    }
  }
}
</script>

<style>
    #registration {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    #registration table {
        margin: auto;
    }
    
    #registration .submit_button {
        width: 550px;
        margin-left: 5px;
    }
    
    #registration h2 {
        text-align: center;
        padding: 5px;
        border-bottom: 4px solid black;
    }
</style>