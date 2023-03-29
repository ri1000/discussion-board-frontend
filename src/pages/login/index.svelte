<script>
  import { logedUserRefresh ,logedUserDetails} from "../_storeUserLogin";
  import { goto, url } from "@roxi/routify";
  import {tryLoginUser} from '../loginUser';

  

  let username = "";
  let password = "";
  

  function login() {

  
      let error = false;
      tryLoginUser(username,password).then(res =>{
      if(res == "error"){
        error = true;
        $goto("/",{redirect : "BadCredentials"},false)
      }else{
        sessionStorage.setItem('logedUserRefresh',JSON.stringify(res.refreshToken))  
        logedUserRefresh.set(JSON.stringify(res));
        //seting time for the exp for refreshtoken
        let expTokenTime = Math.floor(Date.now() / 1000) + 1500
        
        let userDetailsSession = {
          'token' : res.token,
          'id' : res.id,
          'username' : res.username,
          'email' : res.email,
          'roles' : res.roles,
          'refVal' : expTokenTime
       }
        sessionStorage.setItem('userDetails',JSON.stringify(userDetailsSession))
        logedUserDetails.set(userDetailsSession)
      }   
    }).finally(() => {
      if(error != true){
        // console.log("ipak flevum tuka")
        $goto("/",{},false)
      }
    })  
     
    
  }
  
  
</script>

<!-- <div class="col-md-6 offset-md-3">
  <h2 class="text-center text-dark mt-5">Login Page</h2>
  <div class="text-center mb-5 text-dark">
     
  </div>
  <div class="card my-5">

    <div class="card-body cardbody-color p-lg-5">

      <div class="text-center">
        <img src="https://rlv.zcache.com/scary_eyeball_eye_ball_halloween_classic_round_sticker-r6dcc6fa135714c9ab31d4a511b195d4c_0ugmp_8byvr_704.webp" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
          width="200px" alt="profile">
      </div>

      <div class="mb-3">
        <input type="text" bind:value="{username}" class="form-control" id="username" aria-describedby="emailHelp"
          placeholder="Username">
      </div>
      <div class="mb-3">
        <input type="password" bind:value="{password}" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="text-center"><button on:click|preventDefault="{login}" type="submit"class="btn btn-info btn-lg active px-5 mb-5 w-100">Login</button></div>
    
      <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
        Registered? <a href="{$url("/register")}" class="text-dark fw-bold"> Create an
          Account</a>
      </div>
  </div>
  </div>

</div> -->

<!-- <div class="container"> -->
  <!-- <div class="container mx-auto px-4 py-4">
      <div class="columns-1 mx-auto py-4 border border-black bg-sky-500/50 rounded-xl opacity-80">
          <div class="text-center font-sans text-5xl font-semibold text-fuchsia-500">
              <h1>App name</h1>
          </div>
      </div>

    </div> -->
<!-- </div> -->


      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div class="max-w-md w-full space-y-8 bg-slate-100 border-black rounded-lg py-8 px-8 shadow-2xl">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/118226/conference.svg" alt="baner">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="{$url("/register")}" class="font-medium text-indigo-600 hover:text-indigo-500"> join for free </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <!-- <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div> -->
      
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
              </div>
            </div>
            <div/>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>