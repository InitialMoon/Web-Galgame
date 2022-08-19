function Newgame()
{
    window.location.assign("./pages/Newgame.html");
    localStorage.removeItem("now");
    localStorage.removeItem("localA");
    localStorage.removeItem("localB");
    localStorage.removeItem("nowA");
    localStorage.removeItem("nowB");
}
function Loadgame()
{
    if(localStorage.getItem("localA"))
        window.location.assign(localStorage.getItem("localA"));
    else if(localStorage.getItem("now"))
        window.location.assign(localStorage.getItem("now"));
    else {alert("当前无已保存的游戏进度 您正在开启新游戏");Newgame();}
}
function toHome()
{
    window.location.assign("../Start.html");
}
function Quitgame()
{
    if(confirm("您确定要退出游戏吗\n退出后未保存的进度将会消失"))
        window.close();
}
function Aboutus()
{
    window.location.assign("./pages/Aboutus.html");
}
function Savegame()
{
    var s=window.location.href,len=s.length;
    console.log(s);console.log(len);
    if(s[len-6]=='A') localStorage.setItem("nowA",s);
    else if(s[len-6]=='B') localStorage.setItem("nowB",s);
    if(s[len-6]=='A'||s[len-6]=='B')
    {
        localStorage.setItem("localA",localStorage.getItem("nowA"));
        localStorage.setItem("localB",localStorage.getItem("nowB"));
    }
    else localStorage.setItem("now",s);
    alert("您的游戏进度已保存");
}
function ToAchievements()
{
    window.location.assign("./pages/Achievements.html");
}
function Trans()
{
    var s=window.location.href,len=s.length;
    if(s[len-6]=='A')
    {
        localStorage.setItem("nowA",s);
        s=localStorage.getItem("nowB");
        console.log(s);
        window.location.assign(s);
    }
    else
    {
        localStorage.setItem("nowB",s);
        s=localStorage.getItem("nowA");
        console.log(s);
        window.location.assign(s);
    }
}
function Back()
{
    window.history.back();
}
function Check()
{
    if(localStorage.getItem("now")) console.log(localStorage.now);
    else {alert("no localStorage.now");}
}
$(function()
{
    $('.basbt').hover
    (
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");}
    );
})