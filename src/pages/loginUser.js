import API from "./Api.js"
import jwt_decode from "jwt-decode";

export const tryLoginUser = async (providetUsername,providetPassword) => {
    try {
        const dataRequest = {
            'username':providetUsername,
            'password':providetPassword
        }
        const response = await API.postWithoutAccess("login",dataRequest)
        return response
    }catch (error){
        console.log(error)
        return "error"
    }
}
// 1. trebe da provere dali ima sessionsStorage raboti i dali sa tie korekni raboti 
// 2. ako ima vo sessionStorage trebe da provere prvo dali access tokenut e aren => (dali e expired ili ne)
// 3. da kazme oti e aren access tokenut trebe tam da zastane i se e vo red neka vrne samo 
// 4. ako e exp access tokenut da go zeme reffreshTokenut 
// 5. da go provere reffreshtokenut dali e exp so toa so go ima vo UserDetails - refVal
// 6. ako refreshToken e exp togas neka vrne i neka kazde oti se e expired  -- ako nema sessions TUKA KE ZASTANE
// 7. ako refreshToken ne e exp ama access flag iam oti e epx naka puste req do server za obnova na tokente 
// 8. i ke go obnovis sessionStorage so novo access i nov exp date za refresh i nov refresh token
export const validate = async () => {

    if(sessionStorage.getItem("userDetails") === null && sessionStorage.getItem("logedUserRefresh") === null){
        return "No sessionStorage items!"
    }else{
        try{
            let details = JSON.parse(sessionStorage.userDetails)
            let decoded_token = jwt_decode(details.token)
            
            //CHECKS IF ACCESS TOKEN IS EXPIRED COMPARED TO DATE NOW
            let timeNow = Math.floor(Date.now() / 1000)
            console.log(decoded_token.exp-timeNow)
            if(timeNow < decoded_token.exp ){
                //access token is not expired do stuff => 
                
                return "okToken"
            }else{
                const refresh_token =  JSON.parse(sessionStorage.logedUserRefresh)
                //CHECK IF REFRESH TOKEN IS EXPIRED
                sessionStorage.clear()
                console.log(timeNow -details.refVal) 
                if(timeNow > details.refVal){
                    //refresh is exp need to login again
                    
                        //sessionStorage.clear()
                        logedUserRefresh.set({})
                        logedUserDetails.set({})
                    return "allExpired"
                }else{
                    //refresh token ne e exp i trebe da probme da dobime nov access
                    const dataRequest = {
                        'refreshToken':refresh_token
                    }
                    const response = await API.postWithoutAccess("refreshtoken",dataRequest)
                    let newDetails = {
                        'token' : response.accessToken,
                        'id' : details.id,
                        'username' : details.username,
                        'email' : details.email,
                        'roles' : details.roles,
                        'refVal' : timeNow
                    }
                    sessionStorage.setItem("logedUserRefresh",JSON.stringify(response.refreshToken))
                    sessionStorage.setItem("userDetails",JSON.stringify(newDetails))
                    console.log("tokens refreshed = suposed")
                    return "tokens refreshed"
                }
            }

        }catch(error){
            console.log(error)
        }
    
    }



    // //----
    // try {
    //     if (sessionStorage.getItem("logedUserRefresh") === null) {
    //         return null
    //     }else{
            
    //         //token exists check when will it expire 
    //         // if gets to here tokens are in sessionStorag
    //         let details = JSON.parse(sessionStorage.userDetails)
    //         let decoded_token = jwt_decode(details.token)
    //         let dateInit = new Date(decoded_token.iat * 1000)
    //         let dateExp = new Date(decoded_token.exp * 1000)

    //         console.log(dateInit.getMinutes() + " : DATE INIT"+ " - "+ dateExp.getMinutes() + " : DATE EXP")
    //         console.log(decoded_token.sub  + " :od validate")
            
    //         //check the decoded access token if its expired if is expired try the 
    //         console.log(new Date().getMinutes()+" : ")
    //         if(new Date().getMinutes() < dateExp){
    //             //access token is not expired do stuff => 

    //             return "expToken"
    //         }
    //         //else check if there is a refresh token 
    //         else if(sessionStorage.logedUserRefresh !== null){
        
    //         const refresh_token =  JSON.parse(sessionStorage.logedUserRefresh)
    //         //refresh access token and set to store 
    //         const dataRequest = {
    //             'refreshToken':refresh_token
    //         }
    //         const response = await API.postWithoutAccess("refreshtoken",dataRequest)
    //         return response
    //        }else{
    //            console.log("no ref token returned!")
    //            return "noRefToken"
    //        }
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
}

export function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
     }
     return true;
}
 
