export class UserRoles {

 public static userRoles:Array<any>=[
  //on 0th index
  {
      re:[
           {label:'View Enquiry',path:'viewEnq'},
           {label:'Add Enquiry',path:'addEnq'},
           {label:'Send Mail',path:'sendMail'},
        ],
        oe:[
          {label:'View Enquiry',path:'viewenquiry'},
          {label:'Verify Application',path:'verifyApp'},
          {label:'Send Mail', path:'sendMailOe'}
        ],

        admin:[
         
          {label:'ADD USER',path:'addusers'},
          {label:'VIEW USER',path:'viewusers'},
          {label:'SEND MAIL',path:'sendmail'},
          {label:'SALES & TARGET',path:'sales'},
         
        
        ],

        cm:[

          {label:'Check Cibil',path:'checkAppl'},
          {label:'Genrate Sanction',path:'genSanction'},
          {label:'Send Mail',path:'sendMaiCM'},
          {label:'Application Form',path:'appliForm'}
        ]
  }

 ]
 
}
