(function()
{
 "use strict";
 var Global,DAT2,Client,WebSharper,UI,Var$1,Submitter,View,Concurrency,Remoting,AjaxRemotingProvider,Doc,AttrProxy;
 Global=self;
 DAT2=Global.DAT2=Global.DAT2||{};
 Client=DAT2.Client=DAT2.Client||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var$1;
 Submitter=UI&&UI.Submitter;
 View=UI&&UI.View;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Client.Main=function()
 {
  var Input,submit,classification;
  Input=Var$1.Create$1("");
  submit=Submitter.CreateOption(Input.get_View());
  classification=View.MapAsync(function(a)
  {
   var b,b$1,b$2;
   return a!=null&&a.$==1?a.$0==="GUI"?(b=null,Concurrency.Delay(function()
   {
    return Concurrency.Return("Front End Web Developer");
   })):a.$0==="Database"?(b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Return("Back End Web Developer");
   })):(new AjaxRemotingProvider.New()).Async("DAT2:DAT2.Server.Evaluate:198019569",[a.$0]):(b$2=null,Concurrency.Delay(function()
   {
    return Concurrency.Return("");
   }));
  },submit.view);
  return Doc.Element("div",[],[Doc.Input([],Input),Doc.Button("Submit",[],function()
  {
   submit.Trigger();
  }),Doc.Element("hr",[],[]),Doc.Element("h4",[AttrProxy.Create("class","text-muted")],[Doc.TextNode("Maybe you should consider becoming a:")]),Doc.Element("div",[AttrProxy.Create("class","jumbotron")],[Doc.Element("h1",[],[Doc.TextView(classification)])])]);
 };
}());
