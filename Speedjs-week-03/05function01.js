let globalVar = "I am Global"
function modifyGlobal(){
    globalVar ="I am modified"
    let blockScopeVar = "I am block blocked-scoped"

console.log(blockScopeVar);

}
modifyGlobal()