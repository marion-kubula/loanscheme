let submitEl=document.getElementById('submit')
submitEl.addEventListener('click',()=>{

    
})
let loanRepayment=[
    
    { 
        id:0,
        name:'firstinstallment',
        value:2000000,
        d:new Date()
        
    },
    {
        id:0,
        name:'secondinstallment',
        value:1000000,   
    },
    {
        id:0,
        name:'thirdinstallment',
        value:500000,
    }
]
const payement= document.getElementsById('admin');


const admin=document.getElementById('adimin');
function verify(){
    if(application.user.address){
        console.log('application verified')
    }
}
const verifyEl=document.getElementById('verify')
verifyEl.innerHtml=verify;

const apply= document.getElementsByClassName(apply);
const loanapplication =1;
if( loanapplication== 1){

    alert("loan application accepted");
}else{
    alert("you can only apply once");
}
