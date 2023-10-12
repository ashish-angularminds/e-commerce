"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[497],{497:(x,h,d)=>{d.r(h),d.d(h,{SettingModule:()=>q});var c=d(6895),m=d(2467),e=d(4650),_=d(316),p=d(1922);let f=(()=>{class n{constructor(t,o,s){this.router=t,this.http=o,this.toast=s,this.classes="btn rounded-circle position-absolute tl shadow-lg",this.localToken=localStorage.getItem("activeuser")||""}ngOnInit(){this.loaddata()}loaddata(){this.http.get(this.localToken).subscribe(t=>{this.user=t,this.classes=t.isEmailVerified?"bg-success-subtle text-success disabled btn rounded-circle position-absolute tl shadow-lg":"bg-danger-subtle text-danger btn rounded-circle position-absolute tl shadow-lg"})}verify(){this.http.sendverificationmail(this.localToken).subscribe(t=>{this.toast.success({detail:"Mail send successfully",summary:"Check your email...",duration:3e3})},t=>{console.log(t),this.toast.error({summary:t.error.message,duration:3e3})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.F0),e.Y36(_.e),e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-myprofile"]],decls:13,vars:4,consts:[[1,"container","mt-5","d-flex","justify-content-center","align-items-center","position-relative",2,"height","70vh"],[1,"circle","position-absolute","rounded-circle"],[1,"main-content","text-center","w-25","rounded","shadow-lg","p-4","position-relative"],[3,"classList","click"],[1,"bi","bi-person-check","fs-4"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"button",3),e.NdJ("click",function(){return o.verify()}),e._UZ(4,"i",4),e.qZA(),e.TgZ(5,"h3"),e._uU(6,"User Profile"),e.qZA(),e.TgZ(7,"h5"),e._uU(8),e.qZA(),e.TgZ(9,"h5"),e._uU(10),e.qZA(),e.TgZ(11,"h5"),e._uU(12),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("classList",o.classes),e.xp6(5),e.hij("Email: ",null==o.user?null:o.user.name,""),e.xp6(2),e.hij("Full Name: ",null==o.user?null:o.user.name,""),e.xp6(2),e.hij("Company Name: ",null==o.user?null:o.user._org.name,""))},styles:[".main-content[_ngcontent-%COMP%]{background:#c9c9c976;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.circle[_ngcontent-%COMP%]{width:150px;height:150px;left:32%;top:50%;z-index:-1;background:linear-gradient(-40deg,#B799FF,#AEE2FF)}.tl[_ngcontent-%COMP%]{top:-20px;right:-20px}"]}),n})();var C=d(4813),b=d(529);let u=(()=>{class n{constructor(t){this.http=t,this.header=new b.WM({Authorization:"Bearer "+localStorage.getItem("activeuser")})}getuser(t){return this.http.get("https://shop-api.ngminds.com/users",{headers:this.header,params:t})}createuser(t){return this.http.post("https://shop-api.ngminds.com/users",t,{headers:this.header})}updateorg(t){return this.http.patch("https://shop-api.ngminds.com/users/org",t,{headers:this.header})}changerole(t,o){return this.http.patch(`https://shop-api.ngminds.com/users/role/${o}`,t,{headers:this.header})}changeinfo(t,o){return this.http.patch(`https://shop-api.ngminds.com/users/${o}`,t,{headers:this.header})}deleteuser(t){return this.http.delete(`https://shop-api.ngminds.com/users/${t}`,{headers:this.header})}changepassword(t){return this.http.post("https://shop-api.ngminds.com/users/auth/change-password",t,{headers:this.header})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Z=d(6081);function y(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"th",23),e._UZ(2,"input",48),e.qZA(),e.TgZ(3,"th"),e._UZ(4,"input",48),e.qZA(),e.TgZ(5,"th"),e._UZ(6,"input",48),e.qZA(),e.TgZ(7,"th",49)(8,"div",50)(9,"button",51),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.change(i))}),e._uU(10," Update "),e.qZA(),e.TgZ(11,"ul",52),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectedid=i._id)}),e.TgZ(12,"li")(13,"a",53),e._uU(14," User Role "),e.qZA()(),e.TgZ(15,"li")(16,"a",54),e._uU(17," User Info "),e.qZA()(),e.TgZ(18,"li")(19,"a",55),e._uU(20," User Password "),e.qZA()()()(),e.TgZ(21,"button",56),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw();return l.selectedid=i._id,e.KtG(l.deleteuser())}),e._uU(22,"Delete"),e.qZA()()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Q6J("value",t.email),e.xp6(2),e.Q6J("value",t.name),e.xp6(2),e.Q6J("value",t.role)}}function M(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"li",57)(1,"a",58),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.changepage(i+1))}),e._uU(2),e.qZA()()}if(2&n){const t=r.$implicit,o=e.oxw();e.Q6J("className",o.pagination.page==t+1?"active":"page-item"),e.xp6(2),e.Oqu(t+1)}}function v(n,r){if(1&n&&e._UZ(0,"app-changeinfo",59),2&n){const t=e.oxw();e.Q6J("infouser",t.infouser)("selectedid",t.selectedid)}}let g=(()=>{class n{constructor(t,o,s){this.settingservice=t,this.toast=o,this.loader=s,this.infouser={name:"",email:""},this.selectedid="",this.flag=!1,this.org={name:"",email:""},this.pagination={sortBy:"role",limit:5,page:1},this.userpass={password:""},this.pages=[],this.users=[]}ngOnInit(){this.loadlist()}change(t){this.flag=!0,this.infouser.name=t.name,this.infouser.email=t.email}loadlist(){this.loader.start(),this.settingservice.getuser(this.pagination).pipe((0,C.j)("results")).subscribe(t=>{this.users=t,this.companyname=this.users?.at(0)?._org.name,this.loader.stop()})}changepage(t){this.pagination.page=t,this.loadlist()}loadorg(){this.org.name=this.users?.at(0)?._org?.name,this.org.email=this.users?.at(0)?._org?.email}updateorg(){this.settingservice.updateorg(this.org).subscribe(t=>console.log(t)),this.loadlist()}deleteuser(){this.settingservice.deleteuser(this.selectedid).subscribe(t=>{this.toast.success({detail:"User Deleted",summary:"...",duration:3e3}),this.loadlist()})}changepassword(){this.settingservice.changeinfo(this.userpass,this.selectedid).subscribe(t=>{this.toast.success({detail:"Password Changed",summary:"...",duration:3e3}),this.loadlist()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(p.s),e.Y36(Z.LA))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-companysetting"]],outputs:{infouser:"infouser",selectedid:"selectedid"},decls:73,vars:9,consts:[[1,"container","d-grid"],[1,"p-2","my-5","text-white","rounded","d-flex","justify-content-between","align-items-center","bg-dark"],["routerLink","/setting/my-profile",1,"text-white","border-0","btn","rounded-5"],[1,"bi","bi-arrow-left"],[1,"dropdown","d-flex"],[1,"p-0","m-0"],["type","button","data-bs-toggle","dropdown","aria-expanded","false","data-bs-auto-close","outside",1,"p-1","text-white","border-0","ms-1","bg-dark",3,"click"],[1,"bi","bi-vector-pen","small"],[1,"p-4","dropdown-menu",2,"width","250px"],[1,"mb-3"],["type","text","id","exampleDropdownFormPassword2","placeholder","Name","name","name",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["type","email","id","exampleDropdownFormEmail2","placeholder","email@example.com","name","email",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-outline-dark",3,"click"],[1,"btn-group"],["type","button","data-bs-toggle","dropdown","data-bs-auto-close","true","aria-expanded","false",1,"p-0","mx-2","text-white","border-0","rounded-5","bg-dark","fw-bold","fs-4"],[1,"bi","bi-list"],[1,"dropdown-menu"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal","data-bs-whatever","@mdo",1,"dropdown-item"],["data-bs-toggle","modal","data-bs-target","#userpasswordModal",1,"dropdown-item"],[1,"row"],[1,"p-1","col"],[1,"table","text-center"],[1,"table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"mt-2","row","d-flex","justify-content-between"],[1,"col-2"],[1,"pagination","text-dark"],["class","page-item",3,"className",4,"ngFor","ngForOf"],[1,"mb-3","input-group"],["for","inputGroupSelect01",1,"input-group-text"],["id","inputGroupSelect01","name","sortby",1,"form-select",3,"ngModel","ngModelChange","change"],["value","role"],["value","name"],["id","passModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"mb-3","form-floating"],["type","password","name","password","placeholder","Password","required","",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-dark",3,"click"],[3,"infouser","selectedid",4,"ngIf"],[3,"selectedid"],["type","text","disabled","",1,"text-center","bg-white","border-0","form-control",3,"value"],[1,"d-flex","justify-content-center"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-outline-dark",3,"click"],[1,"dropdown-menu",3,"click"],["data-bs-toggle","modal","data-bs-target","#roleModal",1,"dropdown-item"],["data-bs-toggle","modal","data-bs-target","#infoModal",1,"dropdown-item"],["data-bs-toggle","modal","data-bs-target","#passModal",1,"dropdown-item"],[1,"mx-2","btn","btn-outline-dark",3,"click"],[1,"page-item",3,"className"],[1,"page-link",3,"click"],[3,"infouser","selectedid"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e.qZA(),e.TgZ(4,"div",4)(5,"h3",5),e._uU(6),e.qZA(),e.TgZ(7,"button",6),e.NdJ("click",function(){return o.loadorg()}),e._UZ(8,"i",7),e.qZA(),e.TgZ(9,"form",8)(10,"div",9)(11,"input",10),e.NdJ("ngModelChange",function(i){return o.org.name=i}),e.qZA()(),e.TgZ(12,"div",9)(13,"input",11),e.NdJ("ngModelChange",function(i){return o.org.email=i}),e.qZA()(),e.TgZ(14,"button",12),e.NdJ("click",function(){return o.updateorg()}),e._uU(15,"Submit"),e.qZA()()(),e.TgZ(16,"div",13)(17,"button",14),e._UZ(18,"i",15),e.qZA(),e.TgZ(19,"ul",16)(20,"li")(21,"a",17),e._uU(22," Create User"),e.qZA()(),e.TgZ(23,"li")(24,"a",18),e._uU(25," Change Password"),e.qZA()()()()(),e.TgZ(26,"div",19)(27,"div",20)(28,"table",21)(29,"thead",22)(30,"tr")(31,"th",23),e._uU(32,"Email"),e.qZA(),e.TgZ(33,"th",23),e._uU(34,"Name"),e.qZA(),e.TgZ(35,"th",23),e._uU(36,"Role"),e.qZA(),e.TgZ(37,"th",23),e._uU(38,"Action"),e.qZA()()(),e.TgZ(39,"tbody"),e.YNc(40,y,23,3,"tr",24),e.qZA()()()(),e.TgZ(41,"div",25)(42,"div",26)(43,"ul",27),e.YNc(44,M,3,2,"li",28),e.qZA()(),e.TgZ(45,"div",26)(46,"div",29)(47,"label",30),e._uU(48,"Sort by"),e.qZA(),e.TgZ(49,"select",31),e.NdJ("ngModelChange",function(i){return o.pagination.sortBy=i})("change",function(){return o.loadlist()}),e.TgZ(50,"option",32),e._uU(51,"Role"),e.qZA(),e.TgZ(52,"option",33),e._uU(53,"Name"),e.qZA()()()()()(),e.TgZ(54,"div",34)(55,"div",35)(56,"div",36)(57,"div",37)(58,"h1",38),e._uU(59,"Change Password"),e.qZA(),e._UZ(60,"button",39),e.qZA(),e.TgZ(61,"div",40)(62,"div",41)(63,"input",42),e.NdJ("ngModelChange",function(i){return o.userpass.password=i}),e.qZA(),e.TgZ(64,"label",43),e._uU(65,"Password"),e.qZA()()(),e.TgZ(66,"div",44)(67,"button",45),e.NdJ("click",function(){return o.changepassword()}),e._uU(68,"Submit"),e.qZA()()()()(),e.YNc(69,v,1,2,"app-changeinfo",46),e._UZ(70,"app-adduser")(71,"app-changerole",47)(72,"app-changemypassword")),2&t&&(e.xp6(6),e.Oqu(o.companyname),e.xp6(5),e.Q6J("ngModel",o.org.name),e.xp6(2),e.Q6J("ngModel",o.org.email),e.xp6(27),e.Q6J("ngForOf",o.users),e.xp6(4),e.Q6J("ngForOf",o.pages),e.xp6(5),e.Q6J("ngModel",o.pagination.sortBy),e.xp6(14),e.Q6J("ngModel",o.userpass.password),e.xp6(6),e.Q6J("ngIf",o.flag),e.xp6(2),e.Q6J("selectedid",o.selectedid))},styles:[".active[_ngcontent-%COMP%] > .page-link[_ngcontent-%COMP%]{background:#000!important;border:1px solid black;border-radius:6px;color:#fff}.page-link[_ngcontent-%COMP%]{color:#000}"]}),n})();const T=[{path:"",redirectTo:"my-profile",pathMatch:"full"},{path:"my-profile",component:f},{path:"company-setting",component:g}];let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(T),m.Bz]}),n})();var a=d(433);let A=(()=>{class n{constructor(t,o,s){this.settingservice=t,this.toast=o,this.parent=s,this.User={email:"",password:"",name:"",role:""}}creatuser(){this.settingservice.createuser(this.User).subscribe(t=>{this.toast.success({detail:"Registration Successful",summary:"User is Registrated...",duration:3e3}),this.parent.loadlist()},t=>{console.log(t),this.toast.error({detail:"Registration failed",summary:t.error.message,duration:3e3})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(p.s),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-adduser"]],decls:35,vars:5,consts:[["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"ngSubmit"],["addForm","ngForm"],[1,"form-floating","mb-3"],["type","email","name","email","placeholder","Email\n                            address","required","",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],["type","password","name","password","placeholder","Password","required","",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["type","text","name","fullname","placeholder","fullname","required","",1,"form-control","border-dark",3,"ngModel","ngModelChange"],[1,"input-group","mb-3"],["for","inputGroupSelect02",1,"input-group-text","border-dark"],["id","inputGroupSelect02","name","role",1,"form-select","border-dark",3,"ngModel","ngModelChange"],["value","admin"],["value","user"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-dark","mt-3",3,"disabled"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5,"Add User"),e.qZA(),e._UZ(6,"button",5),e.qZA(),e.TgZ(7,"div",6)(8,"form",7,8),e.NdJ("ngSubmit",function(){e.CHM(s);const l=e.MAs(9);return o.creatuser(),e.KtG(l.reset())}),e.TgZ(10,"div",9)(11,"input",10),e.NdJ("ngModelChange",function(l){return o.User.email=l}),e.qZA(),e.TgZ(12,"label",11),e._uU(13,"Email address"),e.qZA()(),e._UZ(14,"br"),e.TgZ(15,"div",9)(16,"input",12),e.NdJ("ngModelChange",function(l){return o.User.password=l}),e.qZA(),e.TgZ(17,"label",11),e._uU(18,"Password"),e.qZA()(),e._UZ(19,"br"),e.TgZ(20,"div",9)(21,"input",13),e.NdJ("ngModelChange",function(l){return o.User.name=l}),e.qZA(),e.TgZ(22,"label",11),e._uU(23,"Full Name"),e.qZA()(),e._UZ(24,"br"),e.TgZ(25,"div",14)(26,"label",15),e._uU(27,"Role"),e.qZA(),e.TgZ(28,"select",16),e.NdJ("ngModelChange",function(l){return o.User.role=l}),e.TgZ(29,"option",17),e._uU(30,"Admin"),e.qZA(),e.TgZ(31,"option",18),e._uU(32,"User"),e.qZA()()(),e.TgZ(33,"button",19),e._uU(34," Regiter"),e.qZA()()()()()()}if(2&t){const s=e.MAs(9);e.xp6(11),e.Q6J("ngModel",o.User.email),e.xp6(5),e.Q6J("ngModel",o.User.password),e.xp6(5),e.Q6J("ngModel",o.User.name),e.xp6(7),e.Q6J("ngModel",o.User.role),e.xp6(5),e.Q6J("disabled",!s.valid)}},dependencies:[a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.On,a.F]}),n})(),U=(()=>{class n{constructor(t,o,s){this.settingservice=t,this.toast=o,this.parent=s,this.role={role:""}}changerole(){this.settingservice.changerole(this.role,this.selectedid).subscribe(t=>{this.toast.success({detail:"Role Changed",summary:"...",duration:3e3}),this.parent.loadlist(),console.log(t)},t=>{console.log(t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(p.s),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-changerole"]],inputs:{selectedid:"selectedid"},decls:19,vars:1,consts:[["id","roleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"input-group","mb-3"],["for","inputGroupSelect01",1,"input-group-text"],[1,"form-select",3,"ngModel","ngModelChange"],["value","user"],["value","admin"],[1,"modal-footer"],["data-bs-dismiss","modal",1,"btn","btn-dark",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5,"Change Role"),e.qZA(),e._UZ(6,"button",5),e.qZA(),e.TgZ(7,"div",6)(8,"div",7)(9,"label",8),e._uU(10," Select Role "),e.qZA(),e.TgZ(11,"select",9),e.NdJ("ngModelChange",function(i){return o.role.role=i}),e.TgZ(12,"option",10),e._uU(13,"User"),e.qZA(),e.TgZ(14,"option",11),e._uU(15,"Admin"),e.qZA()()()(),e.TgZ(16,"div",12)(17,"button",13),e.NdJ("click",function(){return o.changerole()}),e._uU(18,"Submit"),e.qZA()()()()()),2&t&&(e.xp6(11),e.Q6J("ngModel",o.role.role))},dependencies:[a.YN,a.Kr,a.EJ,a.JJ,a.On]}),n})(),J=(()=>{class n{constructor(t,o,s){this.settingservice=t,this.toast=o,this.parent=s,this.infouser={email:"",name:""}}changeinfo(){this.settingservice.changeinfo(this.infouser,this.selectedid).subscribe(t=>{this.toast.success({detail:"Info Changed",summary:"...",duration:3e3}),this.parent.loadlist()},t=>{this.toast.error({detail:"",summary:t.message,duration:3e3}),console.log(t)}),console.log(this.infouser)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(p.s),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-changeinfo"]],inputs:{selectedid:"selectedid",infouser:"infouser"},decls:22,vars:3,consts:[["id","infoModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"ngSubmit"],["updateForm","ngForm"],[1,"form-floating","mb-3"],["type","email","name","email","placeholder","Email\n                            address","required","",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],["type","text","name","fullname","placeholder","Password","required","",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-dark","mt-3",3,"disabled"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5,"Change Info"),e.qZA(),e._UZ(6,"button",5),e.qZA(),e.TgZ(7,"div",6)(8,"form",7,8),e.NdJ("ngSubmit",function(){return o.changeinfo()}),e.TgZ(10,"div",9)(11,"input",10),e.NdJ("ngModelChange",function(i){return o.infouser.email=i}),e.qZA(),e.TgZ(12,"label",11),e._uU(13,"Email address"),e.qZA()(),e._UZ(14,"br"),e.TgZ(15,"div",9)(16,"input",12),e.NdJ("ngModelChange",function(i){return o.infouser.name=i}),e.qZA(),e.TgZ(17,"label",11),e._uU(18,"Full Name"),e.qZA()(),e._UZ(19,"br"),e.TgZ(20,"button",13),e._uU(21,"Update"),e.qZA()()()()()()),2&t){const s=e.MAs(9);e.xp6(11),e.Q6J("ngModel",o.infouser.email),e.xp6(5),e.Q6J("ngModel",o.infouser.name),e.xp6(4),e.Q6J("disabled",!s.valid)}},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F]}),n})(),k=(()=>{class n{constructor(t,o){this.service=t,this.toast=o,this.password={old_password:"",new_password:""}}changepassword(){this.service.changepassword(this.password).subscribe(t=>{this.toast.success({detail:"Password Changed",summary:"...",duration:3e3})},t=>{this.toast.error({detail:"Failed",summary:t.error.message,duration:3e3})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-changemypassword"]],decls:20,vars:2,consts:[["id","userpasswordModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"form-floating","mb-3"],["type","password","id","floatingInput","placeholder","Password","name","old_password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingInput"],[1,"form-floating"],["type","text","id","floatingPassword","placeholder","Password","name","new_password",1,"form-control","border-dark",3,"ngModel","ngModelChange"],["for","floatingPassword"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-outline-dark",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5,"Change Personal Password"),e.qZA(),e._UZ(6,"button",5),e.qZA(),e.TgZ(7,"div",6)(8,"form")(9,"div",7)(10,"input",8),e.NdJ("ngModelChange",function(i){return o.password.old_password=i}),e.qZA(),e.TgZ(11,"label",9),e._uU(12,"Old Password"),e.qZA()(),e.TgZ(13,"div",10)(14,"input",11),e.NdJ("ngModelChange",function(i){return o.password.new_password=i}),e.qZA(),e.TgZ(15,"label",12),e._uU(16,"New Password"),e.qZA()()()(),e.TgZ(17,"div",13)(18,"button",14),e.NdJ("click",function(){return o.changepassword()}),e._uU(19,"Save changes"),e.qZA()()()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",o.password.old_password),e.xp6(4),e.Q6J("ngModel",o.password.new_password))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.On,a.F]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,w,a.u5]}),n})();e.B6R(g,[c.sg,c.O5,m.rH,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.On,a.F,A,U,J,k],[])}}]);