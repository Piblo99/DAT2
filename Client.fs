namespace DAT2

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html

[<JavaScript>]
module Client =

    let Main () =
        let Input = Var.Create ""
        let submit = Submitter.CreateOption Input.View
        let classification =
            submit.View.MapAsync(function
                | None -> async { return "" }
                | Some "GUI" -> async { return "Front End Web Developer"}
                | Some "Database" -> async { return "Back End Web Developer"}
                | Some input -> Server.Evaluate input
                
            )
        div [] [
            Doc.Input [] Input
            Doc.Button "Submit" [] submit.Trigger
            hr [] []
            h4 [attr.``class`` "text-muted"] [text "Maybe you should consider becoming a:"]
            div [attr.``class`` "jumbotron"] [h1 [] [textView classification]]
        ]
