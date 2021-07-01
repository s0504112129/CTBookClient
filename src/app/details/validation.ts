
export class ValidationUsers {  

    public static validSpelling(user: string): boolean {
         
        user=String(user).trim();
        console.log(user.length)
        for (let index = 0; index < user.length; index++) 
        {         
          if (user[index] < '0' || user[index] > '9')           
            return false;           
        };       
        if(user.length >9 || user.length< 9)        
           return false;
        return true;
      }
      public static isNotEmpty(name: string): boolean {
        console.log(name.length)
        if ( name=='' )
          return false;
        return true;
      }
  }
  