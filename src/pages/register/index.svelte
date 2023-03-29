<script>
    import Footer from '../../components/Footet.svelte'
    import Header from '../../components/Header.svelte'
    import validator from 'validator'


  let email;
  let username;
  let password;
  let repassw;
  let warning_flag = 0;

  function showWarning(){
    document.getElementById("warnings_").hidden = false 
  }

  function checkUsername(){
    if(validator.isLength(username,{min:5,max:20})){
      document.getElementById("username_e").hidden = true
    }else if(username == ""){
      document.getElementById("username_e").hidden = true
    }else{
      document.getElementById("username_e").hidden = false
    }
  }

  function checkPassword(){
    if(validator.isStrongPassword(password)){
      document.getElementById("password_e").hidden = true
    }else if(password == ""){
      document.getElementById("password_e").hidden = true
    }else{
      document.getElementById("password_e").hidden = false
    }
  }
  function checkEmail(){
    if(validator.isEmail(email,{allow_utf8_local_part : false})){
      document.getElementById("email_e").hidden = true
    }else if(email == ""){
      document.getElementById("email_e").hidden = true
    }else{
      document.getElementById("email_e").hidden = false
    }
  }
  function checkMatchingPassw(){
    if(validator.equals(password,repassw) ){
      document.getElementById("passwordMatch_e").hidden = true
    }else if(repassw == ""){
      document.getElementById("passwordMatch_e").hidden = true
    }else{
      document.getElementById("passwordMatch_e").hidden = false

    }
  }

</script>

<Header/>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
  <div class="max-w-md w-full space-y-8 bg-slate-100 border-black rounded-lg py-8 px-8 shadow-2xl">
     <div>
        <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/118226/conference.svg"
           alt="baner">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register an account</h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-600">
           Or
           <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              join for free </a>
        </p> -->
     </div>
     <form class="mt-8 space-y-6" action="#" method="POST" on:input={showWarning}>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input id="username" name="username" type="username" autocomplete="username" required
               class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="Username" bind:value={username} on:input={checkUsername}>
           </div>
           <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                 class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 placeholder="Email address" bind:value={email} on:input={checkEmail}>
           </div>
           <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password"
                 required
                 class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                 placeholder="Password" bind:value={password} on:input={checkPassword}>
           </div>
           <div>
            <label for="repPassword" class="sr-only">Repeat Password</label>
            <input id="repPassword" name="repPassword" type="password" autocomplete="current-password"
               required
               class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder="Repeat Password" bind:value={repassw} on:input={checkMatchingPassw}>
         </div>
        </div>

        <div class="flex items-center justify-between">
           <!-- <div class="flex items-center">
         <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
         <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
       </div> -->

           <!-- <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your
                 password? </a>
           </div> -->
        </div>
        <div />
        <div hidden id="warnings_" class="bg-fuchsia-200 border-l-4 border-fuchsia-500 text-fuchsia-700 p-4" >
          <p class="font-bold">Warnings  </p>
          <p hidden id="username_e" class="text-sm"><i class="font-bold">*</i> Username needs to be at least 5 characters long</p>
          <p hidden id="email_e" class="text-sm"><i class="font-bold">*</i> That dosent look like a valid email</p>
          <p hidden id="password_e" class="text-sm"><i class="font-bold">*</i> Password is week</p>
          <p hidden id="passwordMatch_e" class="text-sm"><i class="font-bold">*</i> Passwords dont match</p>

        </div>
        <div>
           <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              
              Register
           </button>
        </div>
     </form>
  </div>
</div>

<!-- <main class="relative">
    <div class="container">
        <div class="col-md-6 offset-md-3">
          <h2 class="text-center text-dark mt-5">Register Page</h2>
          <div class="text-center mb-5 text-dark">
             
          </div>
          <div class="card my-5">
    
            <div class="card-body cardbody-color p-lg-5">
    
              <div class="text-center">
                <img src="https://rlv.zcache.com/scary_eyeball_eye_ball_halloween_classic_round_sticker-r6dcc6fa135714c9ab31d4a511b195d4c_0ugmp_8byvr_704.webp" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px" alt="profile">
              </div>
    
              <div class="mb-3">
                <input type="text"  class="form-control" id="Username" 
                  placeholder="Username">
                  <div class="alert alert-warning text-center" id="usernameAler" hidden>
                    Username needs to be atleast 5 characters long
                  </div>
              </div>
              <div class="mb-3">
                  <input bind:value="{email}" on:input="{checkEmail}"type="text" class="form-control" id="email" placeholder="Email">
                  <div class="alert alert-warning text-center" id="emailAler" hidden>
                      That dosent look like a valid email
                  </div>
                </div>
              <div class="mb-3">
                <input bind:value="{password}" on:input="{checkPassword}"type="password" class="form-control" id="password" placeholder="Password">
                <div class="alert alert-warning text-center" id="passwordAllert" hidden>
                  Password is week
                </div>
              </div>
              <div class="mb-3">
                <input bind:value="{repassw}" on:input="{checkMatchingPassw}" type="password" class="form-control" id="repeatPassword" placeholder="Repeat Password">
                <div class="alert alert-warning text-center" id="repeatPasswordAlert" hidden>
                  Passwords dont match
                </div>
              </div>
              <div class="text-center"><button type="submit"class="btn btn-color px-5 mb-5 w-100">Register</button></div>
            
            
          </div>
          </div>
    
        </div>
      </div>
    </main> -->
<Footer/>
